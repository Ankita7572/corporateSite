import React from "react";

function AboutMission() {
  return (
    <div>
      {/* our Mission Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-5" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src="img/ourmission.jpg"
                  style={{ objectFit: "cover" }}
                  alt="error"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h1 className="fw-bold text-primary text-uppercase">
                  Our Mission
                </h1>
                <h3 className="mb-0">The Best IT Solution</h3>
              </div>

              <div
                className="d-flex align-items-center mb-4 wow fadeIn"
                data-wow-delay="0.6s"
              >
                <h5 className="mb-4">
                  With the mission of providing all possible services in the
                  area we work in, we have aimed to double our area of operation
                  and have evaluated plans to make this happen as soon as 2025.
                  But we cannot do that solely at our end, we need the
                  cooperation of our developers, honest clients, our global
                  partners, and our competitors. Together we can make our
                  philosophy of growing together come to live.
                </h5>
              </div>
              <div
                className="d-flex align-items-center mb-4 wow fadeIn"
                data-wow-delay="0.6s"
              >
                <h5 className="mb-4">
                  Our aims are high and so are our hopes. With the cooperation
                  of everybody in our industry and the help of others we aim at
                  multiplying our services not only in numbers but also to
                  different geographical locations. We at Incredere Services
                  very strongly believe in scaling anything that you work on and
                  so we lay huge stress on scaling our services by quality and
                  quantity.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our Mission End */}
    </div>
  );
}

export default AboutMission;
