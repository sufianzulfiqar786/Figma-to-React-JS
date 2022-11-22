import React from "react";

const CrouselCard = ({el}) => {
  return (
    <div className="">
      <div className="border">
        <div className="row px-2">
          <div className="col-12 d-flex justify-content-center my-4">
            <img src={el.pic} alt="" />
          </div>
          <div className="col-12 d-flex justify-content-center">
            <h3>{el.name}</h3>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <p>Fonctions</p>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <p style={{ color: "yellow", fontSize: "18px" }}>
              &#9733;&#9733;&#9733;&#9733;{" "}
              <span style={{ color: "Yellow", fontSize: "18px" }}>&#9734;</span>{" "}
            </p>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <p className=" text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates reprehenderit perferendis cum accusantium
              necessitatibus ipsam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrouselCard;
