import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Image from "./images/QuantumTxtLogo1.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={Image} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                GOALS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                STAKING
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                JOIN
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
