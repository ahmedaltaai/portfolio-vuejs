const express = require('express')
const path = require('path')
const history = require('connect-history-api-fallback')
const forceSSL = require('heroku-ssl-redirect')
const app = express()

// serves files from dist directory which now contains the built website
const staticFileMiddleware = express.static(path.join(__dirname, '/dist'))

app.use(staticFileMiddleware)
app.use(forceSSL)
app.use(
  history({
    disableDotRule: true,
    verbose: true
  })
)

app.use(staticFileMiddleware)

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '/dist'))
})

const port = process.env.PORT || 8080

app.listen(port)

console.log('Listening on port: ' + port)
