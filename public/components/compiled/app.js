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
      list: practiceData.recipes
    };

    return _this;
  }

  _createClass(App, [{
    key: 'onSearch',
    value: function onSearch(userInput) {
      var _this2 = this;

      searchRecipes({
        key: FOOD2GO_API_KEY,
        q: userInput
      }, function (data) {
        console.log(data);
        _this2.setState({ list: data.recipes });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImxpc3QiLCJwcmFjdGljZURhdGEiLCJyZWNpcGVzIiwidXNlcklucHV0Iiwic2VhcmNoUmVjaXBlcyIsImtleSIsIkZPT0QyR09fQVBJX0tFWSIsInEiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInNldFN0YXRlIiwicmVjaXBlIiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwic3VjY2VzcyIsImJpbmQiLCJlcnJvciIsIm9uU2VhcmNoIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJib2R5Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU1DLGFBQWFDO0FBRFIsS0FBYjs7QUFIaUI7QUFPbEI7Ozs7NkJBRVFDLFMsRUFBVztBQUFBOztBQUNsQkMsb0JBQWM7QUFDWkMsYUFBS0MsZUFETztBQUVaQyxXQUFHSjtBQUZTLE9BQWQsRUFHRyxnQkFBUTtBQUNUSyxnQkFBUUMsR0FBUixDQUFZQyxJQUFaO0FBQ0EsZUFBS0MsUUFBTCxDQUFjLEVBQUNYLE1BQU1VLEtBQUtSLE9BQVosRUFBZDtBQUNELE9BTkQ7QUFPRDs7O3NDQUVpQlUsTSxFQUFRO0FBQ3hCQyxRQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxVQURBO0FBRUxDLGNBQU0sTUFGRDtBQUdMTixjQUFNRSxNQUhEO0FBSUxLLGlCQUFTLFlBQVc7QUFDbEJULGtCQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDRCxTQUZRLENBRVBTLElBRk8sQ0FFRixJQUZFLENBSko7QUFPTEMsZUFBTyxpQkFBVztBQUNoQlgsa0JBQVFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNEO0FBVEksT0FBUDtBQVdEOzs7NkJBRVU7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLE1BQUQsSUFBUSxXQUFXLEtBQUtXLFFBQUwsQ0FBY0YsSUFBZCxDQUFtQixJQUFuQixDQUFuQixHQURGO0FBRUUsNEJBQUMsYUFBRCxJQUFlLE1BQU0sS0FBS25CLEtBQUwsQ0FBV0MsSUFBaEMsRUFBc0MsbUJBQW1CLEtBQUtxQixpQkFBTCxDQUF1QkgsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBekQ7QUFGRixPQURGO0FBTUQ7Ozs7RUF6Q2FJLE1BQU1DLFM7O0FBNEN0QkMsU0FBU0MsTUFBVCxDQUNFLG9CQUFDLEdBQUQsT0FERixFQUNVQyxTQUFTQyxJQURuQjs7QUFHQUMsT0FBTy9CLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaXN0OiBwcmFjdGljZURhdGEucmVjaXBlc1xuICAgIH07XG5cbiAgfVxuXG4gIG9uU2VhcmNoKHVzZXJJbnB1dCkge1xuICAgIHNlYXJjaFJlY2lwZXMoe1xuICAgICAga2V5OiBGT09EMkdPX0FQSV9LRVksXG4gICAgICBxOiB1c2VySW5wdXRcbiAgICB9LCBkYXRhID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICB0aGlzLnNldFN0YXRlKHtsaXN0OiBkYXRhLnJlY2lwZXN9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUJ1dHRvbkNsaWNrKHJlY2lwZSkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvcmVjaXBlcycsXG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICBkYXRhOiByZWNpcGUsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NVQ0NFU1NGVUwgUE9TVCcpXG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmYWlsZWQgdG8gcG9zdCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxOYXZCYXIgdXNlcklucHV0PXt0aGlzLm9uU2VhcmNoLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8UmVjaXBlRW50cmllcyBsaXN0PXt0aGlzLnN0YXRlLmxpc3R9IGhhbmRsZUJ1dHRvbkNsaWNrPXt0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8QXBwLz4sIGRvY3VtZW50LmJvZHkpO1xuXG4gIHdpbmRvdy5BcHAgPSBBcHA7XG4iXX0=