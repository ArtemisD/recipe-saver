var SavedRecipeEntries = (props) => (
  <div className='flex-container'>
        {props.list.map(entry =>
          <SavedRecipeEntry  key={entry.recipe_id} recipe={entry} handleButtonClick={props.handleButtonClick}/>
        )}
  </div>

);

SavedRecipeEntries.propTypes = {
  list: React.PropTypes.array.isRequired
}

window.SavedRecipeEntries = SavedRecipeEntries;
