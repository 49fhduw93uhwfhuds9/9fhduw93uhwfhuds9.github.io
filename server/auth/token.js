const express = require('express'),
jwt = require('jsonwebtoken'),
util = require('../../util'),
auth = require('./auth'),
user = require('../../user'),
{ database } = require('../../storage')

let app = express()

//unfinished auth/login stuff

app.post('/account/api/oauth/token', (req, res) => {

    let token_type = req.body.token_type,
    grant_type = req.body.grant_type

    database.reload()

    let exp = () => {
        let date = new Date()
        date.setDate(date.getDate() + 1)
        return date
    },

    access_token = token_type + '~' + jwt.sign({
        iat: new Date().getDate(),
        am: grant_type,
        exp: exp().getDate(),
        clsvc: auth.clientService,
        clid: auth.clientId,
        jti: util.randomString(32)
    }, auth.signingKey)

    if (grant_type === 'client_credentials') {
        
        res.json({
            access_token: access_token,
            client_id: auth.clientId,
            client_service: auth.clientService,
            expires_at: exp().toISOString(),
            expires_in: 86400,
            internal_client: true,
            token_type: 'bearer'
        })
    }

    if (grant_type === 'exchange_code') {
        
        let data = {}
        if (grant_type === 'exchange_code') {
            user.create({login_code: req.body.exchange_code})
            data = user.load({login_code: req.body.exchange_code})
        }
        
        res.json({
            access_token: access_token,
            account_id: data.accountId,
            client_id: auth.clientId,
            client_service: auth.clientService,
            device_id: util.randomHex(32),
            displayName: data.username,
            expires_at: exp().toISOString(),
            expires_in: 86400,
            in_app_id: data.accountId,
            internal_client: true,
            token_type: 'bearer',
            refresh_expires_at: exp().toISOString(),
            refresh_expires: 86400,
            refresh_token: access_token
        })
    }
})

app.post('/datarouter/api/v1/public/data', (req, res) => {
    
    res.status(204).send()
})

app.delete('/account/api/oauth/sessions/kill', (req, res) => {
    
    res.status(204).send()
})

app.delete('/account/api/oauth/sessions/kill/:token', (req, res) => {
    
    res.status(204).send()
})

app.get('/account/api/public/account/:accountId/externalAuths', (req, res) => {
    
    res.send([])
})

app.get('/account/api/public/account/:accountId', (req, res) => {
    
    let data = user.load({accountId: req.params.accountId})

    res.send({
        ageGroup: 'Unknown',
        canUpdateDisplayName: false,
        country: 'US',
        displayName: data.username,
        emailVerified: true,
        email: data.email,
        failedLoginAttempts: 0,
        headless: false,
        id: data.accountId,
        lastDisplayNameChange: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
        lastName: 'hahaha',
        name: 'hahaha',
        minorExpected: false,
        minorStatus: 'NOT_MINOR',
        minorVerified: true,
        numberOfDisplayNameChanges: 0,
        preferredLanguage: 'en',
        tfaEnabled: false
    })
})

app.get('/account/api/public/account', (req, res) => {
    
    let data = user.load({login_code: req.query.accountId})

    res.send([
        {
            displayName: data.username,
            id: data.accountId,
            externalAuths: []
        }
    ])
})

module.exports = app