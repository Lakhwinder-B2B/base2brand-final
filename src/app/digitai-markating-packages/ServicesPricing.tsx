"use client";
import React, { useEffect, useState } from "react";

const ServicesPricing = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    // Button hover effect
    const buttons = document.querySelectorAll(".btn-free-trial");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        button.textContent = "Continue";
      });
      button.addEventListener("mouseleave", () => {
        button.textContent = "Free Trial";
      });
    });
  }, []);

  return (
    <>
      <section
        className="tabs b2b-brands-wrap"
        style={{
          backgroundImage:
            "url('./img/digitai-markating-packags/choosepackages.png')",
          backgroundSize: "cover",
          backgroundPosition: "98% 50%",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="b2b-container-lg">
          <h3 className="text-3xl font-bold text-center mx-auto max-w-lg titl-css text-uppercase ">
            pick your plan
          </h3>
          <p
            className="b2b-text text-center  pb-5 pt-2
           "
          >
            IMPROVE YOUR ENGAGEMENT
          </p>

          <div className="flex flex-col md:flex-row py-2 md:py-5">
            <div
              className="d-flex justify-content-center custom-tab-gk "
              role="tablist"
              aria-orientation="vertical"
            >
              <li className="nav-item-gk" role="presentation">
                <button
                  className={`nav-item-gk ${
                    activeTab === "tab1" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("tab1")}
                >
                  Facebook ads
                </button>
              </li>
              <li className="nav-item-gk" role="presentation">
                <button
                  className={`nav-item-gk ${
                    activeTab === "tab2" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("tab2")}
                >
                  Social media marketing
                </button>
              </li>
              <li className="nav-item-gk" role="presentation">
                <button
                  className={`nav-item-gk ${
                    activeTab === "tab3" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("tab3")}
                >
                  Google ads
                </button>
              </li>
              <li className="nav-item-gk" role="presentation">
                <button
                  className={`nav-item-gk ${
                    activeTab === "tab4" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("tab4")}
                >
                  email marketing
                </button>
              </li>
              <li className="nav-item-gk" role="presentation">
                <button
                  className={`nav-item-gk ${
                    activeTab === "tab5" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("tab5")}
                >
                  search engine optimization
                </button>
              </li>
            </div>

            <div className=" pt-5 md:pt-4">
              <div className="tab-content">
                <div
                  className={`tab-pane fade ${
                    activeTab === "tab1" ? "show active" : ""
                  }`}
                >
                  <div className="">
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
                {/* social media markating */}
                <div
                  className={`tab-pane fade ${
                    activeTab === "tab2" ? "show active" : ""
                  }`}
                >
                  <div className="">
                    <div className="row price-table">
                      {/* Plan: Essentials */}
                      <div className="col-md-6 col-lg-6 col-xl-4">
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
                                5 posts per week on 3 platforms
                              </li>
                              <li className="fw-bold fs-5">
                                {" "}
                                Custom Graphics and Visuals
                              </li>
                              <li> Daily Engagement with Followers</li>
                              <li> Response to Comments and Messages</li>
                              <li> Monthly Performance Reports</li>
                              <li className="fw-bold fs-5">
                                {" "}
                                - Basic Analytics Overview
                              </li>
                            </ul>
                            <div className="parent-container">
                              <button className="custom-button" data-ico="￫">
                                <span className="btn-custom "> Call Us</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-6 col-xl-4">
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
                                5 posts + 3 Reels per week on 4 platforms
                              </li>
                              <li> High-Quality Custom Graphics and Visuals</li>
                              <li> Daily Engagement with Followers</li>
                              <li> Active Response to Comments and Messages</li>
                              <li className="">
                                {" "}
                                Bi-Weekly Performance Reports
                              </li>
                              <li className="fw-bold fs-5">
                                {" "}
                                - Detailed Analytics Overview
                              </li>
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
                      <div className="col-md-6 col-lg-6 col-xl-4">
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
                                8 posts + 4 Reels per week on 6 platforms
                              </li>
                              <li className="fw-bold fs-5">
                                {" "}
                                Premium Custom Graphics and Visuals
                              </li>
                              <li> Daily Engagement with Followers</li>
                              <li>
                                {" "}
                                Proactive Response to Comments and Messages
                              </li>
                              <li> Weekly Performance Reports</li>
                              <li className="fw-bold fs-5">
                                Comprehensive Analytics Overview
                              </li>
                              <li>- Monthly Strategy Meetings</li>
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
                {/* google aDD */}
                <div
                  className={`tab-pane fade ${
                    activeTab === "tab3" ? "show active" : ""
                  }`}
                >
                  <div className="">
                    <div className="row price-table">
                      {/* Plan: Essentials */}
                      <div className="col-md-6 col-lg-6 col-xl-4">
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
                                2 campaigns per month
                              </li>
                              <li className="fw-bold fs-5">Keyword Research</li>
                              <li>Ad Copywriting</li>
                              <li>Weekly Bid Adjustments</li>
                              <li className="fw-bold fs-5">
                                Ad Extensions Setup
                              </li>
                              <li>Negative Keyword Management</li>
                              <li className="fw-bold fs-5">
                                Custom Ad Designs
                              </li>
                              <li>Conversion Setup</li>
                              <li className="fw-bold fs-5">
                                Custom Conversion Tracking
                              </li>
                              <li>Ad Copy Testing</li>
                              <li>Landing Page Variants</li>
                              <li>Weekly Performance Reports</li>
                              <li>Monthly Strategy Review</li>
                            </ul>
                            <div className="parent-container">
                              <button className="custom-button" data-ico="￫">
                                <span className="btn-custom "> Call Us</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-6 col-xl-4">
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
                                5 campaigns per month
                              </li>
                              <li className="fw-bold fs-5">
                                Google Analytics Setup
                              </li>
                              <li>Google Tag Manager Setup</li>
                              <li>Comprehensive Keyword Research</li>
                              <li>Enhanced Ad Copywriting</li>
                              <li className="fw-bold fs-5">
                                Ad Extensions Setup
                              </li>
                              <li>Weekly Bid Adjustments</li>
                              <li className="fw-bold fs-5">
                                Advanced Negative Keyword Management
                              </li>
                              <li>Weekly Performance Tweaks</li>
                              <li>Professional Ad Designs</li>
                              <li>Enhanced Conversion Setup</li>
                              <li>Advanced Custom Conversion Tracking</li>
                              <li>Detailed Ad Copy Testing</li>
                              <li>Multiple Landing Page Variants</li>
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
                      <div className="col-md-6 col-lg-6 col-xl-4">
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
                                8 campaigns per month
                              </li>
                              <li>8 campaigns per month</li>

                              <li className="fw-bold fs-5 ">
                                Google Tag Manager Setup
                              </li>
                              <li>In-depth Keyword Research</li>
                              <li>Expert Ad Copywriting</li>
                              <li>Complete Ad Extensions Setup</li>
                              <li>Weekly Bid Adjustments</li>
                              <li className="fw-bold fs-5 ">
                                Comprehensive Negative Keyword Management
                              </li>
                              <li className="fw-bold fs-5 ">
                                Continuous Performance Optimization
                              </li>
                              <li>High-Quality Ad Designs</li>
                              <li>Full Conversion Setup</li>
                              <li>Detailed Custom Conversion Tracking</li>
                              <li>Extensive Ad Copy Testing</li>
                              <li>Diverse Landing Page Variants</li>
                              <li>Weekly Performance Reports</li>
                              <li className="fw-bold fs-5 ">
                                Weekly Strategy Review
                              </li>
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
                <div
                  className={`tab-pane fade ${
                    activeTab === "tab4" ? "show active" : ""
                  }`}
                >
                  <div className="">
                    <div className="row price-table">
                      {/* Plan: Essentials */}
                      <div className="col-md-6 col-lg-6 col-xl-4">
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
                              2 Campaigns/Month
                              </li>
                            
  <li>Template Design</li>
  <li>Performance Tracking</li>
                            </ul>
                            <div className="parent-container">
                              <button className="custom-button" data-ico="￫">
                                <span className="btn-custom "> Call Us</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-6 col-xl-4">
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
                            <li>4 Campaigns/Month</li>
  <li className="fw-bold fs-5 ">Template Design</li>
  <li>Performance Tracking</li>
  <li className="fw-bold fs-5 ">Segmentation & Personalization</li>
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
                      <div className="col-md-6 col-lg-6 col-xl-4">
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
                                6 Campaigns/Mont
                              </li>

  <li className="fw-bold fs-5 ">Template Design</li>
  <li>Performance Tracking</li>
  <li>Segmentation & Personalization</li>
  <li className="fw-bold fs-5 ">Automation</li>
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
                <div
                  className={`tab-pane fade ${
                    activeTab === "tab5" ? "show active" : ""
                  }`}
                >
                  <div className="">
                    <div className="row price-table">
                      {/* Plan: Essentials */}
                      <div className="col-md-6 col-lg-6 col-xl-4">
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
                              Website Audit
                              </li>
                             
  <li>10 Keyword Analysis</li>
  <li>On Page Optimization</li>
  <li>Local SEO Optimization</li>
  <li>Content Marketing</li>
  <li>Email Outreach</li>
  <li>Off Page Optimization</li>
  <li>200 Link Creations</li>
  <li>Monthly Reporting</li>
                            </ul>
                            <div className="parent-container">
                              <button className="custom-button" data-ico="￫">
                                <span className="btn-custom "> Call Us</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-6 col-xl-4">
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
                            <li className="fw-bold fs-5">Website Audit</li>
  <li className="fw-bold fs-5" >20 Keyword Analysis</li>
  <li >On Page Optimization</li>
  <li className="fw-bold fs-5" >Local SEO Optimization</li>
  <li>Content Marketing</li>
  <li >Email Outreach</li>
  <li >Off Page Optimization</li>
  <li >400 Link Creations</li>
  <li className="fw-bold fs-5">Monthly Reporting</li>
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
                      <div className="col-md-6 col-lg-6 col-xl-4">
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
                            <li className="fw-bold fs-5">Website Audit</li>
  <li className="fw-bold fs-5" >40 Keyword Analysis</li>
  <li >On Page Optimization</li>
  <li className="fw-bold fs-5" >Local SEO Optimization</li>
  <li className="fw-bold fs-5">Content Marketing</li>
  <li className="fw-bold fs-5">Email Outreach</li>
  <li >Off Page Optimization</li>
  <li >800 Link Creations</li>
  <li >Monthly Reporting</li>
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
                <div
                  className={`tab-pane fade ${
                    activeTab === "tab6" ? "show active" : ""
                  }`}
                >
                  <h4 className="text-xl font-bold text-white">
                    Customer Support
                  </h4>
                  <p className="text-white">
                    Details about Customer Support...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPricing;
