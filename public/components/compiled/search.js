"use strict";

var Search = function Search(props) {
  return React.createElement(
    "div",
    { className: "form-inline search" },
    React.createElement("input", { className: "form-control", type: "text", onChange: function onChange(event) {
        return props.userInput(event.target.value);
      }, placeholder: "Find a recipe" }),
    React.createElement(
      "button",
      { className: "btn btn-primary" },
      React.createElement(
        "span",
        null,
        "Search"
      )
    )
  );
};

window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJldmVudCIsInVzZXJJbnB1dCIsInRhcmdldCIsInZhbHVlIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FDWDtBQUFBO0FBQUEsTUFBSyxXQUFVLG9CQUFmO0FBQ0UsbUNBQU8sV0FBVSxjQUFqQixFQUFnQyxNQUFLLE1BQXJDLEVBQTRDLFVBQVUsa0JBQUNDLEtBQUQ7QUFBQSxlQUFXRCxNQUFNRSxTQUFOLENBQWdCRCxNQUFNRSxNQUFOLENBQWFDLEtBQTdCLENBQVg7QUFBQSxPQUF0RCxFQUFzRyxhQUFZLGVBQWxILEdBREY7QUFFRTtBQUFBO0FBQUEsUUFBUSxXQUFVLGlCQUFsQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUZGLEdBRFc7QUFBQSxDQUFiOztBQVNBQyxPQUFPTixNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2VhcmNoID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmUgc2VhcmNoXCI+XG4gICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhldmVudCkgPT4gcHJvcHMudXNlcklucHV0KGV2ZW50LnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiRmluZCBhIHJlY2lwZVwiLz5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgPHNwYW4+U2VhcmNoPC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbik7XG5cbndpbmRvdy5TZWFyY2ggPSBTZWFyY2g7XG4iXX0=