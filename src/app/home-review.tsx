'use client'

import React from "react"; 
import banner from '../../public/img/feedback-banner.png';        
import name from '../../public/img/name.png';        
import char from '../../public/img/char.jpg';        
import vip from '../../public/img/vip.svg';        
import seera from '../../public/img/seera.jpg';        
import video from '../../public/img/aumi.png';        
import aumi from '../../public/img/aumi2.jpg';        
import pro from '../../public/img/pro.jpg';        
import csem from '../../public/img/csem.svg';        
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
                    <div>
                        <div className="bg_feedback">
                        <div className="mb-3"><img className="name_latter miui" src={vip.src} alt="Product" /></div>
                          <p className="b2b-text text-left"> I had the pleasure of working with an excellent and fully professional team comprising of Arti Bhatia, Ajay Kumar, Rakesh Kumar, and Aashu. They have delivered outstanding work, and I look forward to working with them in the future. Despite having very high standards and a deep understanding of what I wanted, they exceeded my expectations and delivered exceptional results. I got my full money&apos;s worth and more. Thank you for creating a website that was better than I imagined and for maintaining professionalism throughout the project. I highly recommend them to anyone seeking top-quality website design services.</p>
                            <div className=" mt-4">
                            <div className=" pr-5">
                          
                              <div className="feedback_user ml-3">
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
                          <div className="mb-3"><img className="name_latter miui" src={csem.src} alt="Product" /></div>
                          <p className="b2b-text text-left">Was good to collaborate and discuss innovative ideas. Was a very fair and pleasurable experience dealing with the team and we look forward to working together again soon.</p>
                          <div className=" mt-4">
                          <div className=" pr-5">
                            
                              <div className="feedback_user ml-3">
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
                          <div className="mb-3"><img className="name_latter" src={pro.src} alt="Product" /></div>
                          <p className="b2b-text text-left">Base2Brand provides excellent social media marketing management, but their ability to be effective communicators sets them apart from the crowd. We&apos;ve had the pleasure of working with scores of UpWork Freelancers and are well aware of how rare it is to find assistance that has the technological expertise AND the skills to effectively communicate at every stage of the project -- this is what Base2Brand does so well! </p>
                          <div className=" mt-4">
                                    <div className=" pr-5">
                    
                              <div className="feedback_user ml-3">
                                <h3 className="mb-0">Christopher Meyer</h3>
                                <p className="mb-0">Proimpact Group </p>
                              </div>
                            </div>

                            </div>
                        </div>
                    </div>
                    {/* ~~~~~~~~~~~~~~~~ */}
                    <div>
                        <div className="bg_feedback">
                          <div className="mb-3"> <img className="name_latter" src={video.src} alt="Product" /></div>
                          <p className="b2b-text text-left">Arti and the Team were very communicative and eager to work together efficiently. Work was completed on time and if corrections were needed, they made it right away. I would recommend and hire again.</p>
                          <div className=" mt-4">
                              <div className=" pr-5">
                          
                              <div className="feedback_user ml-3">
                                <h3 className="mb-0">Jimbo Marshall</h3>
                                <p className="mb-0">That Video Thing </p>
                              </div>
                            </div>

                            </div>
                        </div>
                    </div>
                    {/* ~~~~~~~~~~~~~~~~ */}
                    <div>
                        <div className="bg_feedback">
                          <div className="mb-3">  <img className="name_latter miui" src={aumi.src} alt="Product" /></div>
                          <p className="b2b-text text-left">Saurabh is my team member for more than 5 years. If you need your site support on any issue any time of the day , Whenever you need. He is the Guy. Highly recommend</p>
                          <div className=" mt-4">
                                    <div className=" pr-5">
                          
                              <div className="feedback_user ml-3">
                                <h3 className="mb-0">olga vasilevsky</h3>
                                <p className="mb-0">MiuOlui </p>
                              </div>
                            </div>

                            </div>
                        </div>

                    </div>
                    {/* ~~~~~~~~~~~~~~~~ */}
                    <div>
                        <div className="bg_feedback">
                          <div className="mb-3"><img className="name_latter" src={char.src} alt="Product" /></div>
                          <p className="b2b-text text-left">Rahul is an incredible custom developer for Shopify. We will continue to use him for all custom development on Shopify</p>
                          <div className=" mt-4">
                                    <div className=" pr-5">

                              <div className="feedback_user ml-3">
                                <h3 className="mb-0">Eric Dunn</h3>
                                <p className="mb-0">Plastix Marketing</p>
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
