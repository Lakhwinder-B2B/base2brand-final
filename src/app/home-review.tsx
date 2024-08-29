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
    autoplay: false,
    autoplaySpeed: 2500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows : true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows : true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows : true,
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
      <div className="bgimg_feed1 pt-5">
      <div className="container"> 
          <div className="row text-white"> 
              <div className="col-lg-11 col-md-11 col-11 m-auto p-0">
              <h3 className="b2b-main-heading text-center text-uppercase" data-aos="fade-up">What Our <strong>Clients</strong> Say</h3>
              <div className="reviewSlider mt-5" data-aos="fade-up" data-aos-delay="500">
                <Slider {...reviewSlider} className="w-100">
                    <div>
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
                    <div>
                        <div className="bg_feedback">
                          <div className="mb-3 reviewImgWrap"><img className="name_latter" src={csem.src} alt="Product" /></div>
                          <p className="b2b-text text-left">Base2Brand has very professional developers, diligent and always tries their best. I. Will continue to work with them in the future and highly recommend their services to colleagues and friends.</p>
                          <div className=" mt-4">
                          <div className=" pr-5">
                            
                              <div className="feedback_user">
                                <h3 className="mb-0">John Rivera</h3>
                                <p className="mb-0">Entrepreneur </p>
                              </div>
                            </div>

                            </div>
                        </div>
                    </div>
                   
                    {/* ~~~~~~~~~~~~~~~~ */}
                    <div>
                        <div className="bg_feedback">
                          <div className="mb-3 reviewImgWrap"><img className="name_latter" src={csem.src} alt="Product" /></div>
                          <p className="b2b-text text-left">B2B is fantastic! they understood our business and made great suggestions for improving our marketing plan. When you hire experts, it's like having a marketing professional on staff that knows your company and product and doesn't need much supervision!</p>
                          <div className=" mt-4">
                          <div className=" pr-5">
                            
                              <div className="feedback_user">
                                <h3 className="mb-0">Spencer Tarring</h3>
                                <p className="mb-0">CEO &amp; Founder at Vous Music Group Ltd </p>
                              </div>
                            </div>

                            </div>
                        </div>
                    </div>
                   
                    {/* ~~~~~~~~~~~~~~~~ */}
                    <div>
                        <div className="bg_feedback">
                          <div className="mb-3 reviewImgWrap"><img className="name_latter" src={csem.src} alt="Product" /></div>
                          <p className="b2b-text text-left">B2B team is brilliant. Efficient and friendly, they recommended and tried out a few strategies that I had never thought about. At some point the strategies they set up were sending so much traffic my way, and it was so perfectly targeted, that I wasn’t able to handle the resulting workload (a great problem to have as a new business).</p>
                          <div className=" mt-4">
                          <div className=" pr-5">
                            
                              <div className="feedback_user">
                                <h3 className="mb-0">Sheila Janakos</h3>
                                <p className="mb-0">CEO (Health Horizons) </p>
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
