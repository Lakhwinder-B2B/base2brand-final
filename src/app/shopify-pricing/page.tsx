import React from "react";
// import Header from "../../../component/header";
import Footer from "../../../component/footer";
import "./ShopifyPricing.css";

import Image from "next/image";
import ShopifyExpert from "../../../public/img/shopify-prodduct/logoww.png";
import ShopifyPartner from "../../../public/img/shopify-prodduct/[CITYPNG.COM]High-Resolution-Shopify-Partners-Horizontal-Logo---2000x2000.png";

import ShopifyPartnerback from "../../../public/img/back-Shopify-Pricing.svg";
import ShopifySecondPricing from "./ShopifySecondPricing";

import Brand from "../brand";
import PerfectPlan from "./PerfectPlan";
import ExpertiseShopify from "./ExpertiseShopify";
import ContactWeb from "./ContactWeb";
import Footweb from "./Footweb";
import PresonalHeader from "./PresonalHeader";



const page = () => {
  return (
    <>
      {/* <Header /> */}
      <PresonalHeader/>

      <section
        className="Shopify-Pricing-Banner  header-padding "
        style={{
          backgroundImage: `url(${ShopifyPartnerback.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "80% 90%",
        }}
      >
        <div className="b2b-container-lg">
          <div className="row  align-items-center justify-content-between  pt-lg-3  pb-lg-5 pt-3 pb-4">
            <div className="col-sm-1 col-md-12 col-lg-6 col-xl-6 ">
              <div className="image-bar d-flex align-items-center pb-lg-5 pb-4 gap-3  Banner-image">
                <div className="w-75">
                 
                  <Image
                    className="img-fluid flex-fill"
                    src={ShopifyPartner}
                    alt="Shopify Partner"
                  />
                </div>
                <div className="w-75">
                  <Image
                    className="img-fluid flex-fill"
                    src={ShopifyExpert}
                    alt="Shopify Expert"
                  />
                </div>
              </div>

              <div className="pricing-shopifty-page">
                <h1 className="gk-sub-heading">
                  Launch Your Online Business With A Stunning Shopify Website
                </h1>
              </div>
              <button className="gk-b2b-btn b2b-btn-sm mt-3 ">
                Send a WhatsApp Message
              </button>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-5 pt-4 pt-lg-0">
              <div
                className="p-20px bg-white   "
                style={{
                  borderRadius: "20px",
                }}
              >
                <div className="p-lg-4 p-4">
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
                        className="gk-b2b-btn b2b-btn-sm mt-3 "
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
      <ShopifySecondPricing />
      <Brand heading={"Our Shopify Clients"}  bgcolor="" color="text-white" />
      <PerfectPlan />
      <ExpertiseShopify />
      <ContactWeb /> 
      <Footweb />
 

      
    </>
  );
};

export default page;
