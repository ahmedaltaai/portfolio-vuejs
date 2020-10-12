const express = require('express')
// const path = require('path')
const willhaben = express()

willhaben.get('/', (req, res) => {
  // res.render(express.static(path.join(__dirname, '/')))
  res.send('HELLO')
})

module.exports = { willhaben }
