import React from "react";
import PHPBlogNav from "./PHPBlogNav";
import PHPBlogDetail from "./PHPBlogDetail";
import Footer from "../../Footer";

function PHPBlog() {
  return (
    <div>
      <PHPBlogNav />
      <PHPBlogDetail />
      <Footer />
    </div>
  );
}

export default PHPBlog;
