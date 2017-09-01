"use strict";

var RecipeEntry = function RecipeEntry(props) {
  return React.createElement(
    "div",
    { className: "col-md-4 text-center" },
    React.createElement(
      "div",
      { className: "col-md-12 mx-auto card" },
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
        { type: "button", className: "btn btn-info ", onClick: function onClick() {
            return props.handleButtonClick(props.recipe);
          } },
        "Save Recipe"
      )
    )
  );
};

RecipeEntry.propTypes = {
  recipe: React.PropTypes.object.isRequired
};

window.RecipeEntry = RecipeEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1JlY2lwZUVudHJ5LmpzeCJdLCJuYW1lcyI6WyJSZWNpcGVFbnRyeSIsInByb3BzIiwicmVjaXBlIiwic291cmNlX3VybCIsInRpdGxlIiwiaW1hZ2VfdXJsIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJwcm9wVHlwZXMiLCJSZWFjdCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsY0FBYyxTQUFkQSxXQUFjLENBQUNDLEtBQUQ7QUFBQSxTQUNoQjtBQUFBO0FBQUEsTUFBSyxXQUFVLHNCQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSx3QkFBZjtBQUNBO0FBQUE7QUFBQSxVQUFHLE1BQU1BLE1BQU1DLE1BQU4sQ0FBYUMsVUFBdEIsRUFBa0MsUUFBTyxRQUF6QztBQUNFO0FBQUE7QUFBQTtBQUFLRixnQkFBTUMsTUFBTixDQUFhRTtBQUFsQjtBQURGLE9BREE7QUFJQSxtQ0FBSyxXQUFVLFdBQWYsRUFBMkIsS0FBS0gsTUFBTUMsTUFBTixDQUFhRyxTQUE3QyxHQUpBO0FBS087QUFBQTtBQUFBLFVBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsZUFBaEMsRUFBZ0QsU0FBUztBQUFBLG1CQUFNSixNQUFNSyxpQkFBTixDQUF3QkwsTUFBTUMsTUFBOUIsQ0FBTjtBQUFBLFdBQXpEO0FBQUE7QUFBQTtBQUxQO0FBREYsR0FEZ0I7QUFBQSxDQUFsQjs7QUFjQUYsWUFBWU8sU0FBWixHQUF3QjtBQUN0QkwsVUFBUU0sTUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDO0FBRFQsQ0FBeEI7O0FBSUFDLE9BQU9aLFdBQVAsR0FBcUJBLFdBQXJCIiwiZmlsZSI6IlJlY2lwZUVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlY2lwZUVudHJ5ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgdGV4dC1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBteC1hdXRvIGNhcmRcIj5cbiAgICA8YSBocmVmPXtwcm9wcy5yZWNpcGUuc291cmNlX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICA8aDY+e3Byb3BzLnJlY2lwZS50aXRsZX08L2g2PlxuICAgIDwvYT5cbiAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17cHJvcHMucmVjaXBlLmltYWdlX3VybH0vPlxuICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gXCIgb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlQnV0dG9uQ2xpY2socHJvcHMucmVjaXBlKX0gPlNhdmUgUmVjaXBlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4pO1xuXG5cblJlY2lwZUVudHJ5LnByb3BUeXBlcyA9IHtcbiAgcmVjaXBlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbndpbmRvdy5SZWNpcGVFbnRyeSA9IFJlY2lwZUVudHJ5O1xuIl19