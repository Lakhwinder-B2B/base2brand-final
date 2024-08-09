import React from "react";
import facebook from "../../../public/img/digitai-markating-packags/facebook.svg";
import Image from "next/image";

// interface Socialmediapricing {
//   SocialMedia?:String;
//   SocialMediaIcon?:String;

//   Mounthplane1?: String;
//   Mounthplane2?: String;
//   Mounthplane3?: String;
//   Price1?: String;
//   Price2?: String;
//   Price3?: String;
//   CardFirstlist1?:String; 
//   CardFirstlist2?:String; 
//   CardFirstlist3?:String; 
//   CardFirstlist4?:String; 
//   CardFirstlist5?:String; 
//   CardFirstlist6?:String; 
//   CardFirstlist7?:String; 
//   CardFirstlist8?:String; 
//   CardFirstlist9?:String; 
//   CardFirstlist10?:String; 
//   CardFirstlist11?:String; 
//   CardFirstlist12?:String; 
//   CardFirstlist13?:String; 
//   CardFirstlist14?:String; 
//   CardFirstlist15?:String; 
//   CardFirstlist16?:String; 

// }

const PickYourPlan = () => {
  return (
    <>
      <section
        className="bg-image b2b-brands-wrap  "
        style={{
          backgroundImage:
            "url('./img/digitai-markating-packags/PickYourPlan.png')",
          backgroundSize: "cover",
          backgroundPosition: "80% 50%",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="perfectplane">
          <div className=" d-flex justify-content-center  text-uppercase text-center">
            <div className="rotat mt-lg-4 mb-lg-4 pb-4 pt-lg-0 pt-3">
              <div className="backlinear ">
                <h2 className="titl-css m-0">pick your plan</h2>
                <p className=" m-0 text-white ">IMPROVE YOUR ENGAGEMENT</p>
              </div>

            </div>
          </div>

          <div className=" d-flex  justify-content-center gap-3 align-items-center ">
            <h3 className="gk-heading-bold text-center text-uppercase text-cente  ">
              Facebook Ads
            </h3>
            <span>
              <Image className="mb-2 icon-image" src={facebook} alt="" />
            </span>
          </div>

          <div className="b2b-container-lg">
            <div className="cardi-main     pt-lg-5 pt-4   overflow-hidden px-lg-0 ">
              <div className=" p-4 gk-rounded card-price ">
                <div className="border-secondary">
                  <p className="gk-b2b-bold text-white">
                    3 Months Plan
                  </p>
                  <p className="b2b-sub-text"></p>
                  <h2 className="fontlinear ">₹ 149,000</h2>
                  <div className="list d-flex  flex-column gap-3 pt-3">
                    <li className="fw-bold fs-5">Shopify Website Creation and Setup</li>
                    <li >Upto 200 Products Upload By Our Team</li>
                    <li className="fw-bold fs-5">SEO Ready Website</li>
                    <li className="fw-bold fs-5">SSL Certificate</li>
                    <li className="fw-bold fs-5">Responsive Website</li>
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
                    +91-9872-487-850
                  </h5>
                </div>
              </div>
              <div className=" p-4 gk-rounded card-price ">
                <div className="border-secondary">
                  <p className="gk-b2b-bold text-white">
                    6 Months Plan
                  </p>
                  <p className="b2b-sub-text">
                    Advanced E-Commerce Website + Android App
                  </p>
                  <h2 className="fontlinear ">₹ 249,000</h2>
                  <div className="list d-flex  flex-column gap-3 pt-3">
                    <li className="fw-bold fs-5">Shopify Website Creation and Setup</li>
                    <li className="fw-bold fs-5">Android Hybrid App</li>
                    <li>Google Play Publishing</li>
                    <li>Referral Integration</li>
                    <li className="fw-bold fs-5">Abandoned Checkout</li>
                    <li >Upto 200 Products Upload By Our Team</li>
                    <li className="fw-bold fs-5">SEO Ready Website</li>
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
                    +91-9872-487-850
                  </h5>
                </div>
              </div>
              <div className=" p-4 gk-rounded card-price ">
                <div className="border-secondary">
                  <p className="gk-b2b-bold text-white">
                    12 Months Plan
                  </p>
                  <p className="b2b-sub-text">
                    Advanced E-Commerce Website + Android App + iOS Hybrid App
                  </p>
                  <h2 className="fontlinear ">₹ 299,000</h2>
                  <div className="list d-flex  flex-column gap-3 pt-3">
                    <li>Shopify Website Creation and Setup</li>
                    <li className="fw-bold fs-5">Android Hybrid App</li>
                    <li className="fw-bold fs-5">Google Play Publishing</li>
                    <li>iOS Web App</li>
                    <li>Referral Integration</li>
                    <li>Abandoned Checkout</li>
                    <li className="fw-bold fs-5">Upto 200 Products Upload By Our Team</li>
                    <li className="fw-bold fs-5">SEO Ready Website</li>
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
                    +91-9872-487-850
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

export default PickYourPlan;
