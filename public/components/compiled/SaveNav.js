"use strict";

var SaveNav = function SaveNav(props) {
  return React.createElement(
    "nav",
    { className: "navbar sticky-top navbar-toggleable-md navbar-light bg-faded" },
    React.createElement(
      "a",
      { className: "navbar-brand", href: "../index.html" },
      "Recipe Saver"
    ),
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

window.SaveNav = SaveNav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NhdmVOYXYuanN4Il0sIm5hbWVzIjpbIlNhdmVOYXYiLCJwcm9wcyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRDtBQUFBLFNBQ1o7QUFBQTtBQUFBLE1BQUssV0FBVSw4REFBZjtBQUNFO0FBQUE7QUFBQSxRQUFHLFdBQVUsY0FBYixFQUE0QixNQUFLLGVBQWpDO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQSxVQUFHLFdBQVUsV0FBYixFQUF5QixNQUFLLGVBQTlCO0FBQUE7QUFBQTtBQURGO0FBRkYsR0FEWTtBQUFBLENBQWQ7O0FBU0FDLE9BQU9GLE9BQVAsR0FBaUJBLE9BQWpCIiwiZmlsZSI6IlNhdmVOYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2F2ZU5hdiA9IChwcm9wcykgPT4gKFxuICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBzdGlja3ktdG9wIG5hdmJhci10b2dnbGVhYmxlLW1kIG5hdmJhci1saWdodCBiZy1mYWRlZFwiPlxuICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIuLi9pbmRleC5odG1sXCI+UmVjaXBlIFNhdmVyPC9hPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XG4gICAgICA8YSBjbGFzc05hbWU9XCJuYXYtdGVybSBcIiBocmVmPVwiLi4vc2F2ZWQuaHRtbFwiPlNhdmVkIFJlY2lwZXM8L2E+XG4gICAgPC9kaXY+XG4gIDwvbmF2PlxuKTtcblxud2luZG93LlNhdmVOYXYgPSBTYXZlTmF2O1xuIl19