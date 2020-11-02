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
app.use(
  vhost('knights-tour.ahmedaltaai.com', require('./projects/knights-tour/app'))
)
app.use(vhost('rps.ahmedaltaai.com', require('./projects/rps/app')))
app.use(vhost('guf.ahmedaltaai.com', require('./projects/guf/app')))

// Mounts the specified middleware function or functions
// at the specified path: the middleware function is executed
// when the base of the requested path matches path.
app.use(mainWebsite)

app.use(
  history({
    disableDotRule: true,
    verbose: true
  })
)

// Mounts the specified middleware function or functions
// at the specified path: the middleware function is executed
// when the base of the requested path matches path.
app.use(mainWebsite)

// enforces HTTPS because heroku uses reversed proxies
app.use(enforce.HTTPS({ trustProtoHeader: true }))

// routes an HTTP request, where METHOD is the HTTP
// method of the request, such as
// GET, PUT, POST, and so on, in lowercase.
app.get('/', (req, res) => {
  // The path.join() method joins all given path segments together
  // using the platform-specific separator as a delimiter,
  // then normalizes the resulting path.
  res.render(path.join(__dirname, '/dist'))
})

// in many environments (e.g. Heroku), and as a convention,
// you can set the environment variable PORT
// to tell your web server what port to listen on.
const port = process.env.PORT || 8080

app.listen(port)

// just logging out on which port the app is listening
console.log('Listening on port: ' + port)
