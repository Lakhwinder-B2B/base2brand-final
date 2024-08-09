import React from "react";
import Image from "next/image";
import callto from "../../../public/img/CALLTO.svg";
import mailto from "../../../public/img/mailto.svg";
import location from "../../../public/img/location.svg";
import Link from "next/link";

const ContactWeb = () => {
  return (
    <>
      <section className="gk-bg-Contact pt-lg-5 pb-lg-5 pt-4 pb-4">
        <div className="b2b-container-lg">
          <h2 className="gk-heading-bold text-center text-uppercase text-cente m-auto gk-width">
            Let's build an e-commerce masterpiece together! Drop us a line for
            Shopify website development.
          </h2>
          <div className="d-flex flex-lg-row justify-content-lg-between gap-lg-5 gap-md-3 gap-4 align-items-center flex-column pt-lg-5  pb-lg-4 pt-4 pb-3">
            <div className="   counr-1 bg-white border-radious  w-lg-75  w-md-100 w-full">
              <div className="p-lg-4 p-4  w-100 ">
                <h3 className="b2b-sub-heading text-black">
                  Submit Details Below To Get A Call Back
                </h3>
                <form className="">
                  <div className="mb-3">
                  <label htmlFor="name" className="text-black mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="form-control w-100"
                        style={{
                          padding: "10px",
                          borderStyle: "none",
                          border: "1px solid",
                        }}
                      />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <div className="me-2 flex-fill">
                    <label htmlFor="email" className="text-black mb-2">
                          Email
                          <span
                            style={{
                              color: "red",
                            }}
                          >
                            {" "}
                            *
                          </span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="form-control w-100"
                          style={{
                            padding: "10px",
                            borderStyle: "none",
                            border: "1px solid",
                          }}
                        />
                    </div>
                    <div className="ms-2 flex-fill">
                    <label htmlFor="phone" className="text-black mb-2">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="number"
                          placeholder="Enter your number"
                          className="form-control w-100"
                          style={{
                            padding: "10px",
                            borderStyle: "none",
                            border: "1px solid",
                          }}
                        />
                    </div>
                  </div>
                  <div className="mb-3">
                  <label htmlFor="message" className="text-black mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
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
                      type="button"
                      className="gk-b2b-btn gk-bg-b2b-btn   b2b-btn-sm mt-3  w-100"
                    >
                      SUBMIT
                    </button>
                    <a
                      href="https://wa.me/919900000000?text=Hello%20there!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 gk-acco-text w-100 border-dark p-2 rounded d-block text-center text-black"
                      style={{
                        border:'2px solid '
                      }}
                    >
                      Send a WhatsApp Message
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className=" counr-2    w-full">
              <div className="icon-class d-flex flex-lg-column  flex-column  gap-md-5 gap-4">
                <div className="d-flex align-items-center gap-4">
                  <span className="icon">
                    <Image className="Image-icon" src={callto} alt="" />
                  </span>

                  <span className="gk-acco-text text-white">
                    <a href="tel:+919872487850" className="text-white">
                      +91-9872-487-850
                    </a>
                  </span>
                </div>
                <div className="d-flex align-items-center gap-4">
                  <Image className="Image-icon" src={mailto} alt="" />
                  <span className="gk-acco-text text-white">
                    <a
                      href="mailto: hello@base2brand.com"
                      className="text-white"
                    >
                      {" "}
                      hello@base2brand.com
                    </a>
                  </span>
                </div>
                <div className="d-flex align-items-center gap-4">
                  <Image className="Image-icon" src={location} alt="" />
                  <span className="gk-acco-text text-white text-md-start ">
                    <a
                      href="https://www.google.com/maps/place/Base+2+Brand+Infotech+Pvt.+Ltd./@30.7112168,76.692165,17z/data=!4m15!1m8!3m7!1s0x390fee55f17e093d:0xeb3482c7f127c305!2sF,+209,+Phase+8B,+Industrial+Area,+Sector+74,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160074!3b1!8m2!3d30.7112168!4d76.692165!16s%2Fg%2F11vywjx481!3m5!1s0x390fef3d91f0cc77:0x214b2cbd35685f0d!8m2!3d30.7112168!4d76.692165!16s%2Fg%2F11r3l8std0?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      F, 209, Phase 8B, Industrial Area, Sector 74, Sahibzada
                      Ajit Singh Nagar, Punjab 160074
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactWeb;
