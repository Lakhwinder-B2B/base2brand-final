'use client'
import { useEffect } from 'react';

import React from "react";     


import s1 from '../../../public/ecommerce/s1.svg';            
import s2 from '../../../public/ecommerce/s2.svg';            
import s3 from '../../../public/ecommerce/s3.svg';            
import s4 from '../../../public/ecommerce/s4.svg';            
import s5 from '../../../public/ecommerce/s5.svg';            
import s6 from '../../../public/ecommerce/s6.svg';     

export default function services() {
 
  

  return (
    <>  
    <div className="p-5 b2b-gray-bg w-100"> 
          <div className="container"> 
            <div className="row p-2">
              <div className="col-md-9 mx-auto text-center">
                <h2 className='text-white b2b-main-heading text-center'>eCommerce Design &amp; Development<br />Service Process</h2>
                <p className='b2b-text'>Our eCommerce development service follows a strategic process to ensure your online store meets your specific requirements and exceeds your expectations.</p>
              </div>
              <div className="col-lg-12 m-auto mt-5">
                <div className='row row-cols-3 ecommerceserviceWrap'>
                  <div className="col mb-4">
                      <div className="cell-wrap ">
                        <div>
                          <img src={s1.src} className="imgIcon" alt="" />
                          <h3 className=' b2b-sub-heading'>Consultation and Planning</h3> </div>
                          <p className='b2b-text mb-0'>Thorough consultations gather business goals, target audience, and needs, followed by meticulous planning for transparent, successful project outcomes.</p>
                       
                      </div>
                  </div>
                  <div className="col mb-4">
                      <div className="cell-wrap ">
                        <div><img src={s2.src} className="imgIcon" alt="" />
                        <h3 className=' b2b-sub-heading'>Design &amp; Work Plan</h3></div>
                        <p className='b2b-text mb-0'>Create visually stunning, user-friendly designs reflecting brand identity and enhancing shopping experience using cutting-edge principles.</p>
                      </div>
                  </div>
                  <div className="col mb-4">
                      <div className="cell-wrap ">
                      <div><img src={s3.src} className="imgIcon" alt="" />
                      <h3 className=' b2b-sub-heading'>Coding</h3></div>
                      <p className='b2b-text mb-0'>Expert developers bring designs to life, building robust eCommerce platforms with latest technologies for scalability and flexibility.</p>
                      </div>
                  </div>
                  <div className="col mb-4">
                      <div className="cell-wrap ">
                      <div><img src={s4.src} className="imgIcon" alt="" />
                      <h3 className=' b2b-sub-heading'>Testing</h3></div>
                      <p className='b2b-text mb-0'>Rigorous testing ensures bug-free, optimized eCommerce stores, identifying and addressing issues before launch with comprehensive strategies.</p>
                      </div>
                  </div>
                  <div className="col mb-4">
                      <div className="cell-wrap ">
                      <div><img src={s5.src} className="imgIcon" alt="" />
                      <h3 className=' b2b-sub-heading'>Deployment</h3></div>
                      <p className='b2b-text mb-0'>Post-testing, deploy eCommerce stores seamlessly, minimizing downtime, ensuring uninterrupted access for customers to browse and make purchases effortlessly.</p>
                      </div>
                  </div>
                  <div className="col mb-4">
                  <div className="cell-wrap ">
                       <div> <img src={s6.src} className="imgIcon" alt="" />
                       <h3 className=' b2b-sub-heading'>Support &amp; Maintenance</h3></div>
                       <p className='b2b-text mb-0'>Offer ongoing support, maintenance, updates, and enhancements for smooth eCommerce store operations, providing proactive monitoring and issue resolution.</p>
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