import React from "react";
import HomeNavbar from "./HomeNavbar";
import Footer from "../Footer";
import HomeAbout from "./HomeAbout";
import HomeFeature from "./HomeFeature";
import HomeServices from "./HomeServices";
import HomeTestimonial from "./HomeTestimonial";
import HomeBlog from "./HomeBlog";
import Techologies from "./Techologies";

function Home() {
  return (
    <div>
      <HomeNavbar />
      <HomeAbout />
      <HomeServices />
      <Techologies />
      <HomeFeature />
      <HomeTestimonial />
      <HomeBlog />
      <Footer />
    </div>
  );
}

export default Home;
