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
        ),
        React.createElement("img", { className: "img-fluid", src: props.recipe.image_url })
      ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1JlY2lwZUVudHJ5LmpzeCJdLCJuYW1lcyI6WyJSZWNpcGVFbnRyeSIsInByb3BzIiwicmVjaXBlIiwic291cmNlX3VybCIsInRpdGxlIiwiaW1hZ2VfdXJsIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJwcm9wVHlwZXMiLCJSZWFjdCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsY0FBYyxTQUFkQSxXQUFjLENBQUNDLEtBQUQ7QUFBQSxTQUNoQjtBQUFBO0FBQUEsTUFBSyxXQUFVLHNCQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQSxVQUFHLE1BQU1BLE1BQU1DLE1BQU4sQ0FBYUMsVUFBdEIsRUFBa0MsUUFBTyxRQUF6QztBQUNFO0FBQUE7QUFBQTtBQUFLRixnQkFBTUMsTUFBTixDQUFhRTtBQUFsQixTQURGO0FBRUUscUNBQUssV0FBVSxXQUFmLEVBQTJCLEtBQUtILE1BQU1DLE1BQU4sQ0FBYUcsU0FBN0M7QUFGRixPQURGO0FBS0U7QUFBQTtBQUFBLFVBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsZUFBaEMsRUFBZ0QsU0FBUztBQUFBLG1CQUFNSixNQUFNSyxpQkFBTixDQUF3QkwsTUFBTUMsTUFBOUIsQ0FBTjtBQUFBLFdBQXpEO0FBQUE7QUFBQTtBQUxGO0FBREYsR0FEZ0I7QUFBQSxDQUFsQjs7QUFZQUYsWUFBWU8sU0FBWixHQUF3QjtBQUN0QkwsVUFBUU0sTUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDO0FBRFQsQ0FBeEI7O0FBSUFDLE9BQU9aLFdBQVAsR0FBcUJBLFdBQXJCIiwiZmlsZSI6IlJlY2lwZUVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlY2lwZUVudHJ5ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgdGV4dC1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBteC1hdXRvIGNhcmRcIj5cbiAgICAgIDxhIGhyZWY9e3Byb3BzLnJlY2lwZS5zb3VyY2VfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgPGg2Pntwcm9wcy5yZWNpcGUudGl0bGV9PC9oNj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e3Byb3BzLnJlY2lwZS5pbWFnZV91cmx9Lz5cbiAgICAgIDwvYT5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5oYW5kbGVCdXR0b25DbGljayhwcm9wcy5yZWNpcGUpfSA+U2F2ZSBSZWNpcGU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5SZWNpcGVFbnRyeS5wcm9wVHlwZXMgPSB7XG4gIHJlY2lwZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG53aW5kb3cuUmVjaXBlRW50cnkgPSBSZWNpcGVFbnRyeTtcbiJdfQ==