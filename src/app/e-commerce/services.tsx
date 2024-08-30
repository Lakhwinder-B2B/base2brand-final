'use client'
import { useEffect } from 'react';

import React from "react";     


import s1 from '../../../public/ecommerce/s1.svg';            
import s2 from '../../../public/ecommerce/s2.svg';            
import s3 from '../../../public/ecommerce/s3.svg';            
import s4 from '../../../public/ecommerce/s4.svg';            
import s5 from '../../../public/ecommerce/s5.svg';            
import s6 from '../../../public/ecommerce/s6.svg';     
import nextGeneration from '../../../public/ecommerce/choose.png';
export default function services() {
 
  

  return (
    <>  
    <div className="p-md-5 p-0 b2b-gray-bg w-100" data-aos="fade-up"> 
          <div className="container"> 
            <div className="row p-2">
              <div className="col-md-9 col-12 mx-auto text-center">
                <h2 className='text-white b2b-main-heading text-center' data-aos="fade-up" data-aos-delay="300">eCommerce Design &amp; Development<br />Service Process</h2>
                <p className='b2b-text' data-aos="fade-up" data-aos-delay="300">Our eCommerce development service follows a strategic process to ensure your online store meets your specific requirements and exceeds your expectations.</p>
              </div>
              <div className="col-lg-12 m-auto mt-5">
                <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1 ecommerceserviceWrap'>
                  <div className="col mb-4" data-aos="fade-up" data-aos-delay="300">
                    <div className="hoverGradient blueGD">
                      <div className="cell-wrap ">
                        <div><img src={s1.src} className="imgIcon" alt="" />
                        <h3 className=' b2b-sub-heading'>Consultation and Planning</h3> </div>
                        <p className='b2b-text mb-0'>Thorough consultations gather business goals, target audience, and needs, followed by meticulous planning for transparent, successful project outcomes.</p>
                        <a href="" className='box-nav'><span></span></a>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4" data-aos="fade-up" data-aos-delay="300">
                    <div className="hoverGradient blueGD">
                      <div className="cell-wrap ">
                        <div><img src={s2.src} className="imgIcon" alt="" />
                        <h3 className=' b2b-sub-heading'>Design &amp; Work Plan</h3></div>
                        <p className='b2b-text mb-0'>Create visually stunning, user-friendly designs reflecting brand identity and enhancing shopping experience using cutting-edge principles.</p>
                        <a href="" className='box-nav'><span></span></a>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4" data-aos="fade-up" data-aos-delay="300">
                    <div className="hoverGradient blueGD">
                      <div className="cell-wrap ">
                      <div><img src={s3.src} className="imgIcon" alt="" />
                      <h3 className=' b2b-sub-heading'>Coding</h3></div>
                      <p className='b2b-text mb-0'>Expert developers bring designs to life, building robust eCommerce platforms with latest technologies for scalability and flexibility.</p>
                      <a href="" className='box-nav'><span></span></a>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4" data-aos="fade-up" data-aos-delay="300">
                    <div className="hoverGradient blueGD">
                      <div className="cell-wrap ">
                      <div><img src={s4.src} className="imgIcon" alt="" />
                      <h3 className=' b2b-sub-heading'>Testing</h3></div>
                      <p className='b2b-text mb-0'>Rigorous testing ensures bug-free, optimized eCommerce stores, identifying and addressing issues before launch with comprehensive strategies.</p>
                      <a href="" className='box-nav'><span></span></a>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4" data-aos="fade-up" data-aos-delay="300">
                    <div className="hoverGradient blueGD">
                      <div className="cell-wrap ">
                      <div><img src={s5.src} className="imgIcon" alt="" />
                      <h3 className=' b2b-sub-heading'>Deployment</h3></div>
                      <p className='b2b-text mb-0'>Post-testing, deploy eCommerce stores seamlessly, minimizing downtime, ensuring uninterrupted access for customers to browse and make purchases effortlessly.</p>
                      <a href="" className='box-nav'><span></span></a>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4" data-aos="fade-up" data-aos-delay="300">
                    <div className="hoverGradient blueGD">
                      <div className="cell-wrap ">
                          <div> <img src={s6.src} className="imgIcon" alt="" />
                            <h3 className=' b2b-sub-heading'>Support &amp; Maintenance</h3></div>
                            <p className='b2b-text mb-0'>Offer ongoing support, maintenance, updates, and enhancements for smooth eCommerce store operations, providing proactive monitoring and issue resolution.</p>
                            <a href="" className='box-nav'><span></span></a>
                          </div>
                      </div>
                    </div>
                  </div>
              </div>

            </div> 
          </div>
        </div> 
        <div className="py-5" data-aos="fade-up">
          <div className="container">
              <div className="row align-items-center "> 
                  <div className="col-md-6 mb-4 order-md-1 order-2">
                    <img src={nextGeneration.src} alt=""  data-aos="fade-up" data-aos-delay="300"/>
                  </div>
                  <div className="col-md-6 text-white mb-4 order-md-2 order-1"> 
                      <h1 className="b2b-main-heading mb-3" data-aos="fade-up" data-aos-delay="300">Why Choose Us for <br />Designing and Developing <br />a Store?</h1>
                      <p className="b2b-text-sm pr-5 pr-sm-0" data-aos="fade-up" data-aos-delay="300">With our experienced team, customizable solutions, rigorous quality assurance, and ongoing support, there are multiple reasons to choose us for your eCommerce development needs.</p>
           
                  </div>
                </div>
                <div className="row choose-us-wrap"> 
                  <div className="col-md-6 text-white mb-5" data-aos="fade-up" data-aos-delay="300"> 
                   <div className="hoverGradient blueGD me-3">
                      <div className='chosseInnerWrap'>
                        <h1 className="b2b-sub-heading mb-3">Experience &amp; Expertise</h1>
                        <p className="b2b-text-sm pr-5 pr-sm-0">Our seasoned team brings extensive eCommerce development experience, delivering innovative, scalable solutions tailored to your business needs, ensuring project success with industry insights.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 text-white mb-5" data-aos="fade-up" data-aos-delay="300"> 
                   <div className="hoverGradient blueGD me-3">
                      <div className='chosseInnerWrap'>
                        <h1 className="b2b-sub-heading mb-3">Customization</h1>
                        <p className="b2b-text-sm pr-5 pr-sm-0">Tailoring our services to your unique brand, we offer highly customizable solutions from design to functionality, providing a personalized experience that sets you apart.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 text-white mb-5" data-aos="fade-up" data-aos-delay="300">
                     <div className="hoverGradient blueGD me-3"> 
                      <div className='chosseInnerWrap'>
                        <h1 className="b2b-sub-heading mb-3">Quality Assurance</h1>
                        <p className="b2b-text-sm pr-5 pr-sm-0">Ensuring excellence, our rigorous testing procedures guarantee bug-free, fully functional eCommerce stores optimized for performance, delivering a seamless shopping experience.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 text-white mb-5" data-aos="fade-up" data-aos-delay="300"> 
                   <div className="hoverGradient blueGD me-3">
                      <div className='chosseInnerWrap'>
                        <h1 className="b2b-sub-heading mb-3">Support and Collaboration</h1>
                        <p className="b2b-text-sm pr-5 pr-sm-0">Beyond project completion, we offer ongoing support, updates, and collaboration to ensure your eCommerce store remains competitive and responsive to market demands.</p>
                      </div>
                    </div>
                  </div>
                  
              </div>
          </div>
        </div>  
</>
)
}