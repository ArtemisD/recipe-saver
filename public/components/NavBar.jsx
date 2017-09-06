var NavBar = (props) => (
  <nav className="navbar sticky-top navbar-toggleable-md navbar-light bg-faded">
    <a className="navbar-brand" href="../index.html">Recipe Saver</a>
    <Search userInput={props.userInput}/>
    <div className="navbar-nav ml-auto">
      <a className="nav-term " href="../saved.html">Saved Recipes</a>
    </div>
  </nav>
);

window.NavBar = NavBar;
