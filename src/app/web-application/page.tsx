"use client";

import React from "react";
import Header from "../../../component/header";
import DesignWork from "./design-work";
import Faq from "./faq"; 
import Footer from "../../../component/footer";
import "./web.css"; 
import radialRight from '../../../public/img/radial-right.svg'; 
import Bg from '../../../public/services2-img/service-mask.svg';

export default function WebApplication() {
 
  return (
    <>
      <Header />
      <div className="b2b-black-bg">
        <div className="service-banner full_height p-3 p-md-5" style={{backgroundImage: `url(${Bg.src})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="container mx-auto">
            <div className="row d-flex flex-wrap align-items-center justify-content-center m-auto"> 
              <div className="col-12 col-sm-12 col-md-9 d-flex flex-wrap align-items-center justify-content-center pt-5 pb-5" data-aos="fade-up" >
                 <h1 className="text-center mb-3 b2b-sub-heading-bold text-uppercase">WEBSITE DEVELOPMENT SERVICES</h1>
                 <p className="text-white text-center col-12 col-sm-12 col-md-12 m-auto">
                 Our web development service offers tailored digital solutions through a collaborative team approach. We align our strategies with your project goals to create innovative websites that engage your audience effectively.</p>
                 <div className="service-btn d-flex flex-wrap justify-content-center mt-3 w-100">
                  <button className="b2b-btn b2b-btn-lg m-0" >Request a Quote</button>
                 </div>
              </div>
            </div>
          </div> 
        </div>
        <div className="py-5 b2b-gray-bg" >
          <div className="b2b-container-lg">
            <div className="row">
              <div className="col-md-8 text-center m-auto" >
                <h3 className='b2b-partners-heading'>Our Website Development Process</h3> 
                <p className="text-white">We follow a streamlined process in our web development service. From initial discovery to deployment and optimization, each step is carefully executed to ensure your website meets your goals, engages your audience effectively, and delivers exceptional results.</p>
              </div>
            </div>
          </div>
                
        </div>     
        <DesignWork />

        <div className="b2b-black-bg pt-5 pb-3" style={{ backgroundImage: `url(${radialRight.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right'}}>
          <Faq />
            <div className='container mb-5 pt-5'>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2 className='b2b-main-heading text-center mb-4 text-uppercase'>Looking For Other Services</h2>
                  <p className="text-white text-center b2b-text mb-5">We&apos;re not just about mobile app development; we provide a comprehensive suite of IT solutions. From web development to digital marketing, our services encompass everything your business needs to thrive in the digital landscape</p>
                </div>
                <div className="col-lg-10">
                  <div className="row justify-content-center">
                      
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
                          <div className="menuInner b2b-pink-bg">
                              <h3 className='b2b-title-text text-black'>Digital Marketing</h3>
                              <div className='d-flex align-items-center justify-content-between'>
                                <p className='menuText mb-0'>Marketing Strategies that Grow Sales</p>
                                <span className='menuIcon pl-3'></span>
                              </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 mb-3">
                        <a className="menuLink" href="/e-commerce">
                          <div className="menuInner b2b-lightBlue-bg">
                              <h3 className='b2b-title-text text-black'>Ecommerce</h3>
                              <div className='d-flex align-items-center justify-content-between'>
                                <p className='menuText mb-0'>Increase online sales seamlessly</p>
                                <span className='menuIcon pl-3'></span>
                              </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 mb-3">
                        <a className="menuLink" href="/">
                          <div className="menuInner b2b-pink-bg">
                              <h3 className='b2b-title-text text-black'>Shopify Development</h3>
                              <div className='d-flex align-items-center justify-content-between'>
                                <p className='menuText mb-0'>Bespoke Brand Growth Strategies</p>
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
    </>
  );
}

