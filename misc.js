const util = require('./util'),
storage = require('./storage'),
axios = require('axios')

module.exports = {
    async updateAthena() {

        while (true) {
            try {
            let athena = storage.profiles.athena
            let athenaitem = storage.profiles.athena.items
        
            await axios.get('https://fortnite-api.com/v2/cosmetics/br')
            .then(response => {

                const data = response.data.data
                data.forEach(item => {
                    
                    let athenaItem = {
                        templateId: item.type.backendValue + ':' +item.id,
                        attributes: {
                            max_level_bonus: 0,
                            level: 1,
                            item_seen: true,
                            rnd_sel_cnt: 0,
                            xp: 0,
                            variants: [],
                            favorite: false
                        },
                        quanity: 1
                    }
                    if (item['variants'] !== null) {
                        item['variants'].forEach(variant => {
                            var ownedVariants = []
                            variant['options'].forEach(option => {
                                ownedVariants.push(option.tag)
                            })
                            athenaItem['attributes']['variants'].push({
                                channel: variant.channel,
                                active: variant.options[0].tag,
                                owned: ownedVariants
                            })
                        })
                    }
                    athena['items'][item.type.backendValue + item.id] = athenaItem
                });
            })
            storage.profiles.athena = athena
            util.log('Updated Athena!')

            await new Promise((resolve) => { setTimeout(resolve, 172800000) }) //wait 2 days
        }
        catch (err) {}
    }
    }

}