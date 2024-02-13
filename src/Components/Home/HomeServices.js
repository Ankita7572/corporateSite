import React from "react";

function HomeServices() {
  return (
    <div>
      {/* <!-- Service Start --> */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="fw-bold text-primary text-uppercase">
              Our Services
            </h1>
            <h5 className="mb-0">
              We create multiple solutions to match the diverse needs of our
              clients. Our developers implement the next-generation technologies
              and latest industry practices to deliver you a unique and robust
              solution.
            </h5>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i class="bi bi-phone-fill text-white"></i>
                </div>
                <h4 className="mb-3">VoIP Development</h4>
                <p className="m-0">
                  At Increder Services, we render advanced VoIP development
                  services that help you redefine client-servicing and inter
                  departmental communications.
                </p>
                <a className="btn btn-lg btn-primary rounded" href="/#">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="bi bi-app-indicator text-white"></i>
                </div>
                <h4 className="mb-3">Mobile Development</h4>
                <p className="m-0">
                  Be it iOS or Android, we have enormous expertise in leveraging
                  all platforms to create compelling mobile apps driven by
                  high-end features.
                </p>
                <a className="btn btn-lg btn-primary rounded" href="/#">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-code text-white"></i>
                </div>
                <h4 className="mb-3">Web Development</h4>
                <p className="m-0">
                  We render top-notch web development services to create
                  high-performing applications and websites while ensuring their
                  great user experience.
                </p>
                <a className="btn btn-lg btn-primary rounded" href="/#">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fab fa-android text-white"></i>
                </div>
                <h4 className="mb-3">Apps Development</h4>
                <p className="m-0">
                  Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                  ipsum dolore sed
                </p>
                <a className="btn btn-lg btn-primary rounded" href="/#">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-search text-white"></i>
                </div>
                <h4 className="mb-3">SEO Optimization</h4>
                <p className="m-0">
                  Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                  ipsum dolore sed
                </p>
                <a className="btn btn-lg btn-primary rounded" href="/#">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                <h3 className="text-white mb-3">Call Us For Quote</h3>
                <p className="text-white mb-3">
                  Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor
                  est magna stet eirmod
                </p>
                <h2 className="text-white mb-0">+012 345 6789</h2>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}
    </div>
  );
}

export default HomeServices;
