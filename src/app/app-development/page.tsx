'use client'

import React, { useState } from "react";   

// import { useEffect } from "react";
import Header from '../../../component/header';
import Footer from '../../../component/footer';
import BigCommerce from './bigCommerce';   
import Angagement from '../app-development/engagement-model';  
import Faq from '../faq';  
import '../big-commerce/commerce.css';
import '../app-development/app.css';
import "../service-mb-style.css"; 
import Request from "../request-form";
 
import Bg from '../../../public/services2-img/service-mask.svg';
import nextGeneration from '../../../public/app/next-generation.png';
import Icon1 from '../../../public/app/icon1.svg';
import Icon2 from '../../../public/app/icon2.svg';
import Icon3 from '../../../public/app/icon3.svg';
import Icon4 from '../../../public/app/icon4.svg';

import Icon5 from "../../../public/services2-img/icon5.svg";
import Icon6 from "../../../public/services2-img/icon6.svg";
import Icon7 from "../../../public/services2-img/icon7.svg";
import Icon8 from "../../../public/services2-img/icon16.svg";

import Icon16 from "../../../public/services2-img/Android-studio.svg";
import Icon17 from "../../../public/services2-img/kotlin.svg";
import Icon18 from "../../../public/services2-img/ios-sdk.svg";
import Icon19 from "../../../public/services2-img/xcode.svg";
import Icon20 from "../../../public/services2-img/React-Native.svg";
import Icon21 from "../../../public/services2-img/ionic.svg";
import Icon22 from "../../../public/services2-img/flutter.svg";

import b1 from "../../../public/services2-img/b1.svg";
import b2 from "../../../public/services2-img/b2.svg";
import b3 from "../../../public/services2-img/b3.svg";
import b4 from "../../../public/services2-img/b4.svg";
import b5 from "../../../public/services2-img/b5.svg";
import b6 from "../../../public/services2-img/b6.svg";
import b7 from "../../../public/services2-img/b7.svg";
import b8 from "../../../public/services2-img/b8.svg";

import c1 from "../../../public/services2-img/c1.svg";
import c2 from "../../../public/services2-img/c2.svg";

import t1 from "../../../public/services2-img/t1.svg";
import t2 from "../../../public/services2-img/t2.svg";
import radialRight from '../../../public/img/radial-right.svg'; 

