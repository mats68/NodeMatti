const express = require('express');
const controller = require('./controllers/controller');

module.exports = function(app) {
  const apiRoutes = express.Router();

  //routes will go here
  app.get('/', (req, res) => {
    res.send('hello')
  })
  app.use('/api', apiRoutes);
  apiRoutes.get('/insert', controller.insertData);
}