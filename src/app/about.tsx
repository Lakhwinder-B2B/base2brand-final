'use client'

import React from "react"; 
import Image from 'next/image';
import About from '../../public/img/about.png';   
 
import b2bTeam from '../../public/img/b2bTeam.png';   
import technologies from '../../public/img/technologies.png';   
import processIcon1 from '../../public/img/process-icon-1.svg';   
import processIcon2 from '../../public/img/process-icon-2.svg';   
import processIcon3 from '../../public/img/process-icon-3.svg';   
import processIcon4 from '../../public/img/process-icon-4.svg';   
import processIcon5 from '../../public/img/process-icon-5.svg';   
import processIcon6 from '../../public/img/process-icon-6.svg'; 
import check from '../../public/img/check.svg'; 
// import solarJson from '../../public/json/Solar-system-Shopify.json'; 

import './our-project.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Homeabout() {
 
  return (
    <>  
      <div className="b2b-container-lg pt-5 pb-5">  
          <div className="row align-items-center row-reverse-mb"> 
            <div className="col-lg-7 col-md-12 col-12 text-white"   >
              <h2 className="b2b-main-heading">Technologies we use</h2> 
              <h3 className="b2b-title-text">We use cutting-edge technologies to craft fully automated solutions</h3>
              <p className="b2b-sub-text">Our approach includes use of state-of-the-art technologies and tools across digital marketing, web development, and graphic design to deliver customized digital solutions tailored to address your most intricate challenges.</p>
              <p className="b2b-sub-text">From leveraging advanced analytics in digital marketing strategies to employing the latest coding languages and frameworks in web development, and employing cutting-edge design software in graphic design, we ensure that every aspect of our solutions is at the forefront of innovation.</p>
              <p className="b2b-sub-text">With our commitment to staying ahead of the curve, we empower your business to thrive in today's dynamic digital landscape with bespoke solutions that drive results.</p>
            
              <button className="b2b-btn b2b-btn-sm mt-4 m-0"> Read More </button>
            </div>
            <div className="col-lg-5 col-md-12 col-12 text-center mb-5 mb-md-0 about_order">
            {/* <img className="m-auto" src={technologies.src} alt="Product" /> */}
            <DotLottieReact
              src='/json/home-page/Softwares-Json.json'
              loop
              autoplay
              className="animated-imgs"
            />
            
            </div> 
            
          </div>

        


          <div className='progress-column mt-5'>
        
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 header-columns p-3 m-auto'>
                  <h2 className='text-center b2b-sub-heading-bold text-uppercase'>Request a Quote</h2>
                  <p className='b2b-text text-center '>How we work for our customer</p>
                </div>
            </div>
        
        
            <div className='progress-count d-flex flex-wrap justify-content-between b2b-workProcess'>
              <div className="count-col">
                <div className='d-flex justify-content-between b2b-black-bg b2b-workProcess-wrap'>
                  
                    <div className=''>
                      <div className='img-wrap'>
                        <img src={processIcon1.src} />
                      </div>
                      <p className='text-white text-center'>Research</p>
                    </div>
                </div>
              </div>

              <div className="count-col">
                <div className='d-flex justify-content-between b2b-black-bg b2b-workProcess-wrap'>
                    
                    <div>
                      <div className='img-wrap'>
                        <img src={processIcon2.src} />
                      </div>
                      <p className='text-white text-center'>Planning</p>
                    </div>
                </div>
              </div>

              <div className="count-col">
                <div className='d-flex justify-content-between b2b-black-bg b2b-workProcess-wrap'>
                    
                    <div>
                      <div className='img-wrap'>
                        <img src={processIcon3.src} />
                      </div>
                      <p className='text-white text-center'>Design</p>
                    </div>
                </div>
              </div>

              <div className="count-col">
                <div className='d-flex justify-content-between b2b-black-bg b2b-workProcess-wrap'>
                  
                    <div>
                      <div className='img-wrap'>
                        <img src={processIcon4.src} />
                      </div>
                      <p className='text-white text-center'>Development</p>
                    </div>
                </div>
              </div>

              <div className="count-col">
                <div className='d-flex justify-content-between b2b-black-bg b2b-workProcess-wrap'>
                  
                    <div>
                      <div className='img-wrap'>
                        <img src={processIcon5.src} />
                      </div>
                      <p className='text-white text-center'>Testing</p>
                    </div>
                </div>
              </div>
              <div className="count-col">
                <div className='d-flex justify-content-between b2b-black-bg b2b-workProcess-wrap'>
                    
                    <div>
                      <div className='img-wrap'>
                        <img src={processIcon6.src} />
                      </div>
                      <p className='text-white text-center'>Launch</p>
                    </div>
                </div>
              </div>
            </div>

            <div className='row mt-5'>
              <div className='col-lg-12 text-center'>
                <button className='b2b-btn b2b-btn-lg'>Request a Quote</button>
              </div>
            </div>
        </div>
    


          <div className="row align-items-center row-reverse-mb mt-5"> 
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
            <h3 className="b2b-sub-text b2b-lightBlue-text">We are the best for</h3>
             <div className="d-flex justify-content-between flex-wrap">
                <div className="check_list b2b-text"><img src={check.src} className=' check_icon mr-3' alt="" />  Our client list includes:</div>
                <div className="check_list b2b-text"><img src={check.src} className=' check_icon mr-3' alt="" />  Corporates due to our reliability and scalability</div>
                <div className="check_list b2b-text"><img src={check.src} className=' check_icon mr-3' alt="" />  Startups due to our cost-effectiveness</div>
                
  
                
              </div>
              <button className="b2b-btn b2b-btn-sm mt-4 m-0"> Let&apos;s Talk Over a cup Of Tea </button>
            </div>
            
          </div>
      </div> 
    </>
  )
}
