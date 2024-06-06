"use client";

import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Feedback from "../feedback";
import Patner from "../shopify/patner";
import ProjectSlick from "../shopify/project-slick";
import Development from "../shopify/development";
import DevCompany from "../shopify/dev-company";
import ShopifyProcess from "../shopify/shopify-process";
import Faq from "../shopify/faq";
import Gif from '../../../public/services-img/gif.gif';   
import Typewriter from "typewriter-effect";
export default function services() {
 
  return (
    <>
      <Header />
      <div className="bg_home pt-0">
        <div className="gifbanner" style={{
      backgroundImage: `url(${Gif.src})`,
      width: '100%',
      height: '850px',
      display:'flex', 
      backgroundSize: 'cover',
      position: 'relative',
    }}>

    
        <div className="container mx-auto pt-4 pb-5">
          <div className="row align-items-center"> 
            <div className="col-md-12 text-center heading_lable" data-aos="fades-up">
              <Typewriter
                options={{
                  strings: ["Shopify"],
                  autoStart: true,
                  loop: true,
                }}
              />
              <h2>Partner Agency</h2>

              <h3 className="text-white mt-1">
              Sell where everyone scrolls, searches, and shops
              </h3>
               
            </div>
          </div>
        </div> 
        </div>
        <Patner />
        <Development /> 
        <ProjectSlick />
        <DevCompany />
        <ShopifyProcess />
        <Feedback />
        <Faq />
        <Footer />
     </div>
    </>
  );
}
