var db = require("./config");
var Recipe = require("./models/savedRecipes");

exports.findAllRecipes = function(req, res) {
  Recipe.find({}).exec(function(err, recipes) {
    res.status(200).send(recipes);
  });
};

exports.addRecipe = function(req, res) {
  //
  //
  // Recipe.create({label: req.body.recipe.label, url: req.body.recipe.url, image: req.body.recipe.image});
  Recipe.findOne({recipe_id: req.body.recipe.ingredients[0].text}).exec(function(err, recipe) {
    console.log(req.body.recipe.ingredients[0].text)
    if (!recipe) {
      var newRecipe = new Recipe({label: req.body.recipe.label, url: req.body.recipe.url, image: req.body.recipe.image, recipe_id: req.body.recipe.ingredients[0].text});
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
