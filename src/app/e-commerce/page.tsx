"use client";

import React, { useState } from "react"; 
import Header from "../../../component/header";
import Technologystack from "./technologystack";
import EcommerceFunctionality from "./ecommerce-functionality"; 
import Services from "./services"; 
import Quote from "../request-quote"; 
import Footer from "../../../component/footer";
import "../mobile-application/mobile.css";
import "../e-commerce/commerce.css";
import Request from "../request-form";


import Bg from '../../../public/services2-img/service-mask.svg';
import nextGeneration from '../../../public/ecommerce/e-commerce.png';
import radialRight from '../../../public/img/radial-right.svg'; 

export default function Ecommerce() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Header />
      <div className="b2b-black-bg">
      <div className="service-banner full_height p-3 p-md-5" style={{backgroundImage: `url(${Bg.src})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="container mx-auto">
            <div className="row d-flex flex-wrap align-items-center justify-content-center m-auto"> 
              <div className="col-12 col-sm-12 col-md-9 d-flex flex-wrap align-items-center justify-content-center pt-5 pb-5" data-aos="fade-up" >
                 <h1 className="text-center mb-3 b2b-sub-heading-bold text-uppercase">ECOMMERCE WEBSITE DEVELOPMENT SERVICES</h1>
                 <p className="text-white text-center col-12 col-sm-12 col-md-12 m-auto">
                 We specialize in E-commerce theme and app development, providing customized solutions to enhance your web store</p>
                 <div className="service-btn d-flex flex-wrap justify-content-center mt-3 w-100">
                  <button className="b2b-btn b2b-btn-lg m-0" >Request a Quote</button>
                 </div>
              </div>
            </div>
          </div> 
        </div>
        <div className="py-5">
          <div className="container">
              <div className="row align-items-center"> 
                  <div className="col-md-5">
                    <img src={nextGeneration.src} alt="" />
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
         
            <div className='container mb-5'>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2 className='b2b-main-heading text-center mb-4 text-uppercase'>Looking For Other Services</h2>
                  <p className="text-white text-center b2b-text mb-5">We&apos;re not just about mobile app development; we provide a comprehensive suite of IT solutions. From web development to digital marketing, our services encompass everything your business needs to thrive in the digital landscape</p>
                </div>
                <div className="col-lg-10">
                  <div className="row justify-content-center">
                      <div className="col-lg-4 mb-3">
                        <a className="menuLink" href="/web-application">
                          <div className="menuInner b2b-pink-bg">
                              <h3 className='b2b-title-text text-black'>Web Development</h3>
                              <div className='d-flex align-items-center justify-content-between'>
                                <p className='menuText mb-0'>Dynamic Website for Mobile Devices</p>
                                <span className='menuIcon pl-3'></span>
                              </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 mb-3">
                        <a className="menuLink" href="/app-development">
                          <div className="menuInner b2b-lightBlue-bg">
                              <h3 className='b2b-title-text text-black'>Mobile App Development</h3>
                              <div className='d-flex align-items-center justify-content-between'>
                                <p className='menuText mb-0'>Sales Friendly App for Your Business</p>
                                <span className='menuIcon pl-3'></span>
                              </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 mb-3">
                        <a className="menuLink" href="/graphic">
                          <div className="menuInner b2b-pink-bg">
                              <h3 className='b2b-title-text text-black'>Graphic &amp; UI/UX designing</h3>
                              <div className='d-flex align-items-center justify-content-between'>
                                <p className='menuText mb-0'>Designs that Enhances User Engagement</p>
                                <span className='menuIcon pl-3'></span>
                              </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 mb-3">
                        <a className="menuLink" href="/digital-marketing">
                          <div className="menuInner b2b-lightBlue-bg">
                              <h3 className='b2b-title-text text-black'>Digital Marketing</h3>
                              <div className='d-flex align-items-center justify-content-between'>
                                <p className='menuText mb-0'>Marketing Strategies that Grow Sales</p>
                                <span className='menuIcon pl-3'></span>
                              </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 mb-3">
                        <a className="menuLink" href="/shopify">
                          <div className="menuInner b2b-pink-bg">
                              <h3 className='b2b-title-text text-black'>Shopify Development</h3>
                              <div className='d-flex align-items-center justify-content-between'>
                                <p className='menuText mb-0'>Dynamic Stores to Sell Online</p>
                                <span className='menuIcon pl-3'></span>
                              </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
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

