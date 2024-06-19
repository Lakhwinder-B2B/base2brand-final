'use client'

import React, { useState } from "react";    

import radialRight from '../../public/img/radial-right.svg'; 

import Service1 from "../../public/services2-img/web-development.png";
import Service2 from "../../public/services2-img/mobile_app.png";
import Service3 from "../../public/services2-img/UI_UX.png";
import Service4 from "../../public/services2-img/digital_marketing.png";

import Icon1 from "../../public/services2-img/icon1.svg";
import Icon2 from "../../public/services2-img/icon2.svg";
import Icon3 from "../../public/services2-img/icon3.svg";
import Icon4 from "../../public/services2-img/icon4.svg";
import Icon5 from "../../public/services2-img/icon5.svg";
import Icon6 from "../../public/services2-img/icon6.svg";
import Icon7 from "../../public/services2-img/icon7.svg";
import Icon8 from "../../public/services2-img/icon8.svg";
import Icon9 from "../../public/services2-img/icon9.svg";
import Icon10 from "../../public/services2-img/icon10.svg";
import Icon11 from "../../public/services2-img/icon11.svg";
import Icon12 from "../../public/services2-img/icon12.svg";
import Icon13 from "../../public/services2-img/icon13.svg";
import Icon14 from "../../public/services2-img/icon14.svg";
import Icon15 from "../../public/services2-img/icon15.svg";


import Icon16 from "../../public/services2-img/Android-studio.svg";
import Icon17 from "../../public/services2-img/kotlin.svg";
import Icon18 from "../../public/services2-img/ios-sdk.svg";
import Icon19 from "../../public/services2-img/xcode.svg";
import Icon20 from "../../public/services2-img/React-Native.svg";
import Icon21 from "../../public/services2-img/ionic.svg";
import Icon22 from "../../public/services2-img/flutter.svg";

import Icon23 from "../../public/services2-img/python.svg";
import Icon24 from "../../public/services2-img/web.svg";
import Icon25 from "../../public/services2-img/developer.svg";
import Icon26 from "../../public/services2-img/social-media.svg";
import Icon27 from "../../public/services2-img/vector.svg";

import Brand from '../app/brand';
import Request from '../app/request-quote';
import RequestForm from "./request-form";



