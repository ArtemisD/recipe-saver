class SavedApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };

  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/recipes',
      success: function(data) {
        this.setState({list: data});
      }.bind(this)
    });
  }

  handleButtonClick(recipe, recipe_id) {
    $.ajax({
      url: '/recipes/' + recipe_id,
      type: 'DELETE',
      success: function(data) {
        $.ajax({
          type: 'GET',
          url: '/recipes',
          success: function(data) {
            this.setState({list: data});
          }.bind(this)
        });
      }.bind(this),
      error: function() {
        console.log('failed to DELETE');
      }
    });
  }

    render() {
      return (
        <div>
          <SaveNav />
          <SavedRecipeEntries list={this.state.list} handleButtonClick={this.handleButtonClick.bind(this)}/>
        </div>
      );
    }
  }

  ReactDOM.render(
    <SavedApp/>, document.body);

  window.SavedApp = SavedApp;
