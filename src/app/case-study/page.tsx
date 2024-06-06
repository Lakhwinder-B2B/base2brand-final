"use client";

import React from "react";
import Header from "../../../component/header"; 
import blog from '../../../public/img/blog.png';        
import case0 from '../../../public/case/case.png';        
import case1 from '../../../public/case/case1.png';        
import case2 from '../../../public/case/case2.png';        
import case3 from '../../../public/case/case3.png';        
import case4 from '../../../public/case/case4.png';        
import case5 from '../../../public/case/case5.png';        
import case6 from '../../../public/case/case6.png';        
import case7 from '../../../public/case/case7.png';        
import errow from '../../../public/case/right.png';        
import Typewriter from 'typewriter-effect';
import Footer from "../../../component/footer";  
import { useState } from 'react';
import "./case.css";
import Request from "../request-quote"; 


export default function Case() {
  
  return (    
        <>
      <Header />
      <div className="bgblack">
      <div className="  pt-5" style={{
      backgroundImage: `url(${blog.src})`,
      width: '100%',
      height: '100%',  
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      paddingBottom:'3rem' 
    }}>
         <div className="row w-100 pl-5"> 
         <div className="col-md-12 text-center text-white mt-5">
         <Typewriter 
                options={{
                  strings: ['Case Study'],
                  autoStart: true,
                  loop: true,
                }}
              /> 
            <p className="mb-5 mt-4 army">Base2Brand is a proud IT pioneer that knows every customer needs are as unique as the features of undiscovered land.</p>
            {/* <button className="btn btn-outline-primary"> 
            <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> 
            Request a Quote </button> */}
         </div>  
        </div>
        </div>  
         
           <div className="container p-4">
                    <ul className="nav nav-pills mb-3 caseTabs justify-content-center gap-5" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Show All</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Education</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Business</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Entertainment</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-Health-tab" data-bs-toggle="pill" data-bs-target="#pills-Health" type="button" role="tab" aria-controls="pills-Health" aria-selected="false">Health & Wellness</button>
            </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="row mt-5 justify-content-center">
                    <div className="col-md-5 mb-5">
                        <div className="case_box">
                            <img src={case0.src} alt="" />
                            <h5>Perfectlift</h5>
                            <p>In the dynamic world of web design, where visual aesthetics and user experience reign supreme, typography emerges as a subtle yet powerful tool that can significantly influence.</p>
                            <a className="text-white d-flex gap-3 align-items-center pointer">Keep Reading   <img src={errow.src} className="errow" alt="" /> </a>
                        </div>
                    </div>

                    <div className="col-md-5 mb-5">
                        <div className="case_box">
                            <img src={case1.src} alt="" />
                            <h5>Thinkjr</h5>
                            <p>In the dynamic world of web design, where visual aesthetics and user experience reign supreme, typography emerges as a subtle yet powerful tool that can significantly influence.</p>
                            <a className="text-white d-flex gap-3 align-items-center pointer">Keep Reading   <img src={errow.src} className="errow" alt="" /> </a>
                        </div>
                    </div>

                    <div className="col-md-5 mb-5">
                        <div className="case_box">
                            <img src={case2.src} alt="" />
                            <h5>Vyatra</h5>
                            <p>In the dynamic world of web design, where visual aesthetics and user experience reign supreme, typography emerges as a subtle yet powerful tool that can significantly influence.</p>
                            <a className="text-white d-flex gap-3 align-items-center pointer">Keep Reading   <img src={errow.src} className="errow" alt="" /> </a>
                        </div>
                    </div>

                    <div className="col-md-5 mb-5">
                        <div className="case_box">
                            <img src={case3.src} alt="" />
                            <h5>Protecto</h5>
                            <p>In the dynamic world of web design, where visual aesthetics and user experience reign supreme, typography emerges as a subtle yet powerful tool that can significantly influence.</p>
                            <a className="text-white d-flex gap-3 align-items-center pointer">Keep Reading   <img src={errow.src} className="errow" alt="" /> </a>
                        </div>
                    </div>

                    <div className="col-md-5 mb-5">
                        <div className="case_box">
                            <img src={case4.src} alt="" />
                            <h5>CheckUps</h5>
                            <p>In the dynamic world of web design, where visual aesthetics and user experience reign supreme, typography emerges as a subtle yet powerful tool that can significantly influence.</p>
                            <a className="text-white d-flex gap-3 align-items-center pointer">Keep Reading   <img src={errow.src} className="errow" alt="" /> </a>
                        </div>
                    </div>

                    <div className="col-md-5 mb-5">
                        <div className="case_box">
                            <img src={case5.src} alt="" />
                            <h5>Healthy bedroom</h5>
                            <p>In the dynamic world of web design, where visual aesthetics and user experience reign supreme, typography emerges as a subtle yet powerful tool that can significantly influence.</p>
                            <a className="text-white d-flex gap-3 align-items-center pointer">Keep Reading   <img src={errow.src} className="errow" alt="" /> </a>
                        </div>
                    </div>

                    <div className="col-md-5 mb-5">
                        <div className="case_box">
                            <img src={case6.src} alt="" />
                            <h5>Dr. Wolff Vagisan</h5>
                            <p>In the dynamic world of web design, where visual aesthetics and user experience reign supreme, typography emerges as a subtle yet powerful tool that can significantly influence.</p>
                            <a className="text-white d-flex gap-3 align-items-center pointer">Keep Reading   <img src={errow.src} className="errow" alt="" /> </a>
                        </div>
                    </div>

                    <div className="col-md-5 mb-5">
                        <div className="case_box">
                            <img src={case7.src} alt="" />
                            <h5>Wash Masters</h5>
                            <p>In the dynamic world of web design, where visual aesthetics and user experience reign supreme, typography emerges as a subtle yet powerful tool that can significantly influence.</p>
                            <a className="text-white d-flex gap-3 align-items-center pointer">Keep Reading   <img src={errow.src} className="errow" alt="" /> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"  >
                <div className="row mt-5 justify-content-center">
                <div className="col-md-5 mb-5">
                        <div className="case_box">
                            <img src={case1.src} alt="" />
                            <h5>Thinkjr</h5>
                            <p>In the dynamic world of web design, where visual aesthetics and user experience reign supreme, typography emerges as a subtle yet powerful tool that can significantly influence.</p>
                            <a className="text-white d-flex gap-3 align-items-center pointer">Keep Reading   <img src={errow.src} className="errow" alt="" /> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"  >
                <div className="row mt-5 justify-content-center">
                <div className="col-md-5 mb-5">
                        <div className="case_box">
                            <img src={case3.src} alt="" />
                            <h5>Protecto</h5>
                            <p>In the dynamic world of web design, where visual aesthetics and user experience reign supreme, typography emerges as a subtle yet powerful tool that can significantly influence.</p>
                            <a className="text-white d-flex gap-3 align-items-center pointer">Keep Reading   <img src={errow.src} className="errow" alt="" /> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab"  >
                <div className="row mt-5 justify-content-center">
                <div className="col-md-5 mb-5">
                        <div className="case_box">
                            <img src={case2.src} alt="" />
                            <h5>Vyatra</h5>
                            <p>In the dynamic world of web design, where visual aesthetics and user experience reign supreme, typography emerges as a subtle yet powerful tool that can significantly influence.</p>
                            <a className="text-white d-flex gap-3 align-items-center pointer">Keep Reading   <img src={errow.src} className="errow" alt="" /> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="pills-Health" role="tabpanel" aria-labelledby="pills-Health-tab"  >
            <div className="row mt-5 justify-content-center">
            <div className="col-md-5 mb-5">
                        <div className="case_box">
                            <img src={case6.src} alt="" />
                            <h5>Dr. Wolff Vagisan</h5>
                            <p>In the dynamic world of web design, where visual aesthetics and user experience reign supreme, typography emerges as a subtle yet powerful tool that can significantly influence.</p>
                            <a className="text-white d-flex gap-3 align-items-center pointer">Keep Reading   <img src={errow.src} className="errow" alt="" /> </a>
                        </div>
                    </div>

                    <div className="col-md-5 mb-5">
                        <div className="case_box">
                            <img src={case7.src} alt="" />
                            <h5>Wash Masters</h5>
                            <p>In the dynamic world of web design, where visual aesthetics and user experience reign supreme, typography emerges as a subtle yet powerful tool that can significantly influence.</p>
                            <a className="text-white d-flex gap-3 align-items-center pointer">Keep Reading   <img src={errow.src} className="errow" alt="" /> </a>
                        </div>
                    </div>
            </div>
            </div>
            </div>
            </div>     
          

           
            <Request />
      <Footer />

      </div>

    </>
  )
}
