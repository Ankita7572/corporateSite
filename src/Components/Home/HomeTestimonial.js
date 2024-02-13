import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function HomeTestimonial() {
  const testimonialItems = [
    {
      name: "Sarah Lee",
      profession: "Teacher",
      content:
        "Great customer service, Social Media Marketing Company is professional and extremely serious about business. I have increased my revenue of my business.",
      imageSrc: "img/testimonial-1.jpg",
    },
    {
      name: "Jack Reacher",
      profession: "Student",
      content:
        "I have used Xtra Marketing for two of my businesses. They have helped me generate revenues of six figures from social media alone. I recommend them to all owners.",
      imageSrc: "img/testimonial2.jpg",
    },
    {
      name: "Young Man",
      profession: "Engineer",
      content:
        "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
      imageSrc: "img/testimonial-3.jpg",
    },
    {
      name: "Anny Disuza",
      profession: "General Manager",
      content:
        "We worked in the past with several companies from India, and we had always a hard time to align expectations. But I'm more than happy that I found you!",
      imageSrc: "img/testimonial-4.jpg",
    },
    {
      name: "David Atony",
      profession: "Spoke Person",
      content:
        "We thank Incredere Services for the wonderful job in helping us develop our program. Everyone was professional, excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future.",
      imageSrc: "img/testimonial-2.jpg",
    },
    // Add more testimonial items
  ];

  const options = {
    items: 1, // Number of slides to show
    margin: 10, // Space between slides
    autoplay: true,
    loop: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };

  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-4 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="fw-bold text-primary text-uppercase">Testimonial</h1>
          <h5 className="mb-0">
            What Our Clients Say About Our Digital Services
          </h5>
        </div>
        <div className="testimonial-carousel-wrapper">
          <OwlCarousel className="owl-theme testimonial-carousel" {...options}>
            {testimonialItems.map((item, idx) => (
              <div className="testimonial-item bg-light my-4" key={idx}>
                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img
                    className="img-fluid rounded"
                    src={item.imageSrc}
                    style={{ width: "60px", height: "60px" }}
                    alt={`img${idx + 1}`}
                  />
                  <div className="ps-4">
                    <h4 className="text-primary mb-1">{item.name}</h4>
                    <small className="text-uppercase">{item.profession}</small>
                  </div>
                </div>
                <div className="pt-4 pb-5 px-5">{item.content}</div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}

export default HomeTestimonial;
