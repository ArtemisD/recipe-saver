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

ReactDOM.render(React.createElement(SavedApp, null), document.body);

window.SavedApp = SavedApp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NhdmVkQXBwLmpzeCJdLCJuYW1lcyI6WyJTYXZlZEFwcCIsInByb3BzIiwic3RhdGUiLCJsaXN0IiwiJCIsImFqYXgiLCJ0eXBlIiwidXJsIiwic3VjY2VzcyIsImRhdGEiLCJzZXRTdGF0ZSIsImJpbmQiLCJyZWNpcGUiLCJyZWNpcGVfaWQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVCdXR0b25DbGljayIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImJvZHkiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUTs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU07QUFESyxLQUFiOztBQUhpQjtBQU9sQjs7Ozt3Q0FFbUI7QUFDbEJDLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxjQUFNLEtBREQ7QUFFTEMsYUFBSyxVQUZBO0FBR0xDLGlCQUFTLFVBQVNDLElBQVQsRUFBZTtBQUN0QixlQUFLQyxRQUFMLENBQWMsRUFBQ1AsTUFBTU0sSUFBUCxFQUFkO0FBQ0QsU0FGUSxDQUVQRSxJQUZPLENBRUYsSUFGRTtBQUhKLE9BQVA7QUFPRDs7O3NDQUVpQkMsTSxFQUFRQyxTLEVBQVc7QUFDbkNULFFBQUVDLElBQUYsQ0FBTztBQUNMRSxhQUFLLGNBQWNNLFNBRGQ7QUFFTFAsY0FBTSxRQUZEO0FBR0xFLGlCQUFTLFVBQVNDLElBQVQsRUFBZTtBQUN0QkwsWUFBRUMsSUFBRixDQUFPO0FBQ0xDLGtCQUFNLEtBREQ7QUFFTEMsaUJBQUssVUFGQTtBQUdMQyxxQkFBUyxVQUFTQyxJQUFULEVBQWU7QUFDdEIsbUJBQUtDLFFBQUwsQ0FBYyxFQUFDUCxNQUFNTSxJQUFQLEVBQWQ7QUFDRCxhQUZRLENBRVBFLElBRk8sQ0FFRixJQUZFO0FBSEosV0FBUDtBQU9ELFNBUlEsQ0FRUEEsSUFSTyxDQVFGLElBUkUsQ0FISjtBQVlMRyxlQUFPLGlCQUFXO0FBQ2hCQyxrQkFBUUMsR0FBUixDQUFZLGtCQUFaO0FBQ0Q7QUFkSSxPQUFQO0FBZ0JEOzs7NkJBRVU7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLE9BQUQsT0FERjtBQUVFLDRCQUFDLGtCQUFELElBQW9CLE1BQU0sS0FBS2QsS0FBTCxDQUFXQyxJQUFyQyxFQUEyQyxtQkFBbUIsS0FBS2MsaUJBQUwsQ0FBdUJOLElBQXZCLENBQTRCLElBQTVCLENBQTlEO0FBRkYsT0FERjtBQU1EOzs7O0VBOUNrQk8sTUFBTUMsUzs7QUFpRDNCQyxTQUFTQyxNQUFULENBQ0Usb0JBQUMsUUFBRCxPQURGLEVBQ2VDLFNBQVNDLElBRHhCOztBQUdBQyxPQUFPeEIsUUFBUCxHQUFrQkEsUUFBbEIiLCJmaWxlIjoiU2F2ZWRBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTYXZlZEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpc3Q6IFtdXG4gICAgfTtcblxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgdXJsOiAnL3JlY2lwZXMnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtsaXN0OiBkYXRhfSk7XG4gICAgICB9LmJpbmQodGhpcylcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUJ1dHRvbkNsaWNrKHJlY2lwZSwgcmVjaXBlX2lkKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9yZWNpcGVzLycgKyByZWNpcGVfaWQsXG4gICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICB1cmw6ICcvcmVjaXBlcycsXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGlzdDogZGF0YX0pO1xuICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICB9KTtcbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2ZhaWxlZCB0byBERUxFVEUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2F2ZU5hdiAvPlxuICAgICAgICAgIDxTYXZlZFJlY2lwZUVudHJpZXMgbGlzdD17dGhpcy5zdGF0ZS5saXN0fSBoYW5kbGVCdXR0b25DbGljaz17dGhpcy5oYW5kbGVCdXR0b25DbGljay5iaW5kKHRoaXMpfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgPFNhdmVkQXBwLz4sIGRvY3VtZW50LmJvZHkpO1xuXG4gIHdpbmRvdy5TYXZlZEFwcCA9IFNhdmVkQXBwO1xuIl19