import React from "react";

function HomeAbout() {
  return (
    <div>
      {/* About Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary text-uppercase">
                  About Us
                </h5>
                <h1 className="mb-0">The Best IT Solution</h1>
              </div>
              <p className="mb-4">
                Incredere Services is a renowned brand and is known for
                providing the best quality software solution and related
                services. Our aim is to deliver advanced-level solutions that
                are innovative and client-centric. We have some of the best
                developers in the industry who help our clients in developing
                their cutting-edge technology that can be associated with their
                businesses. Our developers are experienced and have delivered a
                number of projects and have experience in working with different
                clients in different situations.
              </p>
              <div className="row g-0 mb-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3"></i> Vast
                    industry
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3"></i>
                    100% Customer Satisfaction
                  </h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3"></i>Flexible
                    Engagement Models
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3"></i>Maintain
                    Privacy & Security
                  </h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3"></i> Assured
                    Quality
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3"></i>
                    24/7 Presence
                  </h5>
                </div>
              </div>
              <div
                className="d-flex align-items-center mb-4 wow fadeIn"
                data-wow-delay="0.6s"
              >
                <div
                  className="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Call to ask any question</h5>
                  <h4 className="text-primary mb-0"> +91 93775 79349</h4>
                </div>
              </div>
              <a
                href="/contact"
                className="btn btn-primary py-3 px-5 mt-3 wow zoomIn"
                data-wow-delay="0.9s"
              >
                Contact Us
              </a>
            </div>
            <div className="col-lg-5" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src="img/about.jpg"
                  style={{ objectFit: "cover" }}
                  alt="error"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </div>
  );
}

export default HomeAbout;
