const express = require('express'),
  bodyParser = require('body-parser'),
  util = require('./util'),
  misc = require('./misc'),
  storage = require('./storage')

let app = express()

app.use((req, res, next) => {
  res.removeHeader('X-Powered-By')
  util.log(req.path)
  next()
}, bodyParser.json(), bodyParser.urlencoded({ extended: true }))

app.use('/',
  require('./server/api'),
  require('./server/mcp'),
  require('./server/cloudstorage'),
  require('./server/auth/token'),
  require('./server/content'),
  require('./server/ext'))

misc.updateAthena()
storage.database.push('/', { users: [] }, true)

app.listen(3000 || 80 || 443, '0.0.0.0', () => {
  util.log(`PhamtomFN is running!`)
})