import React from "react";
import Footer from "../Footer";
import NetForm from "./NetForm";
import NetNavbar from "./NetNavbar";

function NetJob() {
  return (
    <div>
      <NetNavbar />
      <NetForm />

      <Footer />
      <a
        href="/Net-developer"
        className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}

export default NetJob;
