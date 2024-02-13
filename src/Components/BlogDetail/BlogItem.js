import React from "react";
import { Link } from "react-router-dom";

function BlogItem() {
  return (
    <div>
      {/* <!-- Blog Start --> */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            {/* <!-- Blog list Start --> */}
            <div className="col-lg-8">
              <div className="row g-5">
                <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img
                        className="img-fluid"
                        src="img/Blogphp.jpg"
                        alt="error"
                      />
                      <a
                        className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                        href="/php-features"
                      >
                        PHP
                      </a>
                    </div>
                    <div className="p-4">
                      <div className="d-flex mb-3">
                        <small className="me-3">
                          <i className="far fa-user text-primary me-2"></i>
                          Admin
                        </small>
                        <small>
                          <i className="far fa-calendar-alt text-primary me-2"></i>
                          March 15, 2023
                        </small>
                      </div>
                      <h4 className="mb-3">
                        Top PHP Programming Language Features You Should Know
                      </h4>
                      <p>
                        PHP (Hypertext Preprocessor) is a general-purpose,
                        server-side programming language that
                      </p>
                      <a className="text-uppercase" href="/php-features">
                        Read More <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img
                        className="img-fluid"
                        src="img/BlogPython.jpg"
                        alt="error"
                      />
                      <a
                        className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                        href="/python-development-trends"
                      >
                        Python
                      </a>
                    </div>
                    <div className="p-4">
                      <div className="d-flex mb-3">
                        <small className="me-3">
                          <i className="far fa-user text-primary me-2"></i>
                          Admin
                        </small>
                        <small>
                          <i className="far fa-calendar-alt text-primary me-2"></i>
                          February 20, 2023
                        </small>
                      </div>
                      <h4 className="mb-3">
                        Top 7 Python Development Trends to Look Forward to in
                        2023
                      </h4>
                      <p>
                        Technology has evolved significantly in the past decade,
                        notably in
                      </p>
                      <a
                        className="text-uppercase"
                        href="/python-development-trends"
                      >
                        Read More <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img
                        className="img-fluid"
                        src="img/BlogHealthcare.jpg"
                        alt="error"
                      />
                      <a
                        className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                        href="/healthcare-software-development"
                      >
                        healthcare Software Development
                      </a>
                    </div>
                    <div className="p-4">
                      <div className="d-flex mb-3">
                        <small className="me-3">
                          <i className="far fa-user text-primary me-2"></i>
                          Admin
                        </small>
                        <small>
                          <i className="far fa-calendar-alt text-primary me-2"></i>
                          December 14, 2022
                        </small>
                      </div>
                      <h4 className="mb-3">
                        Importance of Healthcare Software Development
                      </h4>
                      <p>
                        The emergence of medical software solutions has brought
                        about a
                      </p>
                      <a
                        className="text-uppercase"
                        href="/healthcare-software-development"
                      >
                        Read More <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img
                        className="img-fluid"
                        src="img/Blog-Mobile-App.jpg"
                        alt="error"
                      />
                      <a
                        className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                        href="/mobile-application-for-your-business"
                      >
                        Mobile Application for Business
                      </a>
                    </div>
                    <div className="p-4">
                      <div className="d-flex mb-3">
                        <small className="me-3">
                          <i className="far fa-user text-primary me-2"></i>
                          Admin
                        </small>
                        <small>
                          <i className="far fa-calendar-alt text-primary me-2"></i>
                          November 29, 2022
                        </small>
                      </div>
                      <h4 className="mb-3">
                        {" "}
                        5 Reasons Why You Must Have A Mobile Application For
                        Your Business
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
                <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img
                        className="img-fluid"
                        src="img/BlogSoftware.jpg"
                        alt="error"
                      />
                      <a
                        className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                        href="/choose-custom-software-development-company"
                      >
                        Software development
                      </a>
                    </div>
                    <div className="p-4">
                      <div className="d-flex mb-3">
                        <small className="me-3">
                          <i className="far fa-user text-primary me-2"></i>
                          Admin
                        </small>
                        <small>
                          <i className="far fa-calendar-alt text-primary me-2"></i>
                          November 14, 2022
                        </small>
                      </div>
                      <h4 className="mb-3">
                        Reasons to Choose a Custom Software Development Company
                      </h4>
                      <p>
                        In today’s fast-paced and tech-savvy world,
                        organizations rely heavily on software to make things
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
                <div className="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img
                        className="img-fluid"
                        src="img/BlogmobileApp.jpg"
                        alt="error"
                      />
                      <a
                        className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                        href="/mobile-app-development-is-important"
                      >
                        Mobile App Development
                      </a>
                    </div>
                    <div className="p-4">
                      <div className="d-flex mb-3">
                        <small className="me-3">
                          <i className="far fa-user text-primary me-2"></i>
                          Admin
                        </small>
                        <small>
                          <i className="far fa-calendar-alt text-primary me-2"></i>
                          November 1, 2022
                        </small>
                      </div>
                      <h4 className="mb-3">
                        Why Mobile App Development is Important in Today’s Era?
                      </h4>
                      <p>Mobile apps are a great way for businesses to reach</p>
                      <a
                        className="text-uppercase"
                        href="/mobile-app-development-is-important"
                      >
                        Read More <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img
                        className="img-fluid"
                        src="img/BlogVoIP.jpg"
                        alt="error"
                      />
                      <a
                        className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                        href="/voip-related-blog"
                      >
                        VoIP development
                      </a>
                    </div>
                    <div className="p-4">
                      <div className="d-flex mb-3">
                        <small className="me-3">
                          <i className="far fa-user text-primary me-2"></i>
                          Admin
                        </small>
                        <small>
                          <i className="far fa-calendar-alt text-primary me-2"></i>
                          September 29, 2022
                        </small>
                      </div>
                      <h4 className="mb-3">
                        What is VoIP and how does it Work
                      </h4>
                      <p>
                        In today’s technological world, Internet users are
                        increasing at a
                      </p>
                      <a className="text-uppercase" href="/voip-related-blog">
                        Read More <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img
                        className="img-fluid"
                        src="img/BlogBusiness.jpg"
                        alt="error"
                      />
                      <a
                        className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                        href="/business-require-custom-software-development"
                      >
                        Custom Software Development
                      </a>
                    </div>
                    <div className="p-4">
                      <div className="d-flex mb-3">
                        <small className="me-3">
                          <i className="far fa-user text-primary me-2"></i>
                          Admin
                        </small>
                        <small>
                          <i className="far fa-calendar-alt text-primary me-2"></i>
                          September 17, 2022
                        </small>
                      </div>
                      <h4 className="mb-3">
                        Why Does Your Business Require Custom Software
                        Development?
                      </h4>
                      <p>
                        In today’s fast-paced and tech-savvy world,
                        organizations rely heavily on
                      </p>
                      <a
                        className="text-uppercase"
                        href="/business-require-custom-software-development"
                      >
                        Read More <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 wow slideInUp" data-wow-delay="0.1s">
                  <nav aria-label="Page navigation">
                    <ul className="pagination pagination-lg m-0">
                      <li className="page-item disabled">
                        <a
                          className="page-link rounded-0"
                          href="/#"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">
                            <i className="bi bi-arrow-left"></i>
                          </span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="/#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link rounded-0"
                          href="/#"
                          aria-label="Next"
                        >
                          <span aria-hidden="true">
                            <i className="bi bi-arrow-right"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* <!-- Blog list End --> */}

            {/* <!-- Sidebar Start --> */}
            <div className="col-lg-4">
              {/* <!-- Search Form Start --> */}
              <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                <Link to="/createblog">
                  <button className="btn btn-primary px-4">
                    <h4 className=" text-center">Create New Blog</h4>
                  </button>
                </Link>
              </div>
              {/* <!-- Search Form End --> */}

              {/* <!-- Category Start --> */}

              <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 className="mb-0">Categories</h3>
                </div>
                <div className="link-animated d-flex flex-column justify-content-start">
                  <a
                    className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                    href="/mobile-app-development-is-important"
                  >
                    <i className="bi bi-arrow-right me-2"></i>Mobile Development
                  </a>
                  <a
                    className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                    href="/choose-custom-software-development-company"
                  >
                    <i className="bi bi-arrow-right me-2"></i>Software
                    Development
                  </a>
                  <a
                    className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                    href="/voip-related-blog"
                  >
                    <i className="bi bi-arrow-right me-2"></i>VoIP Development
                  </a>
                  <a
                    className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                    href="/php-features"
                  >
                    <i className="bi bi-arrow-right me-2"></i>PHP Development
                  </a>
                  <a
                    className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                    href="/python-development-trends"
                  >
                    <i className="bi bi-arrow-right me-2"></i>Python Development
                  </a>
                </div>
              </div>

              {/* <!-- Category End --> */}

              {/* <!-- Recent Post Start --> */}
              <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 className="mb-0">Recent Post</h3>
                </div>
                <div className="d-flex rounded overflow-hidden mb-3">
                  <img
                    className="img-fluid"
                    src="img/Blogphp.jpg"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    alt="error"
                  />
                  <a
                    href="/php-features"
                    className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
                  >
                    Top PHP Programming Language Features You Should Know
                  </a>
                </div>
                <div className="d-flex rounded overflow-hidden mb-3">
                  <img
                    className="img-fluid"
                    src="img/BlogPython.jpg"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    alt="error"
                  />
                  <a
                    href="/python-development-trends"
                    className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
                  >
                    Top 7 Python Development Trends to Look Forward to in 2023
                  </a>
                </div>
                <div className="d-flex rounded overflow-hidden mb-3">
                  <img
                    className="img-fluid"
                    src="img/BlogHealthcare.jpg"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    alt="error"
                  />
                  <a
                    href="/#"
                    className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
                  >
                    Importance of Healthcare Software Development
                  </a>
                </div>
                <div className="d-flex rounded overflow-hidden mb-3">
                  <img
                    className="img-fluid"
                    src="img/Blog-Mobile-App.jpg"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    alt="error"
                  />
                  <a
                    href="/mobile-application-for-your-business"
                    className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
                  >
                    5 Reasons Why You Must Have A Mobile Application For Your
                    Business
                  </a>
                </div>
                <div className="d-flex rounded overflow-hidden mb-3">
                  <img
                    className="img-fluid"
                    src="img/BlogSoftware.jpg"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    alt="error"
                  />
                  <a
                    href="/choose-custom-software-development-company"
                    className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
                  >
                    Reasons to Choose a Custom Software Development Company
                  </a>
                </div>
                <div className="d-flex rounded overflow-hidden mb-3">
                  <img
                    className="img-fluid"
                    src="img/BlogmobileApp.jpg"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    alt="error"
                  />
                  <a
                    href="/mobile-app-development-is-important"
                    className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
                  >
                    Why Mobile App Development is Important in Today’s Era?
                  </a>
                </div>
                <div className="d-flex rounded overflow-hidden mb-3">
                  <img
                    className="img-fluid"
                    src="img/BlogVoIP.jpg"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    alt="error"
                  />
                  <a
                    href="/voip-related-blog"
                    className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
                  >
                    What is VoIP and how does it Work
                  </a>
                </div>
                <div className="d-flex rounded overflow-hidden mb-3">
                  <img
                    className="img-fluid"
                    src="img/BlogBusiness.jpg"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    alt="error"
                  />
                  <a
                    href="/business-require-custom-software-development"
                    className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
                  >
                    Why Does Your Business Require Custom Software Development?
                  </a>
                </div>
              </div>
              {/* <!-- Recent Post End --> */}

              {/* <!-- Image Start --> */}
              <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                <img
                  src="img/blog.jpg"
                  alt="error"
                  className="img-fluid rounded"
                />
              </div>
              {/* <!-- Image End --> */}

              {/* <!-- Tags Start --> */}
              {/* <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 className="mb-0">Tag Cloud</h3>
                </div>
                <div className="d-flex flex-wrap m-n1">
                  <a href="/#" className="btn btn-light m-1">
                    Design
                  </a>
                  <a href="/#" className="btn btn-light m-1">
                    Development
                  </a>
                  <a href="/#" className="btn btn-light m-1">
                    Marketing
                  </a>
                  <a href="/#" className="btn btn-light m-1">
                    SEO
                  </a>
                  <a href="/#" className="btn btn-light m-1">
                    Writing
                  </a>
                  <a href="/#" className="btn btn-light m-1">
                    Consulting
                  </a>
                  <a href="/#" className="btn btn-light m-1">
                    Design
                  </a>
                  <a href="/#" className="btn btn-light m-1">
                    Development
                  </a>
                  <a href="/#" className="btn btn-light m-1">
                    Marketing
                  </a>
                  <a href="/#" className="btn btn-light m-1">
                    SEO
                  </a>
                  <a href="/#" className="btn btn-light m-1">
                    Writing
                  </a>
                  <a href="/#" className="btn btn-light m-1">
                    Consulting
                  </a>
                </div>
              </div> */}
              {/* <!-- Tags End --> */}

              {/* <!-- Plain Text Start --> */}
              {/* <div className="wow slideInUp" data-wow-delay="0.1s">
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 className="mb-0">Plain Text</h3>
                </div>
                <div
                  className="bg-light text-center"
                  style={{ padding: "30px" }}
                >
                  <p>
                    Vero sea et accusam justo dolor accusam lorem consetetur,
                    dolores sit amet sit dolor clita kasd justo, diam accusam no
                    sea ut tempor magna takimata, amet sit et diam dolor ipsum
                    amet diam
                  </p>
                  <a href="/#" className="btn btn-primary py-2 px-4">
                    Read More
                  </a>
                </div>
              </div> */}
              {/* <!-- Plain Text End --> */}
            </div>
            {/* <!-- Sidebar End --> */}
          </div>
        </div>
      </div>
      {/* <!-- Blog End --> */}
    </div>
  );
}

export default BlogItem;
