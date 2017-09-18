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
        api_key: process.env.API_KEY,
        api_id: process.env.API_ID,
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
        api_key: EDAMAM_API_KEY,
        api_id: EDAMAM_API_ID,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImxpc3QiLCJzYXZlZCIsImRlYm91bmNlU2VhcmNoIiwiXyIsImRlYm91bmNlIiwic2VhcmNoUmVjaXBlcyIsImFwaV9rZXkiLCJwcm9jZXNzIiwiZW52IiwiQVBJX0tFWSIsImFwaV9pZCIsIkFQSV9JRCIsInEiLCJzZXRTdGF0ZSIsImRhdGEiLCJoaXRzIiwidXNlcklucHV0IiwiRURBTUFNX0FQSV9LRVkiLCJFREFNQU1fQVBJX0lEIiwicmVjaXBlIiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJiaW5kIiwiZXJyb3IiLCJvblNlYXJjaCIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQURLO0FBRVhDLGFBQU87QUFGSSxLQUFiOztBQUtBLFVBQUtDLGNBQUwsR0FBc0JDLEVBQUVDLFFBQUYsQ0FBV0MsYUFBWCxFQUEwQixHQUExQixDQUF0QjtBQVJpQjtBQVNsQjs7Ozt3Q0FFbUI7QUFBQTs7QUFDbEJBLG9CQUFjO0FBQ1pDLGlCQUFTQyxRQUFRQyxHQUFSLENBQVlDLE9BRFQ7QUFFWkMsZ0JBQVFILFFBQVFDLEdBQVIsQ0FBWUcsTUFGUjtBQUdaQyxXQUFHO0FBSFMsT0FBZCxFQUlHLGdCQUFRO0FBQ1QsZUFBS0MsUUFBTCxDQUFjLEVBQUNiLE1BQU1jLEtBQUtDLElBQVosRUFBZDtBQUNELE9BTkQ7QUFPSDs7OzZCQUVVQyxTLEVBQVc7QUFBQTs7QUFDbEIsV0FBS2QsY0FBTCxDQUFvQjtBQUNsQkksaUJBQVNXLGNBRFM7QUFFbEJQLGdCQUFRUSxhQUZVO0FBR2xCTixXQUFHSTtBQUhlLE9BQXBCLEVBSUcsZ0JBQVE7QUFDVCxlQUFLSCxRQUFMLENBQWMsRUFBQ2IsTUFBTWMsS0FBS0MsSUFBWixFQUFkO0FBQ0QsT0FORDtBQU9EOzs7c0NBRWlCSSxNLEVBQVE7QUFDeEJDLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLFVBREE7QUFFTEMsY0FBTSxNQUZEO0FBR0xULGNBQU1LLE1BSEQ7QUFJTEssaUJBQVMsWUFBVztBQUNsQkMsa0JBQVFDLEdBQVIsQ0FBWSxpQkFBWjtBQUNELFNBRlEsQ0FFUEMsSUFGTyxDQUVGLElBRkUsQ0FKSjtBQU9MQyxlQUFPLGlCQUFXO0FBQ2hCSCxrQkFBUUMsR0FBUixDQUFZLGdCQUFaO0FBQ0Q7QUFUSSxPQUFQO0FBV0Q7Ozs2QkFFVTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsTUFBRCxJQUFRLFdBQVcsS0FBS0csUUFBTCxDQUFjRixJQUFkLENBQW1CLElBQW5CLENBQW5CLEdBREY7QUFFRSw0QkFBQyxhQUFELElBQWUsTUFBTSxLQUFLNUIsS0FBTCxDQUFXQyxJQUFoQyxFQUFzQyxtQkFBbUIsS0FBSzhCLGlCQUFMLENBQXVCSCxJQUF2QixDQUE0QixJQUE1QixDQUF6RDtBQUZGLE9BREY7QUFNRDs7OztFQXJEYUksTUFBTUMsUzs7QUF3RHRCQyxTQUFTQyxNQUFULENBQ0Usb0JBQUMsR0FBRCxPQURGLEVBQ1VDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FEVjs7QUFJQUMsT0FBT3hDLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaXN0OiBbXSxcbiAgICAgIHNhdmVkOiBmYWxzZVxuICAgIH07XG5cbiAgICB0aGlzLmRlYm91bmNlU2VhcmNoID0gXy5kZWJvdW5jZShzZWFyY2hSZWNpcGVzLCA1MDApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc2VhcmNoUmVjaXBlcyh7XG4gICAgICBhcGlfa2V5OiBwcm9jZXNzLmVudi5BUElfS0VZLFxuICAgICAgYXBpX2lkOiBwcm9jZXNzLmVudi5BUElfSUQsXG4gICAgICBxOiAna2V5IGxpbWUnXG4gICAgfSwgZGF0YSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtsaXN0OiBkYXRhLmhpdHN9KTtcbiAgICB9KTtcbn1cblxuICBvblNlYXJjaCh1c2VySW5wdXQpIHtcbiAgICB0aGlzLmRlYm91bmNlU2VhcmNoKHtcbiAgICAgIGFwaV9rZXk6IEVEQU1BTV9BUElfS0VZLFxuICAgICAgYXBpX2lkOiBFREFNQU1fQVBJX0lELFxuICAgICAgcTogdXNlcklucHV0XG4gICAgfSwgZGF0YSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtsaXN0OiBkYXRhLmhpdHN9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUJ1dHRvbkNsaWNrKHJlY2lwZSkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvcmVjaXBlcycsXG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICBkYXRhOiByZWNpcGUsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NVQ0NFU1NGVUwgUE9TVCcpO1xuICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZmFpbGVkIHRvIHBvc3QnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TmF2QmFyIHVzZXJJbnB1dD17dGhpcy5vblNlYXJjaC5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPFJlY2lwZUVudHJpZXMgbGlzdD17dGhpcy5zdGF0ZS5saXN0fSBoYW5kbGVCdXR0b25DbGljaz17dGhpcy5oYW5kbGVCdXR0b25DbGljay5iaW5kKHRoaXMpfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIilcbiAgKTtcblxuICB3aW5kb3cuQXBwID0gQXBwO1xuIl19