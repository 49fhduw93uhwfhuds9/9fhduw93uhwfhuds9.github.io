const express = require('express'),
user = require('../user')
const { database } = require('../storage')

let app = express()

/*
//stub for retrieving public/private account data, unfinished

app.post('/ext/api/account/:accountId/stats', (req, res) => {

    const accountId = req.params.accountId,
    stats = req.body
    let data = user.load({accountId: accountId}),
    update = {}

    delete data.email
    delete data.password
    delete data.login_code
    delete data.username
    delete data.accountId

    Object.getOwnPropertyNames(stats).forEach(stat => {
        if (data.hasOwnProperty(stat))
                update[stat] = stats[stat]
    })

    user.update(update, {accountId: accountId})
    res.json(data)

    database.reload()
})

app.get('/ext/api/account/:accountId/stats', (req, res) => {

    const accountId = req.params.accountId
    let data = user.load({accountId: accountId})

    delete data.email
    delete data.password
    delete data.login_code
    delete data.username
    delete data.accountId

    res.json(data)
})

app.post('/ext/api/account/:accountId/info', (req, res) => {

    const accountId = req.params.accountId,
    stats = req.body
    let data = user.load({accountId: accountId}),
    update = {}

    Object.getOwnPropertyNames(stats).forEach(stat => {
        if (stat === 'password' || stat === 'email' || stat === 'login_code' || stat === 'username' || stat === 'accountId')
            update[stat] = stats[stat]
    })

    user.update({accountId: accountId}, update)
    data = user.load({accountId: accountId})

    res.json({
        email: data.email,
        password: data.password,
        login_code: data.login_code,
        username: data.username,
        accountId: data.accountId
    })
})

app.get('/ext/api/account/:accountId/info', (req, res) => {

    const accountId = req.params.accountId
    let data = user.load({accountId: accountId})

    res.json({
        email: data.email,
        password: data.password,
        login_code: data.login_code,
        username: data.username,
        accountId: data.accountId
    })
})*/

module.exports = app