export default function Servicetwo() {
   
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>  
      <div className="container py-0 py-md-5 pb-5 overflow-hidden"> 


        <div className="row process text-white align-items-center mb-5 justify-content-center pt-5 px-5"> 
      
           <div className="ser-digital col-12 col-sm-6 col-md-6 pb-5 justify-content-end d-flex flex-wrap"  data-aos="fade-right">
                  <img src={Service1.src} alt=""/>
            </div>
            <div className="ser-digital-col col-12 col-sm-6 col-md-6 pb-5" data-aos="fade-left">
              <div className="d-flex flex-wrap justify-content-start align-items-center">
                <h2 className="b2b-sub-heading-bold text-uppercase mb-4">Web Development</h2>
                <p className="b2b-sub-text">We offer comprehensive Web Development services. From responsive website design to seamless functionality, we build tailored solutions that elevate your online presence and drive results for your business. With a keen eye for detail and a focus on user experience, our team ensures that your website not only looks great but also performs flawlessly across all devices.</p>
              <a className="service_link" href="/digital-marketing"> <button className="b2b-btn b2b-btn-sm m-0">Read More</button></a> 
              </div>
            </div>

        </div>
        
        <div className="row">
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
                        
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                              <div className="container">
                                <div className="row row-cols-5 text-white mt-4 justify-content-center align-items-center">
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
                                <div className="row row-cols-5 text-white mt-4 justify-content-center align-items-center">
                                  <div className="col mb-5">
                                      <img className="service_tab_icon" src={Icon23.src} alt="" />
                                      <span>Codeigniter</span>
                                  </div>
                                  <div className="col mb-5">
                                  <img className="service_tab_icon" src={Icon24.src} alt="" />
                                      <span>Laravel</span>
                                  </div>
                                  <div className="col mb-5">
                                  <img className="service_tab_icon" src={Icon25.src} alt="" />
                                      <span>NodeJS</span>
                                  </div>
                                  <div className="col mb-5"> 
                                  <img className="service_tab_icon" src={Icon26.src} alt="" />
                                      <span>PHP</span>
                                  </div>
                                  <div className="col mb-5">
                                  <img className="service_tab_icon" src={Icon20.src} alt="" />
                                      <span>Python</span>
                                  </div>
                                 
                                 
                                </div>
                              </div>
                            </div>

                            </div>
        </div>

        <div className="row process text-white mb-5 align-items-center justify-content-center px-5 pb-5">  
              

              <div className="ser-digital-col col-12 col-sm-6 col-md-6 pb-5"  data-aos="fade-right">
                  <div className="d-flex flex-wrap   align-items-center">
                    <h2 className="b2b-sub-heading-bold text-uppercase mb-4">Mobile App Development</h2>
                    <p className="b2b-sub-text">Tap into the mobile market with our expert Mobile Application Development service. With mobile app usage accounting for 92% of total digital time spent, we craft innovative apps tailored to your needs, enhancing user engagement and expanding your reach.</p>
                    <a className="service_link" href="/e-commerce"><button className="b2b-btn b2b-btn-sm m-0">Read More</button></a>
                  </div>
              </div>
              <div className="ser-digital col-12 col-sm-6 col-md-6 pb-5 justify-content-start d-flex flex-wrap"  data-aos="fade-left">
                  <img src={Service2.src} alt=""/>
              </div> 
        
        </div>
        <div className="row mb-5">
          <div className="col-lg-3 mb-4">
            <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap">
              <div className="mr-2"><img src={Icon1.src} alt="IOS App Development" /></div>
              <h3 className="b2b-sub-text ml-3 mb-0">IOS App<br />Development</h3>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap">
              <div className="mr-2"><img src={Icon2.src} alt="Android App Development" /></div>
              <h3 className="b2b-sub-text ml-3 mb-0">Android App<br />Development</h3>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap">
              <div className="mr-2"><img src={Icon3.src} alt="React Native App Development" /></div>
              <h3 className="b2b-sub-text ml-3 mb-0">React Native App<br />Development</h3>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap">
              <div className="mr-2"><img src={Icon4.src} alt="Flutter App Development" /></div>
              <h3 className="b2b-sub-text ml-3 mb-0">Flutter App<br />Development</h3>
            </div>
          </div>
        </div>

        <div className="row process text-white align-items-center mb-5 justify-content-center px-5"> 
      
           <div className="ser-digital col-12 col-sm-6 col-md-6 pb-5 justify-content-end d-flex flex-wrap"  data-aos="fade-right">
                  <img src={Service3.src} alt=""/>
            </div>
            <div className="ser-digital-col col-12 col-sm-6 col-md-6 pb-5" data-aos="fade-left">
              <div className="d-flex flex-wrap justify-content-start align-items-center">
                <h2 className="b2b-sub-heading-bold text-uppercase mb-4">Graphic &amp; UI/UX Design</h2>
                <p className="b2b-sub-text">Did you know? 90% of information transmitted to the brain is visual. Harness the power of visuals with our Graphic Design services. From captivating logos to stunning marketing materials, we craft designs that leave a lasting impression, helping your brand stand out in a crowded marketplace.</p>
              <a className="service_link" href="/digital-marketing"> <button className="b2b-btn b2b-btn-sm m-0">Read More</button></a> 
              </div>
            </div>

        </div>
        <div className="row mb-5">
          <div className="col-lg-3 mb-4">
            <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap">
              <div className="mr-2"><img src={Icon5.src} alt="Illustrator" /></div>
              <h3 className="b2b-sub-text ml-3 mb-0">Illustrator</h3>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap">
              <div className="mr-2"><img src={Icon6.src} alt="Photoshop" /></div>
              <h3 className="b2b-sub-text ml-3 mb-0">Photoshop</h3>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap">
              <div className="mr-2"><img src={Icon7.src} alt="Figma" /></div>
              <h3 className="b2b-sub-text ml-3 mb-0">Figma</h3>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap">
              <div className="mr-2"><img src={Icon8.src} alt="After Effect" /></div>
              <h3 className="b2b-sub-text ml-3 mb-0">After Effect</h3>
            </div>
          </div>

        </div>

        <div className="row process text-white mb-5 align-items-center justify-content-center px-5 pb-5">  
              

              <div className="ser-digital-col col-12 col-sm-6 col-md-6 pb-5"  data-aos="fade-right">
                  <div className="d-flex flex-wrap   align-items-center">
                    <h2 className="b2b-sub-heading-bold text-uppercase mb-4">Digital Marketing</h2>
                    <p className="b2b-sub-text">We offer expert Digital Marketing services to boost your brand's online visibility and reach. Did you know? 81% of shoppers research online before buying. Let us optimize your digital strategy for success. Harnessing the power of data-driven insights and cutting-edge techniques, we tailor digital marketing campaigns that resonate with your target audience and drive conversions effectively.</p>
                    <a className="service_link" href="/e-commerce"><button className="b2b-btn b2b-btn-sm m-0">Read More</button></a>
                  </div>
              </div>
              <div className="ser-digital col-12 col-sm-6 col-md-6 pb-5 justify-content-start d-flex flex-wrap"  data-aos="fade-left">
                  <img src={Service4.src} alt=""/>
              </div> 
        
        </div>
        <div className="row">
          <div className="col-lg-3 mb-4">
            <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap">
              <div className="mr-2"><img src={Icon9.src} alt="Search Engine Optimization" /></div>
              <h3 className="b2b-sub-text ml-3 mb-0">Search Engine<br />Optimization</h3>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap">
              <div className="mr-2"><img src={Icon10.src} alt="Media Buyer" /></div>
              <h3 className="b2b-sub-text ml-3 mb-0">Media Buyer</h3>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap">
              <div className="mr-2"><img src={Icon11.src} alt="Social Media Optimization" /></div>
              <h3 className="b2b-sub-text ml-3 mb-0">Social Media<br />Optimization</h3>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap">
              <div className="mr-2"><img src={Icon12.src} alt="YouTube Marketing" /></div>
              <h3 className="b2b-sub-text ml-3 mb-0">YouTube Marketing</h3>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap">
              <div className="mr-2"><img src={Icon13.src} alt="Online Reputation Management" /></div>
              <h3 className="b2b-sub-text ml-3 mb-0">Online Reputation<br />Management</h3>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap">
              <div className="mr-2"><img src={Icon14.src} alt="Content Writing" /></div>
              <h3 className="b2b-sub-text ml-3 mb-0">Content Writing</h3>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap">
              <div className="mr-2"><img src={Icon15.src} alt="Google ads (PPC)" /></div>
              <h3 className="b2b-sub-text ml-3 mb-0">Google ads (PPC)</h3>
            </div>
          </div>
        </div>
      </div>



      <div className="container-fluid py-0 pb-2 overflow-hidden" style={{ backgroundImage: `url(${radialRight.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right'}}> 
        <div className="row">

            <Brand />
            <Request />
            
        </div>
    </div> 

    {showModal && 
        <RequestForm 
          onCloseModal={toggleModal} 
        />
      }
    </>
  )
}
