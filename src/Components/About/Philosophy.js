import React from "react";

function Philosophy() {
  return (
    <div>
      {/* Our Philosophy Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h1 className="fw-bold text-primary text-uppercase">
                  Our philosophy
                </h1>
                <h3 className="mb-0">The Best IT Solution</h3>
              </div>
              <div
                className="d-flex align-items-center mb-4 wow fadeIn"
                data-wow-delay="0.6s"
              >
                <h5 className="mb-4">
                  Keeping in mind the thought ‘ let us all grow together’ we
                  tend to establish a healthy relationship that makes everybody
                  in our vicinity grow substantially and work harder. We have
                  worked very hard to keep this thought of us alive and have
                  worked to make it a success. We would also like to express our
                  gratitude towards our clients who trusted us and believed in
                  our potential. If it hadn’t been for the trust of our clients,
                  we wouldn’t have survived in this competitive market this
                  long. We seek the cooperation of everybody who has been
                  connected with us in some or the other way to help us in
                  making our philosophy become a real thing.
                </h5>
              </div>
            </div>
            <div className="col-lg-5" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src="img/6779.jpg"
                  style={{ objectFit: "cover" }}
                  alt="error"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Philosophy End */}
    </div>
  );
}

export default Philosophy;
