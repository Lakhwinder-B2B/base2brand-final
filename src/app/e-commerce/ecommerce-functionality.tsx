'use client'
import { useEffect } from 'react';

import React from "react";     
import benefit1 from '../../../public/ecommerce/benefit1.svg';            
import benefit2 from '../../../public/ecommerce/benefit2.svg';            
import benefit3 from '../../../public/ecommerce/benefit3.svg';            
import benefit4 from '../../../public/ecommerce/benefit4.svg';            
import benefit5 from '../../../public/ecommerce/benefit5.svg';            
import benefit6 from '../../../public/ecommerce/benefit6.svg';     

export default function ecommerceFunctionality() {
 
  

  return (
    <>  
    <div className="p-5"> 
          <div className="container"> 
            <div className="row p-2">
              <div className="col-md-9 mx-auto text-center">
                <h2 className='text-white b2b-main-heading text-center'>Improve Your Online Sales with Comprehensive<br />eCommerce Functionality</h2>
                <p className='b2b-text'>Our comprehensive eCommerce solutions tailored to your business needs. From vendor registration and product catalog management to search and filtering, order management, and analytics reporting, we offer a streamlined platform to empower your online presence. With our expertise, enhance your customers' shopping experience and maximize your business potential in the digital marketplace.</p>
              </div>
              <div className="col-lg-8 m-auto mt-5">
                <div className='row row-cols-3 ecommerceWrap'>
                  <div className="col mb-4">
                      <div className="cell-wrap b2b-gray-bg">
                      <div><img src={benefit1.src} className="imgIcon" alt="" />
                        <span>Vendor Management</span></div>
                      </div>
                  </div>
                  <div className="col mb-4">
                      <div className="cell-wrap b2b-gray-bg">
                        <div><img src={benefit2.src} className="imgIcon" alt="" />
                        <span>Product Catalog Management</span></div>
                      </div>
                  </div>
                  <div className="col mb-4">
                      <div className="cell-wrap b2b-gray-bg">
                      <div><img src={benefit3.src} className="imgIcon" alt="" />
                        <span>Search and Navigation</span></div>
                      </div>
                  </div>
                  <div className="col mb-4">
                      <div className="cell-wrap b2b-gray-bg">
                      <div><img src={benefit4.src} className="imgIcon" alt="" />
                        <span>Order Management</span></div>
                      </div>
                  </div>
                  <div className="col mb-4">
                      <div className="cell-wrap b2b-gray-bg">
                      <div><img src={benefit5.src} className="imgIcon" alt="" />
                        <span>Financial Management</span></div>
                      </div>
                  </div>
                  <div className="col mb-4">
                  <div className="cell-wrap b2b-gray-bg">
                       <div> <img src={benefit6.src} className="imgIcon" alt="" />
                        <span>Analytics and Reporting</span></div>
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