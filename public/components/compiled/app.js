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
      list: []
    };

    _this.debounceSearch = _.debounce(searchRecipes, 500);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      searchRecipes({
        key: FOOD2GO_API_KEY,
        q: 'apple pie'
      }, function (data) {
        _this2.setState({ list: data.recipes });
      });
    }
  }, {
    key: 'onSearch',
    value: function onSearch(userInput) {
      var _this3 = this;

      this.debounceSearch({
        key: FOOD2GO_API_KEY,
        q: userInput
      }, function (data) {
        _this3.setState({ list: data.recipes });
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

ReactDOM.render(React.createElement(App, null), document.body);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImxpc3QiLCJkZWJvdW5jZVNlYXJjaCIsIl8iLCJkZWJvdW5jZSIsInNlYXJjaFJlY2lwZXMiLCJrZXkiLCJGT09EMkdPX0FQSV9LRVkiLCJxIiwic2V0U3RhdGUiLCJkYXRhIiwicmVjaXBlcyIsInVzZXJJbnB1dCIsInJlY2lwZSIsIiQiLCJhamF4IiwidXJsIiwidHlwZSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiYmluZCIsImVycm9yIiwib25TZWFyY2giLCJoYW5kbGVCdXR0b25DbGljayIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImJvZHkiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTTtBQURLLEtBQWI7O0FBSUEsVUFBS0MsY0FBTCxHQUFzQkMsRUFBRUMsUUFBRixDQUFXQyxhQUFYLEVBQTBCLEdBQTFCLENBQXRCO0FBUGlCO0FBUWxCOzs7O3dDQUVtQjtBQUFBOztBQUNsQkEsb0JBQWM7QUFDWkMsYUFBS0MsZUFETztBQUVaQyxXQUFHO0FBRlMsT0FBZCxFQUdHLGdCQUFRO0FBQ1QsZUFBS0MsUUFBTCxDQUFjLEVBQUNSLE1BQU1TLEtBQUtDLE9BQVosRUFBZDtBQUNELE9BTEQ7QUFNSDs7OzZCQUVVQyxTLEVBQVc7QUFBQTs7QUFDbEIsV0FBS1YsY0FBTCxDQUFvQjtBQUNsQkksYUFBS0MsZUFEYTtBQUVsQkMsV0FBR0k7QUFGZSxPQUFwQixFQUdHLGdCQUFRO0FBQ1QsZUFBS0gsUUFBTCxDQUFjLEVBQUNSLE1BQU1TLEtBQUtDLE9BQVosRUFBZDtBQUNELE9BTEQ7QUFNRDs7O3NDQUVpQkUsTSxFQUFRO0FBQ3hCQyxRQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxVQURBO0FBRUxDLGNBQU0sTUFGRDtBQUdMUCxjQUFNRyxNQUhEO0FBSUxLLGlCQUFTLFlBQVc7QUFDbEJDLGtCQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDRCxTQUZRLENBRVBDLElBRk8sQ0FFRixJQUZFLENBSko7QUFPTEMsZUFBTyxpQkFBVztBQUNoQkgsa0JBQVFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNEO0FBVEksT0FBUDtBQVdEOzs7NkJBRVU7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLE1BQUQsSUFBUSxXQUFXLEtBQUtHLFFBQUwsQ0FBY0YsSUFBZCxDQUFtQixJQUFuQixDQUFuQixHQURGO0FBRUUsNEJBQUMsYUFBRCxJQUFlLE1BQU0sS0FBS3JCLEtBQUwsQ0FBV0MsSUFBaEMsRUFBc0MsbUJBQW1CLEtBQUt1QixpQkFBTCxDQUF1QkgsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBekQ7QUFGRixPQURGO0FBTUQ7Ozs7RUFsRGFJLE1BQU1DLFM7O0FBcUR0QkMsU0FBU0MsTUFBVCxDQUNFLG9CQUFDLEdBQUQsT0FERixFQUNVQyxTQUFTQyxJQURuQjs7QUFHQUMsT0FBT2pDLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaXN0OiBbXVxuICAgIH07XG5cbiAgICB0aGlzLmRlYm91bmNlU2VhcmNoID0gXy5kZWJvdW5jZShzZWFyY2hSZWNpcGVzLCA1MDApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc2VhcmNoUmVjaXBlcyh7XG4gICAgICBrZXk6IEZPT0QyR09fQVBJX0tFWSxcbiAgICAgIHE6ICdhcHBsZSBwaWUnXG4gICAgfSwgZGF0YSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtsaXN0OiBkYXRhLnJlY2lwZXN9KTtcbiAgICB9KTtcbn1cblxuICBvblNlYXJjaCh1c2VySW5wdXQpIHtcbiAgICB0aGlzLmRlYm91bmNlU2VhcmNoKHtcbiAgICAgIGtleTogRk9PRDJHT19BUElfS0VZLFxuICAgICAgcTogdXNlcklucHV0XG4gICAgfSwgZGF0YSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtsaXN0OiBkYXRhLnJlY2lwZXN9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUJ1dHRvbkNsaWNrKHJlY2lwZSkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvcmVjaXBlcycsXG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICBkYXRhOiByZWNpcGUsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NVQ0NFU1NGVUwgUE9TVCcpXG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmYWlsZWQgdG8gcG9zdCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxOYXZCYXIgdXNlcklucHV0PXt0aGlzLm9uU2VhcmNoLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8UmVjaXBlRW50cmllcyBsaXN0PXt0aGlzLnN0YXRlLmxpc3R9IGhhbmRsZUJ1dHRvbkNsaWNrPXt0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8QXBwLz4sIGRvY3VtZW50LmJvZHkpO1xuXG4gIHdpbmRvdy5BcHAgPSBBcHA7XG4iXX0=