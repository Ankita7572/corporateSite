import React from "react";

function HomeBlog() {
  return (
    <div>
      {/* <!-- Blog Start --> */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
            <h1 className="mb-0">
              Read The Latest Articles from Our Blog Post
            </h1>
          </div>
          {/* <Slider {...settings}> */}
          <div className="row g-5">
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <div className="blog-item bg-light rounded overflow-hidden">
                <div className="blog-img position-relative overflow-hidden">
                  <img
                    className="img-fluid"
                    src="img/Blog-Mobile-App.jpg"
                    alt="error"
                  />
                  <a
                    className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                    style={{ textDecoration: "none" }}
                    href="/mobile-application-for-your-business"
                  >
                    Mobile Development
                  </a>
                </div>
                <div className="p-4">
                  <div className="d-flex mb-3">
                    <small>
                      <i className="far fa-calendar-alt text-primary me-2"></i>
                      November 29, 2022
                    </small>
                  </div>
                  <h4 className="mb-3">
                    5 Reasons Why You Must Have A Mobile Application For Your
                    Business
                  </h4>
                  <p>Did you know that more than 40% of small companies</p>
                  <a
                    className="text-uppercase"
                    href="/mobile-application-for-your-business"
                  >
                    Read More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
              <div className="blog-item bg-light rounded overflow-hidden">
                <div className="blog-img position-relative overflow-hidden">
                  <img
                    className="img-fluid"
                    src="img/BlogVoIP.jpg"
                    alt="error"
                  />
                  <a
                    className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                    style={{ textDecoration: "none" }}
                    href="/voip-related-blog"
                  >
                    VoIP Development
                  </a>
                </div>
                <div className="p-4">
                  <div className="d-flex mb-3">
                    <small>
                      <i className="far fa-calendar-alt text-primary me-2"></i>
                      September 29,2022
                    </small>
                  </div>
                  <h4 className="mb-3"> What is VoIP and how does it Work</h4>
                  <p>
                    In today's technological world, Internet users are
                    increasing at a
                  </p>
                  <a className="text-uppercase" href="/voip-related-blog">
                    Read More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
              <div className="blog-item bg-light rounded overflow-hidden">
                <div className="blog-img position-relative overflow-hidden">
                  <img
                    className="img-fluid"
                    src="img/BlogSoftware.jpg"
                    alt="error"
                  />
                  <a
                    className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4 "
                    style={{ textDecoration: "none" }}
                    href="/choose-custom-software-development-company"
                  >
                    Web Development
                  </a>
                </div>
                <div className="p-4">
                  <div className="d-flex mb-3">
                    <small>
                      <i className="far fa-calendar-alt text-primary me-2"></i>
                      September 17, 2022
                    </small>
                  </div>
                  <h4 className="mb-3">
                    Why Does Your Business Require Custom Software Development?
                  </h4>
                  <p>
                    In today's fast-paced and tech-savvy world, organizations
                    rely heavily on
                  </p>
                  <a
                    className="text-uppercase"
                    href="/choose-custom-software-development-company"
                  >
                    Read More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* </Slider> */}
        </div>
      </div>
      {/* <!-- Blog Start --> */}
    </div>
  );
}

export default HomeBlog;
