import React, { useState } from "react";
import "../CSS/Home.css";

import logo from "../Img/Logo.png";
import Google from "../Img/Google.png";
import Apple from "../Img/ApplePay.png";
import PayPal from "../Img/PayPal.png";
import Visa from "../Img/Visa.png";
import DoubleCircle from "../Img/DoubleCircle.png";
import Express from "../Img/Express.png";
import LocationCar from "../Img/locationCar.png";

const Header = () => {
  const [MobileMenu1, setMobileMenu1] = useState(true);

  return (
    <>
      <div className="fluid-container homeBody">
        <div className="container">
          {/* Full Screen Nav Bar */}

          <div className="row py-3 fullScreen">
            <div className="col-lg-3">
              <div className="row">
                <div className="2 ">
                  <img src={logo} alt="" />
                </div>
                <div className="10">
                  <h4 className="bold">
                    <span style={{ color: "#F12797" }}>LutonAirportTaxi</span>
                    .co.uk
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-11">
                  <div className="row pt-1">
                    <div className="col-2 fullScreenMenuName">
                      <p style={{ color: "#8684AB" }}>Home</p>
                    </div>
                    <div className="col-2 fullScreenMenuName">
                      <p style={{ color: "#F12797" }}>About Us</p>
                    </div>
                    <div className="col-2 fullScreenMenuName">
                      <p style={{ color: "#8684AB" }}>Our Fleet</p>
                    </div>
                    <div className="col-2 fullScreenMenuName">
                      <p style={{ color: "#8684AB" }}>Contact Us</p>
                    </div>
                    <div className="col-2 fullScreenMenuName">
                      <p style={{ color: "#8684AB" }}> Account</p>
                    </div>
                    <div className="col-2 fullScreenMenuName">
                      <p style={{ color: "#8684AB" }}>Drive For Us</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-0"></div>
              </div>
            </div>
          </div>

          {/* Mobile Screen Nav Bar  */}

          <div className="row MobileScreenNavBar">
            <div className="col-2">
              {MobileMenu1 ? (
                <i
                  class="MobileMenu1Icon  ml-0 mt-2  fa-solid fa-bars"
                  onClick={() => setMobileMenu1(!MobileMenu1)}
                ></i>
              ) : (
                <i
                  class=" MobileMenu1Icon  ml-0 mt-2 fa fa-times"
                  aria-hidden="true"
                  onClick={() => setMobileMenu1(!MobileMenu1)}
                ></i>
              )}
            </div>

            <div className="col-10 d-flex justify-content-end">
              <img
                src={logo}
                alt=""
                style={{ width: "35px", height: "25px", marginTop: "10px" }}
              />
            </div>

            <div
              className={
                MobileMenu1
                  ? " notheight1 notheight2"
                  : "notheight1 mobile-screen"
              }
              onClick={() => setMobileMenu1(!MobileMenu1)}
            >
              <div
                className={
                  MobileMenu1
                    ? " notheight "
                    : "notheight  InnerClassMobileScreen headerMobileSideBar "
                }
              >
                <i
                  class=" MobileMenu1Icon  ml-2 mt-2 fa fa-times"
                  aria-hidden="true"
                  onClick={() => setMobileMenu1(!MobileMenu1)}
                ></i>
                <p className="pl-2 mobileMenuText">Home</p>
                <p className="pl-2 mobileMenuText">About Us</p>
                <p className="pl-2 mobileMenuText">Our Feet</p>
                <p className="pl-2 mobileMenuText">Contact Us</p>
                <p className="pl-2 mobileMenuText">Account</p>
                <p className="pl-2 mobileMenuText">Drive For Us</p>
              </div>
            </div>
          </div>

          {/* Home Detail Part  */}

          <div className="row mt-md-0 mt-3 ">
            <div className="col-lg-6 paymentCompanyLogo">
              <h1 style={{ color: "#F12797", fontWeight: "bold" }}>
                Luton Airport
              </h1>
              <h2>Hassle Free</h2>
              <h2>Transfer Service.</h2>
              <p className="mt-2 mb-4">
                Save up to <span style={{ color: "#F12797" }}>40%</span> by pre
                booking your journey
              </p>
              <div className="row my-4">
                <div className="col-lg-2 col-4 mb-lg-0 mb-4">
                  <img src={Google} alt="" />
                </div>
                <div className="col-lg-2 col-4 mb-lg-0 mb-4">
                  <img src={Apple} alt="" />
                </div>
                <div className="col-lg-2 col-4 mb-lg-0 mb-4">
                  <img src={PayPal} alt="" />
                </div>
                <div className="col-lg-2 col-4 ">
                  <img src={Visa} alt="" />
                </div>
                <div className="col-lg-2 col-4 ">
                  <img src={DoubleCircle} alt="" />
                </div>
                <div className="col-lg-2 col-4 ">
                  <img src={Express} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>

          {/* Select Payment Method  */}

          <div className="container my-4  homeLastContainer ">
            <div className="row border-bottom py-2">
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-4 mt-1">
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <label for="html" className="ml-2">
                      One Way
                    </label>
                  </div>
                  <div className="col-4 mt-1">
                    <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      value="CSS"
                    />
                    <label for="css" className="ml-2">
                      Via
                    </label>
                  </div>
                  <div className="col-4 mt-1">
                    <input
                      type="radio"
                      id="javascript"
                      name="fav_language"
                      value="JavaScript"
                    />
                    <label for="javascript" className="ml-2">
                      Return
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-lg-8"></div>
            </div>

            <div className="row my-4 ">
              <div className="col-lg-3 border-right">
                <div className="row">
                  <div className="col-2 ">
                    <img src={LocationCar} alt="" />
                  </div>
                  <div className="col-10">
                    <div className="row">
                      <div className="col-lg-12">
                        <p>From</p>
                      </div>
                      <div className="col-lg-12">
                        <p>London Luton Airport [LTN]</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 border-right">
                <div className="row">
                  <div className="col-2 ">
                    <img src={LocationCar} alt="" />
                  </div>
                  <div className="col-10">
                    <div className="row">
                      <div className="col-lg-12">
                        <p>From</p>
                      </div>
                      <div className="col-lg-12">
                        <p>London Luton Airport [LTN]</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 border-right">
                <div className="row ">
                  <div className="col-lg-12 DataAndTimeHome ">
                    <p>Dates - Time</p>
                  </div>
                </div>
                <div className="row m-0 p-0 ">
                  <div className="col-lg-3 col-6 m-0 p-0 JustDateHome ">
                    <h1>23</h1>
                  </div>
                  <div className="col-lg-9 col-6 JustMonthHome">
                    September
                    <p>Wed, 13:00</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4   ">
                <div className="row mb-lg-0 mb-4 mt-lg-2">
                  <div className="col-lg-3  col-3 homeVia">
                    <button
                      style={{ width: "60px" }}
                      className="mt-4 homeLastBtn"
                    >
                      Via
                    </button>
                  </div>
                  <div className="col-lg-5 col-3 homeReturn">
                    <button
                      style={{ width: "120px" }}
                      className="mt-4 mr-lg-5 homeLastBtn"
                    >
                      Add Return
                    </button>
                  </div>
                  <div className="col-lg-4 col-6 homeSerach ">
                    <button className="ml-lg-4  ">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
