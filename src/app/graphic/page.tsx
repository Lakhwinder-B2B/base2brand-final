"use client";

import  React, { useState }  from "react";
// import { useEffect } from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import ServicesFooterLinks from "../services/services-footer-links";
import Creative from "../creative";
import Graphicservices from "../graphic-services";
import UiUx from "../ui-ux";
import Faq from "../graphic/faq";   
import '../graphic/graphic.css'
import "../service-mb-style.css"; 

import 'aos/dist/aos.css';
import Request from "../request-form";
import Bg from '../../../public/services2-img/service-mask.svg';
import nextGeneration from '../../../public/graphics/representations-ui-ux.png';
import radialRight from '../../../public/img/radial-right.svg'; 

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Graphic() {
//   useEffect(() => {
//     AOS.init({
//          duration: 800,
//          once: false,
//        })
//  }, [])

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
        <div className="service-banner" >
          <div className="container mx-auto">
            <div className="row d-flex flex-wrap align-items-center m-auto"> 
              <div className="col-12 col-sm-12 col-md-7  " data-aos="fade-up" >
                 <h1 className="mb-md-3 mb-2 b2b-sub-heading-bold text-uppercase">graphic &amp; Ui/Ux designing</h1>
                 <p className="text-white col-12 col-sm-12 col-md-12 m-auto">
                 Let us improve your digital presence and fascinate your audience with captivating and visually stunning designs with our UI/UX and graphic design services</p>
                 <div className="service-btn d-flex flex-wrap mt-3 w-100">
                  <button onClick={toggleModal} className="b2b-btn b2b-btn-lg m-0" >Request a Quote</button>
                 </div>
              </div>
              <div className="col-12 col-sm-12 col-md-5 d-flex flex-wrap align-items-center justify-content-center" data-aos="fade-up" >
              <DotLottieReact
                  src='/json/banner/UX-UI.json'
                  loop
                  autoplay
                  className="animated-imgs animated-banner-img"
                />
              </div>
            </div>
          </div> 
        </div>
        <div className="py-5" data-aos="fade-up">
          <div className="container">
              <div className="row align-items-center"> 
                  <div className="col-md-5 mb-md-0 mb-4" data-aos="fade-up" data-aos-delay="300">
                    <img className="w-100" src={nextGeneration.src} alt="" />
                  </div>
                  <div className="col-md-7 text-white"> 
                      <h1 className="b2b-main-heading mb-3" data-aos="fade-up" data-aos-delay="300">How UI/UX Affect Your App<br />or Website&apos;s Performance?</h1>
                      <p className="b2b-text-sm" data-aos="fade-up" data-aos-delay="300">Studies show that 86% of visitors leave a website or app within two seconds if it does not have good visuals and graphics. So the performance of your online platform largely depends on how it presents itself to visitors. No matter how skillfully and sincerely your content describes your services or products, if it lacks quality graphics and the product images are pixelated and unenhanced, it is a waste of resources.</p>
                      <button onClick={toggleModal} className="b2b-btn b2b-btn-sm m-0 d-none-md"  data-aos="fade-up" data-aos-delay="300">Request a Quote</button>
                  </div>
                  
              </div>
          </div>
        </div>
        
        <Creative/>
        <Graphicservices/> 
        <UiUx/>
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
