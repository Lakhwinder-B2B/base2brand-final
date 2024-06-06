'use client'
import { useEffect } from 'react';

import React from "react";   

import UiUx from '../../public/UI-UX/harf.png';

export default function UIUX() {
 
  

  return (
    <>  
    <div className="p-5 graphic-services"> 
        <div className="graphic-ser-head text-white text-center" data-aos="fade-up">
            <h1>Process of Delivering Our UI/UX & Design Services</h1>
            <p className="w-100">Our process of delivering UI/UX & Design Services is transparent, efficient, and top-notch. We prioritize clear communication, ensuring clients are involved every step of the way. With swift turnaround times and a focus on quality, we consistently deliver exceptional results that exceed expectations.</p>
        </div>
            <div className="inner-create mt-5 row text-white align-items-center justify-content-center" data-aos="fade-down">
                <div className="col-12 d-flex pt-5 justify-content-center"    >
                    <img src={UiUx.src} alt="" />
                </div>
            </div>
    </div>
</>
)
}