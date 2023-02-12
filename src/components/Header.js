import { NavLink } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Header;
