import React, { useState } from "react";

function Job() {
  const [isJobListOpen, setJobListOpen] = useState(false);

  const toggleJobList = () => {
    setJobListOpen(!isJobListOpen);
  };

  return (
    <div>
      <div
        className="container-fluid py-5 wow fadeInUp"
        data-wow-delay="0.1s"
        id="privacy"
      >
        <div className="container py-5">
          <div
            className="section-title  position-relative pb-3 mb-4 mx-auto"
            style={{ maxWidth: "600px" }}
            id="detail_line"
          >
            <h1 className="fw-bold text-primary text-uppercase">
              Job Openings
            </h1>
          </div>
          <div
            className="d-flex align-items-center mb-4 wow fadeIn"
            data-wow-delay="0.6s"
          >
            <nav className="job">
              <div className="job-menu" onClick={toggleJobList}>
                <div>
                  <h6>Filter by</h6>
                  <i
                    className={`bi bi-list-ul ${isJobListOpen ? "active" : ""}`}
                  ></i>
                </div>
              </div>
              <ul className={`job-list ${isJobListOpen ? "open" : ""}`}>
                <li className="job-item">
                  <a href="/#" className="nav-link " data-bs-toggle="dropdown">
                    <span className="link-content">All Job Category</span>
                    <i className="bi bi-caret-down-fill" id="li-item"></i>
                  </a>
                  <div className="dropdown-menu m-0" id="list-item">
                    <a href="/Net-developer" className="dropdown-item">
                      .NET
                    </a>
                    <a href="/android-developer" className="dropdown-item">
                      ANDROID
                    </a>
                    <a href="/iOS-developer" className="dropdown-item">
                      IOS
                    </a>
                    <a href="/PHP-developer" className="dropdown-item">
                      PHP
                    </a>
                    <a href="/SEO-developer" className="dropdown-item">
                      SEO
                    </a>
                    <a href="/wordpress-developer" className="dropdown-item">
                      WORDPRESS
                    </a>
                  </div>
                </li>
                <li className="job-item">
                  <a href="/#" className="nav-link " data-bs-toggle="dropdown">
                    All Job Type
                    <i className="bi bi-caret-down-fill" id="li-item"></i>
                  </a>
                  <div className="dropdown-menu m-0" id="list-item">
                    <h4 className="dropdown-item">All Job Type</h4>
                    <h4 className="dropdown-item">Full Time</h4>
                  </div>
                </li>
                <li className="job-item">
                  <a href="/#" className="nav-link " data-bs-toggle="dropdown">
                    All Job Location
                    <i className="bi bi-caret-down-fill" id="li-item"></i>
                  </a>
                  <div className="dropdown-menu m-0" id="list-item">
                    <h4 className="dropdown-item">All Job Location</h4>
                    <h4 className="dropdown-item">Ahmedabad</h4>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div
        className="d-flex align-items-center mb-4 wow fadeIn"
        data-wow-delay="0.6s"
        style={{ justifyContent: "center" }}
      >
        <nav
          className="jobinfo"
          style={{ maxWidth: "600px", marginTop: "-30px" }}
        >
          <ul className="jobinfo-list">
            <li className="jobinfo-item">
              <h5>Junior SEO</h5>
              <div className="jobinfo-detail">
                <p>SEO Ahmedabad</p>
                {/* <p>Ahmedabad</p> */}
                <a href="/SEO-developer">
                  More Detail
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </li>
            <li className="jobinfo-item">
              <h5>WordPress developer</h5>
              <div className="jobinfo-detail">
                <p>WORDPRESS</p>
                <p>Ahmedabad</p>
                <a href="/wordpress-developer">
                  More Detail
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </li>
            <li className="jobinfo-item">
              <h5>.Net Developer</h5>
              <div className="jobinfo-detail">
                <p>.NET</p>
                <p>Ahmedabad</p>
                <a href="/Net-developer">
                  More Detail
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </li>
            <li className="jobinfo-item">
              <h5>ios developer</h5>
              <div className="jobinfo-detail">
                <p>IOS</p>
                <p>Ahmedabad</p>
                <a href="/iOS-developer">
                  More Detail
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </li>
            <li className="jobinfo-item">
              <h5>Android</h5>
              <div className="jobinfo-detail">
                <p>ANDROID</p>
                <p>Ahmedabad</p>
                <a href="/android-developer">
                  More Detail
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </li>
            <li className="jobinfo-item">
              <h5>PHP Developer</h5>
              <div className="jobinfo-detail">
                <p>PHP</p>
                <p>Ahmedabad</p>
                <a href="/PHP-developer">
                  More Detail
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Job;
