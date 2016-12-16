var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');
var bodyParser = require('body-parser');

var mongoose = require('mongoose/');
var mongodb = require('mongodb');

var app = express();
var compiler = webpack(config);

var MongoClient = mongodb.MongoClient;
mongoose.connect('mongodb://localhost:27017/nodedb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
  console.log("Database connection open");
});

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
})
