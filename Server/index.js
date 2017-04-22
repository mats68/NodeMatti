const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      app = express(),
      router = require('./router'),
      db = require('./db');

var port = 3000;

db.connect('mongodb://localhost:27017/mydatabase', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } 
})


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
router(app);


app.listen(port);
console.log('Your server is running on port ' + port + '.');