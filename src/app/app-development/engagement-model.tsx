'use client'
import { useEffect } from 'react';

import React from "react"; 
import benefit1 from '../../../public/app/benefit1.svg';            
import benefit2 from '../../../public/app/benefit2.svg';            
import benefit3 from '../../../public/app/benefit3.svg';            
import benefit4 from '../../../public/app/benefit4.svg';            
import benefit5 from '../../../public/app/benefit5.svg';            
import benefit6 from '../../../public/app/benefit6.svg';            
import benefit7 from '../../../public/app/benefit7.svg';            
import benefit8 from '../../../public/app/benefit8.svg';            
import benefit9 from '../../../public/app/benefit9.svg';            
import benefit10 from '../../../public/app/benefit10.svg';            


export default function engagementmodal() {
 
  

  return (
    <>  
        <div className="p-5 b2b-gray-bg mobileAppWrap"> 
          <div className="container"> 
            <div className="row p-2">
              <div className="col-md-12 mx-auto text-center">
                <h2 className='text-white b2b-main-heading text-center'>How Mobile App Development Can Be A Game-Changer<br />For Your Business?</h2>
              </div>
              <div className="col-lg-10 m-auto mt-5">
                <div className='row row-cols-md-5 row-cols-sm-3  row-cols-2'>
                  <div className="col mb-4">
                    <div className="hoverGradient blueGD">
                        <div className="cell-wrap">
                          <img src={benefit1.src} className="imgIcon" alt="" />
                          <span>Health Care</span>
                        </div>
                      </div>
                  </div>
                  <div className="col mb-4">
                    <div className="hoverGradient blueGD">
                      <div className="cell-wrap">
                        <img src={benefit2.src} className="imgIcon" alt="" />
                        <span>E-Commerce</span>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="hoverGradient blueGD">
                      <div className="cell-wrap">
                        <img src={benefit3.src} className="imgIcon" alt="" />
                        <span>E-Learning</span>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="hoverGradient blueGD">
                      <div className="cell-wrap">
                        <img src={benefit4.src} className="imgIcon" alt="" />
                        <span>Travel</span>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="hoverGradient blueGD">
                      <div className="cell-wrap">
                        <img src={benefit5.src} className="imgIcon" alt="" />
                        <span>Logistic</span>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="hoverGradient blueGD">
                      <div className="cell-wrap">
                        <img src={benefit6.src} className="imgIcon" alt="" />
                        <span>Saas</span>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="hoverGradient blueGD">
                      <div className="cell-wrap">
                        <img src={benefit7.src} className="imgIcon" alt="" />
                        <span>Fintech</span>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="hoverGradient blueGD">
                      <div className="cell-wrap">
                        <img src={benefit8.src} className="imgIcon" alt="" />
                        <span>Restaurant</span>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="hoverGradient blueGD">
                      <div className="cell-wrap">
                        <img src={benefit9.src} className="imgIcon" alt="" />
                        <span>On Demand </span>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="hoverGradient blueGD">
                      <div className="cell-wrap">
                        <img src={benefit10.src} className="imgIcon" alt="" />
                        <span>Social Media</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div> 
          </div>
        </div>
 
    </>
)
}