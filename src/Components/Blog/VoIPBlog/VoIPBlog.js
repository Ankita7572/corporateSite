import React from "react";
import VoIPBLogNav from "./VoIPBLogNav";
import VoIPBlogDetail from "./VoIPBlogDetail";
import Footer from "../../Footer";

function VoIPBlog() {
  return (
    <div>
      <VoIPBLogNav />
      <VoIPBlogDetail />
      <Footer />
    </div>
  );
}

export default VoIPBlog;
