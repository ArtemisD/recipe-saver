class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      saved: false
    };

    this.debounceSearch = _.debounce(searchRecipes2, 500);
  }

  componentDidMount() {
    searchRecipes2({
      api_key: EDAMAM_API_KEY,
      q: 'pie'
    }, data => {
      this.setState({list: data.hits});
    });
}

// componentDidMount() {
//   searchRecipes2(data => {
//     this.setState({list: data.recipes});
//   });
// }

  onSearch(userInput) {
    this.debounceSearch({
      api_key: EDAMAM_API_KEY,
      q: userInput
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
