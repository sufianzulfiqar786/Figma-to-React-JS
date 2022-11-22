import React from "react";
import "../CSS/Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Group1175 from "../Img/Group 1175 .png";

import CrouselCard from "./CrouselCard";

const Carousel = () => {
  // settings for slider
  let settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
              arrows: false,
              dots: false,
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      id: 1,
      name: "Dustin Wilson",
      pic: Group1175,
      fun: "Fonctions",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, sed consequuntur! Ducimus, numquam!",
    },

    {
      id: 1,
      name: "Dustin Wilson",
      pic: Group1175,
      fun: "Fonctions",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, sed consequuntur! Ducimus, numquam!",
    },

    {
      id: 1,
      name: "Dustin Wilson",
      pic: Group1175,
      fun: "Fonctions",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, sed consequuntur! Ducimus, numquam!",
    },

    {
      id: 1,
      name: "Dustin Wilson",
      pic: Group1175,
      fun: "Fonctions",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, sed consequuntur! Ducimus, numquam!",
    },
    {
      id: 1,
      name: "Dustin Wilson",
      pic: Group1175,
      fun: "Fonctions",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, sed consequuntur! Ducimus, numquam!",
    },
  ];

  return (
    <div className="main-slider ">
      <Slider {...settings}>
        {data &&
          data.map((el) => {
            return (
              <div className="px-2">
                <CrouselCard el={el} />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Carousel;
