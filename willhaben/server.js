const express = require('express')
const path = require('path')
const willhaben = express()

willhaben.get('/', (req, res) => {
  res.send(express.static(path.join(__dirname, '/')))
})

module.exports = { willhaben }
