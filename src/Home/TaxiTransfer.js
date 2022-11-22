import React from "react";
import "../CSS/TaxiTransfer.css";

const TaxiTransfer = () => {
  return (
    <>
      <div className="fluid-container taxiTransferBody">
        <div className="container">
          <div className="row pt-5 pb-4">
            <div className="col-lg-6">
              <div className="row ">
                <div className="col-lg-12">
                  <h1>
                    <span style={{ color: "#F12797" }}>Welcome To </span>Luton
                    Airport, <br />
                    Taxi Transfer!
                  </h1>
                </div>
                <div className="col-lg-12">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat, voluptatibus?
                  </p>
                </div>
                <div className="col-lg-12">
                  <p className="mt-1 mb-4 text-justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis iusto doloremque ipsam delectus, officia dolore,
                    similique at velit in quasi vero harum numquam deleniti quia
                    illo voluptatibus culpa praesentium corrupti. Omnis
                    consequatur soluta odio labore aspernatur excepturi quasi
                    hic ratione ab corrupti nemo fuga, fugiat perferendis
                    dolore, beatae adipisci harum.
                  </p>
                </div>

                <div className="col-lg-12">
                  <button className="taxiTransferBtn">
                    About Us <i class="fa-solid fa-location-arrow ml-2"></i>{" "}
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaxiTransfer;
