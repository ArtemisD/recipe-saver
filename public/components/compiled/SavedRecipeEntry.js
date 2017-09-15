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
        ),
        React.createElement("img", { className: "img-fluid", src: props.recipe.image_url })
      ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NhdmVkUmVjaXBlRW50cnkuanN4Il0sIm5hbWVzIjpbIlNhdmVkUmVjaXBlRW50cnkiLCJwcm9wcyIsInJlY2lwZSIsInNvdXJjZV91cmwiLCJ0aXRsZSIsImltYWdlX3VybCIsImhhbmRsZUJ1dHRvbkNsaWNrIiwicmVjaXBlX2lkIiwicHJvcFR5cGVzIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLG1CQUFtQixTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQ7QUFBQSxTQUNyQjtBQUFBO0FBQUEsTUFBSyxXQUFVLHNCQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUcsTUFBTUEsTUFBTUMsTUFBTixDQUFhQyxVQUF0QixFQUFrQyxRQUFPLFFBQXpDO0FBQ0U7QUFBQTtBQUFBO0FBQUtGLGdCQUFNQyxNQUFOLENBQWFFO0FBQWxCLFNBREY7QUFFRSxxQ0FBSyxXQUFVLFdBQWYsRUFBMkIsS0FBS0gsTUFBTUMsTUFBTixDQUFhRyxTQUE3QztBQUZGLE9BREY7QUFLRTtBQUFBO0FBQUEsVUFBUSxNQUFLLFFBQWIsRUFBc0IsV0FBVSxpQkFBaEMsRUFBa0QsU0FBUztBQUFBLG1CQUFNSixNQUFNSyxpQkFBTixDQUF3QkwsTUFBTUMsTUFBOUIsRUFBc0NELE1BQU1DLE1BQU4sQ0FBYUssU0FBbkQsQ0FBTjtBQUFBLFdBQTNEO0FBQUE7QUFBQTtBQUxGO0FBREYsR0FEcUI7QUFBQSxDQUF2Qjs7QUFZQVAsaUJBQWlCUSxTQUFqQixHQUE2QjtBQUMzQk4sVUFBUU8sTUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDO0FBREosQ0FBN0I7O0FBSUFDLE9BQU9iLGdCQUFQLEdBQTBCQSxnQkFBMUIiLCJmaWxlIjoiU2F2ZWRSZWNpcGVFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTYXZlZFJlY2lwZUVudHJ5ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgdGV4dC1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gY2FyZFwiPlxuICAgICAgPGEgaHJlZj17cHJvcHMucmVjaXBlLnNvdXJjZV91cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICA8aDY+e3Byb3BzLnJlY2lwZS50aXRsZX08L2g2PlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17cHJvcHMucmVjaXBlLmltYWdlX3VybH0vPlxuICAgICAgPC9hPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgXCIgb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlQnV0dG9uQ2xpY2socHJvcHMucmVjaXBlLCBwcm9wcy5yZWNpcGUucmVjaXBlX2lkKX0gPkRlbGV0ZSBSZWNpcGUgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuU2F2ZWRSZWNpcGVFbnRyeS5wcm9wVHlwZXMgPSB7XG4gIHJlY2lwZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG53aW5kb3cuU2F2ZWRSZWNpcGVFbnRyeSA9IFNhdmVkUmVjaXBlRW50cnk7XG4iXX0=