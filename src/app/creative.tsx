'use client'
import { useEffect } from 'react';

import React from "react";   
import Graphic from '../../public/marketing-img/graphic.png';       


export default function Creative() {
 
  

  return (
    <>  
    <div className="p-2 p-md-5 creative"> 
            <div className="inner-create row text-white align-items-center">
                <div className="col-12 col-sm-12 col-md-7"   data-aos="flip-right"    >
                    <h1 className='desc_service'>Creative<br/> 
                        <span className="heading-gradient">UI/UX & Graphic Design</span> Services</h1>
                </div>
                <div className="col-12 col-sm-12 col-md-5"   data-aos="flip-left"   >
                    <p className="creative-para">Experience seamless user interactions and visually stunning designs with our UI/UX and graphic design services. Studies show that 88% of online consumers are less likely to return to a website after a bad experience. Let us improve your digital presence and fascinate your audience with captivating design solutions.</p>
                </div>       
            </div>
    </div>
    <div className="banner-video" data-aos="zoom-in" >
        <img src={Graphic.src} className='w-100 grap' alt="" />
        
        {/* <iframe width="100%" height="600" src="http://player.vimeo.com/video/41406753?byline=0&amp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
    </div>
    
</>
)
}