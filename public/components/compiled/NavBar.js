"use strict";

var NavBar = function NavBar(props) {
  return React.createElement(
    "nav",
    { className: "navbar sticky-top navbar-toggleable-md navbar-light bg-faded" },
    React.createElement(
      "a",
      { className: "navbar-brand", href: "../index.html" },
      "Sukipes"
    ),
    React.createElement(Search, { userInput: props.userInput }),
    React.createElement(
      "div",
      { className: "navbar-nav ml-auto" },
      React.createElement(
        "a",
        { className: "nav-term ", href: "../saved.html" },
        "Saved Recipes"
      )
    )
  );
};

window.NavBar = NavBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL05hdkJhci5qc3giXSwibmFtZXMiOlsiTmF2QmFyIiwicHJvcHMiLCJ1c2VySW5wdXQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUNYO0FBQUE7QUFBQSxNQUFLLFdBQVUsOERBQWY7QUFDRTtBQUFBO0FBQUEsUUFBRyxXQUFVLGNBQWIsRUFBNEIsTUFBSyxlQUFqQztBQUFBO0FBQUEsS0FERjtBQUVFLHdCQUFDLE1BQUQsSUFBUSxXQUFXQSxNQUFNQyxTQUF6QixHQUZGO0FBR0U7QUFBQTtBQUFBLFFBQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQSxVQUFHLFdBQVUsV0FBYixFQUF5QixNQUFLLGVBQTlCO0FBQUE7QUFBQTtBQURGO0FBSEYsR0FEVztBQUFBLENBQWI7O0FBVUFDLE9BQU9ILE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6Ik5hdkJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBOYXZCYXIgPSAocHJvcHMpID0+IChcbiAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgc3RpY2t5LXRvcCBuYXZiYXItdG9nZ2xlYWJsZS1tZCBuYXZiYXItbGlnaHQgYmctZmFkZWRcIj5cbiAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiLi4vaW5kZXguaHRtbFwiPlN1a2lwZXM8L2E+XG4gICAgPFNlYXJjaCB1c2VySW5wdXQ9e3Byb3BzLnVzZXJJbnB1dH0vPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XG4gICAgICA8YSBjbGFzc05hbWU9XCJuYXYtdGVybSBcIiBocmVmPVwiLi4vc2F2ZWQuaHRtbFwiPlNhdmVkIFJlY2lwZXM8L2E+XG4gICAgPC9kaXY+XG4gIDwvbmF2PlxuKTtcblxud2luZG93Lk5hdkJhciA9IE5hdkJhcjtcbiJdfQ==