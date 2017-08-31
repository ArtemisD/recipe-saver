'use strict';

var RecipeEntries = function RecipeEntries(props) {
  return React.createElement(
    'div',
    { className: 'flex-container' },
    props.list.map(function (entry) {
      return React.createElement(RecipeEntry, { key: entry.recipe_id, recipe: entry, handleButtonClick: props.handleButtonClick });
    })
  );
};

RecipeEntries.propTypes = {
  list: React.PropTypes.array.isRequired
};

window.RecipeEntries = RecipeEntries;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1JlY2lwZUVudHJpZXMuanN4Il0sIm5hbWVzIjpbIlJlY2lwZUVudHJpZXMiLCJwcm9wcyIsImxpc3QiLCJtYXAiLCJlbnRyeSIsInJlY2lwZV9pZCIsImhhbmRsZUJ1dHRvbkNsaWNrIiwicHJvcFR5cGVzIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFEO0FBQUEsU0FDbEI7QUFBQTtBQUFBLE1BQUssV0FBVSxnQkFBZjtBQUNPQSxVQUFNQyxJQUFOLENBQVdDLEdBQVgsQ0FBZTtBQUFBLGFBQ2Qsb0JBQUMsV0FBRCxJQUFjLEtBQUtDLE1BQU1DLFNBQXpCLEVBQW9DLFFBQVFELEtBQTVDLEVBQW1ELG1CQUFtQkgsTUFBTUssaUJBQTVFLEdBRGM7QUFBQSxLQUFmO0FBRFAsR0FEa0I7QUFBQSxDQUFwQjs7QUFTQU4sY0FBY08sU0FBZCxHQUEwQjtBQUN4QkwsUUFBTU0sTUFBTUMsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JDO0FBREosQ0FBMUI7O0FBSUFDLE9BQU9aLGFBQVAsR0FBdUJBLGFBQXZCIiwiZmlsZSI6IlJlY2lwZUVudHJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVjaXBlRW50cmllcyA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1jb250YWluZXInPlxuICAgICAgICB7cHJvcHMubGlzdC5tYXAoZW50cnkgPT5cbiAgICAgICAgICA8UmVjaXBlRW50cnkgIGtleT17ZW50cnkucmVjaXBlX2lkfSByZWNpcGU9e2VudHJ5fSBoYW5kbGVCdXR0b25DbGljaz17cHJvcHMuaGFuZGxlQnV0dG9uQ2xpY2t9Lz5cbiAgICAgICAgKX1cbiAgPC9kaXY+XG5cbik7XG5cblJlY2lwZUVudHJpZXMucHJvcFR5cGVzID0ge1xuICBsaXN0OiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufVxuXG53aW5kb3cuUmVjaXBlRW50cmllcyA9IFJlY2lwZUVudHJpZXM7XG4iXX0=