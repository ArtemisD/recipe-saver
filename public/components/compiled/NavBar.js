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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL05hdkJhci5qc3giXSwibmFtZXMiOlsiTmF2QmFyIiwicHJvcHMiLCJ1c2VySW5wdXQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUNYO0FBQUE7QUFBQSxNQUFLLFdBQVUsOERBQWY7QUFDRTtBQUFBO0FBQUEsUUFBRyxXQUFVLGNBQWIsRUFBNEIsTUFBSyxlQUFqQztBQUFBO0FBQUEsS0FERjtBQUVFLHdCQUFDLE1BQUQsSUFBUSxXQUFXQSxNQUFNQyxTQUF6QixHQUZGO0FBR0k7QUFBQTtBQUFBLFFBQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQSxVQUFHLFdBQVUsV0FBYixFQUF5QixNQUFLLGVBQTlCO0FBQUE7QUFBQTtBQURGO0FBSEosR0FEVztBQUFBLENBQWI7O0FBVUFDLE9BQU9ILE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6Ik5hdkJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBOYXZCYXIgPSAocHJvcHMpID0+IChcbiAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgc3RpY2t5LXRvcCBuYXZiYXItdG9nZ2xlYWJsZS1tZCBuYXZiYXItbGlnaHQgYmctZmFkZWRcIj5cbiAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiLi4vaW5kZXguaHRtbFwiPlJlY2lwZSBTYXZlcjwvYT5cbiAgICA8U2VhcmNoIHVzZXJJbnB1dD17cHJvcHMudXNlcklucHV0fS8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0b1wiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtdGVybSBcIiBocmVmPVwiLi4vc2F2ZWQuaHRtbFwiPlNhdmVkIFJlY2lwZXM8L2E+XG4gICAgICA8L2Rpdj5cbiAgPC9uYXY+XG4pO1xuXG53aW5kb3cuTmF2QmFyID0gTmF2QmFyO1xuIl19