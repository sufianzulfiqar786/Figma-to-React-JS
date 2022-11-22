import React from "react";

import "../CSS/JourneyCards.css";

import customerService from "../Img/customer-service.png";
import Group1084 from "../Img/Group 1263.png";
import Group1264 from "../Img/Group 1264.png";
import Group1265 from "../Img/Group 1265.png";

import Group1266 from "../Img/Group 1266.png";
import Group1267 from "../Img/Group 1267.png";
import Group1268 from "../Img/Group 1268.png";
import Group1269 from "../Img/Group 1269.png";

const Journey = () => {
  const data = [
    {
      id: 1,
      hours: "24 Hours",
      services: "Services",
      pic: customerService,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis doloremque architecto est!",
    },

    {
      id: 1,
      hours: "24 Hours",
      services: "Services",
      pic: Group1084,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis doloremque architecto est!",
    },

    {
      id: 1,
      hours: "24 Hours",
      services: "Services",
      pic: Group1264,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis doloremque architecto est!",
    },

    {
      id: 1,
      hours: "24 Hours",
      services: "Services",
      pic: Group1265,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis doloremque architecto est!",
    },

    {
      id: 1,
      hours: "24 Hours",
      services: "Services",
      pic: Group1266,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis doloremque architecto est!",
    },

    {
      id: 1,
      hours: "24 Hours",
      services: "Services",
      pic: Group1267,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis doloremque architecto est!",
    },

    {
      id: 1,
      hours: "24 Hours",
      services: "Services",
      pic: Group1268,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis doloremque architecto est!",
    },

    {
      id: 1,
      hours: "24 Hours",
      services: "Services",
      pic: Group1269,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis doloremque architecto est!",
    },
  ];

  return (
    <>
      <div className="fluid-container">
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-12 d-flex justify-content-center titleJourney ">
              <h1>
                Let Us Take Care Of{" "}
                <span style={{ color: "#F12797" }}>Your</span>
              </h1>
            </div>
            <div className="col-lg-12 d-flex justify-content-center titleJourney">
              <h1 style={{ color: "#F12797" }}>Journey</h1>
            </div>
          </div>

          <div className="row my-4">
            {data &&
              data.map((el) => {
                return (
                  <div className="col-lg-3 mt-4">
                    <div className=" journeyCards">
                      <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center pt-4">
                          <img src={el.pic} alt="" />
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center mt-2">
                          <h4>
                            24 Hours <br /> Services
                          </h4>
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center text-justify">
                          <p className="px-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Commodi corporis doloremque architecto est!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
