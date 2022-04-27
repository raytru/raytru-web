import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h4>Raymond Truong</h4>
      </div>
      <ul className="navlinks">
        <li className="link">
          <a href="#">home</a>
        </li>
        <li className="link">
          <a href="#">about</a>
        </li>
        <li className="link">
          <a href="#">resume</a>
        </li>
        <div className="menu-toggle">
          <i className="fas fa-bars fa-lg"></i>
        </div>
      </ul>
    </nav>
  );
}
