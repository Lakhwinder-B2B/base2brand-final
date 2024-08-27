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
          <div className=" pt-lg-5 pt-3">
                    <div className="row price-table">
                      {/* Plan: Essentials */}
                      <div className="col-md-6 col-lg-6 col-xl-4 ">
                        <div className="card">
                          <div className="card-body-gk ">
                            <h5 className="text-center gk-b2b-bold text-white">
                              3 Months Plan
                            </h5>
                            <hr />
                            <p className="card-text-gk  fontlinear text-center ">
                              $9.99/month
                            </p>
                            <p className="card-desc text-white text-center">
                              Advanced E-Commerce Website + Android App
                            </p>
                            <ul className="list-unstyled features-list text-white">
                              <li className="fw-bold fs-5 ">
                                {" "}
                                2 Campaigns a month
                              </li>
                              <li className="fw-bold fs-5">Pixel Setup</li>
                              <li>Weekly Ad Optimization</li>
                              <li>Ad Graphics</li>
                              <li>Pixel Setup</li>
                              <li className="fw-bold fs-5">
                                {" "}
                                Initial Audience Research and Targeting
                              </li>
                              <li>Ad Copywriting and Design</li>
                              <li className="fw-bold fs-5">
                                {" "}
                                Conversion Setup
                              </li>
                              <li>Custom Conversion Tracking</li>
                            </ul>
                            <div className="parent-container">
                              <button className="custom-button" data-ico="￫">
                                <span className="btn-custom "> Call Us</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-6 col-xl-4 ">
                        <div className="card card-highlight">
                          <div className="card-body-gk ">
                            <h5 className="text-center gk-b2b-bold text-white">
                              6 Months Plan
                            </h5>
                            <hr />
                            <p className="card-text-gk  fontlinear text-center ">
                              $9.99/month
                            </p>
                            <p className="card-desc text-white text-center">
                              Advanced E-Commerce Website + Android App
                            </p>
                            <ul className="list-unstyled features-list text-white">
                              <li className="fw-bold fs-5 ">
                                {" "}
                                5 Campaigns a month
                              </li>
                              <li className="fw-bold fs-5">
                                Comprehensive Pixel Setup
                              </li>
                              <li>Weekly Ad Optimization</li>
                              <li>Ad Graphics</li>
                              <li>Detailed Audience Research and Targeting</li>
                              <li className="fw-bold fs-5">
                                {" "}
                                Enhanced Ad Copywriting and Design
                              </li>
                              <li>Weekly Ad Optimization</li>
                              <li className="fw-bold fs-5">
                                {" "}
                                Advanced Bid Management
                              </li>
                              <li>Advanced Conversion Setup</li>
                              <li>Detailed Custom Conversion Tracking</li>
                              <li>Weekly Performance Reports</li>
                              <li>Weekly Strategy Review</li>
                            </ul>
                            <div className="parent-container">
                              <button className="custom-button" data-ico="￫">
                                <span className="btn-custom "> Call Us</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Plan: Growing Business */}
                      <div className="col-md-6 col-lg-6 col-xl-4 ">
                        <div className="card">
                          <div className="card-body-gk ">
                            <h5 className="text-center gk-b2b-bold text-white">
                              12 Months Plan
                            </h5>
                            <hr />
                            <p className="card-text-gk  fontlinear text-center ">
                              $9.99/month
                            </p>
                            <p className="card-desc text-white text-center">
                              Advanced E-Commerce Website + Android App
                            </p>
                            <ul className="list-unstyled features-list text-white">
                              <li className="fw-bold fs-5 ">
                                {" "}
                                8 Campaigns a month
                              </li>
                              <li className="fw-bold fs-5">Pixel Setup</li>
                              <li>Ad Optimization</li>
                              <li>Extensive Image/Video Variants</li>
                              <li>Conversion Setup</li>
                              <li className="fw-bold fs-5">
                                {" "}
                                Weekly Ad Optimization
                              </li>
                              <li>A/B Testing</li>
                              <li className="fw-bold fs-5">
                                {" "}
                                Full Conversion Setup
                              </li>
                              <li>Advanced Custom Conversion Tracking</li>
                              <li>Detailed Ad Copy Testing</li>
                              <li>Weekly Performance Reports</li>
                              <li>Weekly Strategy Review</li>
                              <li>Monthly Deep-Dive Analysis</li>
                            </ul>
                            <div className="parent-container">
                              <button className="custom-button" data-ico="￫">
                                <span className="btn-custom "> Call Us</span>
                              </button>
                            </div>
                          </div>
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
