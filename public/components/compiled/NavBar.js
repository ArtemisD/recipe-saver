"use strict";

var NavBar = function NavBar(props) {
  return React.createElement(
    "nav",
    { className: "navbar sticky-top navbar-toggleable-md navbar-light bg-faded" },
    React.createElement(
      "a",
      { className: "navbar-brand", href: "../index.html" },
      "Recipe Saver"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL05hdkJhci5qc3giXSwibmFtZXMiOlsiTmF2QmFyIiwicHJvcHMiLCJ1c2VySW5wdXQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUNYO0FBQUE7QUFBQSxNQUFLLFdBQVUsOERBQWY7QUFDRTtBQUFBO0FBQUEsUUFBRyxXQUFVLGNBQWIsRUFBNEIsTUFBSyxlQUFqQztBQUFBO0FBQUEsS0FERjtBQUVFLHdCQUFDLE1BQUQsSUFBUSxXQUFXQSxNQUFNQyxTQUF6QixHQUZGO0FBR0U7QUFBQTtBQUFBLFFBQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQSxVQUFHLFdBQVUsV0FBYixFQUF5QixNQUFLLGVBQTlCO0FBQUE7QUFBQTtBQURGO0FBSEYsR0FEVztBQUFBLENBQWI7O0FBVUFDLE9BQU9ILE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6Ik5hdkJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBOYXZCYXIgPSAocHJvcHMpID0+IChcbiAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgc3RpY2t5LXRvcCBuYXZiYXItdG9nZ2xlYWJsZS1tZCBuYXZiYXItbGlnaHQgYmctZmFkZWRcIj5cbiAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiLi4vaW5kZXguaHRtbFwiPlJlY2lwZSBTYXZlcjwvYT5cbiAgICA8U2VhcmNoIHVzZXJJbnB1dD17cHJvcHMudXNlcklucHV0fS8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cbiAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi10ZXJtIFwiIGhyZWY9XCIuLi9zYXZlZC5odG1sXCI+U2F2ZWQgUmVjaXBlczwvYT5cbiAgICA8L2Rpdj5cbiAgPC9uYXY+XG4pO1xuXG53aW5kb3cuTmF2QmFyID0gTmF2QmFyO1xuIl19