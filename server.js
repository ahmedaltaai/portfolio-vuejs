const express = require('express')
const path = require('path')
const history = require('connect-history-api-fallback')
const enforce = require('express-sslify')
const vhost = require('vhost')
const app = express()

// serves files from dist directory which contains the built website
const mainWebsite = express.static(path.join(__dirname, '/dist'))
// const willhaben = express.static(path.join(__dirname, '/willhaben'))

// import willhaben-project
// const willhaben = require('./willhaben')

app.use(vhost('willhaben.ahmedaltaai.com', require('./willhaben/app')))

app.use(mainWebsite)
app.use(vhost('willhaben.ahmedaltaai.com', require('./willhaben/app')))

app.use(
  history({
    disableDotRule: true,
    verbose: true
  })
)
app.use(vhost('willhaben.ahmedaltaai.com', require('./willhaben/app')))

app.use(mainWebsite)
app.use(vhost('willhaben.ahmedaltaai.com', require('./willhaben/app')))

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '/dist'))
})
app.use(vhost('willhaben.ahmedaltaai.com', require('./willhaben/app')))

app.use(enforce.HTTPS())

const port = process.env.PORT || 8080
app.use(vhost('willhaben.ahmedaltaai.com', require('./willhaben/app')))

app.listen(port)

console.log('Listening on port: ' + port)
