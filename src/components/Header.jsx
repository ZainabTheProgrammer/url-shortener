import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);

  const toggleNavClick = () => {
    setClick(!click);
  };

  return (
    <header className="header">
      <div className="content container">
        <nav className="nav">
          <div className="nav__inner">
            <Link to="/" className="logo">
              Linkify
            </Link>

            <ul className="nav__links hide">
              <li>
                <Link className="nav__link" to="/features">
                  Features
                </Link>
              </li>
              <li>
                <Link className="nav__link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="nav__link" to="/resources">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div className="buttons hide">
            <Link className="nav__link" to="/login">
              Login
            </Link>
            <Link className="nav__link btn" data-type="narrow" to="/signup">
              Sign Up
            </Link>
          </div>
        </nav>

        <nav className={`mobile-nav ${click ? "show" : ""}`}>
          <ul className="nav__links primary">
            <li>
              <Link to="/features" className="nav__link">
                Features
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="nav__link">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/resources" className="nav__link">
                Resources
              </Link>
            </li>
          </ul>

          <ul className="nav__links secondary">
            <li>
              <Link className="nav__link" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="nav__link btn" data-type="wide" to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>

        <div className="menu-icons" onClick={toggleNavClick}>
          {click ? (
            <button>
              <i className="fa-solid fa-close"></i>
            </button>
          ) : (
            <button>
              <i className="fa-solid fa-bars"></i>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
