var RecipeEntry = (props) => (
  <div className="col-md-4 text-center">
    <div className="col-md-12 mx-auto card">
    <a href={props.recipe.source_url} target="_blank">
      <h6>{props.recipe.title}</h6>
    </a>
    <img className="img-fluid" src={props.recipe.image_url}/>
           <button type="button" className="btn btn-info " onClick={() => props.handleButtonClick(props.recipe)} >Save Recipe</button>
    </div>
  </div>

);


RecipeEntry.propTypes = {
  recipe: React.PropTypes.object.isRequired
};

window.RecipeEntry = RecipeEntry;
