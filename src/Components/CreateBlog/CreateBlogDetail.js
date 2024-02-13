import React, { useState } from "react";

const initialPost = {
  title: "",
  description: "",
  picture: "",
  username: "admin",
  category: "category",
  created_at: new Date(),
};

function CreateBlogDetail() {
  const [post, setPost] = useState(initialPost);
  const [showFileInput, setShowFileInput] = useState(false);
  // Inside CreateBlogDetail component
  const handlePublishClick = async () => {
    try {
      const response = await fetch("http://localhost:3004/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log("Post published successfully");
      } else {
        // Handle error, e.g., show an error message
        console.error("Error publishing post");
      }
    } catch (error) {
      console.error("Error publishing post:", error);
    }
  };

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPost({
        ...post,
        picture: imageUrl,
      });
    }
  };

  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=8";

  const handleFileIconClick = () => {
    setShowFileInput(true);
  };

  return (
    <div>
      {/* <!-- Blog Start --> */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5" id="blog">
            <div className="col-lg-8">
              {/* <!-- Blog Detail Start --> */}
              <div className="mb-5">
                <img
                  className="img-fluid w-100 rounded mb-5"
                  src={post.picture || url}
                  alt="error"
                />

                <div className="col- d-flex newBlog">
                  <label htmlFor="fileInput" style={{ marginTop: "-20px" }}>
                    {" "}
                    <i
                      className="bi bi-plus-circle-fill"
                      style={{ fontSize: "2rem", cursor: "pointer" }}
                      onClick={handleFileIconClick}
                    ></i>
                  </label>{" "}
                  {showFileInput && (
                    <input
                      type="file"
                      id="fileInput"
                      className="fileinput"
                      style={{ display: "none" }}
                      onChange={handleFileInputChange}
                    />
                  )}
                  <h1 className="mb-4">
                    <input
                      type="text"
                      className="form-control bg-white border-0"
                      placeholder="title"
                      style={{
                        height: "55px",
                        marginLeft: "29px",
                        marginTop: "-26px",
                        width: "70vh",
                        fontSize: "25px",
                      }}
                      value={post.title} // Bind to post.title
                      onChange={(e) =>
                        setPost({ ...post, title: e.target.value })
                      }
                      name="title"
                    />
                  </h1>
                  <button
                    className="btn btn-primary px-4 "
                    id="blog-btn"
                    onClick={handlePublishClick}
                  >
                    Publish
                  </button>
                </div>

                <div className="col-12">
                  <textarea
                    className="form-control bg-white border-0"
                    rows="5"
                    placeholder="Content"
                    name="description"
                    value={post.description} // Bind to post.description
                    onChange={(e) =>
                      setPost({ ...post, description: e.target.value })
                    }
                  ></textarea>
                </div>
              </div>
              {/* <!-- Blog Detail End --> */}
            </div>
            {/* <!-- Sidebar Start --> */}
            <div className="col-lg-4">
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
                    href="/healthcare-software-development"
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
            </div>
            {/* <!-- Sidebar End --> */}
          </div>
        </div>
      </div>
      {/* <!-- Blog End --> */}
    </div>
  );
}

export default CreateBlogDetail;
