import React from "react";
import MobileBlogNav from "./MobileBlogNav";
import MobileBlogDetail from "./MobileBlogDetail";
import Footer from "../../Footer";

function MobileBlog() {
  return (
    <div>
      <MobileBlogNav />
      <MobileBlogDetail />
      <Footer />
    </div>
  );
}

export default MobileBlog;
