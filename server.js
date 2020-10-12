const express = require('express')
const path = require('path')
const history = require('connect-history-api-fallback')
const enforce = require('express-sslify')
const subdomain = require('express-subdomain')
const router = express.Router()

const app = express()

// serves files from dist directory which contains the built website
const mainWebsite = express.static(path.join(__dirname, '/dist'))
const willhabenProject = express.static(path.join(__dirname, '/dist/willhaben'))

app.use(mainWebsite)

app.use(
  history({
    disableDotRule: true,
    verbose: true
  })
)

app.use(mainWebsite)

router.use(willhabenProject)

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '/dist'))
})

app.use(subdomain('willhaben', router))

app.use(enforce.HTTPS())

const port = process.env.PORT || 8080

app.listen(port)

console.log('Listening on port: ' + port)
