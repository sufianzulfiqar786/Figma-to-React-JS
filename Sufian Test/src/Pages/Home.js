import React from "react";
import AboutUs from "../Home/AboutUs";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Journey from "../Home/Journey";
import News from "../Home/News";
import TaxiTransfer from "../Home/TaxiTransfer";

const Home = () => {
  return (
    <>
      <Header />
      <Journey />
      <TaxiTransfer />
      <AboutUs />
      <News />
      <Footer />
    </>
  );
};

export default Home;
