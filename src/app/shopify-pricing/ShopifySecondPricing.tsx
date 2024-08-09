import Image from "next/image";
import React from "react";
import ShopifyWebsite from "../../../public/img/Shopify Website.png";
import "./ShopifyPricing.css";

interface BrandingNew {
  heading?: string;

  subtxt?: string;
  btntx?: string;
  subheading?: string;
  para1?: string;
  para2?: string;
}

const ShopifySecondPricing = ({
  heading,
  subtxt,
  btntx,
  para1,
  para2,
  subheading,
}: BrandingNew) => {
  return (
    <>
      <section className="b2b-brands-wrap b2b-gray-bg-gk  ">
        <div className="b2b-container-lg">
          <h2 className="text-center gk-heading-bold  text-white gk-width-lg pb-3 ">
            {heading}

          
          </h2>
          <p className="b2b-text text-center hhh ">
            {subtxt}

         
          </p>
          <div className="row align-items-lg-center gap-lg-0 gap-4 pt-3 pt-lg-5">
            <div className="col-lg-6">
              <Image
                className="w-100 Shopify-Website-img h-100 h-lg-auto"
                src={ShopifyWebsite}
                alt="Shopify Website"
              />
            </div>
            <div className="col-lg-6 pb-lg-0 pb-3">
              <h3 className="gk-sub-heading-bold">
                {subheading}
               
              </h3>
              <p className=" b2b-sub-text">
                {para1}
              
              </p>
              <p className=" b2b-sub-text">
                {para2}
               
              </p>
              <button className="gk-b2b-btn b2b-btn-sm mt-3 m-0">
                {btntx}
              
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopifySecondPricing;
