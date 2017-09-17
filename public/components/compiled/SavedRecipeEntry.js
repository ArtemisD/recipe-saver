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
        { href: props.entry.url, target: "_blank" },
        React.createElement(
          "h6",
          null,
          props.entry.label
        ),
        React.createElement("img", { className: "img-fluid", src: props.entry.image })
      ),
      React.createElement(
        "button",
        { type: "button", className: "btn btn-danger ", onClick: function onClick() {
            return props.handleButtonClick(props.entry, props.entry.recipe_id);
          } },
        "Delete Recipe "
      )
    )
  );
};

SavedRecipeEntry.propTypes = {
  entry: React.PropTypes.object.isRequired
};

window.SavedRecipeEntry = SavedRecipeEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NhdmVkUmVjaXBlRW50cnkuanN4Il0sIm5hbWVzIjpbIlNhdmVkUmVjaXBlRW50cnkiLCJwcm9wcyIsImVudHJ5IiwidXJsIiwibGFiZWwiLCJpbWFnZSIsImhhbmRsZUJ1dHRvbkNsaWNrIiwicmVjaXBlX2lkIiwicHJvcFR5cGVzIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLG1CQUFtQixTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQ7QUFBQSxTQUNyQjtBQUFBO0FBQUEsTUFBSyxXQUFVLHNCQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUcsTUFBTUEsTUFBTUMsS0FBTixDQUFZQyxHQUFyQixFQUEwQixRQUFPLFFBQWpDO0FBQ0U7QUFBQTtBQUFBO0FBQUtGLGdCQUFNQyxLQUFOLENBQVlFO0FBQWpCLFNBREY7QUFFRSxxQ0FBSyxXQUFVLFdBQWYsRUFBMkIsS0FBS0gsTUFBTUMsS0FBTixDQUFZRyxLQUE1QztBQUZGLE9BREY7QUFLRTtBQUFBO0FBQUEsVUFBUSxNQUFLLFFBQWIsRUFBc0IsV0FBVSxpQkFBaEMsRUFBa0QsU0FBUztBQUFBLG1CQUFNSixNQUFNSyxpQkFBTixDQUF3QkwsTUFBTUMsS0FBOUIsRUFBcUNELE1BQU1DLEtBQU4sQ0FBWUssU0FBakQsQ0FBTjtBQUFBLFdBQTNEO0FBQUE7QUFBQTtBQUxGO0FBREYsR0FEcUI7QUFBQSxDQUF2Qjs7QUFZQVAsaUJBQWlCUSxTQUFqQixHQUE2QjtBQUMzQk4sU0FBT08sTUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDO0FBREgsQ0FBN0I7O0FBSUFDLE9BQU9iLGdCQUFQLEdBQTBCQSxnQkFBMUIiLCJmaWxlIjoiU2F2ZWRSZWNpcGVFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTYXZlZFJlY2lwZUVudHJ5ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgdGV4dC1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gY2FyZFwiPlxuICAgICAgPGEgaHJlZj17cHJvcHMuZW50cnkudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgPGg2Pntwcm9wcy5lbnRyeS5sYWJlbH08L2g2PlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17cHJvcHMuZW50cnkuaW1hZ2V9Lz5cbiAgICAgIDwvYT5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIFwiIG9uQ2xpY2s9eygpID0+IHByb3BzLmhhbmRsZUJ1dHRvbkNsaWNrKHByb3BzLmVudHJ5LCBwcm9wcy5lbnRyeS5yZWNpcGVfaWQpfSA+RGVsZXRlIFJlY2lwZSA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5TYXZlZFJlY2lwZUVudHJ5LnByb3BUeXBlcyA9IHtcbiAgZW50cnk6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxud2luZG93LlNhdmVkUmVjaXBlRW50cnkgPSBTYXZlZFJlY2lwZUVudHJ5O1xuIl19