'use client'

import React from "react"; 
import Brand1 from '../../public/img/brand1.png';   
import Brand2 from '../../public/img/brand2.png';   
import Brand3 from '../../public/img/brand3.png';   
import Brand4 from '../../public/img/brand4.png';   
import Brand5 from '../../public/img/brand5.png';   
import Brand6 from '../../public/img/brand6.png';   
import Brand7 from '../../public/img/brand7.png';   
import Brand8 from '../../public/img/brand8.png';      
import Brand9 from '../../public/img/brand9.png';   
import Brand10 from '../../public/img/brand10.png';   
import Brand11 from '../../public/img/brand11.png';   
import Brand12 from '../../public/img/brand12.png';   
import Brand13 from '../../public/img/brand13.png';   
import Brand14 from '../../public/img/brand14.png';   
import Brand15 from '../../public/img/brand15.png';   
import Brand16 from '../../public/img/brand16.png';   
import Brand17 from '../../public/img/brand17.png';   
import Brand18 from '../../public/img/brand18.png';   
import Brand19 from '../../public/img/brand19.png';   
import Brand20 from '../../public/img/brand20.png';      
import './our-project.css'
import Slider from "react-slick";

export default function Brand() {
  const settings = {
    dots: false,
    arrows : false, 
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };
  return (  
    <>  
      <div className="w-100 b2b-brands-wrap b2b-gray-bg">  
            <div className="b2b-container-lg">
              <h3 className="b2b-main-heading text-center text-white text-uppercase">The Brands We Have Worked With</h3>
              <div className="logo_brand">
              <Slider {...settings} className="w-100">
              <img className="logo_brands" src={Brand1.src} alt="Logo" /> 
              <img className="logo_brands" src={Brand2.src} alt="Logo" /> 
              <img className="logo_brands" src={Brand3.src} alt="Logo" /> 
              <img className="logo_brands" src={Brand4.src} alt="Logo" /> 
              <img className="logo_brands" src={Brand5.src} alt="Logo" />  
              <img className="logo_brands" src={Brand6.src} alt="Logo" /> 
              <img className="logo_brands" src={Brand7.src} alt="Logo" /> 
              <img className="logo_brands" src={Brand8.src} alt="Logo" /> 
              <img className="logo_brands" src={Brand9.src} alt="Logo" />  
              <img className="logo_brands" src={Brand10.src} alt="Logo" /> 
              <img className="logo_brands" src={Brand11.src} alt="Logo" /> 
              <img className="logo_brands" src={Brand12.src} alt="Logo" /> 
              <img className="logo_brands" src={Brand13.src} alt="Logo" /> 
              <img className="logo_brands" src={Brand14.src} alt="Logo" />  
              <img className="logo_brands" src={Brand15.src} alt="Logo" /> 
              <img className="logo_brands" src={Brand16.src} alt="Logo" /> 
              <img className="logo_brands" src={Brand17.src} alt="Logo" /> 
              <img className="logo_brands" src={Brand18.src} alt="Logo" /> 
              <img className="logo_brands" src={Brand19.src} alt="Logo" /> 
              <img className="logo_brands" src={Brand20.src} alt="Logo" /> 
              </Slider>

              </div>
            </div>  
      </div> 
    </>
  )
}
