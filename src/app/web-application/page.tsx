"use client";

import React, { useState } from "react";
import Header from "../../../component/header";
import DesignWork from "./design-work";
import DesignTabs from "./design-tabs";
import Faq from "./faq"; 
import ServicesFooterLinks from "../services/services-footer-links";
import Footer from "../../../component/footer";
import "./web.css"; 
import "../service-mb-style.css"; 
import radialRight from '../../../public/img/radial-right.svg'; 
import Bg from '../../../public/services2-img/service-mask.svg';

import Request from "../request-form";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
export 
default function WebApplication() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setTimeout(function() {
      const ModalBody = document.querySelector(".request-form");
      if(ModalBody){
        ModalBody.classList.add("transformAnim");
      }
                               
      }, 200);
  };
  return (
    <>
      <Header />
      <div className="b2b-black-bg" >
        <div className="service-banner full_height p-md-5 p-0" >
          <div className="container mx-auto">
            <div className="row d-flex flex-wrap align-items-center m-auto"> 
              <div className="col-12 col-sm-12 col-md-6 d-flex flex-wrap align-items-center" data-aos="fade-up" >
                 <h1 className=" mb-md-3 mb-2 b2b-sub-heading-bold text-uppercase">WEBSITE DEVELOPMENT SERVICES</h1>
                 <p className="text-white col-12 col-sm-12 col-md-12 m-auto">
                 Our web development service offers tailored digital solutions through a collaborative team approach. We align our strategies with your project goals to create innovative websites that engage your audience effectively.</p>
                 <div className="service-btn d-flex flex-wrap mt-3 w-100">
                  <button onClick={toggleModal} className="b2b-btn b2b-btn-lg m-0" >Request a Quote</button>
                 </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 d-flex flex-wrap align-items-center justify-content-center" data-aos="fade-up" >
              <DotLottieReact
                  src='/json/banner/Web development.json'
                  loop
                  autoplay
                  className="animated-imgs animated-banner-img"
                />
              </div>
            </div>
          </div> 
        </div>
        <div className="py-5 b2b-gray-bg" >
          <div className="b2b-container-lg">
            <div className="row">
              <div className="col-md-8 text-center m-auto" >
                <h3 className='b2b-partners-heading'>Our Website Development Process</h3> 
                <p className="text-white b2b-text-sm letterSpacing-1">We follow a streamlined process in our web development service. From initial discovery to deployment and optimization, each step is carefully executed to ensure your website meets your goals, engages your audience effectively, and delivers exceptional results.</p>
              </div>
            </div>
          </div>
                
        </div>   
        <DesignTabs />  
        <DesignWork />

        <div className="b2b-black-bg pt-5 pb-3" style={{ backgroundImage: `url(${radialRight.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right'}}>
          <Faq />
            <ServicesFooterLinks />
        </div>
        <Footer />
       
      </div>
      {showModal && 
        <Request 
          onCloseModal={toggleModal} 
        />
      }
    </>
  );
}

