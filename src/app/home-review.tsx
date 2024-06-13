'use client'

import React from "react"; 
import banner from '../../public/img/feedback-banner.png';        
import name from '../../public/img/name.png';        
import char from '../../public/img/char.jpg';        
import vip from '../../public/img/vip-number-shop.svg';        
import seera from '../../public/img/seera.jpg';        
import video from '../../public/img/aumi.png';        
import aumi from '../../public/img/aumi2.jpg';        
import pro from '../../public/img/pro.jpg';        
import csem from '../../public/img/just-in-time.svg';        
import './our-project.css'
import Slider from "react-slick";

export default function Home() {
  const reviewSlider = {
    dots: false,
    arrows : true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (  
    <>  
    {/* <div className="bgimg" style={{
      backgroundImage: `url(${banner.src})`,
      width: '100%',
      height: '600px',
      display:'flex',
      alignItems: 'center',
      backgroundSize: 'cover', 
      position: 'relative',
    }}> */}
      <div className="bgimg_feed1 b2b-gray-bg">
      <div className="container"> 
          <div className="row text-white"> 
              <div className="col-md-12 p-0">
              <h3 className="b2b-main-heading text-center text-uppercase pt-5">What Our <strong>Clients</strong> Say</h3>
              <div className="reviewSlider">
                <Slider {...reviewSlider} className="w-100">
                    <div className="h100">
                        <div className="bg_feedback">
                        <div className="mb-3 reviewImgWrap"><img className="name_latter" src={vip.src} alt="Product" /></div>
                          <p className="b2b-text text-left">I had the pleasure of working with an excellent and fully professional team comprising of Arti Bhatia, Ajay Kumar, Rakesh Kumar, and Aashu. They have delivered outstanding work, and I look forward to working with them in the future. </p>
                            <div className=" mt-4">
                            <div className=" pr-5">
                          
                              <div className="feedback_user">
                                <h3 className="mb-0">Deepak Dhingra</h3>
                                <p className="mb-0">VIP NUMBER SHOP</p>
                              </div>
                  
                            </div>

                            </div>
                        </div>
                    </div>
                    {/* ~~~~~~~~~~~~~~~~ */}
                    <div>
                        <div className="bg_feedback">
                          <div className="mb-3 reviewImgWrap"><img className="name_latter" src={csem.src} alt="Product" /></div>
                          <p className="b2b-text text-left">Was good to collaborate and discuss innovative ideas. Was a very fair and pleasurable experience dealing with the team and we look forward to working together again soon.</p>
                          <div className=" mt-4">
                          <div className=" pr-5">
                            
                              <div className="feedback_user">
                                <h3 className="mb-0">Frank Quarato</h3>
                                <p className="mb-0">CSEM, Inc. </p>
                              </div>
                            </div>

                            </div>
                        </div>
                    </div>
                   
                    {/* ~~~~~~~~~~~~~~~~ */}
                </Slider>
              </div>
              </div>
             </div>
        </div> 
      </div> 
    </>
  )
}
