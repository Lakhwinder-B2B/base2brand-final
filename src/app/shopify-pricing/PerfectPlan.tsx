import React from "react";
import Image from "next/image";

import Perfect from "../../../public/img/PerfectPlan.svg";
const PerfectPlan = () => {
  return (
    <>
      <section
        className="bg-image b2b-brands-wrap  "
        style={{
          backgroundImage: "url('./img/PerfectPlan.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="perfectplane b2b-container-lg">
          <div className="">
            <h2 className="gk-heading-bold text-center text-uppercase text-cente m-auto gk-width-lg">
              Choose Your Perfect Plan: Shopify Web Development by Base
              <span
                style={{
                  color: "#EF6B19",
                }}
              >
                2
              </span>
              Brand
            </h2>
          </div>
          <div className="">
            <div className=" cardi-main     pt-lg-5 pt-4   overflow-hidden px-lg-0  ">
              <div className="  p-4 gk-rounded card-price">
                <div className="border-secondary">
                  <p className="gk-b2b-bold text-white">
                    Shopify Website (only) Package
                  </p>
                  <p className="b2b-sub-text">E-Commerce Website</p>
                  <h2 className="fontlinear ">₹ 149,000</h2>
                  <div className="list d-flex  flex-column gap-3 pt-3">
                    <li>Shopify Website Creation and Setup</li>
                    <li>Upto 200 Products Upload By Our Team</li>
                    <li>SEO Ready Website</li>
                    <li>SSL Certificate</li>
                    <li>Responsive Website</li>
                    <li>Content 2000 Words</li>
                    <li>Social Media Integration</li>
                    <li>Google Analytics Integration</li>
                  </div>
                  <button className=" card-btn mt-4 ">
                    <i
                      className="fa fa-chevron-right text-white"
                      aria-hidden="true"
                    ></i>
                    <span className="gk-b2b-btn-text text-white">
                      View More Inclusions
                    </span>
                  </button>
                  <h5 className="text-white mt-lg-3 mt-2 pt-lg-4 pt-3 gk-border-top-2px  gk-text-bold">
                    TALK TO US
                  </h5>
                  <h5 className="text-white mt-lg-4 mt-3 gk-text-bold">
                    <a
                      href="tel:+919872487850"
                      target="_blank"
                      className="text-white"
                    >
                      +91-9872-487-850
                    </a>
                  </h5>
                </div>
              </div>
              <div className="p-4 gk-rounded card-price ">
                <div className="border-secondary">
                  <p className="gk-b2b-bold text-white">
                    Shopify Website + Android App Package
                  </p>
                  <p className="b2b-sub-text">
                    Advanced E-Commerce Website + Android App
                  </p>
                  <h2 className="fontlinear ">₹ 249,000</h2>
                  <div className="list d-flex  flex-column gap-3 pt-3">
                    <li>Shopify Website Creation and Setup</li>
                    <li>Android Hybrid App</li>
                    <li>Google Play Publishing</li>
                    <li>Referral Integration</li>
                    <li>Abandoned Checkout</li>
                    <li>Upto 200 Products Upload By Our Team</li>
                    <li>SEO Ready Website</li>
                    <li>SSL Certificate</li>
                  </div>
                  <button className=" card-btn mt-4 ">
                    <i
                      className="fa fa-chevron-right text-white"
                      aria-hidden="true"
                    ></i>
                    <span className="gk-b2b-btn-text  text-white">
                      View More Inclusions
                    </span>
                  </button>
                  <h5 className="text-white mt-lg-3 mt-2 pt-lg-4 pt-3 gk-border-top-2px  gk-text-bold">
                    TALK TO US
                  </h5>
                  <h5 className="text-white mt-lg-4 mt-3 gk-text-bold">
                    <a
                      href="tel:+919872487850"
                      target="_blank"
                      className="text-white"
                    >
                      +91-9872-487-850
                    </a>
                  </h5>
                </div>
              </div>
              <div className=" p-4 gk-rounded card-price ">
                <div className="border-secondary">
                  <p className="gk-b2b-bold text-white">
                    Shopify Website + Android & iOS App Package
                  </p>
                  <p className="b2b-sub-text">
                    Advanced E-Commerce Website + Android App + iOS Hybrid App
                  </p>
                  <h2 className="fontlinear ">₹ 299,000</h2>
                  <div className="list d-flex  flex-column gap-3 pt-3">
                    <li>Shopify Website Creation and Setup</li>
                    <li>Android Hybrid App</li>
                    <li>Google Play Publishing</li>
                    <li>iOS Web App</li>
                    <li>Referral Integration</li>
                    <li>Abandoned Checkout</li>
                    <li>Upto 200 Products Upload By Our Team</li>
                    <li>SEO Ready Website</li>
                  </div>
                  <button className=" card-btn mt-4 ">
                    <i
                      className="fa fa-chevron-right text-white"
                      aria-hidden="true"
                    ></i>
                    <span className="gk-b2b-btn-text  text-white">
                      View More Inclusions
                    </span>
                  </button>
                  <h5 className="text-white mt-lg-3 mt-2 pt-lg-4 pt-3 gk-border-top-2px  gk-text-bold">
                    TALK TO US
                  </h5>
                  <h5 className="text-white mt-lg-4 mt-3 gk-text-bold">
                    <a
                      href="tel:+919872487850"
                      target="_blank"
                      className="text-white"
                    >
                      +91-9872-487-850
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PerfectPlan;
