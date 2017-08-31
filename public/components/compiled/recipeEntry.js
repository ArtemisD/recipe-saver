"use strict";

var RecipeEntry = function RecipeEntry(props) {
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
          return props.handleButtonClick(props.recipe);
        } },
      React.createElement(
        "button",
        { type: "button", className: "btn btn-info" },
        "Save Recipe"
      )
    )
  );
};

RecipeEntry.propTypes = {
  recipe: React.PropTypes.object.isRequired
};

window.RecipeEntry = RecipeEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1JlY2lwZUVudHJ5LmpzeCJdLCJuYW1lcyI6WyJSZWNpcGVFbnRyeSIsInByb3BzIiwicmVjaXBlIiwic291cmNlX3VybCIsInRpdGxlIiwiaW1hZ2VfdXJsIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJwcm9wVHlwZXMiLCJSZWFjdCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsY0FBYyxTQUFkQSxXQUFjLENBQUNDLEtBQUQ7QUFBQSxTQUNoQjtBQUFBO0FBQUEsTUFBSyxXQUFVLG1DQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUcsTUFBTUEsTUFBTUMsTUFBTixDQUFhQyxVQUF0QixFQUFrQyxRQUFPLFFBQXpDO0FBQ0U7QUFBQTtBQUFBO0FBQUtGLGNBQU1DLE1BQU4sQ0FBYUU7QUFBbEI7QUFERixLQURGO0FBSUUsaUNBQUssV0FBVSxXQUFmLEVBQTJCLEtBQUtILE1BQU1DLE1BQU4sQ0FBYUcsU0FBN0MsR0FKRjtBQUtFO0FBQUE7QUFBQSxRQUFLLFNBQVM7QUFBQSxpQkFBTUosTUFBTUssaUJBQU4sQ0FBd0JMLE1BQU1DLE1BQTlCLENBQU47QUFBQSxTQUFkO0FBQ087QUFBQTtBQUFBLFVBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsY0FBaEM7QUFBQTtBQUFBO0FBRFA7QUFMRixHQURnQjtBQUFBLENBQWxCOztBQWNBRixZQUFZTyxTQUFaLEdBQXdCO0FBQ3RCTCxVQUFRTSxNQUFNQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFEVCxDQUF4Qjs7QUFJQUMsT0FBT1osV0FBUCxHQUFxQkEsV0FBckIiLCJmaWxlIjoiUmVjaXBlRW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVjaXBlRW50cnkgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBteC1hdXRvIHRleHQtY2VudGVyIGNhcmRcIj5cbiAgICA8YSBocmVmPXtwcm9wcy5yZWNpcGUuc291cmNlX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICA8aDY+e3Byb3BzLnJlY2lwZS50aXRsZX08L2g2PlxuICAgIDwvYT5cbiAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17cHJvcHMucmVjaXBlLmltYWdlX3VybH0vPlxuICAgIDxkaXYgb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlQnV0dG9uQ2xpY2socHJvcHMucmVjaXBlKX0+XG4gICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPlNhdmUgUmVjaXBlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4pO1xuXG5cblJlY2lwZUVudHJ5LnByb3BUeXBlcyA9IHtcbiAgcmVjaXBlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbndpbmRvdy5SZWNpcGVFbnRyeSA9IFJlY2lwZUVudHJ5O1xuIl19