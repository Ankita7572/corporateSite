import React from "react";

function AboutUs() {
  return (
    <div>
      {/* About Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h1 className="fw-bold text-primary text-uppercase">
                  About Us
                </h1>
                <h3 className="mb-0">The Best IT Solution</h3>
              </div>
              <div
                className="d-flex align-items-center mb-4 wow fadeIn"
                data-wow-delay="0.6s"
              >
                <h5 className="mb-4">
                  Incredere Services is a renowned brand and is known for
                  providing the best quality software solution and related
                  services. Our aim is to deliver advanced-level solutions that
                  are innovative and client-centric. We have some of the best
                  developers in the industry who help our clients in developing
                  their cutting-edge technology that can be associated with
                  their businesses. Our developers are experienced and have
                  delivered a number of projects and have experience in working
                  with different clients in different situations.
                </h5>
              </div>
              <div
                className="d-flex align-items-center mb-4 wow fadeIn"
                data-wow-delay="0.6s"
              >
                <h5 className="mb-4">
                  Having experience of a number of years and excellent skills in
                  developing high-quality tools, we have served various
                  industries across different markets. This includes education,
                  travel, health care, banking, entertainment, and telecom.
                  Today we have gained this important experience that we believe
                  is very essential for any company to operate for a longer time
                  in this industry. So, we believe in helping others with the
                  experience we have gained so that others could also scale, and
                  grow substantially.
                </h5>
              </div>
            </div>
            <div className="col-lg-5" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src="img/aboutUs.jpg"
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

export default AboutUs;
