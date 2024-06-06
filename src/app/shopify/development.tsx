'use client'
import { useEffect } from 'react';

import React from "react"; 
import custom from '../../../public/services-img/4.png';       
import '../shopify/service.css'

export default function Development() {
 
  

  return (
    <>  
        <div className="p-5 shopify_main"> 
    <div className="container">
<div className="row text-white  h-100">
     <div className="col-md-12 text-center mb-5" data-aos="fade-up">
        <h1>Shopify Development Services Tailored for Success</h1>
     </div>
     <div className="col-md-6 h-100 mb-4" data-aos="flip-left">
        <div className="bg_dev">
            <div className="bg_devs">
        <div className="d-flex align-items-center development_data">
             <img className='custom_icon' src={custom.src} alt="" />       
             <h2 className='ml-3'>Custom Shopify <span className='primary'>Store</span> Design and Development</h2>
        </div>
        <p className='mt-4 font-weight-light'>At Base2Brand, we excel in crafting custom Shopify stores that not only reflect your brand identity but also engage your target audience effectively. As your trusted Shopify development company, we understand the importance of a user-friendly design in driving conversions.</p>
        <div className="text-left mt-4">
        <button className="btn btn-outline-primary m-0"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Read More </button>
     </div> 
     </div>
     </div>
    </div>

    <div className="col-md-6 h-100 mb-4" data-aos="flip-right">
        <div className="bg_dev">
        <div className="bg_devs"> 
        <div className="d-flex align-items-center development_data">
             <img className='custom_icon' src={custom.src} alt="" />       
             <h2 className='ml-3 primary mb-0'> Shopify App Development</h2>
        </div>
        <p className='mt-4 font-weight-light'>Our skilled Shopify web designer team creates custom Shopify apps that cater specifically to your business requirements. By leveraging our Shopify app development expertise, your online store can benefit from enhanced functionality and seamless integrations with third-party apps.</p>
        <div className="text-left mt-4">
        <button className="btn btn-outline-primary m-0"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Read More </button>
     </div> 
     </div>
     </div>
    </div>

    <div className="col-md-6 h-100 mb-4" data-aos="flip-left">
        <div className="bg_dev">
        <div className="bg_devs"> 
        <div className="d-flex align-items-center development_data">
             <img className='custom_icon' src={custom.src} alt="" />       
             <h2 className='ml-3 primary mb-0'>Conversion Rate Optimisation</h2>
        </div>
        <p className='mt-4 font-weight-light'>Partnering with our Shopify development company means gaining access to strategic insights aimed at maximizing your online sales and optimizing user experience. Our e-commerce consultation services are designed to align with your business goals.</p>
       <div className="text-left mt-4">
        <button className="btn btn-outline-primary m-0"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Read More </button>
     </div>  
     </div>
     </div>
    </div>

    
    <div className="col-md-6 h-100 mb-4" data-aos="flip-right">
        <div className="bg_dev">
        <div className="bg_devs"> 
        <div className="d-flex align-items-center development_data">
             <img className='custom_icon' src={custom.src} alt="" />       
             <h2 className='ml-3 primary mb-0'>Shopify Theme Development</h2>
        </div>
        <p className='mt-4 font-weight-light'>Our skilled team crafts visually stunning and highly functional Shopify themes that resonate with your brand identity. From sleek aesthetics to seamless navigation, we ensure your store not only captivates visitors but also maximizes user engagement and conversion rates. Grow your online presence with our bespoke Shopify theme solutions.</p>
        <div className="text-left mt-4">
        <button className="btn btn-outline-primary m-0"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Read More </button>
     </div> 
     </div>
     </div>
    </div>

    <div className="col-md-6 h-100 mb-4" data-aos="flip-left">
        <div className="bg_dev">
        <div className="bg_devs"> 
        <div className="d-flex align-items-center development_data">
             <img className='custom_icon' src={custom.src} alt="" />       
             <h2 className='ml-3 primary mb-0'>Growth Strategy</h2>
        </div>
        <p className='mt-4 font-weight-light'>Considering a move to Shopify? Our seamless migration services ensure a smooth transition from other platforms to Shopify. As your Shopify development company of choice, we handle data transfer and optimization to minimize downtime and maximize efficiency.</p>
        <div className="text-left mt-4">
        <button className="btn btn-outline-primary m-0"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Read More </button>
     </div> 
     </div>
    </div>
    </div>

    <div className="col-md-6 h-100 mb-4" data-aos="flip-right">
        <div className="bg_dev">
        <div className="bg_devs"> 
        <div className="d-flex align-items-center development_data">
             <img className='custom_icon' src={custom.src} alt="" />       
             <h2 className='ml-3 primary mb-0'>Replatforming to Shopify</h2>
        </div>
        <p className='mt-4 font-weight-light'>As a Shopify website development company, we prioritize the speed and performance of your Shopify store. Our Shopify website development services include thorough audits and implementation of optimization techniques, ensuring fast page load times for an optimal user experience.</p>
        <div className="text-left mt-4">
        <button className="btn btn-outline-primary m-0"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Read More </button>
     </div> 
     </div>
     </div>
    </div>

    <div className="col-md-6 h-100 mb-4" data-aos="flip-left">
        <div className="bg_dev">
        <div className="bg_devs"> 
        <div className="d-flex align-items-center development_data">
             <img className='custom_icon' src={custom.src} alt="" />       
             <h2 className='ml-3 primary mb-0'>Business Integrations</h2>
        </div>
        <p className='mt-4 font-weight-light'>In an era dominated by mobile users, our Shopify development company ensures your online store is not only desktop-friendly but also responsive across various devices. Reach your audience wherever they are with our mobile-friendly design services.</p>
        <div className="text-left mt-4">
        <button className="btn btn-outline-primary m-0"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Read More </button>
     </div> 
     </div>
     </div>
    </div>

    <div className="col-md-6 h-100 mb-4" data-aos="flip-right">
        <div className="bg_dev">
        <div className="bg_devs">

        <div className="d-flex align-items-center development_data">
             <img className='custom_icon' src={custom.src} alt="" />       
             <h2 className='ml-3 primary mb-0'>Ongoing Success</h2>
        </div>
        <p className='mt-4 font-weight-light'>At Base2Brand, we excel in crafting custom Shopify stores that not only reflect your brand identity but also engage your target audience effectively. As your trusted Shopify development company, we understand the importance of a user-friendly design in driving conversions.</p>
        <div className="text-left mt-4">
        <button className="btn btn-outline-primary m-0"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Read More </button>
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