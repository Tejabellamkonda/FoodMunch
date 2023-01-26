import React from "react";
import "./index.css";
const Footer = () => {
  return (
    <>
      <div className="footer-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-logo-light.png"
                className="food-munch-logo"
              />
              <h1 className="footer-section-mail-id">
                orderfood@foodmunch.com
              </h1>
              <p className="footer-section-address">
                Court Center,Gudur,AndhraPradesh, India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
