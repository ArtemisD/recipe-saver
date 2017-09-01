"use strict";

var SavedRecipeEntry = function SavedRecipeEntry(props) {
  return React.createElement(
    "div",
    { className: "col-md-4 mx-auto text-center card" },
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
      { type: "button", className: "btn btn-danger", onClick: function onClick() {
          return props.handleButtonClick(props.recipe, props.recipe.recipe_id);
        } },
      "Delete Recipe"
    )
  );
};

SavedRecipeEntry.propTypes = {
  recipe: React.PropTypes.object.isRequired
};

window.SavedRecipeEntry = SavedRecipeEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NhdmVkUmVjaXBlRW50cnkuanN4Il0sIm5hbWVzIjpbIlNhdmVkUmVjaXBlRW50cnkiLCJwcm9wcyIsInJlY2lwZSIsInNvdXJjZV91cmwiLCJ0aXRsZSIsImltYWdlX3VybCIsImhhbmRsZUJ1dHRvbkNsaWNrIiwicmVjaXBlX2lkIiwicHJvcFR5cGVzIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLG1CQUFtQixTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQ7QUFBQSxTQUNyQjtBQUFBO0FBQUEsTUFBSyxXQUFVLG1DQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUcsTUFBTUEsTUFBTUMsTUFBTixDQUFhQyxVQUF0QixFQUFrQyxRQUFPLFFBQXpDO0FBQ0U7QUFBQTtBQUFBO0FBQUtGLGNBQU1DLE1BQU4sQ0FBYUU7QUFBbEI7QUFERixLQURGO0FBSUUsaUNBQUssV0FBVSxXQUFmLEVBQTJCLEtBQUtILE1BQU1DLE1BQU4sQ0FBYUcsU0FBN0MsR0FKRjtBQUtTO0FBQUE7QUFBQSxRQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLGdCQUFoQyxFQUFpRCxTQUFTO0FBQUEsaUJBQU1KLE1BQU1LLGlCQUFOLENBQXdCTCxNQUFNQyxNQUE5QixFQUFzQ0QsTUFBTUMsTUFBTixDQUFhSyxTQUFuRCxDQUFOO0FBQUEsU0FBMUQ7QUFBQTtBQUFBO0FBTFQsR0FEcUI7QUFBQSxDQUF2Qjs7QUFhQVAsaUJBQWlCUSxTQUFqQixHQUE2QjtBQUMzQk4sVUFBUU8sTUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDO0FBREosQ0FBN0I7O0FBSUFDLE9BQU9iLGdCQUFQLEdBQTBCQSxnQkFBMUIiLCJmaWxlIjoiU2F2ZWRSZWNpcGVFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTYXZlZFJlY2lwZUVudHJ5ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbXgtYXV0byB0ZXh0LWNlbnRlciBjYXJkXCI+XG4gICAgPGEgaHJlZj17cHJvcHMucmVjaXBlLnNvdXJjZV91cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgPGg2Pntwcm9wcy5yZWNpcGUudGl0bGV9PC9oNj5cbiAgICA8L2E+XG4gICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e3Byb3BzLnJlY2lwZS5pbWFnZV91cmx9Lz5cbiAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5oYW5kbGVCdXR0b25DbGljayhwcm9wcy5yZWNpcGUsIHByb3BzLnJlY2lwZS5yZWNpcGVfaWQpfT5cbiAgICAgICAgICAgICBEZWxldGUgUmVjaXBlPC9idXR0b24+XG4gIDwvZGl2PlxuXG4pO1xuXG5cblNhdmVkUmVjaXBlRW50cnkucHJvcFR5cGVzID0ge1xuICByZWNpcGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxud2luZG93LlNhdmVkUmVjaXBlRW50cnkgPSBTYXZlZFJlY2lwZUVudHJ5O1xuIl19