import React from "react";

function HomeFeature() {
  return (
    <div>
      {/* Features Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="fw-bold text-primary text-uppercase">
              Why you should Hire Us
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                  <div
                    className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-cubes text-white"></i>
                  </div>
                  <h4>vast Industry Expertise</h4>
                  <p className="mb-0">
                    Be it VoIP development, web development, or mobile app
                    development, our team possesses extensive expertise in
                    creating a variety of solutions. We serve multiple
                    industries with our world-class services, including
                    healthcare, education, hospitality, etc.
                  </p>
                </div>
                <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                  <div
                    className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="bi bi-gear-fill text-white"></i>
                  </div>
                  <h4>Assured Quality</h4>
                  <p className="mb-0">
                    With years of experience in creating a range of solutions,
                    we deliver solutions with an assured guarantee. Our
                    developers create varieties of solutions for your business
                    while ensuring these are secure, scalable, and bug-free.
                  </p>
                </div>
                <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                  <div
                    className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-award text-white"></i>
                  </div>
                  <h4>Flexible Engagement Models</h4>
                  <p className="mb-0">
                    Irrespective of your business requirements, we cater to your
                    multiple requirements with our top-rated solutions. Our
                    flexible engagement model gives you a complete surety that
                    you will get the right solutions based on your business
                    needs.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4  wow zoomIn"
              data-wow-delay="0.9s"
              style={{ minHeight: "520px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.1s"
                  src="img/feature.jpg"
                  style={{ objectFit: "cover" }}
                  alt="error"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                  <div
                    className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="bi bi-shield-lock-fill text-white"></i>
                  </div>
                  <h4>Maintain Privacy & Security</h4>
                  <p className="mb-0">
                    We at Incredere Services understand our responsibility
                    toward customers and address all your privacy and security
                    concerns. We work as a reliable partner and develop
                    mind-blowing solutions for your business while prioritizing
                    your security.
                  </p>
                </div>
                <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                  <div
                    className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa bi bi-person-check-fill text-white"></i>
                  </div>
                  <h4>100% Customer Satisfaction</h4>
                  <p className="mb-0">
                    Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                    diam dolorWith years of experience in creating a range of
                    solutions, we deliver solutions with an assured guarantee.
                    Our developers create varieties of solutions for your
                    business while ensuring these are secure, scalable, and
                    bug-free.
                  </p>
                </div>
                <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                  <div
                    className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-phone-alt text-white"></i>
                  </div>
                  <h4>24/7 Support</h4>
                  <p className="mb-0">
                    Our 24/7 availability gives you an impeccable chance to
                    resolve all your important queries. We are not only
                    concerned about developing your products but also resolving
                    your important queries. We offer real-time support to
                    resolve your queries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}
    </div>
  );
}

export default HomeFeature;
