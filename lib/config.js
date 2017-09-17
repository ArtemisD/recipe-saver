var mongoose = require('mongoose');

mongoURI = 'mongodb://localhost/recipesdb';
MONGODB_URI = 'mongodb://heroku_ctj5c35h:4tdjmvmq7dbnlp5is816q7fcju@ds139964.mlab.com:39964/heroku_ctj5c35h';

mongoose.connect(process.env.MONGODB_URI || mongoURI);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function() {
  console.log('Mongodb connection open');
});

module.exports = db;
