import React from "react";
// import Header from "../../../component/header";
import Footer from "../../../component/footer";
import "./ShopifyPricing.css";
import Header from "../../../component/header"; 

import Image from "next/image";
import ShopifyExpert from "../../../public/img/shopify-prodduct/logoww.png";
import ShopifyPartner from "../../../public/img/shopify-prodduct/[CITYPNG.COM]High-Resolution-Shopify-Partners-Horizontal-Logo---2000x2000.png";

import ShopifyPartnerback from "../../../public/img/back-Shopify-Pricing.svg";
import ShopifySecondPricing from "./ShopifySecondPricing";

// import Brand from "../brand";
import PerfectPlan from "./PerfectPlan";
import ExpertiseShopify from "./ExpertiseShopify";
// import ContactWeb from "./ContactWeb";
import Footweb from "./Footweb";
import PresonalHeader from "./PresonalHeader";
import shopifypng from "../../../public/img/Shopify Website.png"
import ContactFormFooter from "../digitai-markating-packages/ContactFormFooter";
import BrandsLogos from "./BrandsLogos";
// import CartFooter from "./CartFooter";



const page = () => {
  return (
    <>
      <Header />
      {/* <PresonalHeader/> */}

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
              <div className="image-bar d-flex align-items-center pb-lg-4 pb-4 gap-3  Banner-image">
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
                <h1 className="gk-sub-heading text-white">
                  Launch Your Online Business With A Stunning Shopify Website
                </h1>
              </div>
              <div className="mt-4">
         <a 
         href="https://wa.me/+918360116967?text=Hello%20there!" 
         target="_blank" 
         rel="noopener noreferrer"
         className="gk-b2b-btn b2b-btn-sm "
       >
         Send a WhatsApp Message
       </a>
       </div>
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
      <ShopifySecondPricing heading="Shopify Website Development @ ₹99999 / $1119"
      subtxt="FREE DOMAIN* | FREE PROFESSIONAL EMAILS*"
     subheading="Maximize Your ROI With A Shopify Website Tailored To Your Business Needs"
      btntx="Send a WhatsApp Message"
      para1="Creating a Shopify website involves much more than just setting up a template and adding products. Our team of experienced developers and designers will work with you to create a website that reflects your brand and meets your business needs."
      para2="Our process includes in-depth research and analysis of your industry, target audience, and competition, to ensure that your website is optimized for conversions and user experience. We will also integrate important features such as payment gateways, shipping options, and much more to streamline your operations."

     />
      {/* <Brand heading={"Our Shopify Clients"}  bgcolor="" color="text-white" /> not use the brands slider this  */}
      <BrandsLogos heading={"Our Shopify Clients"}  bgcolor="" color="text-white" />
      <PerfectPlan />
      <ExpertiseShopify />
      <ContactFormFooter param=""/>
      {/* <ContactWeb /> */}
      <Footweb title=" Shopify Website Development Service"  para1="At Base2Brand, we specialize in creating Shopify websites that are tailored to meet the unique needs of our clients. From design and development to optimization and launch, we handle every aspect of the website development process with a focus on delivering exceptional results." para2="Our team of experts is committed to staying up-to-date with the latest trends and technologies in ecommerce to ensure that our clients are always ahead of the curve. Whether you’re looking to launch a new Shopify store or revamp an existing one, we have the skills and expertise to help you achieve your goals.

"/>
      {/* <CartFooter/> */}
 

      
    </>
  );
};

export default page;
