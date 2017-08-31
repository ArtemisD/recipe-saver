class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: practiceData.recipes
    };

  }

  onSearch(userInput) {
    searchRecipes({
      key: FOOD2GO_API_KEY,
      q: userInput
    }, data => {
      console.log(data)
      this.setState({list: data.recipes});
    });
  }

  handleButtonClick(recipe) {
    $.ajax({
      url: '/recipes',
      type: 'POST',
      data: recipe,
      success: function() {
        console.log('SUCCESSFUL POST')
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
    <App/>, document.body);

  window.App = App;
