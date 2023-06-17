const express = require('express'),
axios = require('axios'),
user = require('../user')

let app = express()

app.get('/fortnite/api/game/v2/br-inventory/account/:accountId', (req, res) => {
    
    const accountId = req.params.accountId,
    data = user.load({accountId: accountId})

    res.json({
        "stash": {
            "globalcash": 0
        },
    })
})

app.get('/lightswitch/api/service/bulk/status', (req, res) => {
    
    res.json([{
        serviceInstanceId: 'fortnite',
        status: 'UP',
        message: 'Fortnite is online',
        maintenanceUri: null,
        overrideCatalogIds: ['a7f138b2e51945ffbfdacc1af0541053'],
        allowedActions: ['PLAY', 'DOWNLOAD'],
        banned: false,
        launcherInfoDTO: {
            appName: 'Fortnite',
            catalogItemId: '4fe75bbc5a674f4f9b356b5c90567da5',
            namespace: 'fn'
        }
    }])
})

app.get('/fortnite/api/v2/versioncheck/:platform', (req, res) => {

    res.json({
        type: 'NO_UPDATE'
    })
})

app.get('/fortnite/api/game/v2/enabled_features', (req, res) => {

    res.send([])
})

app.get('/eulatracking/api/public/agreements/fn/account/:accountId', (req, res) => {

    res.status(204).send()
})

app.get('/socialban/api/public/v1/:accountId', (req, res) => {

    res.json({
        bans: [],
        warnings: []
    })
})

app.get('/fortnite/api/storefront/v2/keychain', async (req, res) => {

    axios.get('https://api.nitestats.com/v1/epic/keychain')
    .then(response => {
        
        let data = response.data

        res.json(data)
    })
})

app.get('/waitingroom/api/waitingroom', (req, res) => {

    res.status(204).send()
})

/*app.get('/launcher/api/public/assets/Windows/:id/FortniteContentBuilds', (req, res) => {
    res.json({
            "appName" : "FortniteContentBuilds",
            "labelName" : "yCmUoQqGn-w6Fy1f70uAsfVCNK3hiA-Windows",
            "buildVersion" : "++Fortnite+Release-20.10-CL-19598943-Windows",
            "catalogItemId" : "5cb97847cee34581afdbc445400e2f77",
            "expires" : "2022-04-16T17:20:07.201Z",
            "items" : {
              "MANIFEST" : {
                "signature" : "Policy=eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6IipCdWlsZHMvRm9ydG5pdGUvQ29udGVudC9DbG91ZERpci9XWjl4a0FMbzRuLWdsNWJfYVVlYW9oeFNCQlpjeWcubWFuaWZlc3QiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NTAxMjk2MDd9LCJJcEFkZHJlc3MiOnsiQVdTOlNvdXJjZUlwIjoiMC4wLjAuMC8wIn19fV19&Signature=bwZv~xBi1d376nBPTjyPFQJiSx4bVf0GLzRoyguHrkiTZN9q28seCzpLA6a4zGUusTc02fbUM0G0tIG76SC80Zjy1-TaLqvjUstX8KZhERLcOz3NnygSC1rDJ37f5Wbe8nmOUz~pH4TAww2MQTUA1~c3U~XfpE3WBozS99qcwypq4SPQtcUiwIkqPgx76wvVzrf-J-woooqSXUx3gTYZI~FCSHRBJDP4LXrDa7bdzc8fNVQyA1YFLbQF4DZ7pOc61B2ZbRmnpruVf7iEww0DoaNCbHEgtfydF~JM2rzHLFqtuwsczuwzBo2y4FC6ocbtWxyFiR1wZUsKxayJ6-SGZQ__&Key-Pair-Id=APKAI5CNFPJPTPYZISXQ",
                "distribution" : "https://download.epicgames.com/",
                "path" : "Builds/Fortnite/Content/CloudDir/WZ9xkALo4n-gl5b_aUeaohxSBBZcyg.manifest",
                "hash" : "f670fedf5f778f3d1e7b6d64f1a79066266ced93",
                "additionalDistributions" : [ "https://download2.epicgames.com/", "https://download3.epicgames.com/", "https://download4.epicgames.com/" ]
              },
              "CHUNKS" : {
                "signature" : "Policy=eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6IipCdWlsZHMvRm9ydG5pdGUvQ29udGVudC9DbG91ZERpci9XWjl4a0FMbzRuLWdsNWJfYVVlYW9oeFNCQlpjeWcubWFuaWZlc3QiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NTAxMjk2MDd9LCJJcEFkZHJlc3MiOnsiQVdTOlNvdXJjZUlwIjoiMC4wLjAuMC8wIn19fV19&Signature=bwZv~xBi1d376nBPTjyPFQJiSx4bVf0GLzRoyguHrkiTZN9q28seCzpLA6a4zGUusTc02fbUM0G0tIG76SC80Zjy1-TaLqvjUstX8KZhERLcOz3NnygSC1rDJ37f5Wbe8nmOUz~pH4TAww2MQTUA1~c3U~XfpE3WBozS99qcwypq4SPQtcUiwIkqPgx76wvVzrf-J-woooqSXUx3gTYZI~FCSHRBJDP4LXrDa7bdzc8fNVQyA1YFLbQF4DZ7pOc61B2ZbRmnpruVf7iEww0DoaNCbHEgtfydF~JM2rzHLFqtuwsczuwzBo2y4FC6ocbtWxyFiR1wZUsKxayJ6-SGZQ__&Key-Pair-Id=APKAI5CNFPJPTPYZISXQ",
                "distribution" : "https://download.epicgames.com/",
                "path" : "Builds/Fortnite/Content/CloudDir/WZ9xkALo4n-gl5b_aUeaohxSBBZcyg.manifest",
                "additionalDistributions" : [ "https://download2.epicgames.com/", "https://download3.epicgames.com/", "https://download4.epicgames.com/" ]
              }
            },
            "assetId" : "FortniteContentBuilds"
          })
})*/

module.exports = app