'use client'
import { useEffect } from 'react';

import React from "react"; 
import Cost from '../../../public/app/cost.png';            


export default function engagementmodal() {
 
  

  return (
    <>  
        <div className="p-5 bg_light_green"> 
    <div className="container"> 
<div className="row text-white p-2">
      <div className="col-md-12 mx-auto text-center mb-5 pb-3 mt-5">
        <h2>Engagement model</h2>
        <p className='mt-3'>We have developed a robust engagement model that ensures a smooth and collaborative development process. Our engagement model is designed to foster effective communication, transparency, and client involvement throughout the project. We value collaboration and actively encourage your input and ideas. We believe that successful projects are built on strong partnerships, where our team and your team work together to achieve the desired results.</p>
      </div>
      <div className="col-md-4">
        <div className="border-right">
        <h2 className='text_primary'>Hourly</h2>
        <p>Our flexible hourly engagement model allows you to book hours based on your project need.</p>
        <ul className='sub_feature'>
            <li> <img src={Cost.src} alt="" />  Commitment to excellence</li>
            <li> <img src={Cost.src} alt="" />  Ideal for Long-term projects</li>
            <li> <img src={Cost.src} alt="" />  Flexible payment options</li>
            <li> <img src={Cost.src} alt="" />  Hourly and rate-based payment</li>
        </ul>
      </div>
      </div>
      <div className="col-md-4">
      <div className="border-right"> 
        <h2 className='text_primary'>Fixed Cost</h2>
        <p>We finish work before the deadline, along with timely updates,</p>
        <ul className='sub_feature'>
            <li> <img src={Cost.src} alt="" />  Fixed requirement</li>
            <li> <img src={Cost.src} alt="" />  Defined Commitment</li>
            <li> <img src={Cost.src} alt="" />  One time Projects</li>
            <li> <img src={Cost.src} alt="" />  Optimal Flexible and Fixed Cost</li>
        </ul>
      </div>
      </div>

      <div className="col-md-4">
        <h2 className='text_primary'>AdHoc</h2>
        <p>Our flexible hourly engagement model allows you to book hours based on your project need.</p>
        <ul className='sub_feature'>
            <li> <img src={Cost.src} alt="" />  Unclear Requirement</li>
            <li> <img src={Cost.src} alt="" />  No commitment to work</li>
            <li> <img src={Cost.src} alt="" />  Long/Short Projects</li>
            <li> <img src={Cost.src} alt="" />  Long/Short Projects</li>
        </ul>
      </div>
     </div> 
</div>



</div>
 
</>
)
}