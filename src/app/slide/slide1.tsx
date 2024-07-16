'use client'
import { useEffect } from 'react'; 
import React ,{useState } from "react"; 
import seo from '../../../public/img/seo.png';  
import social from '../../../public/img/social.png';  
import online from '../../../public/img/online.png'; 
import digital from '../../../public/img/digital_marketing.png';  
import Servicetab from '../../../public/services-img/eco.png';  
import Servicetab1 from '../../../public/img/servicetab1.png';  
import Servicetab2 from '../../../public/img/servicetab2.png';  
import Servicetab3 from '../../../public/img/Servicetab3.png';  
import Servicetab4 from '../../../public/img/servicetab4.png';  
import Servicetab5 from '../../../public/img/Servicetab5.png';  

import icon1 from '../../../public/services-img/s1.png';  
import icon2 from '../../../public/services-img/s2.png';  
import icon3 from '../../../public/services-img/s3.png';  
import icon4 from '../../../public/services-img/s4.png';  
import icon5 from '../../../public/services-img/s5.png';  
import icon6 from '../../../public/services-img/s6.png';  
import icon7 from '../../../public/services-img/s7.png';  
import icon8 from '../../../public/img/meta-ads.svg';  

import ecommerce1 from '../../../public/services-img/e1.png';  
import ecommerce2 from '../../../public/services-img/e2.png';  
import ecommerce3 from '../../../public/services-img/e3.png';  
import ecommerce4 from '../../../public/services-img/e4.png';  
import ecommerce5 from '../../../public/services-img/e5.png';

import graphic1 from '../../../public/services-img/g1.png';  
import graphic2 from '../../../public/services-img/g2.png';  
import graphic3 from '../../../public/services-img/g3.png';  
import graphic4 from '../../../public/services-img/g4.png';  
import graphic5 from '../../../public/services-img/g5.png'; 

import web1 from '../../../public/services-img/w1.png';  
import web2 from '../../../public/services-img/w2.png';  
import web3 from '../../../public/services-img/w3.png';  
import web4 from '../../../public/services-img/w4.png';  
import web5 from '../../../public/services-img/w5.png';  

import hybrig from '../../../public/services-img/hybrig.png';   
import Link from 'next/link'
import down from '../../../public/services-img/scroll.png';  
import '../project.css';
import CountUp from 'react-countup'; 
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
 

export default function home() {

  return (
    <>    
      <div className="section-padding-hm-serv w-100"> 
        <div className="b2b-container-lg"> 
          <div className="row">  
            <div className="col-md-12 mb-5"  >
              <h2 className="b2b-heading text-center text-uppercase" >Our Services for Your Digital Transformation</h2>
            </div> 
          </div> 
          
            <div className="row w-100 d-flex flex-wrap align-items-center m-auto"> 
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" data-aos="fade-up">
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fades show active d-flex flex-wrap align-items-center justify-content-center" id="pills-digital" role="tabpanel" aria-labelledby="pills-digital-tab">
                      {/* <img className="active_img w-70" src={digital.src} alt="Search Engine Optimization" /> */}
                      <DotLottieReact
              src='/json/home-page/Digital Marketing JSON.json'
              loop
              autoplay
              style={{ width: '500px', height: '500px' }}
            />
                    
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" data-aos="fade-down">
                  <div className="nav flex-column nav-pills me-3">
                      <li className="navitem" >
                        <a className='remove_under_line' href='/digital-marketing'>             
                          <h1 className="b2b-sub-heading">Digital Marketing</h1>
                            <p className='col-12 b2b-sub-text'>Boosting brand visibility and engagement, our digital marketing services use data-driven strategies for higher ROI. Fun fact: 80% of businesses plan to boost digital marketing spending this year!</p>
                            <div className="d-flex justify-content-between flex-wrap">
                              <div className="tabs_link b2b-text"> <img src={icon1.src} className='social_icons mr-3' alt="" />Search Engine Optimization   </div>
                              <div className="tabs_link b2b-text"><img src={icon4.src} className='social_icons mr-3' alt="" /> Online Reputation Management </div> 

                              <div className="tabs_link b2b-text"><img src={icon8.src} className='social_icons mr-3' alt="" /> Meta Ads   </div>
                              <div className="tabs_link b2b-text"><img src={icon2.src} className='social_icons mr-3' alt="" /> Social Media Optimization   </div>

                              <div className="tabs_link b2b-text"><img src={icon5.src} className='social_icons mr-3' alt="" /> Google Ads (PPC) </div>
                              <div className="tabs_link b2b-text"><img src={icon6.src} className='social_icons mr-3' alt="" /> Content Writing </div> 
                              
                              <div className="tabs_link b2b-text"><img src={icon7.src} className='social_icons mr-3' alt="" /> YouTube Marketing  </div>
                            </div>
                            <button className="b2b-btn b2b-btn-sm mt-4 m-0"> Read More  </button>
                            
                          </a>
                      </li>
                  </div> 
                </div> 
                {/* <div className="d-flex justify-content-center"> 
                  <a className="text-white pointer"   >
                    <img src={down.src} className='down' alt="" />
                  </a>
                </div> */} 

          </div>   

        </div> 
      </div> 
</>
  )
}