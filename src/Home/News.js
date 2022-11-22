import React from "react";
import "../CSS/News.css";
import Rectangle184 from "../Img/Rectangle 184.png";
import Rectangle185 from "../Img/Rectangle 185.png";
import Rectangle186 from "../Img/Rectangle 186.png";

const News = () => {
  const data = [
    {
      id: 1,
      name: "Taxi From Luton",
      pic: Rectangle184,
      date: "12/03/22",
      cetName: "Driving",
      useName: "Admin",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, sed consequuntur! Ducimus, numquam!",
    },
    {
      id: 1,
      name: "Taxi From Luton",
      pic: Rectangle185,
      date: "12/03/22",
      cetName: "Driving",
      useName: "Admin",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, sed consequuntur! Ducimus, numquam!",
    },
    {
      id: 1,
      name: "Taxi From Luton",
      pic: Rectangle186,
      date: "12/03/21",
      cetName: "Driving",
      useName: "Admin",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, sed consequuntur! Ducimus, numquam!",
    },
  ];
  return (
    <>
      <div className="fluid-conatiner">
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-12 d-flex justify-content-center">
              <h1>
                <span style={{ color: "rgb(241, 39, 151)" }}>News</span> And{" "}
                <span style={{ color: "rgb(241, 39, 151)" }}>Articles</span>
              </h1>
            </div>
          </div>

          <div className="row">
            {data &&
              data.map((el) => {
                return (
                  <div className="col-lg-4 ">
                    <div>
                      <div className="row">
                        <div className="col-lg-12 newsImg ">
                          <img src={el.pic} alt="" />
                        </div>

                        <div className="col-lg-12 mt-1 ">
                          <div className="row">
                            <div className="col-9">
                              <p>
                                By: {el.useName}, Cotegory: {el.cetName}
                              </p>
                            </div>
                            <div className="col-3">
                              <p style={{ color: "rgb(241, 39, 151)" }}>
                                {el.date}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <h3>{el.name}</h3>
                        </div>

                        <div className="col-lg-12">
                          <p>{el.description}</p>
                        </div>

                        <div className="col-lg-12">
                          <h5 style={{ color: "#007bff" }}>
                            Read More{" "}
                            <i class="fa-solid fa-arrow-right ml-3"></i>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="row my-5">
            <div className="col-lg-12 d-flex justify-content-center">
              <button className="newsBtn">
                View All <i class="fa-solid fa-location-arrow ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
