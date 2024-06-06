"use client";

import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import DigitalLogo from "../digital-marketing/digital-logo";   
import DesignWork from "../digital-marketing/design-work";   
import ProjectSlick from "../shopify/project-slick";   
import NeedHere from "../digital-marketing/needhere";   
import OurClient from "../digital-marketing/our-client";   
import Digitalfeedback from "../digital-marketing/digital-feedback";

import Feedback from "../feedback"; 
import Request from "../request-quote"; 
import Brand from "../brand"; 
import Faq from "../shopify/faq";   
import Typewriter from "typewriter-effect";
import '../digital-marketing/digital.css'

import social from '../../../public/marketing-img/mar.png';
import social1 from '../../../public/marketing-img/mar1.png';
import social2 from '../../../public/marketing-img/mar2.png';
import social3 from '../../../public/marketing-img/mar3.png';

export default function marketing() {

  return (
    <>
      <Header />
      <div className="bg_home pt-5 pb-5">
        <div className="gifbanner">
        <div className="container mx-auto pt-4 pb-5">
          <div className="row align-items-center" data-aos="fade-up"> 
            <div className="col-md-12 heading_lable text-center mb-5 pb-5" >
              <Typewriter
                options={{
                  strings: ["Digital Marketing"],
                  autoStart: true,
                  loop: true,
                }}
              />  
              <button className="btn btn-outline-primary mt-5"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <img src={social.src} alt="" className="socialImg" /> 
            </div>
            <div className="col-6 col-md-3 mb-4">
              <img src={social1.src} alt="" className="socialImg" /> 
            </div>
            <div className="col-6 col-md-3 mb-4">
              <img src={social2.src} alt="" className="socialImg" /> 
            </div>
            <div className="col-6 col-md-3 mb-4">
              <img src={social3.src} alt="" className="socialImg" /> 
            </div>
          </div>
        </div> 
        </div>
        <DigitalLogo />
        {/* <DesignWork /> */}
        <NeedHere />
        {/* <OurClient /> */}
       
         {/* <Brand /> */}
         {/* <Brand /> */}
         <Digitalfeedback />
        {/* <Feedback /> */}
        <Faq />
        <Request />
        <Footer />
       
      </div>
    </>
  );
}
