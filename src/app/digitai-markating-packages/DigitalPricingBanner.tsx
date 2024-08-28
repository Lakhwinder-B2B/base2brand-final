"use client";
import { useState } from "react";
import BannerImage from "../../../public/img/digitai-markating-packags/digitai-markating-packagsbanner.svg";
import Image from "next/image";

const DigitalPricing = () => {
  // State for form visibility (initially hidden)
  const [submitform, setSubmit] = useState(false);

  // State for form validation errors
  const [error, setError] = useState({
    name: false,
    email: false,
    phone: false,
  });

  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle form data changes
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Reset error for the field that's being changed
    setError((prev) => ({
      ...prev,
      [name]: value === "",
    }));
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Validate form fields
    const newError = {
      name: formData.name === "",
      email: formData.email === "",
      phone: formData.phone === "",
    };

    // Update the error state
    setError(newError);

    // Check if all required fields are filled
    if (!newError.name && !newError.email && !newError.phone) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      console.log("Form submitted successfully:", formData);
      // Optionally hide the form after successful submission
      setSubmit(false);
    } else {
      console.log("Please fill in all required fields.");
    }
  }

  return (
    <>
      <section
        className="Shopify-Pricing-Banner header-padding"
        style={{
          backgroundImage: `url(${BannerImage.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "80% 90%",
        }}
      >
        <div className="b2b-container-lg">
          <div className="row align-items-center justify-content-between pt-lg-3 pb-lg-5 pt-3 pb-4">
            <div className="col-sm-1 col-md-12 col-lg-6 col-xl-6">
              <div className="pricing-shopifty-page">
                <h1 className="gk-sub-heading text-white">
                  Award Winning Digital Marketing Company in India
                </h1>
                <p className="b2b-sub-text">
                  Base2Brand is a leading digital marketing company in India
                  with professionals with more than 10 years of experience in
                  digital marketing services.
                </p>
              </div>
              <button className="gk-b2b-btn b2b-btn-sm mt-3 m-0">
                <a
                  href="https://wa.me/+918360116967?text=Hello%20there!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Let’s Talk
                </a>
              </button>
            </div>

            {/* Conditionally render the form based on submitform state */}

            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-5 pt-4 pt-lg-0">
              <div
                className="p-20px bg-white"
                style={{
                  borderRadius: "20px",
                }}
              >
                <div className="p-lg-4 p-4">
                  <h3 className="b2b-sub-heading text-black">
                    Submit Details Below To Get A Call Back
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="text-black mb-2">
                        Name<span style={{ color: "red" }}> *</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        className="form-control w-100"
                        style={{
                          padding: "10px",
                          borderStyle: "none",
                          border: "1px solid",
                          borderColor: error.name ? "red" : "#ced4da",
                        }}
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {error.name && (
                        <span
                          className="required-text"
                          style={{ color: "red" }}
                        >
                          Please Enter your Name
                        </span>
                      )}
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <div className="flex-fill">
                        <label htmlFor="email" className="text-black mb-2">
                          Email<span style={{ color: "red" }}> *</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          className="form-control w-100"
                          style={{
                            padding: "10px",
                            borderStyle: "none",
                            border: "1px solid",
                            borderColor: error.email ? "red" : "#ced4da",
                          }}
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {error.email && (
                          <span
                            className="required-text"
                            style={{ color: "red" }}
                          >
                            Please Enter a valid Email
                          </span>
                        )}
                      </div>
                      <div className="ms-2 flex-fill">
                        <label htmlFor="phone" className="text-black mb-2">
                          Phone Number<span style={{ color: "red" }}> *</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="number"
                          placeholder="Enter your number"
                          className="form-control w-100"
                          style={{
                            padding: "10px",
                            borderStyle: "none",
                            border: "1px solid",
                            borderColor: error.phone ? "red" : "#ced4da",
                          }}
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        {error.phone && (
                          <span
                            className="required-text"
                            style={{ color: "red" }}
                          >
                            Please Enter your Number
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="text-black mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Give us a small brief about your project"
                        className="form-control w-100"
                        style={{
                          height: "150px",
                          padding: "10px",
                          borderStyle: "none",
                          border: "1px solid #ced4da",
                        }}
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="gk-b2b-btn b2b-btn-sm mt-3"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalPricing;
