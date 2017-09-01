var SavedRecipeEntry = (props) => (

  <div className="col-md-4 text-center">
    <div className="mx-auto card">
    <a href={props.recipe.source_url} target="_blank">
      <h6>{props.recipe.title}</h6>
    </a>
    <img className="img-fluid" src={props.recipe.image_url}/>
           <button type="button" className="btn btn-danger " onClick={() => props.handleButtonClick(props.recipe, props.recipe.recipe_id)} >Delete Recipe </button>
    </div>
  </div>

);


SavedRecipeEntry.propTypes = {
  recipe: React.PropTypes.object.isRequired
};

window.SavedRecipeEntry = SavedRecipeEntry;
