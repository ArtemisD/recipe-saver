var SaveNav = (props) => (
  <nav className="navbar sticky-top navbar-toggleable-md navbar-light bg-faded">
    <a className="navbar-brand" href="../index.html">Recipe Saver</a>
      <div className="navbar-nav ml-auto">
        <a className="nav-term " href="../saved.html">Saved Recipes</a>
      </div>
  </nav>
);

window.SaveNav = SaveNav;
