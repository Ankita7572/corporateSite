import React from "react";
import HealthCareBlogNav from "./HealthCareBlogNav";
import HealthCareBlogDetail from "./HealthCareBlogDetail";
import Footer from "../../Footer";

function HeathCareBlog() {
  return (
    <div>
      <HealthCareBlogNav />
      <HealthCareBlogDetail />
      <Footer />
    </div>
  );
}

export default HeathCareBlog;
