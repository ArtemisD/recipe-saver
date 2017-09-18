'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      list: [],
      saved: false
    };

    _this.debounceSearch = _.debounce(searchRecipes, 500);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      searchRecipes({
        api_key: API_KEY,
        api_id: API_ID,
        q: 'key lime'
      }, function (data) {
        _this2.setState({ list: data.hits });
      });
    }
  }, {
    key: 'onSearch',
    value: function onSearch(userInput) {
      var _this3 = this;

      this.debounceSearch({
        api_key: API_KEY,
        api_id: API_ID,
        q: userInput
      }, function (data) {
        _this3.setState({ list: data.hits });
      });
    }
  }, {
    key: 'handleButtonClick',
    value: function handleButtonClick(recipe) {
      $.ajax({
        url: '/recipes',
        type: 'POST',
        data: recipe,
        success: function () {
          console.log('SUCCESSFUL POST');
        }.bind(this),
        error: function error() {
          console.log('failed to post');
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(NavBar, { userInput: this.onSearch.bind(this) }),
        React.createElement(RecipeEntries, { list: this.state.list, handleButtonClick: this.handleButtonClick.bind(this) })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("main"));

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImxpc3QiLCJzYXZlZCIsImRlYm91bmNlU2VhcmNoIiwiXyIsImRlYm91bmNlIiwic2VhcmNoUmVjaXBlcyIsImFwaV9rZXkiLCJBUElfS0VZIiwiYXBpX2lkIiwiQVBJX0lEIiwicSIsInNldFN0YXRlIiwiZGF0YSIsImhpdHMiLCJ1c2VySW5wdXQiLCJyZWNpcGUiLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImJpbmQiLCJlcnJvciIsIm9uU2VhcmNoIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBREs7QUFFWEMsYUFBTztBQUZJLEtBQWI7O0FBS0EsVUFBS0MsY0FBTCxHQUFzQkMsRUFBRUMsUUFBRixDQUFXQyxhQUFYLEVBQTBCLEdBQTFCLENBQXRCO0FBUmlCO0FBU2xCOzs7O3dDQUVtQjtBQUFBOztBQUNsQkEsb0JBQWM7QUFDWkMsaUJBQVNDLE9BREc7QUFFWkMsZ0JBQVFDLE1BRkk7QUFHWkMsV0FBRztBQUhTLE9BQWQsRUFJRyxnQkFBUTtBQUNULGVBQUtDLFFBQUwsQ0FBYyxFQUFDWCxNQUFNWSxLQUFLQyxJQUFaLEVBQWQ7QUFDRCxPQU5EO0FBT0g7Ozs2QkFFVUMsUyxFQUFXO0FBQUE7O0FBQ2xCLFdBQUtaLGNBQUwsQ0FBb0I7QUFDbEJJLGlCQUFTQyxPQURTO0FBRWxCQyxnQkFBUUMsTUFGVTtBQUdsQkMsV0FBR0k7QUFIZSxPQUFwQixFQUlHLGdCQUFRO0FBQ1QsZUFBS0gsUUFBTCxDQUFjLEVBQUNYLE1BQU1ZLEtBQUtDLElBQVosRUFBZDtBQUNELE9BTkQ7QUFPRDs7O3NDQUVpQkUsTSxFQUFRO0FBQ3hCQyxRQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxVQURBO0FBRUxDLGNBQU0sTUFGRDtBQUdMUCxjQUFNRyxNQUhEO0FBSUxLLGlCQUFTLFlBQVc7QUFDbEJDLGtCQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDRCxTQUZRLENBRVBDLElBRk8sQ0FFRixJQUZFLENBSko7QUFPTEMsZUFBTyxpQkFBVztBQUNoQkgsa0JBQVFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNEO0FBVEksT0FBUDtBQVdEOzs7NkJBRVU7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLE1BQUQsSUFBUSxXQUFXLEtBQUtHLFFBQUwsQ0FBY0YsSUFBZCxDQUFtQixJQUFuQixDQUFuQixHQURGO0FBRUUsNEJBQUMsYUFBRCxJQUFlLE1BQU0sS0FBS3hCLEtBQUwsQ0FBV0MsSUFBaEMsRUFBc0MsbUJBQW1CLEtBQUswQixpQkFBTCxDQUF1QkgsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBekQ7QUFGRixPQURGO0FBTUQ7Ozs7RUFyRGFJLE1BQU1DLFM7O0FBd0R0QkMsU0FBU0MsTUFBVCxDQUNFLG9CQUFDLEdBQUQsT0FERixFQUNVQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBRFY7O0FBSUFDLE9BQU9wQyxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlzdDogW10sXG4gICAgICBzYXZlZDogZmFsc2VcbiAgICB9O1xuXG4gICAgdGhpcy5kZWJvdW5jZVNlYXJjaCA9IF8uZGVib3VuY2Uoc2VhcmNoUmVjaXBlcywgNTAwKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHNlYXJjaFJlY2lwZXMoe1xuICAgICAgYXBpX2tleTogQVBJX0tFWSxcbiAgICAgIGFwaV9pZDogQVBJX0lELFxuICAgICAgcTogJ2tleSBsaW1lJ1xuICAgIH0sIGRhdGEgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bGlzdDogZGF0YS5oaXRzfSk7XG4gICAgfSk7XG59XG5cbiAgb25TZWFyY2godXNlcklucHV0KSB7XG4gICAgdGhpcy5kZWJvdW5jZVNlYXJjaCh7XG4gICAgICBhcGlfa2V5OiBBUElfS0VZLFxuICAgICAgYXBpX2lkOiBBUElfSUQsXG4gICAgICBxOiB1c2VySW5wdXRcbiAgICB9LCBkYXRhID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xpc3Q6IGRhdGEuaGl0c30pO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQnV0dG9uQ2xpY2socmVjaXBlKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9yZWNpcGVzJyxcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHJlY2lwZSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnU1VDQ0VTU0ZVTCBQT1NUJyk7XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmYWlsZWQgdG8gcG9zdCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxOYXZCYXIgdXNlcklucHV0PXt0aGlzLm9uU2VhcmNoLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8UmVjaXBlRW50cmllcyBsaXN0PXt0aGlzLnN0YXRlLmxpc3R9IGhhbmRsZUJ1dHRvbkNsaWNrPXt0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKVxuICApO1xuXG4gIHdpbmRvdy5BcHAgPSBBcHA7XG4iXX0=