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
        key: FOOD2GO_API_KEY,
        q: ''
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

ReactDOM.render(React.createElement(App, null), document.getElementById("main"));

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImxpc3QiLCJzYXZlZCIsImRlYm91bmNlU2VhcmNoIiwiXyIsImRlYm91bmNlIiwic2VhcmNoUmVjaXBlcyIsImtleSIsIkZPT0QyR09fQVBJX0tFWSIsInEiLCJzZXRTdGF0ZSIsImRhdGEiLCJyZWNpcGVzIiwidXNlcklucHV0IiwicmVjaXBlIiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJiaW5kIiwiZXJyb3IiLCJvblNlYXJjaCIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQURLO0FBRVhDLGFBQU87QUFGSSxLQUFiOztBQUtBLFVBQUtDLGNBQUwsR0FBc0JDLEVBQUVDLFFBQUYsQ0FBV0MsYUFBWCxFQUEwQixHQUExQixDQUF0QjtBQVJpQjtBQVNsQjs7Ozt3Q0FFbUI7QUFBQTs7QUFDbEJBLG9CQUFjO0FBQ1pDLGFBQUtDLGVBRE87QUFFWkMsV0FBRztBQUZTLE9BQWQsRUFHRyxnQkFBUTtBQUNULGVBQUtDLFFBQUwsQ0FBYyxFQUFDVCxNQUFNVSxLQUFLQyxPQUFaLEVBQWQ7QUFDRCxPQUxEO0FBTUg7Ozs2QkFFVUMsUyxFQUFXO0FBQUE7O0FBQ2xCLFdBQUtWLGNBQUwsQ0FBb0I7QUFDbEJJLGFBQUtDLGVBRGE7QUFFbEJDLFdBQUdJO0FBRmUsT0FBcEIsRUFHRyxnQkFBUTtBQUNULGVBQUtILFFBQUwsQ0FBYyxFQUFDVCxNQUFNVSxLQUFLQyxPQUFaLEVBQWQ7QUFDRCxPQUxEO0FBTUQ7OztzQ0FFaUJFLE0sRUFBUTtBQUN4QkMsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssVUFEQTtBQUVMQyxjQUFNLE1BRkQ7QUFHTFAsY0FBTUcsTUFIRDtBQUlMSyxpQkFBUyxZQUFXO0FBQ2xCQyxrQkFBUUMsR0FBUixDQUFZLGlCQUFaO0FBQ0QsU0FGUSxDQUVQQyxJQUZPLENBRUYsSUFGRSxDQUpKO0FBT0xDLGVBQU8saUJBQVc7QUFDaEJILGtCQUFRQyxHQUFSLENBQVksZ0JBQVo7QUFDRDtBQVRJLE9BQVA7QUFXRDs7OzZCQUVVO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxNQUFELElBQVEsV0FBVyxLQUFLRyxRQUFMLENBQWNGLElBQWQsQ0FBbUIsSUFBbkIsQ0FBbkIsR0FERjtBQUVFLDRCQUFDLGFBQUQsSUFBZSxNQUFNLEtBQUt0QixLQUFMLENBQVdDLElBQWhDLEVBQXNDLG1CQUFtQixLQUFLd0IsaUJBQUwsQ0FBdUJILElBQXZCLENBQTRCLElBQTVCLENBQXpEO0FBRkYsT0FERjtBQU1EOzs7O0VBbkRhSSxNQUFNQyxTOztBQXNEdEJDLFNBQVNDLE1BQVQsQ0FDRSxvQkFBQyxHQUFELE9BREYsRUFDVUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQURWOztBQUlBQyxPQUFPbEMsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpc3Q6IFtdLFxuICAgICAgc2F2ZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMuZGVib3VuY2VTZWFyY2ggPSBfLmRlYm91bmNlKHNlYXJjaFJlY2lwZXMsIDUwMCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzZWFyY2hSZWNpcGVzKHtcbiAgICAgIGtleTogRk9PRDJHT19BUElfS0VZLFxuICAgICAgcTogJydcbiAgICB9LCBkYXRhID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xpc3Q6IGRhdGEucmVjaXBlc30pO1xuICAgIH0pO1xufVxuXG4gIG9uU2VhcmNoKHVzZXJJbnB1dCkge1xuICAgIHRoaXMuZGVib3VuY2VTZWFyY2goe1xuICAgICAga2V5OiBGT09EMkdPX0FQSV9LRVksXG4gICAgICBxOiB1c2VySW5wdXRcbiAgICB9LCBkYXRhID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xpc3Q6IGRhdGEucmVjaXBlc30pO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQnV0dG9uQ2xpY2socmVjaXBlKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9yZWNpcGVzJyxcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHJlY2lwZSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnU1VDQ0VTU0ZVTCBQT1NUJyk7XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmYWlsZWQgdG8gcG9zdCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxOYXZCYXIgdXNlcklucHV0PXt0aGlzLm9uU2VhcmNoLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8UmVjaXBlRW50cmllcyBsaXN0PXt0aGlzLnN0YXRlLmxpc3R9IGhhbmRsZUJ1dHRvbkNsaWNrPXt0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKVxuICApO1xuXG4gIHdpbmRvdy5BcHAgPSBBcHA7XG4iXX0=