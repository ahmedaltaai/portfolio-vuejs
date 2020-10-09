const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

// serves files from dist directory which now contains the built website
app.use('/', serveStatic(path.join(__dirname, '/dist')))
app.get('/projects', serveStatic(path.join(__dirname, '/dist')))
app.get('/articles', serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080

app.listen(port)

console.log('Listening on port: ' + port)
