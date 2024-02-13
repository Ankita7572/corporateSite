import React from "react";
import SoftwareBlogDetail from "./SoftwareBlogDetail";
import SoftWareBlogNav from "./SoftWareBlogNav";
import Footer from "../../Footer";

function SoftwareBlog() {
  return (
    <div>
      <SoftWareBlogNav />
      <SoftwareBlogDetail />
      <Footer />
    </div>
  );
}

export default SoftwareBlog;
