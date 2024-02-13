import React from "react";
import MobileAppBlogNav from "./MobileAppBlogNav";
import MobileAppBlogDetail from "./MobileAppBlogDetail";
import Footer from "../../Footer";

function MobileAppBlog() {
  return (
    <div>
      <MobileAppBlogNav />
      <MobileAppBlogDetail />
      <Footer />
    </div>
  );
}

export default MobileAppBlog;
