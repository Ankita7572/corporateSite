import React from "react";
import CreateBlogNav from "./CreateBlogNav";
import Footer from "../Footer";
import CreateBlogDetail from "./CreateBlogDetail";

function CreateBlog() {
  return (
    <div>
      <CreateBlogNav />
      <CreateBlogDetail />
      <Footer />
    </div>
  );
}

export default CreateBlog;
