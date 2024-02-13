import React from "react";

function IVRNav() {
  return (
    <div>
      {/* <!-- Navbar Start --> */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
          <a href="/" className="navbar-brand p-0">
            <h1 className="m-0">
              <img className="logo" src="img/increderes.png" alt="error" />
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <div className="nav-item dropdown">
                <a
                  href="/#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Staff Augmentation
                </a>
                <div className="dropdown-menu m-0">
                  <a href="VoIP-Development-service" className="dropdown-item">
                    VoIP Development
                  </a>
                  <a
                    href="/Python-Development-service"
                    className="dropdown-item"
                  >
                    Python Development
                  </a>
                  <a href="/PHP-Development-service" className="dropdown-item">
                    PHP Development
                  </a>
                  <a
                    href="/ReactNative-Development-service"
                    className="dropdown-item"
                  >
                    React Native Development
                    <p>Services</p>
                  </a>
                  <a
                    href="/ReactJS-Development-service"
                    className="dropdown-item"
                  >
                    React JS Development
                    <p>Services</p>
                  </a>
                  <a
                    href="/NodeJS-development-service"
                    className="dropdown-item"
                  >
                    Node JS Development
                    <p>Services</p>
                  </a>
                  <a href="/IOS-Development-service" className="dropdown-item">
                    iOS App Development
                  </a>
                  <a
                    href="/mobile-Development-service"
                    className="dropdown-item"
                  >
                    Mobile App Development
                  </a>
                  <a href="/Web-Development-service" className="dropdown-item">
                    Web Development
                    <p>Services</p>
                  </a>
                  <a
                    href="/DevOps-Development-service"
                    className="dropdown-item"
                  >
                    DevOps Development
                  </a>
                  <a href="/Net-development-service" className="dropdown-item">
                    .NET Development
                  </a>
                  <a href="/Ruby-on-Rails-service" className="dropdown-item">
                    Ruby on Rails
                  </a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  href="/#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Services
                </a>
                <div className="dropdown-menu m-0">
                  <a
                    href="/asterisk-development-services"
                    className="dropdown-item"
                  >
                    Asterisk Development
                    <p>Services</p>
                  </a>
                  <a
                    href="/call-center-solution-services"
                    className="dropdown-item"
                  >
                    Call Center Solution
                  </a>
                  <a href="/ivr-solution-services" className="dropdown-item">
                    IVR Solutions
                  </a>
                  <a href="/ip-pbx-solution" className="dropdown-item">
                    IP PBX
                  </a>
                  <a
                    href="/freeSwitch-development-services"
                    className="dropdown-item"
                  >
                    FreeSwitch Development
                    <p>Services</p>
                  </a>
                  <a
                    href="/kamailio-development-services"
                    className="dropdown-item"
                  >
                    Kamailio Development
                    <p>Services</p>
                  </a>
                  <a href="/voip-billing-services" className="dropdown-item">
                    VoIP Billing
                  </a>
                  <a
                    href="/e-commerce-development-services"
                    className="dropdown-item"
                  >
                    E-commerce Development
                    <p>Services</p>
                  </a>
                </div>
              </div>

              <div className="nav-item dropdown">
                <a
                  href="/#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Company
                </a>
                <div className="dropdown-menu m-0">
                  <a href="/about" className="dropdown-item">
                    About Us
                  </a>
                  <a href="/job" className="dropdown-item">
                    Career
                  </a>
                  <a href="/blogDetail" className="dropdown-item">
                    Blog
                  </a>
                  <a href="/privacy-policy" className="dropdown-item">
                    Privacy
                  </a>
                  <a href="/contact" className="dropdown-item">
                    Contact Us
                  </a>
                </div>
              </div>

              <a href="/contact" className="nav-item nav-link">
                Get in Touch
              </a>
            </div>
          </div>
        </nav>

        <div
          className="container-fluid bg-primary py-5 bg-header"
          style={{ marginBottom: "90px" }}
        >
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">
                IVR solutions
              </h1>
              <a href="/" className="h5 text-white">
                Home
              </a>
              <i className="far fa-circle text-white px-2"></i>
              <a href="/ivr-solution-services" className="h5 text-white">
                IVR solutions
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Navbar End --> */}
    </div>
  );
}

export default IVRNav;
