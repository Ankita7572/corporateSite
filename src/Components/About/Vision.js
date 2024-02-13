import React from "react";

function Vision() {
  return (
    <div>
      {/* our Vision Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-5" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src="img/vision.jpg"
                  style={{ objectFit: "cover" }}
                  alt="error"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h1 className="fw-bold text-primary text-uppercase">
                  Our Vision
                </h1>
                <h3 className="mb-0">The Best IT Solution</h3>
              </div>

              <div
                className="d-flex align-items-center mb-4 wow fadeIn"
                data-wow-delay="0.6s"
              >
                <h5 className="mb-4">
                  Our vision is to become one of the most affordable and
                  preferred partners for various businesses when it comes to
                  developing technological tools for their businesses. Our
                  vision is to offer tools that can revolutionize the way that
                  particular business operates after inculcating our tools.
                  Keeping in mind this vision, Incredere Services aims at
                  delivering more than we promise and strives to establish a
                  culture in the service sector that benefits both parties. With
                  the vision of serving more clients over the next couple of
                  years, we also want to increase the quality of work that is
                  delivered by our developers.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our vision End */}
    </div>
  );
}

export default Vision;
