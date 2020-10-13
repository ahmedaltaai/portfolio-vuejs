const express = require('express')
const path = require('path')
const history = require('connect-history-api-fallback')
const enforce = require('express-sslify')
const vhost = require('vhost')
const app = express()

// serves files from dist directory which contains the main website (portfolio)
const mainWebsite = express.static(path.join(__dirname, '/dist'))

// import projects
app.use(vhost('willhaben.ahmedaltaai.com', require('./projects/willhaben/app')))
app.use(vhost('microsoft.ahmedaltaai.com', require('./projects/microsoft/app')))
app.use(vhost('rps.ahmedaltaai.com', require('./projects/rps/app')))
app.use(vhost('guf.ahmedaltaai.com', require('./projects/guf/app')))

app.use(
  history({
    disableDotRule: true,
    verbose: true
  })
)

app.use(mainWebsite)

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '/dist'))
})

app.use(enforce.HTTPS())

const port = process.env.PORT || 8080

app.listen(port)

console.log('Listening on port: ' + port)
