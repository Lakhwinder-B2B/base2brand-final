"use client";

import React, { useState } from "react";   
// import { useEffect } from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Quote from "../../../public/services2-img/quote-ico.png";
import Bg from '../../../public/services2-img/service-mask.svg';
import Process from "../our-process";
import Services2 from "../service2-section";
import './services2.css'
import Request from "../request-form";

// import 'aos/dist/aos.css';
// import AOS from 'aos';

export default function Service() {
  const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };


  return (
    <>
      <Header />
      <div className="bg_home p-0">
        <div className="service-banner full_height p-3 p-md-5" style={{backgroundImage: `url(${Bg.src})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="container mx-auto">
            <div className="row col-12 col-lg-10 d-flex flex-wrap align-items-center justify-content-center m-auto"> 
              <div className="col-12 col-sm-12 col-md-9 d-flex flex-wrap align-items-center justify-content-center pt-5 pb-5" data-aos="fade-up" >
                 <h1 className="text-center mb-3 b2b-sub-heading-bold text-uppercase">Innovative Solutions, Exceptional Services, Unmatched Results</h1>
                 <p className="text-white text-center col-12 col-sm-12 col-md-8 m-auto">
                 Cutting-edge services, solutions for any problem: Your trusted IT partner for seamless innovation and success</p>
                 <div className="service-btn d-flex flex-wrap justify-content-center mt-3 w-100">
                  <button className="b2b-btn b2b-btn-lg m-0" onClick={toggleModal}>Request a Quote</button>
                 </div>
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
