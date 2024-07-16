'use client'
import { useEffect } from 'react'; 
import React ,{useState } from "react";   
import Servicetab5 from '../../../public/img/mb_app.png';    
import web2 from '../../../public/services-img/w2.png';   

import hybrig from '../../../public/services-img/hybrig.png';   
import '../project.css'; 
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
 

export default function home() {
  return (
    <>   
      <div className="section-padding-hm-serv w-100"> 
        <div className='b2b-container-lg'>
          <div className="row w-100 d-flex flex-wrap align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" data-aos="fade-up">
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fades show active d-flex flex-wrap align-items-center justify-content-center" id="pills-digital" role="tabpanel" aria-labelledby="pills-digital-tab">
                  {/* <img className="active_img w-70" src={Servicetab5.src} alt="Search Engine Optimization" /> */}
                  <DotLottieReact
              src='/json/home-page/Mobile App JSON Final.json'
              loop
              autoplay
              style={{ width: '600px', height: '600px' }}
            />
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" id='MOBILE' data-aos="fade-down">
              <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <li className="nav-item" role="presentation">
                  <a className='remove_under_line' href='/mobile-application'>   
                      <h1 className="b2b-sub-heading">Mobile Application</h1>
                        <p className='col-12  b2b-sub-text'>Our mobile app development service crafts easy-to-use apps that resonate with users. From sleek designs to seamless functionality, we bring your ideas to life on the small screen. Let's make your app a success!</p>
                        <div className="d-flex justify-content-between flex-wrap">
                          <div className="tabs_link b2b-text"><img src={hybrig.src} className='social_icons mr-3' alt="" />  Hybrid Apps Development</div>
                          <div className="tabs_link b2b-text"><img src={web2.src} className='social_icons mr-3' alt="" />  Native IOS and Android</div>
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