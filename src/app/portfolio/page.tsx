"use client";

import React from "react";
import Header from "../../../component/header"; 
import radialLeft from '../../../public/img/radial-left.svg'; 
import case0 from '../../../public/img/port.svg';         
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
import "./portfolio.css";
import Request from "../request-quote"; 


export default function Portfolio() {
  
  return (    
        <>
      <Header />
      <div className="b2b-black-bg">
        <div className="  pt-5">
            <div className="row w-100"> 
                <div className="col-md-6 text-center text-white mt-5 m-auto mb-5 px-5">
                    <h1>Welcome to our Portfolio</h1>
                    <p className="mb-5 mt-4 army">What sets us apart is the inspiring, creative people behind us they are the soul of our company.Here, we proudly display the results of our hard work and dedication.</p>
                    <button className='b2b-btn b2b-btn-lg'>Request a Quote</button> 
                </div>  
            </div>
        </div> 


        <div className="work-gallery" style={{ backgroundImage: `url(${radialLeft.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
            <div className="row w-100"> 
                <div className="col-md-6 text-center text-white mt-5 m-auto px-5">
                    <h2>impressive portfolio in<br />
                        in our work gallery</h2>
                </div>  
                <div className="col-12">
                    <div className="container p-4">
                        <ul className="nav nav-pills mb-3 caseTabs justify-content-center gap-5" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active btn_portfolio" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link btn_portfolio" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Web Design</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link btn_portfolio" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Mobile App Design</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link btn_portfolio" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Graphics</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="row mt-5 justify-content-center">
                                    <div className="col-md-12 mb-5">
                                        <div className="case_box">
                                            <img src={case0.src} alt="" />
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
