"use client";
import { useState } from "react";
import Image from "next/image";
import callto from "../../../public/img/logo/logo2.svg";
import mailto from "../../../public/img/logo/logo3.svg";
import location from "../../../public/img/logo/logo1.svg";

const ContactFormFooter = ({ param }) => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // State for form validation errors
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  // Handle form data changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Reset error for the field that's being changed
    if (value) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form fields
    const newErrors = {
      name: formData.name === "",
      email: formData.email === "",
      phone: formData.phone === "",
    };

    setErrors(newErrors);

    // Check if all required fields are filled
    if (!newErrors.name && !newErrors.email && !newErrors.phone) {
      console.log("Form submitted successfully:", formData);
    } else {
      console.log("Please fill in all required fields.");
    }
  };

  return (
    <section className="gk-bg-Contact pt-5 pb-5">
      <div className="b2b-container-lg ">
        <h2 className="gk-heading-bold text-center m-auto gk-width">
          Ready to Boost Your Digital Growth?
        </h2>
        <p className="b2b-sub-text text-center pt-3 pb-3 gk-width-lg">
          {param}
        </p>

        <div className="row ">
          {/* Form Section */}
          <div className="col-xl-6 bg-accodian gk-rounded">
            <div className="p-4 w-100">
              <h3 className="b2b-sub-heading text-white">
                Let’s Connect, Fill out the Form Given Below
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="text-white mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="form-control w-100"
                    style={{
                      padding: "10px",
                      borderStyle: "none",
                      border: "1px solid",
                    }}
                  />
                  {errors.name && <p className="text-danger">Name is required.</p>}
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                  <div className="me-md-2 flex-fill mb-3 mb-md-0">
                    <label htmlFor="email" className="text-white mb-2">
                      Email<span style={{ color: "red" }}> *</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="form-control w-100"
                      style={{
                        padding: "10px",
                        borderStyle: "none",
                        border: "1px solid",
                        borderColor: errors.name ? "red" : "#ced4da",
                      }}
                   
                     
                    />
                    {errors.email && <p className="text-danger">Email is required.</p>}
                  </div>
                  <div className="ms-md-2 flex-fill">
                    <label htmlFor="phone" className="text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your number"
                      className="form-control w-100"
                      style={{
                        padding: "10px",
                        borderStyle: "none",
                        border: "1px solid",
                        borderColor: errors.name ? "red" : "#ced4da",
                      }}
                    />
                    {errors.phone && <p className="text-danger">Phone number is required.</p>}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Give us a small brief about your project"
                    className="form-control w-100"
                    style={{
                      height: "150px",
                      padding: "10px",
                      borderStyle: "none",
                      border: "1px solid",
                    }}
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="gk-b2b-btn gk-bg-b2b-btn b2b-btn-sm mt-3 w-100"
                  >
                    Send Mail
                  </button>
                  <li className="whatsapp-btn">
                    <a href="https://wa.me/+918360116967?text=Hello%20there!">
                      <span>Send a WhatsApp Message</span>
                    </a>
                  </li>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info and Map Section */}
          <div
            className="col-xl-6 p-0"
            style={{
              background: "#000",
              borderRadius: "20px",
            }}
          >
            <div className="d-flex flex-column justify-content-between ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.793892497647!2d76.69216501500242!3d30.711216781650584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee55f17e093d%3A0xeb3482c7f127c305!2sF%2C%20209%2C%20Phase%208B%2C%20Industrial%20Area%2C%20Sector%2074%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20160074!5e0!3m2!1sen!2sin!4v1633794878721!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{
                  border: 0,
                  borderRadius: "20px",
                }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
              <div className="contact-info p-4 pt-5 d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3 mb-3 justify-content-start">
                  <Image className="Image-icon" src={callto} alt="Call Icon" />
                  <span className="gk-acco-text text-white">
                    <a href="tel:+9872487850" className="text-white">
                      +9872487850
                    </a>
                  </span>
                </div>
                <div className="d-flex align-items-center gap-3 mb-3 justify-content-start">
                  <Image className="Image-icon" src={mailto} alt="Mail Icon" />
                  <span className="gk-acco-text text-white">
                    <a href="mailto:hello@base2brand.com" className="text-white">
                      hello@base2brand.com
                    </a>
                  </span>
                </div>
                <div className="d-flex align-items-start gap-3 justify-content-start">
                  <Image
                    className="Image-icon"
                    src={location}
                    alt="Location Icon"
                  />
                  <span className="gk-acco-text text-white lg-w-65">
                    <a
                      href="https://www.google.com/maps/place/Base+2+Brand+Infotech+Pvt.+Ltd./@30.7112168,76.692165,17z/data=!4m15!1m8!3m7!1s0x390fee55f17e093d:0xeb3482c7f127c305!2sF,+209,+Phase+8B,+Industrial+Area,+Sector+74,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160074!3b1!8m2!3d30.7112168!4d76.692165!16s%2Fg%2F11vywjx481!3m5!1s0x390fef3d91f0cc77:0x214b2cbd35685f0d!8m2!3d30.7112168!4d76.692165!16s%2Fg%2F11r3l8std0?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white w-50"
                    >
                      F, 209, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160074
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormFooter;
