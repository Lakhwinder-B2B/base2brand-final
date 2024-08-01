'use client'
import { useEffect } from 'react'; 
import React ,{useState } from "react";    
import shopifyDev from '../../../public/img/shopify-dev.png';   

import Sh1 from '../../../public/services-img/sh1.svg';
import Sh2 from '../../../public/services-img/sh2.svg';
import Sh3 from '../../../public/services-img/sh3.svg';
import Sh4 from '../../../public/services-img/sh4.svg';
import Sh5 from '../../../public/services-img/sh5.svg';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
  
import '../project.css'; 
 

export default function home() {
  return (
    <>   
    <div className='w-100 section-padding-hm-serv'>
        <div className='b2b-container-lg'>
          
          <div className="row w-100 d-flex flex-wrap align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" data-aos="fade-up">
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fades show active d-flex flex-wrap align-items-center justify-content-center" id="pills-digital" role="tabpanel" aria-labelledby="pills-digital-tab">
                {/* <img className="w-70 active_img m-auto" src={shopifyDev.src} alt="Search Engine Optimization" /> */}
                <DotLottieReact
                      src='/json/home-page/Shopify-development-services.json'
                      loop
                      autoplay
                      className="animated-imgs"
                    />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-md-5" id='WEB' data-aos="fade-down">
              <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <li className="nav-item" role="presentation">
                  <a className='remove_under_line' href='/web-application'>  
                      <h1 className="b2b-sub-heading">We Excel in Shopify <br />Development Services</h1>
                        <p className='col-12 b2b-sub-text'>In Shopify development services, we don't just meet expectations; we exceed them. With a proven track record of success, we outperform in every aspect of Shopify development. </p>
                        <div className="d-flex justify-content-between flex-wrap">
                          <div className="tabs_link b2b-text"><img src={Sh1.src} className='social_icons mr-3' alt="" />  App development</div>
                          <div className="tabs_link b2b-text"><img src={Sh2.src} className='social_icons mr-3' alt="" />  Headless Store Development</div>

                          <div className="tabs_link b2b-text"><img src={Sh3.src} className='social_icons mr-3' alt="" />  Custom Integration</div>
                          <div className="tabs_link b2b-text"><img src={Sh4.src} className='social_icons mr-3' alt="" />  CRO ( Conversation Rate Optimization)</div>

                          <div className="tabs_link b2b-text"><img src={Sh5.src} className='social_icons mr-3' alt="" />  E-commerce Store Design</div>
                        </div>
                        <button className="b2b-btn b2b-btn-sm mt-4 m-0"> Read More </button>
                      </a>
                  </li>
              </div> 
            </div>

            
          </div>  
        </div>  
    </div>  

    </>
  )
}