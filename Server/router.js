const express = require('express')
const controller = require('./controllers/route-controller')
const path  = require('path')

module.exports = function(app) {
  const apiRoutes = express.Router()

  //routes will go here
  app.get('/', (req, res) => {
    res.json({message: "API initialized!"})
  })
  
  app.use('/api', apiRoutes)
  apiRoutes.get('/query/:collection', controller.queryData)
  apiRoutes.post('/insert/:collection', controller.insertData)
  apiRoutes.put('/update/:collection/:id', controller.updateData)
  apiRoutes.delete('/delete/:collection/:id', controller.deleteData)
  
}