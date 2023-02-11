import React from "react";
import "./footer.css";


const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>



      <div className="footer-copyright">
        <small>&copy; ShirleyAma. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
