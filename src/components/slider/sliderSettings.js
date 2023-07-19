import { NextArrow, PrevArrow  } from "./sliderArrows";
import {HomeNextArrow, HomePrevArrow } from "./sliderArrows";

export const bondOfferSettings = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 11000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1214,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 932,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 645,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


   
  export const heroSettings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <HomeNextArrow />,
    prevArrow: <HomePrevArrow />
  }