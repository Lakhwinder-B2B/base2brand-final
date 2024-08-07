import Image from "next/image";
import React from "react";
import ShopifyWebsite from "../../../public/img/Shopify Website.png";
import "./ShopifyPricing.css"

const ShopifySecondPricing = () => {
  return (
    <>
      <section className="b2b-brands-wrap b2b-gray-bg-gk  ">
        <div className="b2b-container-lg">
          <h2 className="text-center gk-heading-bold ">
            Shopify Website Development @ ₹149,000
          </h2>
          <p className="b2b-text text-center ">
            FREE DOMAIN* | FREE PROFESSIONAL EMAILS*
          </p>
          <div className="row align-items-lg-center gap-lg-0 gap-4">

            <div className="col-lg-6">
              <Image
              className="w-100 Shopify-Website-img h-100 h-lg-auto"

                src={ShopifyWebsite}
                alt="Shopify Website"
              />
            </div>
            <div className="col-lg-6 pb-lg-0 pb-3">
              <h1 className="gk-sub-heading-bold">
                Maximize Your Roi With A Shopify 
                Website Tailored To Your Business Needs
              </h1>
              <p className=" b2b-sub-text">
                Creating a Shopify website involves much more than just setting
                up a template and adding products. Our team of experienced
                developers and designers will work with you to create a website
                that reflects your brand and meets your business needs.
              </p>
              <p className=" b2b-sub-text">
                Our process includes in-depth research and analysis of your
                industry, target audience, and competition, to ensure that your
                website is optimized for conversions and user experience. We
                will also integrate important features such as payment gateways,
                shipping options, and much more to streamline your operations.
              </p>
              <button className="gk-b2b-btn b2b-btn-sm mt-3 m-0"> Send a WhatsApp Message </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopifySecondPricing;
