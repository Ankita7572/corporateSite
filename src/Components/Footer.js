import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const makeCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div>
      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid bg-dark text-light mt-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-6 footer-about">
              <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                <a href="/" className="navbar-brand">
                  <h1 className="m-0 text-white">
                    <img
                      className="footerlogo"
                      src="img/incredere.png"
                      alt="error"
                    />
                  </h1>
                </a>
                <p className="mt-3 mb-4">
                  Incredere Services is a renowned brand and is known for
                  providing the best quality software solution and related
                  services. Our aim is to deliver advanced-level solutions that
                  are innovative and client-centric. We have some of the best
                  developers in the industry who help our clients in developing
                  their cutting-edge technology that can be associated with
                  their businesses.
                </p>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <div className="col-lg-4 col-md-12 pt-5 mb-5" id="f-space">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Get In Touch</h3>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-primary me-2"></i>
                    <p className="mb-0">
                      A1-406 Palladium Makarba Ahmedabad Gujarat 380051.
                    </p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-primary me-2"></i>
                    <p className="mb-0"> info@incredereservices.com</p>
                  </div>
                  <div
                    className="d-flex mb-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => makeCall("+919377579349")}
                  >
                    <i className="bi bi-telephone text-primary me-2"></i>
                    <p className="mb-0">+91 93775 79349</p>
                  </div>
                  <div
                    className="d-flex mb-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => makeCall("+17163511459")}
                  >
                    <i className="bi bi-telephone text-primary me-2"></i>
                    <p className="mb-0">+1 716 351 1459</p>
                  </div>
                  <div className="d-flex mt-4">
                    <a
                      className="btn btn-primary btn-square me-2"
                      href="https://twitter.com/Increderes"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter fw-normal"></i>
                    </a>
                    <a
                      className="btn btn-primary btn-square me-2"
                      href="https://www.facebook.com/incredereservices"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f fw-normal"></i>
                    </a>
                    <a
                      className="btn btn-primary btn-square me-2"
                      href="https://www.linkedin.com/company/incredere-services/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in fw-normal"></i>
                    </a>
                    <a
                      className="btn btn-primary btn-square"
                      href="https://www.instagram.com/incredereservices/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram fw-normal"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5" id="f-space1">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Quick Links</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    <a className="text-light mb-2" href="/">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Home
                    </a>
                    <a className="text-light mb-2" href="/about">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      About Us
                    </a>
                    <a className="text-light mb-2" href="/job">
                      <i className="bi bi-arrow-right text-primary me-2"></i>Our
                      Career
                    </a>
                    <a className="text-light mb-2" href="/blogDetail">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Blog
                    </a>
                    <a className="text-light mb-2" href="/privacy-policy">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Privacy
                    </a>
                    <a className="text-light" href="/contact">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-white"
        style={{ background: "#061429" }}
      >
        <div className="container text-center">
          <div className="row justify-content-end">
            <div className="col-lg-8 col-md-6">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "75px" }}
              >
                <p className="mb-0">
                  &copy;{" "}
                  <a className="text-white border-bottom" href="/#">
                    2023 Incredere Services
                  </a>
                  . All Rights Reserved.
                  {/* <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
      <button
        className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"
        onClick={scrollToTop}
      >
        <i className="bi bi-arrow-up"></i>
      </button>
    </div>
  );
};

export default Footer;
