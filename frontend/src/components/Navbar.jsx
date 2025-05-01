import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/" className="navbar-link">Daniel Berke</a>
        </div>
        <div className="navbar-links">
          <a href="/" className="navbar-link">Home</a>
          <a href="/projects" className="navbar-link">Projects</a>
          <a href="/research" className="navbar-link">Research</a>
          <a href="/documentation" className="navbar-link">Docs</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
