process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const express = require('express')
const next = require('next')
const {parse} = require('url')
var cors = require('cors')
var cookieParser = require('cookie-parser')
var url = require("url");

var config = require('./config')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
var request = require("request")

app.prepare().then(() => {
  const server = express()
  var apiProxy = require('express-http-proxy');
  server.use('/proxy', apiProxy('localhost:5000'));
  server.use(cors())
  server.use(cookieParser())


  server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  server.get([
    '/login',
    '/'
  ], function(req, res) {
    if ( url.parse(req.url).pathname != '/login' && (req.cookies.user == undefined))
    return res.redirect('/login');
    else
      return handle(req, res)

  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(config.server.port, (err) => {
    if (err)
      throw err
    console.log('> Ready on http://localhost:' + config.server.port)
  })
})
