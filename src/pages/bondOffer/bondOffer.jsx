import React from "react";
import Navbar from "../../components/navbar/navbar";
import "./bondOffer.css";
import { offerData } from "../../data";
import BondOfferCard from "../../components/bondOfferCard/bondOfferCard";
import Slider from "react-slick";
import { bondOfferSettings } from "../../components/slider/sliderSettings";

const BondOffer = () => {
  return (
    <div className="bondOffer">
      <Navbar />
      <div className="bondOffer-container">
        <div className="showcase">
          <Slider {...bondOfferSettings}>
            {offerData.map((offer, index) => (
              <BondOfferCard offer={offer} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BondOffer;
