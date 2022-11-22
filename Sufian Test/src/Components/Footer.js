import React from "react";
import "../CSS/Footer.css";

import logo from "../Img/Logo.png";

const Footer = () => {
  return (
    <>
      <div className="fluid-container footerBody">
        <div className="container pt-4">
          <div className="row ">
            <div className="col-lg-3 FooterResponsive ">
              <img src={logo} alt="" className="mb-3" />
              <h4 className="mb-3" style={{ fontWeight: "bold" }}>
                Lutonairporttaxi.co.uk
              </h4>
              <p>
                960 Capability Green, Luton,
                <br />
                Bedforshir LU1 3PL
              </p>
              <div className="row">
                <div className="col-lg-12 socialIcon">
                  <i class="fa fa-facebook-f "></i>
                  <i class="fa fa-twitter ml-4"></i>
                  <i class="fa fa-instagram ml-4"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-3  FooterResponsive">
              <h4 className="mb-3" style={{ fontWeight: "bold" }}>
                Navigation
              </h4>
              <p>Home</p>
              <p>About Us</p>
              <p>Our Fleet</p>
              <p>Join as a driver</p>
              <p>Business Account</p>
              <p>Contact Us</p>
            </div>

            <div className="col-lg-3 FooterResponsive ">
              <h4 className="mb-3" style={{ fontWeight: "bold" }}>
                Airport Transfer
              </h4>
              <p>Luton Airport</p>
              <p>Heathrow Airport</p>
              <p>Galwich Airport</p>
              <p>London City Airport</p>
              <p>Stansted Airport</p>
            </div>

            <div className="col-lg-3 FooterResponsive">
              <h4 className="mb-3" style={{ fontWeight: "bold" }}>
                Contact Us
              </h4>
              <div className="row">
                <div className="col-lg-2">
                  <i
                    class="fa fa-phone mt-2"
                    aria-hidden="true"
                    style={{ color: "rgb(241, 39, 151)", fontSize: "28px" }}
                  ></i>
                </div>
                <div className="col-lg-10">
                  <div className="row">
                    <div className="col-lg-12">
                      01582 292929 <br />
                      +0041582 292929
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-lg-2">
                  <i
                    class="fa fa-envelope mt-0"
                    aria-hidden="true"
                    style={{ color: "rgb(241, 39, 151)", fontSize: "28px" }}
                  ></i>
                </div>
                <div className="col-lg-10">
                  <div className="row">
                    <div className="col-lg-12">Bookinga@luntoairport.taxi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <p>
                Copyright 2020 | All Rights Reserved by
                www.lutonairporttaxi.co.uk
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
