import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import "./ShopifyPricing.css";

import Image from "next/image";
import ShopifyExpert from "../../../public/img/ShopifyExpert.svg";
import ShopifyPartner from "../../../public/img/Shopify-Partner.svg";

import ShopifyPartnerback from "../../../public/img/back-Shopify-Pricing.svg";
import ShopifySecondPricing from "./ShopifySecondPricing";

const page = () => {
  return (
    <>
      <Header />

      <section
        className="Shopify-Pricing-Banner pt-lg-5 pb-lg-5 "
        style={{
          backgroundImage: `url(${ShopifyPartnerback.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="b2b-container-lg">
          <div className="row  align-items-center justify-content-between ">
            <div className="col-sm-1 col-md-12 col-lg-6 col-xl-6 ">
              <div className="image-bar d-flex flex-wrap gap-2 w-full align-items-center pt-lg-4 p-0">
                <Image
                  className="img-fluid flex-fill"
                  src={ShopifyPartner}
                  alt="Shopify Partner"
                />
                <Image
                  className="img-fluid flex-fill"
                  src={ShopifyExpert}
                  alt="Shopify Expert"
                />
              </div>

              <div className="pricing-shopifty-page">
                <h1 className="b2b-sub-heading">
                  Launch Your Online Business With A Stunning Shopify Website
                </h1>
              </div>
              <button className="b2b-btn b2b-btn-sm mt-3 ">
                Send a WhatsApp Message
              </button>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-5 pt-4 pt-lg-0">
              <div className="p-20px bg-white   " 
              style={{
                borderRadius:'20px',
              }}
              >
                <div className="p-lg-5 p-4">
                  <h3 className="b2b-sub-heading text-black">
                    Submit Details Below To Get A Call Back
                  </h3>
                  <form className="">
                    <div className="mb-3">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="form-control w-100"
                      />
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <div className="me-2 flex-fill">
                        <label htmlFor="email">
                          Email<span>*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="form-control w-100"
                        />
                      </div>
                      <div className="ms-2 flex-fill">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          id="phone"
                          type="text"
                          placeholder="Enter your number"
                          className="form-control w-100"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        placeholder="Give us a small brief about your project"
                        className="form-control w-100"
                        style={{
                            height: "150px",
                        }}
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="b2b-btn b2b-btn-sm mt-3 "
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
<ShopifySecondPricing/>
      <Footer />
    </>
  );
};

export default page;
