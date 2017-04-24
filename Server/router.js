const express = require('express')
const controller = require('./controllers/controller')
const path  = require('path')

module.exports = function(app) {
  const apiRoutes = express.Router()

  //routes will go here
  app.get('/', (req, res) => {
    res.json({message: "API initialized!"})
  })
  
  app.use('/api', apiRoutes)
  apiRoutes.get('/:collection', controller.queryData)
  apiRoutes.post('/insert/:collection', controller.insertData)
  
}