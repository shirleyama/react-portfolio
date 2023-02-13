import "./header.css";
import { NavLink } from "react-router-dom";

import React from "react";

function Header() {
  return (
    <div className="container nav-container">
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
    </div>
  );
}

export default Header;