export default function BigCommence() { 
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
      <div className="bg-black">
        <div className="service-banner full_height p-md-5 p-0" style={{backgroundImage: `url(${Bg.src})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="container mx-auto">
            <div className="row d-flex flex-wrap align-items-center justify-content-center m-auto"> 
              <div className="col-12 col-sm-12 col-md-9 d-flex flex-wrap align-items-center justify-content-center py-md-5 py-5" data-aos="fade-up" >
                 <h1 className="text-center mb-md-3 mb-2 b2b-sub-heading-bold text-uppercase">Mobile App Development</h1>
                 <p className="text-white text-center col-12 col-sm-12 col-md-12 m-auto letterSpacing-1">
                 We offer comprehensive app development for iOS and Android, covering design, coding, testing, and deployment. Collaborative efforts ensure bespoke, top-tier solutions for clients.</p>
                 <div className="service-btn d-flex flex-wrap justify-content-center mt-3 w-100">
                  <button onClick={toggleModal} className="b2b-btn b2b-btn-lg m-0">Request a Quote</button>
                 </div>
              </div>
            </div>
          </div> 
        </div>
        <div className="b2b-gray-bg py-5 nextGenWrap">
          <div className="container">
              <div className="row align-items-center"> 
                  <div className="col-lg-7 col-md-12 text-white order-lg-1 order-2"> 
                      <h1 className="b2b-main-heading mb-3">Developing Custom, Scalable, And <br />Next-Generation Mobile Apps</h1>
                      <p className="b2b-text-sm letterSpacing-1">Crafting innovative, scalable mobile apps demands a holistic approach. We delve into client needs, user expectations, and tech trends. Our process begins with thorough consultations, understanding your goals. Leveraging cutting-edge tech, our skilled team tailors solutions for optimal user experience and interface design.</p>
                      <p className="b2b-text-sm letterSpacing-1">We prioritize scalability, ensuring seamless growth. From concept to deployment, maintenance, and updates, we offer comprehensive development services. Collaborate with us to realize your vision and redefine mobile excellence.</p>
                  </div>
                  <div className="col-lg-5 col-md-12 order-lg-2 order-1 mb-lg-0 mb-4">
                    <img className="w-100" src={nextGeneration.src} alt="" />
                  </div>
              </div>
          </div>
        </div>
                <BigCommerce /> 
                <div className="bg_light_green"> 
                  <div className="container pt-md-5 pt-3 ">
                      <div className="row mb-5">
                        <div className="col-lg-3 col-md-3 mb-4">
                          <div className="hoverGradient blueGD">
                            <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap">
                              <div className="me-lg-3 me-md-1 me-3"><img src={Icon1.src} alt="IOS App Development" /></div>
                              <h3 className="b2b-sub-text ml-3 mb-0">IOS App<br />Development</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 mb-4">
                          <div className="hoverGradient blueGD">
                            <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap">
                              <div className="me-lg-3 me-md-1 me-3"><img src={Icon2.src} alt="Android App Development" /></div>
                              <h3 className="b2b-sub-text ml-3 mb-0">Android App<br />Development</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 mb-4">
                          <div className="hoverGradient blueGD">
                            <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap">
                              <div className="me-lg-3 me-md-1 me-3"><img src={Icon3.src} alt="React Native App Development" /></div>
                              <h3 className="b2b-sub-text ml-3 mb-0">React Native App<br />Development</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 mb-4">
                          <div className="hoverGradient blueGD">
                            <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap">
                              <div className="me-lg-3 me-md-1 me-3"><img src={Icon4.src} alt="Flutter App Development" /></div>
                              <h3 className="b2b-sub-text ml-3 mb-0">Flutter App<br />Development</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="col-lg-8 m-auto">
                          <h2 className="b2b-main-heading text-center">Technology Stacks We Use For Developing Mobile Apps</h2>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-xl-12 col-xxl-10  m-auto">
                            <ul className="nav nav-pills mb-3 service_tabs justify-content-center" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active btn_service" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">FRONT END</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link btn_service" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">BACK END</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link btn_service" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">CLOUD</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link btn_service" id="pills-design-tab" data-bs-toggle="pill" data-bs-target="#pills-design" type="button" role="tab" aria-controls="pills-design" aria-selected="false">DESIGN</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link btn_service" id="pills-testing-tab" data-bs-toggle="pill" data-bs-target="#pills-testing" type="button" role="tab" aria-controls="pills-testing" aria-selected="false">TESTING</button>
                                </li>
                            
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                      <div className="container">
                                        <div className="row appIcons row-cols-2 row-cols-lg-5 row-cols-md-3  row-cols-sm-2  row-cols-xs-2 text-white mt-4 justify-content-center align-items-center">
                                          <div className="col mb-5">
                                              <img className="service_tab_icon" src={Icon16.src} alt="" />
                                              <span>Android Studio</span>
                                          </div>
                                          <div className="col mb-5">
                                          <img className="service_tab_icon" src={Icon17.src} alt="" />
                                              <span>Kotlin</span>
                                          </div>
                                          <div className="col mb-5">
                                          <img className="service_tab_icon" src={Icon18.src} alt="" />
                                              <span>iOS SDK</span>
                                          </div>
                                          <div className="col mb-5"> 
                                          <img className="service_tab_icon" src={Icon19.src} alt="" />
                                              <span>XCode</span>
                                          </div>
                                          <div className="col mb-5">
                                          <img className="service_tab_icon" src={Icon20.src} alt="" />
                                              <span>React Native</span>
                                          </div>
                                          <div className="col mb-5">
                                          <img className="service_tab_icon" src={Icon21.src} alt="" />
                                              <span>Ionic</span>
                                          </div>
                                          <div className="col mb-5">
                                          <img className="service_tab_icon" src={Icon22.src} alt="" />
                                              <span>Flutter</span>
                                          </div>
                                        
                                        </div>
                                      </div>
                                    </div>

                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                      <div className="container">
                                        <div className="row appIcons row-cols-2 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-xs-2 text-white mt-4 justify-content-center align-items-center">
                                          <div className="col mb-5">
                                              <img className="service_tab_icon" src={b1.src} alt="" />
                                              <span>Firebase</span>
                                          </div>
                                          
                                          <div className="col mb-5">
                                          <img className="service_tab_icon" src={b2.src} alt="" />
                                              <span>SQLite</span>
                                          </div>
                                          <div className="col mb-5"> 
                                          <img className="service_tab_icon" src={b3.src} alt="" />
                                              <span>AWS</span>
                                          </div>
                                          <div className="col mb-5">
                                          <img className="service_tab_icon" src={b4.src} alt="" />
                                              <span>MySQL</span>
                                          </div>
                                          <div className="col mb-5">
                                          <img className="service_tab_icon" src={b5.src} alt="" />
                                              <span>NodeJS</span>
                                          </div>
                                          <div className="col mb-5">
                                          <img className="service_tab_icon" src={b6.src} alt="" />
                                              <span>MongoDB</span>
                                          </div>
                                          <div className="col mb-5">
                                          <img className="service_tab_icon" src={b7.src} alt="" />
                                              <span>Django</span>
                                          </div>
                                          <div className="col mb-5">
                                          <img className="service_tab_icon" src={b8.src} alt="" />
                                              <span>PHP</span>
                                          </div>
                                        
                                        </div>
                                      </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                      <div className="container">
                                        <div className="row appIcons row-cols-2 row-cols-lg-4 row-cols-md-3 row-cols-sm-2  row-cols-xs-2 text-white mt-4 justify-content-center align-items-center">
                                          <div className="col mb-5">
                                              <img className="service_tab_icon" src={c1.src} alt="" />
                                              <span>Firebase</span>
                                          </div>
                                          <div className="col mb-5">
                                          <img className="service_tab_icon" src={Icon22.src} alt="" />
                                              <span>Flutter</span>
                                          </div>
                                          <div className="col mb-5"> 
                                          <img className="service_tab_icon" src={b3.src} alt="" />
                                              <span>AWS</span>
                                          </div>
                                          <div className="col mb-5">
                                              <img className="service_tab_icon" src={b1.src} alt="" />
                                              <span>Firebase</span>
                                          </div>
                                          <div className="col mb-5"> 
                                            <img className="service_tab_icon" src={c2.src} alt="" />
                                              <span>Heroku</span>
                                          </div>
                                        
                                        
                                        </div>
                                      </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-design" role="tabpanel" aria-labelledby="pills-design-tab">
                                      <div className="container">
                                        <div className="row appIcons row-cols-2 row-cols-lg-4 row-cols-md-3 row-cols-sm-2  row-cols-xs-2 text-white mt-4 justify-content-center align-items-center">
                                          <div className="col mb-5">
                                              <img className="service_tab_icon" src={Icon7.src} alt="" />
                                              <span>Figma</span>
                                          </div>
                                          <div className="col mb-5">
                                            <img className="service_tab_icon" src={Icon8.src} alt="" />
                                              <span>Adobe XD</span>
                                          </div>
                                          <div className="col mb-5">
                                            <img className="service_tab_icon" src={Icon6.src} alt="" />
                                              <span>Adobe Photoshop</span>
                                          </div>
                                          <div className="col mb-5"> 
                                            <img className="service_tab_icon" src={Icon5.src} alt="" />
                                              <span>Adobe Illustrator</span>
                                          </div>
                                        
                                        
                                        </div>
                                      </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-testing" role="tabpanel" aria-labelledby="pills-testing-tab">
                                      <div className="container">
                                        <div className="row appIcons row-cols-2 row-cols-lg-4 row-cols-md-3 row-cols-sm-2  row-cols-xs-2 text-white mt-4 justify-content-center align-items-center">
                                          <div className="col mb-5">
                                              <img className="service_tab_icon" src={t1.src} alt="" />
                                              <span>Appium</span>
                                          </div>
                                          <div className="col mb-5">
                                            <img className="service_tab_icon" src={t2.src} alt="" />
                                              <span>Jest</span>
                                          </div>
                                        
                                        
                                        </div>
                                      </div>
                                    </div>

                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <Angagement />
                <div className="b2b-black-bg pt-5 pb-3" style={{ backgroundImage: `url(${radialRight.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right'}}>
                      <Faq />
                        <div className='container mb-md-5 mb-3 pt-5'>
                          <div className="row justify-content-center">
                            <div className="col-lg-8">
                              <h2 className='b2b-main-heading text-center mb-4 text-uppercase'>Looking For Other Services</h2>
                              <p className="text-white text-center b2b-text letterSpacing-1 mb-5">We&apos;re not just about mobile app development; we provide a comprehensive suite of IT solutions. From web development to digital marketing, our services encompass everything your business needs to thrive in the digital landscape</p>
                            </div>
                            <div className="col-lg-10">
                              <div className="row justify-content-center">
                                  <div className="col-lg-4 col-md-6 col-sm-8 mb-3">
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
                                  <div className="col-lg-4 col-md-6 col-sm-8  mb-3">
                                    <a className="menuLink" href="/graphic">
                                      <div className="menuInner b2b-lightBlue-bg">
                                          <h3 className='b2b-title-text text-black'>Graphic &amp; UI/UX designing</h3>
                                          <div className='d-flex align-items-center justify-content-between'>
                                            <p className='menuText mb-0'>Designs that Enhances User Engagement</p>
                                            <span className='menuIcon pl-3'></span>
                                          </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="col-lg-4 col-md-6 col-sm-8 mb-3">
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
                                  <div className="col-lg-4 col-md-6 col-sm-8 mb-3">
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
                                  <div className="col-lg-4 col-md-6 col-sm-8 mb-3">
                                    <a className="menuLink" href="/shopify">
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
        {showModal && 
        <Request 
          onCloseModal={toggleModal} 
        />
      }
    </>
  )
}
