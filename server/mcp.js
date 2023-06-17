const express = require('express'),
user = require('../user'),
storage = require('../storage'),
{ database } = require('../storage')

let app = express()

mcpOperation = {

    SetCosmeticLockerSlot(accountId, req) {

        let data = user.load({accountId: accountId}),
        lockerSlot = data.lockers[0].attributes.locker_slots_data.slots[req.body.category]
        const item = req.body.itemToSlot, variants = req.body.variantUpdates, index = req.body.slotIndex
    
        if (index > -1) {
            lockerSlot.items[index] = item
            lockerSlot.activeVariants[index] = { variants: variants }
        }
        else {
            lockerSlot.items = []
            lockerSlot.activeVariants = []
            for (var i = 0; i < 7; i++) {
                lockerSlot.items[i] = item
                lockerSlot.activeVariants[i] = { variants: variants }
            }
        }
    
        data.lockers[0].attributes.locker_slots_data.slots[req.body.category] = lockerSlot
        user.update(data, {accountId: accountId})
    },
    
    SetItemFavoriteStatusBatch(accountId, req) {
    
        let data = user.load({accountId: accountId}),
        favorites = data.favorites
        const itemIds = req.body.itemIds, itemFavStatus = req.body.itemFavStatus
        
        for (var i = 0; i < Object.keys(itemIds).length; i++) {
    
            if (itemFavStatus[i] === true && favorites.indexOf(itemIds[i]) === -1)
                favorites.push(itemIds[i])
    
            else if (itemFavStatus[i] === false && favorites.indexOf(itemIds[i]) !== -1)
                delete favorites[favorites.indexOf(itemIds[i])]
        }
    
        data.favorites = favorites
        user.update(data, {accountId: accountId})
    },
    
    CopyCosmeticLoadout(accountId, req) {
    
        let data = user.load({accountId: accountId})
        const sourceIndex = req.body.sourceIndex, 
        targetIndex = req.body.targetIndex
        //lockerName = req.body.optNewNameForTarget

        for (var i = 0; i < targetIndex + 1; i++)
            if (data.lockers[i] === undefined)
                data.lockers[i] = null

        data.lockers[targetIndex] = data.lockers[sourceIndex]
        if (targetIndex !== 0)
            data.lockers[targetIndex].attributes.locker_name = `Locker ${targetIndex}`
            
        user.update(data, {accountId: accountId})
    },

    SetCosmeticLockerName(accountId, req) {
    
        let data = user.load({accountId: accountId}),
        lockerItem = req.body.lockerItem
        const targetIndex = parseInt(lockerItem.substr(6))
        
        if (data.lockers[targetIndex] !== undefined && data.lockers[targetIndex] !== null)
            data.lockers[targetIndex].attributes.locker_name = req.body.name
        
        user.update(data, {accountId: accountId})
    },

    SetRandomCosmeticLoadoutFlag(accountId, req) {
    
        let data = user.load({accountId: accountId})

        data.random_loadout = req.body.random
        
        user.update(data, {accountId: accountId})
    },

    SetCosmeticLockerBanner(accountId, req) {
    
        let data = user.load({accountId: accountId})

        data.lockers[0].attributes.banner_icon_template = req.body.bannerIconTemplateName
        data.lockers[0].attributes.banner_color_template = req.body.bannerColorTemplateName
        
        user.update(data, {accountId: accountId})
    },

    MarkItemSeen(accountId, req) {
    
        let data = user.load({accountId: accountId})
        const itemIds = req.body.itemIds
        
        for (var i = 0; i < Object.keys(itemIds).length; i++) {
    
            if (data['unseen_items'].indexOf(itemIds[i]) != -1)
                delete data.unseen_items[data['unseen_items'].indexOf(itemIds[i])]
        }
        
        user.update(data, {accountId: accountId})
    }
}

function getProfile(profileId, accountId, rvn) {

    if (!storage.profiles.hasOwnProperty(profileId))
            return {}
            
    let profile = storage.profiles[profileId],
    data = user.load({accountId: accountId})
    
    profile.profileId = profileId
    profile.accountId = accountId
    profile.updated = new Date().toISOString()
    profile.rvn = rvn + 1

    switch(profileId) {

        case 'common_core':
            profile.items.mtx_currency = {
                templateId: 'Currency:MtxGiveaway',
                attributes: {
                    platform: 'Shared'
                },
                quantity: data.vbucks
            }
            break;

            

        case 'common_core':
            profile.items.mtx_currency = {
                offerId: "PhantomFN", 
                currency: "PhantomFN", 
                currencySubType: "PhantomFN",
                expectedTotalPrice: 0, 
                gameContext: "Frontend.CatabaScreen", 
                receiverAccountIds: [accountId],
                giftWrapTemplateId: "GiftBox:GB_GiftWrap2"
            }
            break;
                
        case 'athena':
            data['favorites'].forEach(item => {
                if (profile['items'].hasOwnProperty(item))
                    profile.items[item].attributes.favorite = true
            })
            data['lockers'].forEach(locker => {
                const lockerName = `locker${data['lockers'].indexOf(locker)}`
                if (locker !== null)
                    profile.items[lockerName] = locker

                profile.stats.attributes.loadouts.push(locker === undefined || locker === null ? null : lockerName)
            })
            
            profile.stats.attributes.use_random_loadout = data.random_loadout,
            profile.stats.attributes.level = data.level,
            profile.stats.attributes.accountLevel = data.accountLevel,
            profile.stats.attributes.battlestars = data.battlestars,
            profile.stats.attributes.crowns = data.crowns,
            profile.stats.attributes.style_points = data.style_points;
            //crowns missing
            
            for (let i = 0; i < data['unseen_items'].length; i++)
                if (data.unseen_items[i] !== null)
                    profile.items[data.unseen_items[i]].attributes.item_seen = false
    }
    return profile
}

app.post('/fortnite/api/game/v2/profile/:accountId/client/:operation', async (req, res) => {
    const profileId = req.query.profileId,
    accountId = req.params.accountId, 
    rvn = req.query.hasOwnProperty('rvn') ? parseInt(req.query.rvn) : 1,
    operation = req.params.operation

    user.create({accountId: accountId})

    if (mcpOperation.hasOwnProperty(operation))
        mcpOperation[operation](accountId, req)

    database.reload()

    res.json({
        profileRevision: rvn + 1,
        profileId: profileId,
        profileChangesBaseRevision: rvn,
        profileChanges: [{
            changeType: "fullProfileUpdate",
            profile: getProfile(profileId, accountId, rvn)
        }],
        profileCommandRevision: rvn + 1,
        serverTime: new Date().toISOString(),
        responseVersion: 1
    })
})

module.exports = app