import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <i className="fas fa-address-book"></i>
        Conatct Holder
      </a>

      <Link to="/about" className="nav-item">
        About
      </Link>
      <Link to="/" className="nav-item float-right">
        Home
      </Link>
      <Link to="/login" className="nav-item">
        Login
      </Link>
      <Link to="/register" className="nav-item">
        Register
      </Link>
    </nav>
  );
}

export default Navbar;
