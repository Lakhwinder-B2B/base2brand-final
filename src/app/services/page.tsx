"use client";

import React, { useState } from "react";   
// import { useEffect } from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Quote from "../../../public/services2-img/quote-ico.png";
import Bg from '../../../public/services2-img/service-mask.svg';
import Process from "../our-process";
import Services2 from "./service2-section";
import './services2.css'
import "../service-mb-style.css";
import Request from "../request-form";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// import 'aos/dist/aos.css';
// import AOS from 'aos';

export default function Service() {
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
      <div className="bg_home p-0">

      <div className="service-banner" >
          <div className="container mx-auto">
            <div className="row flex-wrap align-items-center m-auto"> 
              <div className="col-12 col-sm-12 col-md-7 " data-aos="fade-up" >
                 <h1 className=" mb-md-3 mb-2 b2b-sub-heading-bold text-uppercase">Innovative Solutions, Exceptional Services, Unmatched Results</h1>
                 <p className="text-white col-12 col-sm-12 col-md-10">
                 Cutting-edge services, solutions for any problem: Your trusted IT partner for seamless innovation and success</p>
                 <div className="service-btn d-flex flex-wrap mt-3 w-100">
                  <button className="b2b-btn b2b-btn-sm" onClick={toggleModal}>Request a Quote</button>
                  {/* b2b-btn b2b-btn-lg m-0 */}
                 </div>
              </div>
              <div className="col-12 col-sm-12 col-md-5 d-flex flex-wrap align-items-center justify-content-center" data-aos="fade-up" >
              <DotLottieReact
                  src='/json\service\Service page banner.json'
                  loop
                  autoplay   
                  className="animated-imgs animated-banner-img"
                />
              </div>
            </div>
          </div> 
        </div>


        
   
        <Services2/>
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
