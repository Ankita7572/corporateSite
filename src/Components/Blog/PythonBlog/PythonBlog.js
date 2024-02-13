import React from "react";
import PythonBlogNav from "./PythonBlogNav";
import PythonBlogDetail from "./PythonBlogDetail";
import Footer from "../../Footer";

function PythonBlog() {
  return (
    <div>
      <PythonBlogNav />
      <PythonBlogDetail />
      <Footer />
    </div>
  );
}

export default PythonBlog;
