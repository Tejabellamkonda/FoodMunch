import React from "react";

import { Link } from "react-router-dom";
import Footer from "../FooterSection";
import Navbar from "../Header";
import WhyChooseUS from "../WhyChooseUS";

import "./index.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bgContainer">
        <div className="banner-section">
          <h1 className="heading primary">Get Delicious Food Items</h1>
          <p className="caption">Eat Smart And Stay Healthy</p>
          <Link to="/menu">
            <button className="menuBtn">View Menu</button>
          </Link>
        </div>
      </div>
      <WhyChooseUS />
      <Footer />
    </>
  );
};

export default Home;
