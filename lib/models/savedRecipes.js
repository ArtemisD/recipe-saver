var mongoose = require("mongoose");

var recipesSchema = mongoose.Schema({
  label: String,
  url: String,
  image: String,
  recipe_id: String,
});

var SavedRecipes = mongoose.model("SavedRecipes", recipesSchema);

module.exports = SavedRecipes;
