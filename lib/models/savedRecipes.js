var mongoose = require("mongoose");

var recipesSchema = mongoose.Schema({
  title: String,
  source_url: String,
  image_url: String,
  recipe_id: String
});

var SavedRecipes = mongoose.model("SavedRecipes", recipesSchema);

module.exports = SavedRecipes;
