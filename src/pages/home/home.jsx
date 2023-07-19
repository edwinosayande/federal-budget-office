import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/navbar";
import { Slide1, Slide2 } from "../../components/hero/hero";
import Slider from "react-slick";
import { heroSettings } from "../../components/slider/sliderSettings";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {/* these are the gray and green bars on both sides of home screen*/}
      <div className="barWrap">
        <div className="leftBar"></div>
        <div className="rightBar"></div>
      </div>
      <div className="home-container">
        <div className="slide-container">
          <div className="hero-container">
            <Slider {...heroSettings}>
              <Slide1 />
              <Slide2 />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
