var RecipeEntries = (props) => (
  <div className='flex-container'>
        {props.list.map(entry =>
          <RecipeEntry  key={entry.shareAs} entry={entry} handleButtonClick={props.handleButtonClick}/>
        )}
  </div>
);

RecipeEntries.propTypes = {
  list: React.PropTypes.array.isRequired
}

window.RecipeEntries = RecipeEntries;
