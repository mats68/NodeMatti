const express = require('express');
const ourController = require('./controllers/our-controller');

module.exports = function(app) {
  const apiRoutes = express.Router();

  //routes will go here

  app.use('/api', apiRoutes);
  //apiRoutes.get('/helloworld', ourController.helloworld);
  apiRoutes.get('/insert', ourController.insertData);
}