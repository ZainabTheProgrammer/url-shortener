import React from "react";
import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
         
          <div>
            <a href="/" className="logo">
              <img src={Logo} alt="Logo" />
            </a>
          </div>

          <div className="footer__links">
          
            <div className="nav--links">
              <h4>Features</h4>
              <ul>
                <li><a href="/">Link Shortening</a></li>
                <li><a href="/">Branded Links</a></li>
                <li><a href="/">Analytics</a></li>
              </ul>
            </div>

          
            <div className="nav--links">
              <h4>Resources</h4>
              <ul>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Developers</a></li>
                <li><a href="/">Support</a></li>
              </ul>
            </div>

          
            <div className="nav--links">
              <h4>Company</h4>
              <ul>
                <li><a href="/">About</a></li>
                <li><a href="/">Our Team</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Contact</a></li>
              </ul>
            </div>

           
            <div className="social--links">
              <a href="/"><i className="fa-brands fa-facebook"></i></a>
              <a href="/"><i className="fa-brands fa-twitter"></i></a>
              <a href="/"><i className="fa-brands fa-pinterest"></i></a>
              <a href="/"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
