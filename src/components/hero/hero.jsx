import React from "react";
import "./hero.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Component3 from "../../assets/budget.png";
import blob from "../../blob.svg";

export const Slide1 = () => {
  return (
    <div className="hero">
      <div className="heroTextWrap">
        <div className="heroBigText">
          Subscribe to FGN <br /> Saving Bond
        </div>
        <div className="heroSmallText">Loan and get paid with interest</div>

        <div className="heroBtnWrap">
          <div className="getStartedBtn">Get Started</div>
          <div className="seeVideoBtn">
            <AiOutlinePlayCircle className="heroIcon" />{" "}
            <span className="seeVideo">See Video</span>
          </div>
        </div>
      </div>

      <div className="heroImgWrap">
        <img className="blob" src={blob} alt="" />
        <img className="imgg" src={Component3} alt="" />
      </div>
    </div>
  );
};

export const Slide2 = () => {
  return (
    <div className="hero">
      <div className="heroTextWrap">
        <div className="heroBigText">Subscribe to FGN <br/> Saving Bond</div>
        <div className="heroSmallText">Loan and get paid with interest</div>

        <div className="heroBtnWrap">
          <div className="getStartedBtn">Get Started</div>
          <div className="seeVideoBtn">
            <AiOutlinePlayCircle className="heroIcon" />{" "}
            <span className="seeVideo">See Video</span>
          </div>
        </div>
      </div>

      <div className="heroImgWrap">
        <img className="blob" src={blob} alt="" />
        <img className="imgg" src={Component3} alt="" />
      </div>
    </div>
  );
};
