"use client";

import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Development from "../shopify/development";
import Faq from "../shopify/faq";

import Bg from '../../../public/shopify/shopify_bg.png';
import radialRight from '../../../public/img/radial-right.svg'; 
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import "../shopify/service.css";
export default function services() {
 
  return (
    <>
      <Header />
      <div className="bg_home pt-0">
        <div className="service-banner" style={{backgroundImage: `url(${Bg.src})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="container mx-auto">
            <div className="row d-flex flex-wrap align-items-center justify-content-center m-auto"> 
              <div className="full_height col-12 col-sm-12 col-md-12 d-flex flex-wrap align-items-center justify-content-center pt-5 pb-5" data-aos="fade-up" >
              <DotLottieReact
                  src='/json/Solar-system-Shopify.json'
                  loop
                  autoplay
                  className="animated-imgs animated-banner-img"
                />
                </div>
                <div className="col-12 col-sm-12 col-md-12 d-flex flex-wrap align-items-center justify-content-center pt-5 pb-5" data-aos="fade-up" >
                
                 <h1 className="banner-text-outline text-center mb-3 text-uppercase">SHOPIFY EXPERTS</h1>
                 
              </div>
            </div>
          </div> 
        </div>
        <Development /> 
        <div className="b2b-black-bg pt-5 pb-3" style={{ backgroundImage: `url(${radialRight.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right'}}>
          
            <div className='container mb-5 pt-5'>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2 className='b2b-main-heading text-center mb-4 text-uppercase'>Looking For Other Services</h2>
                  <p className="text-white text-center b2b-text mb-5">We&apos;re not just about mobile app development; we provide a comprehensive suite of IT solutions. From web development to digital marketing, our services encompass everything your business needs to thrive in the digital landscape</p>
                </div>
                <div className="col-lg-10">
                  <div className="row justify-content-center">
                      <div className="col-lg-4 mb-3">
                        <a className="menuLink" href="/web-application">
                          <div className="menuInner b2b-lightBlue-bg">
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
                          <div className="menuInner b2b-pink-bg">
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
                          <div className="menuInner b2b-lightBlue-bg">
                              <h3 className='b2b-title-text text-black'>UI/UX &amp; Graphic Design</h3>
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
