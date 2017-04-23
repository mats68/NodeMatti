const express = require('express');
const controller = require('./controllers/controller');
import path from 'path';

module.exports = function(app) {
  const apiRoutes = express.Router();

  //routes will go here
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
  })
  app.use('/api', apiRoutes);
  apiRoutes.get('/insert', controller.insertData);
}