var RecipeEntry = (props) => (
  <div className="col-md-4 text-center">
    <div className="col-md-12 mx-auto card">
      <a href={props.entry.recipe.url} target="_blank">
        <h6>{props.entry.recipe.label}</h6>
        <img className="img-fluid" src={props.entry.recipe.image}/>
      </a>
      <button type="button" className="btn btn-info " onClick={() => props.handleButtonClick(props.entry)} >Save Recipe</button>
    </div>
  </div>
);

RecipeEntry.propTypes = {
  entry: React.PropTypes.object.isRequired
};

window.RecipeEntry = RecipeEntry;
