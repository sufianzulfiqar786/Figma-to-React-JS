import React from "react";
import Group1175 from "../Img/Group 1175 .png";
import Carousel from "../Components/Carousel";

const AboutUs = () => {
  return (
    <>
      <div className="fluid-container">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <h1>What Our Customer Sat</h1>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <h1>About US</h1>
            </div>
          </div>

          <div className="row">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
