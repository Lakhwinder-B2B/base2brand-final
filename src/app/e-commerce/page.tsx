"use client";

import React, { useState } from "react"; 
import Header from "../../../component/header";
import Technologystack from "./technologystack";
import EcommerceFunctionality from "./ecommerce-functionality"; 
import Services from "./services"; 
import Quote from "../request-quote"; 
import Footer from "../../../component/footer";
import ServicesFooterLinks from "../services/services-footer-links";
import "../mobile-application/mobile.css";
import "../e-commerce/commerce.css";
import "../service-mb-style.css"; 
import Request from "../request-form";
 
 
import Bg from '../../../public/services2-img/service-mask.svg';
import nextGeneration from '../../../public/ecommerce/e-commerce.png';
import radialRight from '../../../public/img/radial-right.svg'; 
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
export default function Ecommerce() {
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
      <div className="b2b-black-bg">
      <div className="service-banner ">
          <div className="container mx-auto">
            <div className="row d-flex flex-wrap align-items-center m-auto"> 
              <div className="col-12 col-sm-12 col-md-6" data-aos="fade-up" >
                 <h1 className="mb-md-3 mb-2 b2b-sub-heading-bold text-uppercase">ECOMMERCE WEBSITE DEVELOPMENT SERVICES</h1>
                 <p className="text-white col-12 col-sm-12 col-md-12 m-auto">
                 We specialize in E-commerce theme and app development, providing customized solutions to enhance your web store</p>
                 <div className="service-btn d-flex flex-wrap mt-3 w-100">
                  <button onClick={toggleModal} className="b2b-btn b2b-btn-lg m-0" >Request a Quote</button>
                 </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 d-flex flex-wrap align-items-center justify-content-center" data-aos="fade-up" >
              <DotLottieReact
                  src='/json/banner/e-commerce.json'
                  loop
                  autoplay
                  className="animated-imgs animated-banner-img"
                />
              </div>
            </div>
          </div> 
        </div>
        <div className="py-5">
          <div className="container">
              <div className="row align-items-center"> 
                  <div className="col-md-5 mb-md-0 mb-4">
                    <img className="w-100" src={nextGeneration.src} alt="" />
                  </div>
                  <div className="col-md-7 text-white"> 
                      <h1 className="b2b-main-heading mb-3">E-Commerce Store That<br />Match Your Needs</h1>
                      <p className="b2b-text-sm">Base2Brand offers bespoke eCommerce solutions tailored to your specific requirements. From design to development, our team ensures your online store reflects your brand identity while providing a seamless shopping experience for your customers. With our expertise, we'll bring your vision to life and create an eCommerce platform that meets your needs and exceeds your expectations.</p>
                      <button className="b2b-btn b2b-btn-sm m-0" >Read More</button>
                  </div>
                  
              </div>
          </div>
        </div>
        <EcommerceFunctionality />
        <Services />
        <Technologystack />
       
      
        <div className="b2b-black-bg pt-5 pb-3" style={{ backgroundImage: `url(${radialRight.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right'}}>
         
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

