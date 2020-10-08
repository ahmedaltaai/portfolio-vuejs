const express = require('express')
const serverStatic = require('server-static')
const path = require('path')

const app = express()

// serves files from dist directory which now contains the built website
app.use('/', serverStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080

app.listen(port)

console.log('Listening on port: ' + port)
