class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };

    this.debounceSearch = _.debounce(searchRecipes, 500);
  }

  componentDidMount() {
    searchRecipes({
      key: FOOD2GO_API_KEY,
      q: 'apple pie'
    }, data => {
      this.setState({list: data.recipes});
    });
}

  onSearch(userInput) {
    this.debounceSearch({
      key: FOOD2GO_API_KEY,
      q: userInput
    }, data => {
      this.setState({list: data.recipes});
    });
  }

  handleButtonClick(recipe) {
    $.ajax({
      url: '/recipes',
      type: 'POST',
      data: recipe,
      success: function() {
        console.log('SUCCESSFUL POST');
      }.bind(this),
      error: function() {
        console.log('failed to post');
      }
    });
  }

    render() {
      return (
        <div>
          <NavBar userInput={this.onSearch.bind(this)}/>
          <RecipeEntries list={this.state.list} handleButtonClick={this.handleButtonClick.bind(this)}/>
        </div>
      );
    }
  }

  ReactDOM.render(
    <App/>, document.getElementById("main")
  );

  window.App = App;
