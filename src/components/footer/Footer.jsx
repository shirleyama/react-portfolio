import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
        <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/about">About</NavLink>
        </li>
        <li>
        <NavLink to="/skills">Skills</NavLink>
        </li>
        <li>
        <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
        <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <div className="footer-copyright">
        <small>&copy; ShirleyAma. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;


