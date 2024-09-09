'use client'

import React, { useState } from "react"; 
import Image from 'next/image';
import About from '../../public/img/about.png';   
import CountUp, { useCountUp } from 'react-countup'; 
// import VisibilitySensor from 'react-visibility-sensor';
import b2bTeam from '../../public/img/b2bTeam.png';   
import technologies from '../../public/img/technologies.png';   

import check from '../../public/img/check.svg'; 
// import solarJson from '../../public/json/Solar-system-Shopify.json'; 

import yrInIndustury from '../../public/img/icon1.svg'; 
import projects from '../../public/img/icon2.svg'; 
import rating from '../../public/img/icon3.svg'; 
import happyClient from '../../public/img/icon4.svg'; 
import design from '../../public/img/icon5.svg'; 
import Request from "./request-form";
import './our-project.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Homeabout() {
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
  useCountUp({
    ref: 'counter',
    enableScrollSpy: true,
    scrollSpyDelay: 2000,
    end: 0
  });
  return (
    <>  
    <div className="blackGradient">
      <div className="b2b-container-lg py-md-5 py-sm-1 py-1">  
          <div className="row align-items-center row-reverse-mb"> 
            <div className="col-md-12 text-center">
            <h2 className="b2b-main-heading" data-aos="fade-up-right">Technologies we use</h2> 
            <h3 className="b2b-title-text" data-aos="fade-up-right" data-aos-delay="300">We use cutting-edge technologies to craft fully automated solutions</h3>
            </div>
            <div className="col-lg-7 col-md-12 col-12 text-white" >
            <div className="d-flex align-items-start">
  <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">FRONTEND</button>
    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">BACKEND</button> 
    <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">ECOMMERCE</button>
    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">FRAMEWORK</button>
  </div>
  <div className="tab-content" id="v-pills-tabContent">
    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" >...</div>
    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" >...</div>
    <div className="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" >...</div>
    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" >...</div>
    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" >...</div>
  </div>
</div>
              {/* <p className="b2b-sub-text" data-aos="fade-up-right" data-aos-delay="400">Our approach includes use of state-of-the-art technologies and tools across digital marketing, web development, and graphic design to deliver customized digital solutions tailored to address your most intricate challenges.</p>
              <p className="b2b-sub-text" data-aos="fade-up-right" data-aos-delay="500">From leveraging advanced analytics in digital marketing strategies to employing the latest coding languages and frameworks in web development, and employing cutting-edge design software in graphic design, we ensure that every aspect of our solutions is at the forefront of innovation.</p>
              <p className="b2b-sub-text" data-aos="fade-up-right" data-aos-delay="600">With our commitment to staying ahead of the curve, we empower your business to thrive in today's dynamic digital landscape with bespoke solutions that drive results.</p>
            
              <a href="/services"><button className="b2b-btn b2b-btn-sm mt-4 m-0" data-aos="fade-up-right" data-aos-delay="700"> Read More </button></a> */}
            </div>
            <div className="col-lg-8 col-md-12 col-12 text-center mb-5 mb-md-0 about_order" data-aos="fade-up-left" data-aos-delay="900">
            {/* <img className="m-auto" src={technologies.src} alt="Product" /> */}
            <DotLottieReact
              src='/json/home-page/Software JSON.json'
              loop
              autoplay
              className="animated-imgs"
            />
            
            </div> 
            
          </div>

      </div>  
    </div>
      
    <div className="radialGradient">
      <div className="b2b-container-lg"> 
          <div className='progress-column b2b-achievements'>
          
            <div className='row'>
                <div className='col-xl-6 col-lg-7 col-md-7 col-sm-12 header-columns p-5 p-sm-3 m-auto'>
                  <h2 className='text-center b2b-sub-heading-bold text-uppercase' data-aos="fade-up">Our Achievements &amp; Milestones</h2>
                  <p className='b2b-text text-center ' data-aos="fade-up" data-aos-delay="300">Explore our company&apos;s remarkable achievements, milestones, and records that showcase our success and expertise</p>
                </div>
            </div>
            
            <div className='b2b-container-lg'>
              <div className='row progress-count d-flex flex-wrap justify-content-between'>
                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap'>
                      <div><img src={yrInIndustury.src} /></div>
                      <div className='ms-2 w-100'>
                        <h2 className='text-white text-center'><CountUp end={10} enableScrollSpy />
                        +</h2>
                        <p className='text-white text-center'>Years of IT Industury</p>
                      </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap'>
                      <div><img src={projects.src} /></div>
                      <div className='ms-2 w-100'>
                        <h2 className='text-white text-center'><CountUp end={500} enableScrollSpy />+</h2>
                        <p className='text-white text-center'>Successfull Project</p>
                      </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap'>
                      <div><img src={rating.src} /></div>
                      <div className='ms-2 w-100'>
                        <h2 className='text-white text-center'><CountUp end={4.9} enableScrollSpy decimals={1} decimal="."/>+</h2>
                        <p className='text-white text-center'>Ratings on Clutch</p>
                      </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap'>
                      <div><img src={happyClient.src} /></div>
                      <div className='ms-2 w-100'>
                        <h2 className='text-white text-center'><CountUp end={100} enableScrollSpy />+</h2>
                        <p className='text-white text-center'>Happy Client</p>
                      </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap'>
                      <div><img src={design.src} /></div>
                      <div className='ms-2 w-100'>
                        <h2 className='text-white text-center'><CountUp end={100} enableScrollSpy />+</h2>
                        <p className='text-white text-center'>Website Designed</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div> 
    </div> 
          <div className="b2b-container-lg">  
              
          


          <div className="row align-items-center row-reverse-mb mt-3 mb-md-5 mb-1"> 
            <div className="col-lg-6 col-md-12 col-12 text-white order-md-2 order-sm-2 order-xs-2 order-2 mt-md-5"   >
              <h2 className="b2b-main-heading" data-aos="fade-up-right">HAVE A DREAM? <br />WE HAVE A TEAM!</h2> 
              <p className="b2b-sub-text" data-aos="fade-up-right" data-aos-delay="300">At our place, we have a stellar team of experts dedicated to bringing your vision to life. With extensive experience and a deep understanding of diverse industries, our team is equipped to handle any challenge that comes our way.</p>
              <p className="b2b-sub-text" data-aos="fade-up-right" data-aos-delay="400">Throughout the project, we prioritize clear communication and transparency, guiding you through every step and addressing any doubts or questions that may arise. Despite our high-quality services, we remain committed to offering competitive pricing to ensure accessibility for businesses of all sizes.</p>
              <p className="b2b-sub-text" data-aos="fade-up-right" data-aos-delay="500">Having successfully completed hundreds of projects, we bring a wealth of knowledge and expertise to each new endeavor, guaranteeing exceptional results that exceed expectations.</p>
             
            </div>
            <div className="col-lg-6 col-md-12 col-12 text-center mb-5 mb-md-0 order-md-3 order-sm-3 order-xs-3 order-3"  data-aos="fade-up-left" data-aos-delay="300"  >
              {/* <img className="m-auto" src={b2bTeam.src} alt="Product" /> */}
              <DotLottieReact
              src='/json/home-page/lottie animation.json'
              loop
              autoplay
              className="dream_img"
            />
            </div> 
            <div className="col-lg-8 col-md-12 col-12 mb-5 mb-md-0 order-lg-3 order-md-1 order-sm-1 order-xs-1 order-1">
            <h3 className="b2b-sub-text b2b-lightBlue-text" data-aos="fade-up-right" data-aos-delay="800">Our client list includes:</h3>
             <div className="d-flex justify-content-between flex-wrap">
                <div className="check_list b2b-text" data-aos="fade-up-right" data-aos-delay="900"><img src={check.src} className=' check_icon me-2' alt="" />  Startups due to our cost-effectiveness</div>
                <div className="check_list b2b-text" data-aos="fade-up-right" data-aos-delay="1000"><img src={check.src} className=' check_icon me-2' alt="" />  Corporates due to our reliability and scalability</div>
                <div className="check_list b2b-text" data-aos="fade-up-right" data-aos-delay="1100"><img src={check.src} className=' check_icon me-2' alt="" />  Industries due to our expertise and versatility</div>
                
  
                
              </div>
              <button className="b2b-btn b2b-btn-sm mt-4 m-0" onClick={toggleModal} data-aos="fade-up-right" data-aos-delay="1200"> Let&apos;s Talk Over a cup Of Tea </button>
            </div>
            
          </div>
          {showModal && 
            <Request 
              onCloseModal={toggleModal} 
            />
          }
      </div> 
    </>
  )
}
