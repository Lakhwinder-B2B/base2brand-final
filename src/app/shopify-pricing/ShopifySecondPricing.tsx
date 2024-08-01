import Image from "next/image";
import React from "react";
import ShopifyWebsite from "../../../public/img/Shopify Website.png";

const ShopifySecondPricing = () => {
  return (
    <>
      <section className="b2b-brands-wrap b2b-gray-bg-gk">
        <div className="b2b-container-lg">
          <h2 className="text-center b2b-sub-heading-bold ">
            Shopify Website Development @ ₹149,000
          </h2>
          <p className="b2b-text text-center ">
            FREE DOMAIN* | FREE PROFESSIONAL EMAILS*
          </p>
          <div className="row">
            <div className="col-lg-6"> 
              <Image className="w-100 object-contin" src={ShopifyWebsite} alt="Shopify Website" />
            </div>
            <div className="col-lg-6">
              <h1>egergergre</h1>
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopifySecondPricing;
