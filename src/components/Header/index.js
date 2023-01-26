import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./index.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onClickMenuButton = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png"
              className="food-munch-logo"
              alt="logo"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={onClickMenuButton}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav  ">
              <Link to="/menu" className="NavLink">
                <li
                  className="nav-link"
                  href="#exploreMenuSection"
                  id="navItem2"
                >
                  Explore Menu
                </li>
              </Link>

              <Link to="/contact" className="NavLink">
                <li
                  className="nav-link"
                  href="#exploreMenuSection"
                  id="navItem1"
                >
                  Contact Us
                </li>
              </Link>
              <li>
                <button type="button" className="btn loginBtn">
                  Login
                </button>
              </li>
            </div>
          </div>
          {showMenu && (
            <div className="navbar-nav ">
              <Link to="/menu" className="NavLink">
                <li
                  className="nav-link"
                  href="#exploreMenuSection"
                  id="navItem2"
                >
                  Explore Menu
                </li>
              </Link>

              <Link to="/contact" className="NavLink">
                <li
                  className="nav-link"
                  href="#exploreMenuSection"
                  id="navItem1"
                >
                  Contact Us
                </li>
              </Link>

              <button type="button" className="btn">
                Login
              </button>
            </div>
          )}
        </div>
      </nav>

      {/*  <nav className='Navbar'>
       <Link to='/' className='NavLink'>
        <img   src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png" className='logo' alt='companylogo'/>
       </Link>
      <FaBars className='Bar'/>
      <div className='navItem'>
        <Link to='aboutUs' className='NavLink'>
          <h1>About Us</h1>
        </Link>
        
        <Link to='aboutUs' className='NavLink'>
          <h1>Bucket</h1>
        </Link>
        <Link to='ContactUs' className='NavLink'>
          <h1>Contact Us</h1>
        </Link>
      </div>
      
      

      </nav>

  */}
    </>
  );
};

export default Navbar;
