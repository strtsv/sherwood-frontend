import React from "react";

import Header from "../components/Header";
import AboutUs from "../components/About/AboutUs";
import OurTeam from "../components/About/OurTeam";
import Features from "../components/About/Features";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="page animated">
      <Header />
      <AboutUs />
      <OurTeam />
      <Features />
      <Footer />
    </div>
  );
};

export default About;
