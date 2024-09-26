"use client";

import React from "react";
import Header from "../../../component/header";
import ServicesFooterLinks from "../services/services-footer-links";
import Footer from "../../../component/footer";
import Development from "../shopify/development";
import Bg from '../../../public/shopify/shopify_bg.png';
import radialRight from '../../../public/img/radial-right.svg'; 
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import "../shopify/service.css";
import "../service-mb-style.css"; 
import PageHead from "../../../component/PageHead";
import { title } from "process";
export default function services() {

  const PageMeta ={
    title:"Shopify Development Services (Hire Shopify Partner Agency)",
    description:"Enhance your e-commerce with our Shopify development services. Hire a certified Shopify Partner Agency. Start optimizing your store today!",
    canonical: "https://localhost:3000", // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
  };
 
  return (
    <>
    <PageHead PageMeta={PageMeta}/>
      <Header />
      <div className="bg_home pt-0">
        <div className="service-banner shopify-banner" style={{backgroundImage: `url(${Bg.src})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="container-fluid mx-auto">
            <div className="row d-flex flex-wrap align-items-center justify-content-center m-auto"> 
              <div className="col-12 col-sm-12 col-md-12 d-flex flex-wrap align-items-center justify-content-center py-2">
              <DotLottieReact
                  src='/json/Solar-system-Shopify.json'
                  loop
                  autoplay
                  className="animated-imgs animated-banner-img animated-shbanner-img"
                />
                <div className="col-12 col-sm-12 col-md-12 d-flex flex-wrap align-items-center justify-content-center py-1" >
                
                {/* <h1 className="banner-text-outline text-center mb-3 text-uppercase">SHOPIFY EXPERTS</h1> */}
                <div className="bannerTitle">
                <svg viewBox="0 0 1320 300" className="text_show">
                    <text x="50%" y="50%" dy=".35em" text-anchor="middle">SHOPIFY EXPERTS</text>
                </svg>

                     {/* <svg viewBox="0 0 1320 300">
                         <text x="50%" y="50%" dy=".35em" text-anchor="middle" stroke-dasharray="5,5">
                             SHOPIFY EXPERTS
                         </text>
                     </svg> */}
                 </div>
             </div>
                </div>
                
            </div>
          </div> 
        </div>
        <Development /> 
        <div className="b2b-black-bg pt-md-5 pt-0 pb-3" style={{ backgroundImage: `url(${radialRight.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right'}}>
          
          <ServicesFooterLinks />
        </div>
        <Footer />
     </div>
    </>
  );
}
