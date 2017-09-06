var RecipeEntries = (props) => (
  <div className='flex-container'>
        {props.list.map(entry =>
          <RecipeEntry  key={entry.recipe_id} recipe={entry} handleButtonClick={props.handleButtonClick}/>
        )}
  </div>
);

RecipeEntries.propTypes = {
  list: React.PropTypes.array.isRequired
}

window.RecipeEntries = RecipeEntries;
