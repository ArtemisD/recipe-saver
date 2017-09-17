var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var SavedRecipes = require('./lib/models/savedRecipes');
var handler = require('./lib/request-handler');
var port = process.env.PORT || 3000;

var app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/recipes', handler.findAllRecipes);

app.post('/recipes', handler.addRecipe);

app.delete('/recipes/:recipe_id', handler.deleteRecipe);

app.listen(port, function() {
	console.log("Started server");
});
