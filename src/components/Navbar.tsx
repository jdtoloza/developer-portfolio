import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <NavLink to="/" className="brand">
          Josh Toloza
        </NavLink>

        <div className="nav-links">
          <NavLink to="/">Engineer</NavLink>
          <NavLink to="/educator">Educator</NavLink>
          <NavLink to="/learner">Lifelong Learner</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;