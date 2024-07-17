'use client'
import { useEffect } from 'react'; 
import React ,{useState } from "react";    
import shopifyDev from '../../../public/img/shopify-dev.png';   

  
import '../project.css'; 
 

export default function home() {
  return (
    <>   
    <div className='w-100 section-padding-hm-serv'>
        <div className='b2b-container-lg'>
          <div className="row w-100 d-flex flex-wrap align-items-center row-reverse-mb">
            
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-md-5" id='WEB' data-aos="fade-down">
              <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <li className="nav-item" role="presentation">
                  <a className='remove_under_line' href='/web-application'>  
                      <h1 className="b2b-sub-heading">We Excel in Shopify <br />Development Services</h1>
                        <p className='col-12 b2b-sub-text'>In Shopify development services, we don't just meet expectations; we exceed them. With a proven track record of success, we outperform in every aspect of Shopify development. From creating visually stunning and user-friendly storefronts to implementing robust backend solutions, we elevate your online presence to new heights.</p>
                        <p className='col-12 b2b-sub-text'>Our team of experts combines creativity, technical skills, and strategic insight to deliver tailor-made solutions that drive growth and maximize your ROI. Trust us to go above and beyond in crafting an exceptional Shopify experience that sets your brand apart from the competition.</p>
                        
                        <button className="b2b-btn b2b-btn-sm mt-4 m-0"> Read More </button>
                      </a>
                  </li>
              </div> 
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" data-aos="fade-up">
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fades show active d-flex flex-wrap align-items-center justify-content-center" id="pills-digital" role="tabpanel" aria-labelledby="pills-digital-tab">
                <img className="w-70 active_img m-auto" src={shopifyDev.src} alt="Search Engine Optimization" />
               
                </div>
              </div>
            </div>
          </div>  
        </div>  
    </div>  

    </>
  )
}