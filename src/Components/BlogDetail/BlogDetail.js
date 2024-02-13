import React from "react";
import BlogDetailNavbar from "./BlogDetailNavbar";
import Footer from "../Footer";
// import Blogs from "./Blogs";
import BlogItem from "./BlogItem";

function BlogDetail() {
  return (
    <div>
      <BlogDetailNavbar />
      <BlogItem />
      {/* <Blogs /> */}
      <Footer />
    </div>
  );
}

export default BlogDetail;
