"use client";

import React, { useEffect,useState, useRef } from 'react';
import Header from "../../../component/header";
import About1 from "../../../public/career-img/about.svg"
import Footer from "../../../component/footer";
import "./about.css";
import Request from "../request-form";
import radialBg from '../../../public/img/radial_bg.svg'; 

import Img1 from '../../../public/career-img/img1.svg'; 
import Img2 from '../../../public/career-img/img2.svg'; 
import Img3 from '../../../public/career-img/img3.svg'; 
import Img4 from '../../../public/career-img/img4.svg'; 
import Img5 from '../../../public/career-img/img5.svg'; 
import Img6 from '../../../public/career-img/img6.svg'; 
import Img7 from '../../../public/career-img/img7.svg'; 
import Img8 from '../../../public/career-img/img8.svg'; 
import Img9 from '../../../public/career-img/img9.svg'; 
import Img10 from '../../../public/career-img/img10.svg'; 
import Img11 from '../../../public/career-img/img11.svg'; 
import Img12 from '../../../public/career-img/img12.svg'; 
import Img13 from '../../../public/career-img/img13.svg'; 
import Img14 from '../../../public/career-img/img14.svg'; 

import Slider from "react-slick";
import { Link,  Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import radialRight from '../../../public/img/radial-bg-right1.svg'; 



export default function Team() {

  return (
    <>
      <Header />
        <div className="pt-0 pb-0 b2b-black-bg">
          <div className="about-mask pt-5" style={{backgroundImage: `url(${radialBg.src})`,backgroundSize: 'contain',backgroundRepeat: 'no-repeat'}}>
              <div className='crew-wrap'> 
                <div className="row m-0 position-relative align-items-center text-white pt-md-5 pt-0"> 
                  
                  <div className="col-12 col-sm-12 col-md-5 bannerContent">
                      <h1 className='b2b-sub-heading-bold text-uppercase'>Would you like to join Base2Brand?</h1>
                      <p className='b2b-sub-text'>Check the current openings below!</p>
                    
                    
                  </div>
                  <div className="col-12 col-sm-12 col-md-6">
                    <img src={About1.src} alt="" />
                  </div>
                  
                
                </div>
              </div>
            
              <div className="crew-wrap mt-5">
                
                <div className="row justify-content-center mt-5">
                  <div className="col-md-12 mx-auto text-center text-white mb-5"> 
                      <h1 className='b2b-sub-heading-bold text-uppercase'>Current Openings</h1>
                  </div>
                  <div className='col-md-3 col-6 mb-5'>
                    <img src={Img1.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>UI/UX designer</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  <div className='col-md-3 col-6 mb-5'>
                    <img src={Img2.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>front-end developer</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  <div className='col-md-3 col-6 mb-5'>
                    <img src={Img3.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>Node.JS Developer</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  <div className='col-md-3 col-6 mb-5'>
                    <img src={Img4.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>Wordpress Developer</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  <div className='col-md-3 col-6 mb-5'>
                    <img src={Img5.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>Content writer</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  <div className='col-md-3 col-6 mb-5'>
                    <img src={Img6.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>marketing executive</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  <div className='col-md-3 col-6 mb-5'>
                    <img src={Img7.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>Shopify developer</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  <div className='col-md-3 col-6 mb-5'>
                    <img src={Img8.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>Project coordinator</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  <div className='col-md-3 col-6 mb-5'>
                    <img src={Img9.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>React Native</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  <div className='col-md-3 col-6 mb-5'>
                    <img src={Img10.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>Human resources</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  <div className='col-md-3 col-6 mb-5'>
                    <img src={Img11.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>Full Stack developer</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  <div className='col-md-3 col-6 mb-5'>
                    <img src={Img12.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>Digital marketing</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  <div className='col-md-3 col-6 mb-5'>
                    <img src={Img13.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>BDE</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  <div className='col-md-3 col-6 mb-5'>
                    <img src={Img14.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>Flutter</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  
                  
                  
                </div>
              </div>
            
          </div>

          
          
          <div className="b2b-black-bg pb-3" style={{ backgroundImage: `url(${radialRight.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right'}}>
              
              
              <div className='container mb-5 pt-5'>
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <h2 className='b2b-main-heading text-center mb-5 text-uppercase'>More about us</h2>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 mb-3">
                  <a className="menuLink" href="/about">
                      <div className="menuInner b2b-lightBlue-bg">
                          <h3 className='b2b-title-text text-black'>About Us</h3>
                          <div className='d-flex align-items-center justify-content-between'>
                            <p className='menuText mb-0'>We are super efficient and humble to serve you.</p>
                            <span className='menuIcon pl-3'></span>
                          </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 mb-3">
                    <a className="menuLink" href="/team">
                      <div className="menuInner b2b-pink-bg">
                          <h3 className='b2b-title-text text-black'>Team</h3>
                          <div className='d-flex align-items-center justify-content-between'>
                            <p className='menuText mb-0'>We are proud of our experienced and accomplished team!</p>
                            <span className='menuIcon pl-3'></span>
                          </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
          </div>
          <Footer />
        </div>
      </>
  );
}

