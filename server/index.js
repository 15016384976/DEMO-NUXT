const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const parser = require('body-parser')
const session = require('express-session')
const Store = require('express-mysql-session')(session)
const decode = require('jwt-decode')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
app.set('port', port)

app.use(parser.json())
app.use(session({
  secret: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    maxAge: 60*60*1000
  }/*,
  store: new Store({
    host: process.env.DB_HOST || 'localhost',
    port: 3306,
    user: 'root',
    password: '1',
    database: 'test',
    clearExpired: true,
	  checkExpirationInterval: 900000,
	  expiration: 86400000,
	  createDatabaseTable: true,
	  connectionLimit: 1,
	  endConnectionOnClose: true,
	  charset: 'utf8mb4_bin',
    schema: {
      tableName: 'session',
      columnNames: {
        session_id: 'session_id',
        expires: 'expires',
        data: 'data'
      }
    }
  })*/
}))

app.post('/nuxtServerSignin', function (req, res) {
  let access_token = req.body.access_token
  let decoded = decode(access_token)
  let user = {
    id: decoded.sub,
    account: decoded.phone,
    name: decoded.name,
    access_token :access_token
  }
  req.session.user = user
  res.json(user)
})
app.post('/nuxtServerSignout', function (req, res) {
  delete req.session.user
  res.json()
})

let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')
async function start() {
  const nuxt = new Nuxt(config)
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  app.use(nuxt.render)
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
