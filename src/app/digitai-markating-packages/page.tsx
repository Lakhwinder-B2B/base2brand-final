import React from "react";
import PresonalHeader from "../shopify-pricing/PresonalHeader";
import DigitalPricing from "./DigitalPricingBanner";
import "./digitai-markating-packages.css";
import ShopifySecondPricing from "../shopify-pricing/ShopifySecondPricing";
import MarketingPackages from "./MarketingPackages";
import Brand from "../brand";
import PickYourPlan from "./PickYourPlan"

const page = () => {
  return (
    <>
      <PresonalHeader />
      <DigitalPricing />
      <ShopifySecondPricing heading="Digital Marketing Packages – Get An Affordable Online Marketing Packages"
      subtxt="Join Base2Brand and board on a journey towards unmatched revenue growth for your business. Working with us, we can ensure that your brand achieves remarkable success in the future. Explore our digital marketing pricing packages or online marketing packages today and let’s achieve greatness together!"
     
      btntx="Let’s Talk"
      para1="Digital marketing packages are essential for establishing a strong business foundation. With various online marketing plans available, these packages significantly contribute to the growth of businesses of all sizes. However, one cannot afford all the diverse marketing strategies available in the market. This is where finding a reliable source becomes crucial."
      para2="Digital marketing packages are essential for establishing a strong business foundation. With various online marketing plans available, these packages significantly contribute to the growth of businesses of all sizes. However, one cannot afford all the diverse marketing strategies available in the market. This is where finding a reliable source becomes crucial."
      />
     <MarketingPackages/>
     <Brand heading="Our Digital Marketing Clients"/>
   <PickYourPlan/>
    </>
  );
};

export default page;
