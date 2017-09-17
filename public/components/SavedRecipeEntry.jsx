var SavedRecipeEntry = (props) => (
  <div className="col-md-4 text-center">
    <div className="mx-auto card">
      <a href={props.entry.url} target="_blank">
        <h6>{props.entry.label}</h6>
        <img className="img-fluid" src={props.entry.image}/>
      </a>
      <button type="button" className="btn btn-danger " onClick={() => props.handleButtonClick(props.entry, props.entry.recipe_id)} >Delete Recipe </button>
    </div>
  </div>
);

SavedRecipeEntry.propTypes = {
  entry: React.PropTypes.object.isRequired
};

window.SavedRecipeEntry = SavedRecipeEntry;
