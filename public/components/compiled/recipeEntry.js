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
        { href: props.entry.recipe.url, target: "_blank" },
        React.createElement(
          "h6",
          null,
          props.entry.recipe.label
        ),
        React.createElement("img", { className: "img-fluid", src: props.entry.recipe.image })
      ),
      React.createElement(
        "button",
        { type: "button", className: "btn btn-info ", onClick: function onClick() {
            return props.handleButtonClick(props.entry);
          } },
        "Save Recipe"
      )
    )
  );
};

RecipeEntry.propTypes = {
  entry: React.PropTypes.object.isRequired
};

window.RecipeEntry = RecipeEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1JlY2lwZUVudHJ5LmpzeCJdLCJuYW1lcyI6WyJSZWNpcGVFbnRyeSIsInByb3BzIiwiZW50cnkiLCJyZWNpcGUiLCJ1cmwiLCJsYWJlbCIsImltYWdlIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJwcm9wVHlwZXMiLCJSZWFjdCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsY0FBYyxTQUFkQSxXQUFjLENBQUNDLEtBQUQ7QUFBQSxTQUNoQjtBQUFBO0FBQUEsTUFBSyxXQUFVLHNCQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQSxVQUFHLE1BQU1BLE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsR0FBNUIsRUFBaUMsUUFBTyxRQUF4QztBQUNFO0FBQUE7QUFBQTtBQUFLSCxnQkFBTUMsS0FBTixDQUFZQyxNQUFaLENBQW1CRTtBQUF4QixTQURGO0FBRUUscUNBQUssV0FBVSxXQUFmLEVBQTJCLEtBQUtKLE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkcsS0FBbkQ7QUFGRixPQURGO0FBS0U7QUFBQTtBQUFBLFVBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsZUFBaEMsRUFBZ0QsU0FBUztBQUFBLG1CQUFNTCxNQUFNTSxpQkFBTixDQUF3Qk4sTUFBTUMsS0FBOUIsQ0FBTjtBQUFBLFdBQXpEO0FBQUE7QUFBQTtBQUxGO0FBREYsR0FEZ0I7QUFBQSxDQUFsQjs7QUFZQUYsWUFBWVEsU0FBWixHQUF3QjtBQUN0Qk4sU0FBT08sTUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDO0FBRFIsQ0FBeEI7O0FBSUFDLE9BQU9iLFdBQVAsR0FBcUJBLFdBQXJCIiwiZmlsZSI6IlJlY2lwZUVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlY2lwZUVudHJ5ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgdGV4dC1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBteC1hdXRvIGNhcmRcIj5cbiAgICAgIDxhIGhyZWY9e3Byb3BzLmVudHJ5LnJlY2lwZS51cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICA8aDY+e3Byb3BzLmVudHJ5LnJlY2lwZS5sYWJlbH08L2g2PlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17cHJvcHMuZW50cnkucmVjaXBlLmltYWdlfS8+XG4gICAgICA8L2E+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gXCIgb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlQnV0dG9uQ2xpY2socHJvcHMuZW50cnkpfSA+U2F2ZSBSZWNpcGU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5SZWNpcGVFbnRyeS5wcm9wVHlwZXMgPSB7XG4gIGVudHJ5OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbndpbmRvdy5SZWNpcGVFbnRyeSA9IFJlY2lwZUVudHJ5O1xuIl19