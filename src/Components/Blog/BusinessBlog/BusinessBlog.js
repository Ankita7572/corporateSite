import React from "react";
import BusinessBlogBlogDetail from "./BusinessBlogDetail";
import Footer from "../../Footer";
import BusinessBlogNav from "./BusinessBlogNav";

function BusinessBlog() {
  return (
    <div>
      <BusinessBlogNav />
      <BusinessBlogBlogDetail />
      <Footer />
    </div>
  );
}

export default BusinessBlog;
