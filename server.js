var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var SavedRecipes = require('./lib/models/savedRecipes');
var handler = require('./lib/request-handler');
var PORT = process.env.PORT || 3000;

var app = express();

app.use(cors({origin: 'https://localhost/3000'}));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/recipes', handler.findAllRecipes);

app.post('/recipes', handler.addRecipe);

app.delete('/recipes/:recipe_id', handler.deleteRecipe);

app.listen(PORT, function() {
	console.log("Started server");
});
