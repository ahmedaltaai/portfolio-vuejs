const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
  res.render(express.static(path.join(__dirname, '/')))
  // res.status(200).send('HELLO THIS FINALLY WORKED!')
})

module.exports = app
