var RecipeEntry = (props) => (
  <div className="col-md-4 mx-auto text-center card">
    <a href={props.recipe.source_url} target="_blank">
      <h6>{props.recipe.title}</h6>
    </a>
    <img className="img-fluid" src={props.recipe.image_url}/>
    <div onClick={() => props.handleButtonClick(props.recipe)}>
           <button type="button" className="btn btn-info">Save Recipe</button>
    </div>
  </div>

);


RecipeEntry.propTypes = {
  recipe: React.PropTypes.object.isRequired
};

window.RecipeEntry = RecipeEntry;
