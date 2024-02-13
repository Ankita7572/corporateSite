import React, { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

function WordForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    coverLetter: "",
    resume: null,
    agreementChecked: false,
  });

  const [captchaValue, setCaptchaValue] = useState(null); // To store the CAPTCHA value

  // Create a ref for the file input
  const fileInputRef = useRef(null);

  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;
    const newValue =
      type === "checkbox" ? checked : type === "file" ? files[0] : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Form validation logic
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.mobileNumber ||
      !formData.coverLetter
    ) {
      toast.error("Please fill in all required fields");
      return; // Exit early if form fields are incomplete
    }

    if (!captchaValue) {
      toast.error("Please complete the CAPTCHA");
      return;
    }
    
    const form = new FormData();
    form.append("fullName", formData.fullName);
    form.append("email", formData.email);
    form.append("mobileNumber", formData.mobileNumber);
    form.append("coverLetter", formData.coverLetter);
    form.append("resume", formData.resume); // Append the file here

    try {
      const response = await fetch("http://localhost:3004/submit-form", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        console.log("Email sent successfully");
        toast.success("Email sent successfully");
        // Clear the form after successful submission if needed
        setFormData({
          fullName: "",
          email: "",
          mobileNumber: "",
          coverLetter: "",
          resume: null,
          agreementChecked: false,
        });
        // Reset the file input value
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        console.error("Failed to send email");
        toast.error("Failed to send email");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred");
    }
  };

  return (
    <div>
      <div className="desc">
        <div
          className="d-flex align-items-center mb-4 wow zoomIn"
          data-wow-delay="0.6s"
          id="detail"
        >
          <h5>No. of openings:</h5>
        </div>
        <div
          className="d-flex align-items-center mb-4 wow zoomIn"
          data-wow-delay="0.6s"
          id="detail"
        >
          <p>1</p>
        </div>
        <div
          className="d-flex align-items-center mb-4 wow zoomIn"
          data-wow-delay="0.6s"
          id="detail"
        >
          <h5>Experince of Job :</h5>
        </div>
        <div
          className="d-flex align-items-center mb-4 wow zoomIn"
          data-wow-delay="0.6s"
          id="detail"
        >
          <p>3 to 5 Years</p>
        </div>
        <div
          className="d-flex align-items-center mb-4 wow zoomIn"
          data-wow-delay="0.6s"
          id="detail"
        >
          <h5 className="require ">Required Skill Set :</h5>
        </div>
        <div
          className="d-flex align-items-center mb-4 wow zoomIn"
          data-wow-delay="0.6s"
          id="detail"
        >
          <ul className="skill-list">
            <li>Strong knowledge of the WordPress core, hooks, and filters.</li>
            <li>
              Ability to create responsive and mobile-friendly designs using
              frameworks like Bootstrap or CSS Grid/Flexbox.
            </li>
            <li>
              Confidence in complex SQL Queries, both writing and understanding
            </li>
            <li>
              Experience with PHP frameworks (e.g., Laravel) or
              WordPress-specific frameworks (e.g., Timber).
            </li>
            <li>
              Knowledge of caching mechanisms, content delivery networks (CDNs),
              and browser rendering.
            </li>
            <li>
              Understanding of deployment workflows using tools like Git,
              GitHub, or Bitbucket.
            </li>
            <li>
              Experience integrating third-party APIs and services into
              WordPress sites.
            </li>
            <li>
              Proactive approach to staying up-to-date with the latest WordPress
              trends, updates, and technologies.
            </li>
            <li>
              Knowledge of CSS preprocessors (e.g., Sass) and modern CSS
              techniques.
            </li>
          </ul>
        </div>

        <div
          className="d-flex align-items-center mb-4 wow zoomIn"
          data-wow-delay="0.6s"
          id="detail"
        >
          <h5>Job Category :</h5>
        </div>
        <div
          className="d-flex align-items-center mb-4 wow zoomIn"
          data-wow-delay="0.6s"
          id="detail"
        >
          <p>WordPress Developer</p>
        </div>
        <div
          className="d-flex align-items-center mb-4 wow zoomIn"
          data-wow-delay="0.6s"
          id="detail"
        >
          <h5>Job Type :</h5>
        </div>
        <div
          className="d-flex align-items-center mb-4 wow zoomIn"
          data-wow-delay="0.6s"
          id="detail"
        >
          <p>Full Time</p>
        </div>
        <div
          className="d-flex align-items-center mb-4 wow zoomIn"
          data-wow-delay="0.6s"
          id="detail"
        >
          <h5>Job Location :</h5>
        </div>
        <div
          className="d-flex align-items-center mb-4 wow zoomIn"
          data-wow-delay="0.6s"
          id="detail"
        >
          <p>Ahmedabad</p>
        </div>
      </div>
      <div className="col-lg-5" id="form">
        <div
          className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn"
          data-wow-delay="0.9s"
        >
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="row g-3">
              <h1 className="fw-bold  text-uppercase">
                Apply for this Position
              </h1>
              <div className="col-xl-12">
                <h5 className="fw-bold " id="cv">
                  {" "}
                  Full Name *{" "}
                </h5>
                <input
                  type="text"
                  className="form-control bg-light border-0"
                  placeholder="Your Name"
                  style={{ height: "55px" }}
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <h5 className="fw-bold " id="cv">
                  {" "}
                  Email *{" "}
                </h5>
                <input
                  type="email"
                  className="form-control bg-light border-0"
                  placeholder="Your Email"
                  style={{ height: "55px" }}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <h5 className="fw-bold " id="cv">
                  {" "}
                  Moile Number *{" "}
                </h5>
                <input
                  type="tel"
                  className="form-control bg-light border-0"
                  placeholder="Your Moile Number"
                  style={{ height: "55px" }}
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <h5 className="fw-bold " id="cv">
                  {" "}
                  Cover letter *{" "}
                </h5>
                <textarea
                  className="form-control bg-light border-0"
                  rows="3"
                  placeholder="Cover letter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="col-12">
                <h5 className="fw-bold " id="cv">
                  {" "}
                  Upload CV/Resume *{" "}
                </h5>
                <input
                  type="file"
                  accept=".pdf"
                  className="form-control bg-light border-0"
                  style={{ height: "35px" }}
                  name="resume" // Add the name attribute
                  ref={fileInputRef}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label id="cv" style={{ color: "black", fontWeight: "600" }}>
                  <input type="checkbox" required /> By using this form you
                  agree with the storage and handling of your data by this
                  website.
                </label>
              </div>

              <div className="col-12">
                <ReCAPTCHA
                  sitekey="6Ld2WrcnAAAAAPUPdohp5qrkJOfkHqi9dzMrXDRm"
                  onChange={(value) => setCaptchaValue(value)}
                />
              </div>

              <div className="col-12">
                <button className="btn btn-dark  py-3 send" type="submit">
                  <b>Submit Here</b>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}

export default WordForm;
