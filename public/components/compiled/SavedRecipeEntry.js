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
      "div",
      { onClick: function onClick() {
          return props.handleButtonClick(props.recipe, props.recipe.recipe_id);
        } },
      React.createElement(
        "button",
        { type: "button", className: "btn btn-danger" },
        "Delete Recipe"
      )
    )
  );
};

SavedRecipeEntry.propTypes = {
  recipe: React.PropTypes.object.isRequired
};

window.SavedRecipeEntry = SavedRecipeEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NhdmVkUmVjaXBlRW50cnkuanN4Il0sIm5hbWVzIjpbIlNhdmVkUmVjaXBlRW50cnkiLCJwcm9wcyIsInJlY2lwZSIsInNvdXJjZV91cmwiLCJ0aXRsZSIsImltYWdlX3VybCIsImhhbmRsZUJ1dHRvbkNsaWNrIiwicmVjaXBlX2lkIiwicHJvcFR5cGVzIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLG1CQUFtQixTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQ7QUFBQSxTQUNyQjtBQUFBO0FBQUEsTUFBSyxXQUFVLG1DQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUcsTUFBTUEsTUFBTUMsTUFBTixDQUFhQyxVQUF0QixFQUFrQyxRQUFPLFFBQXpDO0FBQ0U7QUFBQTtBQUFBO0FBQUtGLGNBQU1DLE1BQU4sQ0FBYUU7QUFBbEI7QUFERixLQURGO0FBSUUsaUNBQUssV0FBVSxXQUFmLEVBQTJCLEtBQUtILE1BQU1DLE1BQU4sQ0FBYUcsU0FBN0MsR0FKRjtBQUtFO0FBQUE7QUFBQSxRQUFLLFNBQVM7QUFBQSxpQkFBTUosTUFBTUssaUJBQU4sQ0FBd0JMLE1BQU1DLE1BQTlCLEVBQXNDRCxNQUFNQyxNQUFOLENBQWFLLFNBQW5ELENBQU47QUFBQSxTQUFkO0FBQ087QUFBQTtBQUFBLFVBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsZ0JBQWhDO0FBQUE7QUFBQTtBQURQO0FBTEYsR0FEcUI7QUFBQSxDQUF2Qjs7QUFlQVAsaUJBQWlCUSxTQUFqQixHQUE2QjtBQUMzQk4sVUFBUU8sTUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDO0FBREosQ0FBN0I7O0FBSUFDLE9BQU9iLGdCQUFQLEdBQTBCQSxnQkFBMUIiLCJmaWxlIjoiU2F2ZWRSZWNpcGVFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTYXZlZFJlY2lwZUVudHJ5ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbXgtYXV0byB0ZXh0LWNlbnRlciBjYXJkXCI+XG4gICAgPGEgaHJlZj17cHJvcHMucmVjaXBlLnNvdXJjZV91cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgPGg2Pntwcm9wcy5yZWNpcGUudGl0bGV9PC9oNj5cbiAgICA8L2E+XG4gICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e3Byb3BzLnJlY2lwZS5pbWFnZV91cmx9Lz5cbiAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHByb3BzLmhhbmRsZUJ1dHRvbkNsaWNrKHByb3BzLnJlY2lwZSwgcHJvcHMucmVjaXBlLnJlY2lwZV9pZCl9PlxuICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiPlxuICAgICAgICAgICAgIERlbGV0ZSBSZWNpcGU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbik7XG5cblxuU2F2ZWRSZWNpcGVFbnRyeS5wcm9wVHlwZXMgPSB7XG4gIHJlY2lwZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG53aW5kb3cuU2F2ZWRSZWNpcGVFbnRyeSA9IFNhdmVkUmVjaXBlRW50cnk7XG4iXX0=