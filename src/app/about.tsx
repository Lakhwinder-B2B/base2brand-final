'use client'

import React from "react"; 
import Image from 'next/image';
import About from '../../public/img/about.png';   
import CountUp from 'react-countup'; 
import b2bTeam from '../../public/img/b2bTeam.png';   
import technologies from '../../public/img/technologies.png';   

import check from '../../public/img/check.svg'; 
// import solarJson from '../../public/json/Solar-system-Shopify.json'; 

import yrInIndustury from '../../public/img/icon1.svg'; 
import projects from '../../public/img/icon2.svg'; 
import rating from '../../public/img/icon3.svg'; 
import happyClient from '../../public/img/icon4.svg'; 
import design from '../../public/img/icon5.svg'; 

import './our-project.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Homeabout() {
 
  return (
    <>  
    <div className="blackGradient">
      <div className="b2b-container-lg pt-5 pb-5">  
          <div className="row align-items-center row-reverse-mb"> 
            <div className="col-lg-7 col-md-12 col-12 text-white"   >
              <h2 className="b2b-main-heading">Technologies we use</h2> 
              <h3 className="b2b-title-text">We use cutting-edge technologies to craft fully automated solutions</h3>
              <p className="b2b-sub-text">Our approach includes use of state-of-the-art technologies and tools across digital marketing, web development, and graphic design to deliver customized digital solutions tailored to address your most intricate challenges.</p>
              <p className="b2b-sub-text">From leveraging advanced analytics in digital marketing strategies to employing the latest coding languages and frameworks in web development, and employing cutting-edge design software in graphic design, we ensure that every aspect of our solutions is at the forefront of innovation.</p>
              <p className="b2b-sub-text">With our commitment to staying ahead of the curve, we empower your business to thrive in today's dynamic digital landscape with bespoke solutions that drive results.</p>
            
              <a href="/services"><button className="b2b-btn b2b-btn-sm mt-4 m-0"> Read More </button></a>
            </div>
            <div className="col-lg-5 col-md-12 col-12 text-center mb-5 mb-md-0 about_order">
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
                <div className='col-lg-6 col-md-6 col-sm-12 header-columns p-5 p-sm-3 m-auto'>
                  <h2 className='text-center b2b-sub-heading-bold text-uppercase'>Our Achievements &amp; Milestones</h2>
                  <p className='b2b-text text-center '>Explore our company&apos;s remarkable achievements, milestones, and records that showcase our success and expertise</p>
                </div>
            </div>
            
            <div className='b2b-container-lg'>
              <div className='row progress-count d-flex flex-wrap justify-content-between'>
                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-black-bg b2b-achievements-wrap'>
                      <div><img src={yrInIndustury.src} /></div>
                      <div className='ml-2'>
                        <h2 className='text-white text-center'><CountUp end={10} />+</h2>
                        <p className='text-white text-center'>Years of IT Industury</p>
                      </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-black-bg b2b-achievements-wrap'>
                      <div><img src={projects.src} /></div>
                      <div className='ml-2'>
                        <h2 className='text-white text-center'><CountUp end={500} />+</h2>
                        <p className='text-white text-center'>Successfull Project</p>
                      </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-black-bg b2b-achievements-wrap'>
                      <div><img src={rating.src} /></div>
                      <div className='ml-2'>
                        <h2 className='text-white text-center'><CountUp end={4.9} />+</h2>
                        <p className='text-white text-center'>Ratings on Clutch</p>
                      </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-black-bg b2b-achievements-wrap'>
                      <div><img src={happyClient.src} /></div>
                      <div className='ml-2'>
                        <h2 className='text-white text-center'><CountUp end={100} />+</h2>
                        <p className='text-white text-center'>Happy Client</p>
                      </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-black-bg b2b-achievements-wrap'>
                      <div><img src={design.src} /></div>
                      <div className='ml-2'>
                        <h2 className='text-white text-center'><CountUp end={100} />+</h2>
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
              
          


          <div className="row align-items-center row-reverse-mb mt-3 mb-5"> 
            <div className="col-lg-6 col-md-12 col-12 text-white order-md-2 order-sm-2 order-xs-2 mt-md-5"   >
              <h2 className="b2b-main-heading">HAVE A DREAM? <br />WE HAVE A TEAM!</h2> 
              <p className="b2b-sub-text">At our place, we have a stellar team of experts dedicated to bringing your vision to life. With extensive experience and a deep understanding of diverse industries, our team is equipped to handle any challenge that comes our way.</p>
              <p className="b2b-sub-text">Throughout the project, we prioritize clear communication and transparency, guiding you through every step and addressing any doubts or questions that may arise. Despite our high-quality services, we remain committed to offering competitive pricing to ensure accessibility for businesses of all sizes.</p>
              <p className="b2b-sub-text">Having successfully completed hundreds of projects, we bring a wealth of knowledge and expertise to each new endeavor, guaranteeing exceptional results that exceed expectations.</p>
             
            </div>
            <div className="col-lg-6 col-md-12 col-12 text-center mb-5 mb-md-0 order-md-3 order-sm-3 order-xs-3"    >
              {/* <img className="m-auto" src={b2bTeam.src} alt="Product" /> */}
              <DotLottieReact
              src='/json/home-page/lottie animation.json'
              loop
              autoplay
              className="dream_img"
            />
            </div> 
            <div className="col-lg-8 col-md-12 col-12 mb-5 mb-md-0 order-lg-3 order-md-1 order-sm-1 order-xs-1">
            <h3 className="b2b-sub-text b2b-lightBlue-text">Our client list includes:</h3>
             <div className="d-flex justify-content-between flex-wrap">
                <div className="check_list b2b-text"><img src={check.src} className=' check_icon me-2' alt="" />  Startups due to our cost-effectiveness</div>
                <div className="check_list b2b-text"><img src={check.src} className=' check_icon me-2' alt="" />  Corporates due to our reliability and scalability</div>
                <div className="check_list b2b-text"><img src={check.src} className=' check_icon me-2' alt="" />  Industries due to our expertise and versatility</div>
                
  
                
              </div>
              <button className="b2b-btn b2b-btn-sm mt-4 m-0"> Let&apos;s Talk Over a cup Of Tea </button>
            </div>
            
          </div>
      </div> 
    </>
  )
}
