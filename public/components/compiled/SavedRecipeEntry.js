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
  );
};

SavedRecipeEntry.propTypes = {
  recipe: React.PropTypes.object.isRequired
};

window.SavedRecipeEntry = SavedRecipeEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NhdmVkUmVjaXBlRW50cnkuanN4Il0sIm5hbWVzIjpbIlNhdmVkUmVjaXBlRW50cnkiLCJwcm9wcyIsInJlY2lwZSIsInNvdXJjZV91cmwiLCJ0aXRsZSIsImltYWdlX3VybCIsImhhbmRsZUJ1dHRvbkNsaWNrIiwicmVjaXBlX2lkIiwicHJvcFR5cGVzIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLG1CQUFtQixTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQ7QUFBQSxTQUVyQjtBQUFBO0FBQUEsTUFBSyxXQUFVLHNCQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxjQUFmO0FBQ0E7QUFBQTtBQUFBLFVBQUcsTUFBTUEsTUFBTUMsTUFBTixDQUFhQyxVQUF0QixFQUFrQyxRQUFPLFFBQXpDO0FBQ0U7QUFBQTtBQUFBO0FBQUtGLGdCQUFNQyxNQUFOLENBQWFFO0FBQWxCO0FBREYsT0FEQTtBQUlBLG1DQUFLLFdBQVUsV0FBZixFQUEyQixLQUFLSCxNQUFNQyxNQUFOLENBQWFHLFNBQTdDLEdBSkE7QUFLTztBQUFBO0FBQUEsVUFBUSxNQUFLLFFBQWIsRUFBc0IsV0FBVSxpQkFBaEMsRUFBa0QsU0FBUztBQUFBLG1CQUFNSixNQUFNSyxpQkFBTixDQUF3QkwsTUFBTUMsTUFBOUIsRUFBc0NELE1BQU1DLE1BQU4sQ0FBYUssU0FBbkQsQ0FBTjtBQUFBLFdBQTNEO0FBQUE7QUFBQTtBQUxQO0FBREYsR0FGcUI7QUFBQSxDQUF2Qjs7QUFlQVAsaUJBQWlCUSxTQUFqQixHQUE2QjtBQUMzQk4sVUFBUU8sTUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDO0FBREosQ0FBN0I7O0FBSUFDLE9BQU9iLGdCQUFQLEdBQTBCQSxnQkFBMUIiLCJmaWxlIjoiU2F2ZWRSZWNpcGVFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTYXZlZFJlY2lwZUVudHJ5ID0gKHByb3BzKSA9PiAoXG5cbiAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCB0ZXh0LWNlbnRlclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBjYXJkXCI+XG4gICAgPGEgaHJlZj17cHJvcHMucmVjaXBlLnNvdXJjZV91cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgPGg2Pntwcm9wcy5yZWNpcGUudGl0bGV9PC9oNj5cbiAgICA8L2E+XG4gICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e3Byb3BzLnJlY2lwZS5pbWFnZV91cmx9Lz5cbiAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgXCIgb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlQnV0dG9uQ2xpY2socHJvcHMucmVjaXBlLCBwcm9wcy5yZWNpcGUucmVjaXBlX2lkKX0gPkRlbGV0ZSBSZWNpcGUgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4pO1xuXG5cblNhdmVkUmVjaXBlRW50cnkucHJvcFR5cGVzID0ge1xuICByZWNpcGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxud2luZG93LlNhdmVkUmVjaXBlRW50cnkgPSBTYXZlZFJlY2lwZUVudHJ5O1xuIl19