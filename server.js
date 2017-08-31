// var app = require("./Routes/routes");
var express = require('express')
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var SavedRecipes = require('./lib/models/savedRecipes')
var handler = require('./lib/request-handler')

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/recipes', handler.findAllRecipes);

app.post('/recipes', handler.addRecipe);

app.delete('/recipes/:recipe_id', handler.deleteRecipe);

app.listen(3000, function() {
	console.log("Started server at port 3000");
});
