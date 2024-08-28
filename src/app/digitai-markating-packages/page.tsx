import React from "react";
import Header from "../../../component/header"; 
import PresonalHeader from "../shopify-pricing/PresonalHeader";
import DigitalPricing from "./DigitalPricingBanner";
import "./digitai-markating-packages.css";
import ShopifySecondPricing from "../shopify-pricing/ShopifySecondPricing";
import MarketingPackages from "./MarketingPackages";
// import Brand from "../brand";

import SocialMediaMarketingI from "./SocialMediaMarketingI";
import instagram from "../../../public/img/digitai-markating-packags/instagram.svg";
import GoogleAds from "./GoogleAds";
import EmailMarkating from "./EmailMarkating";
import SearchEngineOptimization from "./SearchEngineOptimization";
import Servingservice from "./Servingservice";
import ChousePackages from "./ChousePackages";
import QualityLeads from "./QualityLeads";
import DigitalAccodiansText from "./DigitalAccodiansText";
import ContactFormFooter from "./ContactFormFooter";
import Footweb from "../shopify-pricing/Footweb";
// import FacebookAds from "./FacebookAds";
import ShopifyWebsite from "../../../public/img/Shopify Website.png";
import ServicesPricing from "./ServicesPricing";
import BrandsLogos from "../shopify-pricing/BrandsLogos";




const page = () => {
  return (
    <>
    <Header/>
      {/* <PresonalHeader /> */}
      <DigitalPricing />
     
    
      <ShopifySecondPricing
        heading="Digital Marketing Packages – Get An Affordable Online Marketing Packages"
        subtxt="Join Base2Brand and board on a journey towards unmatched revenue growth for your business. Working with us, we can ensure that your brand achieves remarkable success in the future. Explore our digital marketing pricing packages or online marketing packages today and let’s achieve greatness together!"
        btntx="Let’s Talk"
        para1="Digital marketing packages are essential for establishing a strong business foundation. With various online marketing plans available, these packages significantly contribute to the growth of businesses of all sizes. However, one cannot afford all the diverse marketing strategies available in the market. This is where finding a reliable source becomes crucial."
        para2="Digital marketing packages are essential for establishing a strong business foundation. With various online marketing plans available, these packages significantly contribute to the growth of businesses of all sizes. However, one cannot afford all the diverse marketing strategies available in the market. This is where finding a reliable source becomes crucial."
     
      />
      <MarketingPackages />
      {/* <Brand heading="Our Digital Marketing Clients" bgcolor=""  color="text-white" /> */}
      <BrandsLogos heading={"Our Digital Marketing Clients"}  bgcolor="" color="text-white" />
      
      {/* <FacebookAds /> not use  */}
    <ServicesPricing/>
      {/* <SocialMediaMarketingI /> */}
      {/* <GoogleAds /> */}
      {/* <EmailMarkating /> */}
      {/* <SearchEngineOptimization /> */}
      <Servingservice />
      <ChousePackages />
      <QualityLeads />
      <DigitalAccodiansText />
      <ContactFormFooter param="  Fill out the form below and let Base2Brand boom your online success.
          Our digital marketing packages enhance your brand, drive traffic, and
          maximize growth." />
      <Footweb title=" One of The Highest Rated Digital Marketing Companies in India
" para1="You can read 100s of verified reviews about our digital marketing services online on platforms like Upwork, Freelancer, Etc.
" para2="Base2Brand is a competitive SEO company that works for success and puts 100% of its knowledge and skill to provide our client’s website with a better position in search engines.
This is what we love to do and live to do. We read hundreds of SEO articles every day to keep our skills updated so you get the best from our agency.
" />
    </>
  );
};

export default page;
