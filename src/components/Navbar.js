import React, { useRef } from "react";
import "../styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";


export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
      <nav>
        <div className="logo">
          <h4>Raymond Truong</h4>
        </div>

        <ul className="navlinks" ref={navRef}>
          <li className="link">
            <a href="#">home</a>
          </li>
          <li className="link">
            <a href="#">about</a>
          </li>
          <li className="link">
            <a href="#">resume</a>
          </li>
        </ul>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </nav>
  );
}
