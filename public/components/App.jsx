class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      saved: false
    };

    this.debounceSearch = _.debounce(searchRecipes, 500);
  }

  componentDidMount() {
    searchRecipes({
      q: 'key lime',
      api_id: API_ID,
      api_key: API_KEY,
    }, data => {
      this.setState({list: data.hits});
    });
}

  onSearch(userInput) {
    this.debounceSearch({
      q: userInput,
      api_id: API_ID,
      api_key: API_KEY,
    }, data => {
      this.setState({list: data.hits});
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
