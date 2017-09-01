"use strict";

var SavedRecipeEntry = function SavedRecipeEntry(props) {
  return React.createElement(
    "div",
    { className: "col-md-4 text-center" },
    React.createElement(
      "div",
      { className: "mx-auto card" },
      React.createElement(
        "a",
        { href: props.recipe.source_url, target: "_blank" },
        React.createElement(
          "h6",
          null,
          props.recipe.title
        )
      ),
      React.createElement("img", { className: "img-fluid", src: props.recipe.image_url }),
      React.createElement(
        "button",
        { type: "button", className: "btn btn-danger ", onClick: function onClick() {
            return props.handleButtonClick(props.recipe, props.recipe.recipe_id);
          } },
        "Delete Recipe "
      )
    )
  )

  // <div className="col-md-4 text-center">
  //   <div className="col-md-12 mx-auto card">
  //   <a href={props.recipe.source_url} target="_blank">
  //     <h6>{props.recipe.title}</h6>
  //   </a>
  //   <img className="img-fluid" src={props.recipe.image_url}/>
  //          <button type="button" className="btn btn-danger" onClick={() => props.handleButtonClick(props.recipe, props.recipe.recipe_id)}>
  //            Delete Recipe</button>
  //   </div>
  // </div>

  ;
};

SavedRecipeEntry.propTypes = {
  recipe: React.PropTypes.object.isRequired
};

window.SavedRecipeEntry = SavedRecipeEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NhdmVkUmVjaXBlRW50cnkuanN4Il0sIm5hbWVzIjpbIlNhdmVkUmVjaXBlRW50cnkiLCJwcm9wcyIsInJlY2lwZSIsInNvdXJjZV91cmwiLCJ0aXRsZSIsImltYWdlX3VybCIsImhhbmRsZUJ1dHRvbkNsaWNrIiwicmVjaXBlX2lkIiwicHJvcFR5cGVzIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLG1CQUFtQixTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQ7QUFBQSxTQUVyQjtBQUFBO0FBQUEsTUFBSyxXQUFVLHNCQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxjQUFmO0FBQ0E7QUFBQTtBQUFBLFVBQUcsTUFBTUEsTUFBTUMsTUFBTixDQUFhQyxVQUF0QixFQUFrQyxRQUFPLFFBQXpDO0FBQ0U7QUFBQTtBQUFBO0FBQUtGLGdCQUFNQyxNQUFOLENBQWFFO0FBQWxCO0FBREYsT0FEQTtBQUlBLG1DQUFLLFdBQVUsV0FBZixFQUEyQixLQUFLSCxNQUFNQyxNQUFOLENBQWFHLFNBQTdDLEdBSkE7QUFLTztBQUFBO0FBQUEsVUFBUSxNQUFLLFFBQWIsRUFBc0IsV0FBVSxpQkFBaEMsRUFBa0QsU0FBUztBQUFBLG1CQUFNSixNQUFNSyxpQkFBTixDQUF3QkwsTUFBTUMsTUFBOUIsRUFBc0NELE1BQU1DLE1BQU4sQ0FBYUssU0FBbkQsQ0FBTjtBQUFBLFdBQTNEO0FBQUE7QUFBQTtBQUxQO0FBREY7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBdEJxQjtBQUFBLENBQXZCOztBQTJCQVAsaUJBQWlCUSxTQUFqQixHQUE2QjtBQUMzQk4sVUFBUU8sTUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDO0FBREosQ0FBN0I7O0FBSUFDLE9BQU9iLGdCQUFQLEdBQTBCQSxnQkFBMUIiLCJmaWxlIjoiU2F2ZWRSZWNpcGVFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTYXZlZFJlY2lwZUVudHJ5ID0gKHByb3BzKSA9PiAoXG5cbiAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCB0ZXh0LWNlbnRlclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBjYXJkXCI+XG4gICAgPGEgaHJlZj17cHJvcHMucmVjaXBlLnNvdXJjZV91cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgPGg2Pntwcm9wcy5yZWNpcGUudGl0bGV9PC9oNj5cbiAgICA8L2E+XG4gICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e3Byb3BzLnJlY2lwZS5pbWFnZV91cmx9Lz5cbiAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgXCIgb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlQnV0dG9uQ2xpY2socHJvcHMucmVjaXBlLCBwcm9wcy5yZWNpcGUucmVjaXBlX2lkKX0gPkRlbGV0ZSBSZWNpcGUgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG5cbiAgLy8gPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCB0ZXh0LWNlbnRlclwiPlxuICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIG14LWF1dG8gY2FyZFwiPlxuICAvLyAgIDxhIGhyZWY9e3Byb3BzLnJlY2lwZS5zb3VyY2VfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgLy8gICAgIDxoNj57cHJvcHMucmVjaXBlLnRpdGxlfTwvaDY+XG4gIC8vICAgPC9hPlxuICAvLyAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtwcm9wcy5yZWNpcGUuaW1hZ2VfdXJsfS8+XG4gIC8vICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlQnV0dG9uQ2xpY2socHJvcHMucmVjaXBlLCBwcm9wcy5yZWNpcGUucmVjaXBlX2lkKX0+XG4gIC8vICAgICAgICAgICAgRGVsZXRlIFJlY2lwZTwvYnV0dG9uPlxuICAvLyAgIDwvZGl2PlxuICAvLyA8L2Rpdj5cblxuKTtcblxuXG5TYXZlZFJlY2lwZUVudHJ5LnByb3BUeXBlcyA9IHtcbiAgcmVjaXBlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbndpbmRvdy5TYXZlZFJlY2lwZUVudHJ5ID0gU2F2ZWRSZWNpcGVFbnRyeTtcbiJdfQ==