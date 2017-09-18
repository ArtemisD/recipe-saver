var SavedRecipeEntries = (props) => (
  <div className='flex-container'>
    {props.list.map(entry =>
      <SavedRecipeEntry entry={entry} handleButtonClick={props.handleButtonClick}/>
    )}
  </div>
);

SavedRecipeEntries.propTypes = {
  list: React.PropTypes.array.isRequired
}

window.SavedRecipeEntries = SavedRecipeEntries;
