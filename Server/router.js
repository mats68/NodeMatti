const express = require('express')
const controller = require('./controllers/controller')
const path  = require('path')

module.exports = function(app) {
  const apiRoutes = express.Router()

  //routes will go here
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
  })
  app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './about.html'))
  })
  
  app.use('/api', apiRoutes)
  apiRoutes.post('/insert/:collection', controller.insertData)
}