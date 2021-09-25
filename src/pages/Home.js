import React from "react";

import Header from "../components/Header";
import Slider from "../components/Home/Slider";
import QualityEquipment from "../components/Home/QualityEquipment";
import AboutOurClub from "../components/Home/AboutOurClub";
import OurCourses from "../components/Home/OurCourses";
import Gallery from "../components/Home/Gallery";
import OurTeam from "../components/Home/OurTeam";
import Testimonials from "../components/Home/Testimonials";
import LatestNews from "../components/Home/LatestNews";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <Slider />
      <QualityEquipment />
      <AboutOurClub />
      <OurCourses />
      <Gallery />
      <OurTeam />
      <Testimonials />
      <LatestNews />
      <Footer />
    </div>
  );
};

export default Home;
