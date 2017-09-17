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

    _this.debounceSearch = _.debounce(searchRecipes2, 500);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      searchRecipes2({
        api_key: EDAMAM_API_KEY,
        q: 'pie'
      }, function (data) {
        _this2.setState({ list: data.hits });
      });
    }

    // componentDidMount() {
    //   searchRecipes2(data => {
    //     this.setState({list: data.recipes});
    //   });
    // }

  }, {
    key: 'onSearch',
    value: function onSearch(userInput) {
      var _this3 = this;

      this.debounceSearch({
        api_key: EDAMAM_API_KEY,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImxpc3QiLCJzYXZlZCIsImRlYm91bmNlU2VhcmNoIiwiXyIsImRlYm91bmNlIiwic2VhcmNoUmVjaXBlczIiLCJhcGlfa2V5IiwiRURBTUFNX0FQSV9LRVkiLCJxIiwic2V0U3RhdGUiLCJkYXRhIiwiaGl0cyIsInVzZXJJbnB1dCIsInJlY2lwZSIsIiQiLCJhamF4IiwidXJsIiwidHlwZSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiYmluZCIsImVycm9yIiwib25TZWFyY2giLCJoYW5kbGVCdXR0b25DbGljayIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFESztBQUVYQyxhQUFPO0FBRkksS0FBYjs7QUFLQSxVQUFLQyxjQUFMLEdBQXNCQyxFQUFFQyxRQUFGLENBQVdDLGNBQVgsRUFBMkIsR0FBM0IsQ0FBdEI7QUFSaUI7QUFTbEI7Ozs7d0NBRW1CO0FBQUE7O0FBQ2xCQSxxQkFBZTtBQUNiQyxpQkFBU0MsY0FESTtBQUViQyxXQUFHO0FBRlUsT0FBZixFQUdHLGdCQUFRO0FBQ1QsZUFBS0MsUUFBTCxDQUFjLEVBQUNULE1BQU1VLEtBQUtDLElBQVosRUFBZDtBQUNELE9BTEQ7QUFNSDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OzZCQUVXQyxTLEVBQVc7QUFBQTs7QUFDbEIsV0FBS1YsY0FBTCxDQUFvQjtBQUNsQkksaUJBQVNDLGNBRFM7QUFFbEJDLFdBQUdJO0FBRmUsT0FBcEIsRUFHRyxnQkFBUTtBQUNULGVBQUtILFFBQUwsQ0FBYyxFQUFDVCxNQUFNVSxLQUFLQyxJQUFaLEVBQWQ7QUFDRCxPQUxEO0FBTUQ7OztzQ0FFaUJFLE0sRUFBUTtBQUN4QkMsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssVUFEQTtBQUVMQyxjQUFNLE1BRkQ7QUFHTFAsY0FBTUcsTUFIRDtBQUlMSyxpQkFBUyxZQUFXO0FBQ2xCQyxrQkFBUUMsR0FBUixDQUFZLGlCQUFaO0FBQ0QsU0FGUSxDQUVQQyxJQUZPLENBRUYsSUFGRSxDQUpKO0FBT0xDLGVBQU8saUJBQVc7QUFDaEJILGtCQUFRQyxHQUFSLENBQVksZ0JBQVo7QUFDRDtBQVRJLE9BQVA7QUFXRDs7OzZCQUVVO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxNQUFELElBQVEsV0FBVyxLQUFLRyxRQUFMLENBQWNGLElBQWQsQ0FBbUIsSUFBbkIsQ0FBbkIsR0FERjtBQUVFLDRCQUFDLGFBQUQsSUFBZSxNQUFNLEtBQUt0QixLQUFMLENBQVdDLElBQWhDLEVBQXNDLG1CQUFtQixLQUFLd0IsaUJBQUwsQ0FBdUJILElBQXZCLENBQTRCLElBQTVCLENBQXpEO0FBRkYsT0FERjtBQU1EOzs7O0VBekRhSSxNQUFNQyxTOztBQTREdEJDLFNBQVNDLE1BQVQsQ0FDRSxvQkFBQyxHQUFELE9BREYsRUFDVUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQURWOztBQUlBQyxPQUFPbEMsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpc3Q6IFtdLFxuICAgICAgc2F2ZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMuZGVib3VuY2VTZWFyY2ggPSBfLmRlYm91bmNlKHNlYXJjaFJlY2lwZXMyLCA1MDApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc2VhcmNoUmVjaXBlczIoe1xuICAgICAgYXBpX2tleTogRURBTUFNX0FQSV9LRVksXG4gICAgICBxOiAncGllJ1xuICAgIH0sIGRhdGEgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bGlzdDogZGF0YS5oaXRzfSk7XG4gICAgfSk7XG59XG5cbi8vIGNvbXBvbmVudERpZE1vdW50KCkge1xuLy8gICBzZWFyY2hSZWNpcGVzMihkYXRhID0+IHtcbi8vICAgICB0aGlzLnNldFN0YXRlKHtsaXN0OiBkYXRhLnJlY2lwZXN9KTtcbi8vICAgfSk7XG4vLyB9XG5cbiAgb25TZWFyY2godXNlcklucHV0KSB7XG4gICAgdGhpcy5kZWJvdW5jZVNlYXJjaCh7XG4gICAgICBhcGlfa2V5OiBFREFNQU1fQVBJX0tFWSxcbiAgICAgIHE6IHVzZXJJbnB1dFxuICAgIH0sIGRhdGEgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bGlzdDogZGF0YS5oaXRzfSk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVCdXR0b25DbGljayhyZWNpcGUpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL3JlY2lwZXMnLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgZGF0YTogcmVjaXBlLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTVUNDRVNTRlVMIFBPU1QnKTtcbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2ZhaWxlZCB0byBwb3N0Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPE5hdkJhciB1c2VySW5wdXQ9e3RoaXMub25TZWFyY2guYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDxSZWNpcGVFbnRyaWVzIGxpc3Q9e3RoaXMuc3RhdGUubGlzdH0gaGFuZGxlQnV0dG9uQ2xpY2s9e3RoaXMuaGFuZGxlQnV0dG9uQ2xpY2suYmluZCh0aGlzKX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpXG4gICk7XG5cbiAgd2luZG93LkFwcCA9IEFwcDtcbiJdfQ==