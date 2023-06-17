const express = require('express'),
fs = require('fs')
util = require('../util'),
crypto = require('crypto')

let app = express(),

names = []
uniques = []

//is supposed to work for both, hybird and private servers

app.get('/fortnite/api/cloudstorage/system', (req, res) => {
    
    let ret = []
    fs.readdirSync('./cloudstorage').forEach(file => {
            
        const unique = names.indexOf(file) !== -1 ? uniques[names.indexOf(file)] : util.randomString(56),
        content = fs.readFileSync(`./cloudstorage/${file}`)
        ret.push({
            contentType: 'application/octet-stream',
            doNotCache: false,
            filename: file,
            hash: crypto.createHash('sha1').update(content).digest('hex'),
            hash256: crypto.createHash('sha256').update(content).digest('hex'),
            length: content.length,
            storageType: 'DSS',
            storageIds: {
                DSS: unique
            },
            uniqueFilename: unique,
            uploaded: new Date().toISOString()
        })

        names.push(file)
        uniques.push(unique)
    })
    
    res.json(ret)
})

app.get('/api/v1/access/fortnite/:storageId', (req, res) => {
    
    const unique = req.params.storageId

    if (uniques.indexOf(unique) !== -1) {

        let result = {
            expiresAt: '2055-01-01T00:00:00.000Z',
            folderThrottled: false,
            maxFileSizeBytes: -1,
            maxFolderSizeBytes: -1,
            files: {}
        }
        result.files[unique] = {
            fileLocked: false,
            hash: null,
            lastModified: null,
            size: 0,
            writeLink: null,
            readLink: `${req.protocol}://${req.hostname}/fortnite/api/cloudstorage/system/${unique}`
        } 
        res.json(result)
    }

    else
        res.status(404)
})

app.get('/fortnite/api/cloudstorage/system/config', (req, res) => {
    
    res.json({
        lastUpdated: new Date().toISOString(),
        disableV2: false,
        isAuthenticated: false,
        enumerateFilesPath: '/api/cloudstorage/system/',
        enableMigration: false,
        enableWrites: false,
        transports:{
            McpProxyTransport:{
                name: 'McpProxyTransport',
                type: 'ProxyStreamingFile',
                appName: 'fortnite',
                isEnabled: true,
                isRequired: false,
                isPrimary: false,
                timeoutSeconds: 30,
                priority: 10
            },
            McpSignatoryTransport:{
                name: 'McpSignatoryTransport',
                type: 'ProxySignatory',
                appName: 'fortnite',
                isEnabled: false,
                isRequired: false,
                isPrimary: false,
                timeoutSeconds: 30,
                priority: 20
            },
            DssDirectTransport:{
                name: 'DssDirectTransport',
                type: 'DirectDss',
                appName: 'fortnite',
                isEnabled: true,
                isRequired: false,
                isPrimary: true,
                timeoutSeconds: 30,
                priority: 30
            }
        }
    })
})

app.get('/fortnite/api/cloudstorage/system/:unique', (req, res) => {

    const unique = req.params.unique

    if (fs.existsSync(`./cloudstorage/${names[uniques.indexOf(unique)]}`)) {

        res.setHeader('Content-Type', 'application/octet-stream')
        .send(fs.readFileSync(`./cloudstorage/${names[uniques.indexOf(unique)]}`))
    }
    else 
        res.status(404)
})

app.get('/fortnite/api/cloudstorage/user/:accountId', (req, res) => {
    
    res.json([])
})

module.exports = app