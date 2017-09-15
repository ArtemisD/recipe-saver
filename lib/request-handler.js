var db = require("./config");
var Recipe = require("./models/savedRecipes");

exports.findAllRecipes = function(req, res) {
  Recipe.find({}).exec(function(err, recipes) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    res.status(200).send(recipes);
  });
};

exports.addRecipe = function(req, res) {
  var title = req.body.title;
  var source_url = req.body.source_url;
  var image_url = req.body.image_url;
  var recipe_id = req.body.recipe_id;
  Recipe.findOne({recipe_id: recipe_id}).exec(function(err, recipe) {
    if (!recipe) {
      var newRecipe = new Recipe({title: title, source_url: source_url, image_url: image_url, recipe_id: recipe_id});
      newRecipe.save(function(err, newRecipe) {
        if (err) {
          res.status(500);
          re.send(err);
        }
        res.status(201);
        res.send(newRecipe);
      });
    } else {
      console.log('Recipe already exists');
    }
  });
};

exports.deleteRecipe = function(req, res) {
  var recipe_id = req.params.recipe_id;
  Recipe.remove({
    recipe_id: recipe_id
  }, function(err) {
    if (err) {
      res.status(500);
      res.send(err);
    }
    res.status(200);
    res.send('recipe deleted');
  });
};
