'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SavedApp = function (_React$Component) {
  _inherits(SavedApp, _React$Component);

  function SavedApp(props) {
    _classCallCheck(this, SavedApp);

    var _this = _possibleConstructorReturn(this, (SavedApp.__proto__ || Object.getPrototypeOf(SavedApp)).call(this, props));

    _this.state = {
      list: []
    };

    return _this;
  }

  _createClass(SavedApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $.ajax({
        type: 'GET',
        url: '/recipes',
        success: function (data) {
          this.setState({ list: data });
        }.bind(this)
      });
    }
  }, {
    key: 'handleButtonClick',
    value: function handleButtonClick(recipe, recipe_id) {
      $.ajax({
        url: '/recipes/' + recipe_id,
        type: 'DELETE',
        success: function (data) {
          $.ajax({
            type: 'GET',
            url: '/recipes',
            success: function (data) {
              this.setState({ list: data });
            }.bind(this)
          });
        }.bind(this),
        error: function error() {
          console.log('failed to DELETE');
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(SaveNav, null),
        React.createElement(SavedRecipeEntries, { list: this.state.list, handleButtonClick: this.handleButtonClick.bind(this) })
      );
    }
  }]);

  return SavedApp;
}(React.Component);

ReactDOM.render(React.createElement(SavedApp, null), document.getElementById("SavedApp"));

window.SavedApp = SavedApp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NhdmVkQXBwLmpzeCJdLCJuYW1lcyI6WyJTYXZlZEFwcCIsInByb3BzIiwic3RhdGUiLCJsaXN0IiwiJCIsImFqYXgiLCJ0eXBlIiwidXJsIiwic3VjY2VzcyIsImRhdGEiLCJzZXRTdGF0ZSIsImJpbmQiLCJyZWNpcGUiLCJyZWNpcGVfaWQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVCdXR0b25DbGljayIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFE7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNO0FBREssS0FBYjs7QUFIaUI7QUFPbEI7Ozs7d0NBRW1CO0FBQ2xCQyxRQUFFQyxJQUFGLENBQU87QUFDTEMsY0FBTSxLQUREO0FBRUxDLGFBQUssVUFGQTtBQUdMQyxpQkFBUyxVQUFTQyxJQUFULEVBQWU7QUFDdEIsZUFBS0MsUUFBTCxDQUFjLEVBQUNQLE1BQU1NLElBQVAsRUFBZDtBQUNELFNBRlEsQ0FFUEUsSUFGTyxDQUVGLElBRkU7QUFISixPQUFQO0FBT0Q7OztzQ0FFaUJDLE0sRUFBUUMsUyxFQUFXO0FBQ25DVCxRQUFFQyxJQUFGLENBQU87QUFDTEUsYUFBSyxjQUFjTSxTQURkO0FBRUxQLGNBQU0sUUFGRDtBQUdMRSxpQkFBUyxVQUFTQyxJQUFULEVBQWU7QUFDdEJMLFlBQUVDLElBQUYsQ0FBTztBQUNMQyxrQkFBTSxLQUREO0FBRUxDLGlCQUFLLFVBRkE7QUFHTEMscUJBQVMsVUFBU0MsSUFBVCxFQUFlO0FBQ3RCLG1CQUFLQyxRQUFMLENBQWMsRUFBQ1AsTUFBTU0sSUFBUCxFQUFkO0FBQ0QsYUFGUSxDQUVQRSxJQUZPLENBRUYsSUFGRTtBQUhKLFdBQVA7QUFPRCxTQVJRLENBUVBBLElBUk8sQ0FRRixJQVJFLENBSEo7QUFZTEcsZUFBTyxpQkFBVztBQUNoQkMsa0JBQVFDLEdBQVIsQ0FBWSxrQkFBWjtBQUNEO0FBZEksT0FBUDtBQWdCRDs7OzZCQUVVO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxPQUFELE9BREY7QUFFRSw0QkFBQyxrQkFBRCxJQUFvQixNQUFNLEtBQUtkLEtBQUwsQ0FBV0MsSUFBckMsRUFBMkMsbUJBQW1CLEtBQUtjLGlCQUFMLENBQXVCTixJQUF2QixDQUE0QixJQUE1QixDQUE5RDtBQUZGLE9BREY7QUFNRDs7OztFQTlDa0JPLE1BQU1DLFM7O0FBaUQzQkMsU0FBU0MsTUFBVCxDQUNFLG9CQUFDLFFBQUQsT0FERixFQUNlQyxTQUFTQyxjQUFULENBQXdCLFVBQXhCLENBRGY7O0FBR0FDLE9BQU94QixRQUFQLEdBQWtCQSxRQUFsQiIsImZpbGUiOiJTYXZlZEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNhdmVkQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlzdDogW11cbiAgICB9O1xuXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICB1cmw6ICcvcmVjaXBlcycsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xpc3Q6IGRhdGF9KTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQnV0dG9uQ2xpY2socmVjaXBlLCByZWNpcGVfaWQpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL3JlY2lwZXMvJyArIHJlY2lwZV9pZCxcbiAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICAgIHVybDogJy9yZWNpcGVzJyxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsaXN0OiBkYXRhfSk7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgIH0pO1xuICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZmFpbGVkIHRvIERFTEVURScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTYXZlTmF2IC8+XG4gICAgICAgICAgPFNhdmVkUmVjaXBlRW50cmllcyBsaXN0PXt0aGlzLnN0YXRlLmxpc3R9IGhhbmRsZUJ1dHRvbkNsaWNrPXt0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8U2F2ZWRBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJTYXZlZEFwcFwiKSk7XG5cbiAgd2luZG93LlNhdmVkQXBwID0gU2F2ZWRBcHA7XG4iXX0=