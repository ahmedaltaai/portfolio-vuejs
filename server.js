const express = require('express')
const path = require('path')
const history = require('connect-history-api-fallback')
const enforce = require('express-sslify')
const vhost = require('vhost')

const app = express()

// serves files from dist directory which contains the built website
const mainWebsite = express.static(path.join(__dirname, '/willhaben'))
// serves the willhaben project
const willhabenProject = express.static(path.join(__dirname, '/willhaben'))

app.use(mainWebsite)

app.use(
  history({
    disableDotRule: true,
    verbose: true
  })
)

app.use(mainWebsite)

app.use(vhost('willhaben.ahmedaltaai.com', willhabenProject))

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '/dist'))
})

app.use(enforce.HTTPS())

const port = process.env.PORT || 8080

app.listen(port)

console.log('Listening on port: ' + port)
