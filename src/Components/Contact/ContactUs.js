import React, { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

function ContactUs() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [captchaValue, setCaptchaValue] = useState(null); // To store the CAPTCHA value

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Form validation logic
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast.error("Please fill in all required fields");
      return; // Exit early if form fields are incomplete
    }
    if (!captchaValue) {
      toast.error("Please complete the CAPTCHA");
      return;
    }

    try {
      const response = await fetch("http://localhost:3004/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Contact-form sent successfully");
        toast.success("Contact-form sent successfully");
        // Clear the form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        console.error("Failed to Submit Form.");
        toast.error("Failed to send email");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred");
    }
  };

  const makeCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div>
      {/* <!-- Contact Start --> */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
            <h1 className="mb-0">
              If You Have Any Query, Feel Free To Contact Us
            </h1>
          </div>
          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div
                className="d-flex align-items-center wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div
                  className="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Call to ask any question</h5>
                  <h4
                    className="text-primary mb-0"
                    style={{ cursor: "pointer" }}
                    onClick={() => makeCall("+919377579349")}
                  >
                    {" "}
                    +91 93775 79349
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="d-flex align-items-center wow fadeIn"
                data-wow-delay="0.4s"
              >
                <div
                  className="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-envelope-open text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Email to get free quote</h5>
                  <h5 className="text-primary mb-0">
                    {" "}
                    info@incredereservices.com
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="d-flex align-items-center wow fadeIn"
                data-wow-delay="0.8s"
              >
                <div
                  className="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-map-marker-alt text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Visit our office</h5>
                  <h5 className="text-primary mb-0">
                    A1-406 Palladium Makarba Ahmedabad Gujarat 380051.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control border-0 bg-light px-4"
                      placeholder="Your Name"
                      style={{ height: "55px" }}
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email" // Use "email" as the name attribute
                      className="form-control border-0 bg-light px-4"
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="tel"
                      name="phone" // Use "phoneNumber" as the name attribute
                      className="form-control border-0 bg-light px-4"
                      placeholder="Your Mobile Number"
                      style={{ height: "55px" }}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      className="form-control border-0 bg-light px-4 py-3"
                      rows="4"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <ReCAPTCHA
                      sitekey="6Ld2WrcnAAAAAPUPdohp5qrkJOfkHqi9dzMrXDRm"
                      onChange={(value) => setCaptchaValue(value)}
                    />
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Submit Here
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
              <iframe
                className="position-relative rounded w-100 h-100"
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6687774450043!2d72.49909837452418!3d22.999204317201336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b5c22b67759%3A0xd94b95149f14b2c4!2sINCREDERE%20SERVICES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1691666951407!5m2!1sen!2sin"
                style={{ minHeight: "350px", border: "0" }}
                frameborder="0"
                allowFullScreen=""
                aria-hidden="false"
                loading="lazy"
                tabindex="0"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}

export default ContactUs;
