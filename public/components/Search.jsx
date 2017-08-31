var Search = (props) => (
  <div className="form-inline search">
    <input className="form-control" type="text" onChange={(event) => props.userInput(event.target.value)} placeholder="Find a recipe"/>
    <button className="btn btn-primary">
      <span>Search</span>
    </button>
  </div>
);

window.Search = Search;
