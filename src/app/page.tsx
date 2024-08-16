'use client'

import React, { useState } from "react";
import Header from '../../component/header'
import Footer from '../../component/footer'
import HomeBanner from './banner-home'
import OurServices from '../app/our-services'
import Projects from '../app/project'
import OurProject from '../app/our-project'
import About from '../app/about'
import Ourpurpose from '../app/our-purpose'
import Brand from '../app/brand'
import HomeBlog from '../app/homeblog'
import Feedback from '../app/home-review'
import Career from '../app/career'
import FooterMap from '../app/footer-map'

import b2b1 from '../../public/img/b2b1.png'; 
import b2b2 from '../../public/img/b2b2.png'; 
import b2b3 from '../../public/img/b2b3.png'; 
import b2b4 from '../../public/img/b2b4.png'; 

import logo1 from '../../public/partner-logo/logo1.svg'; 
import logo2 from '../../public/partner-logo/logo2.png'; 
import logo3 from '../../public/partner-logo/logo3.svg'; 
import logo4 from '../../public/partner-logo/logo4.svg'; 
import logo5 from '../../public/partner-logo/logo5.svg'; 
import logo6 from '../../public/partner-logo/logo6.svg'; 
import logo7 from '../../public/partner-logo/logo7.svg';
import radialBg from '../../public/img/radial_bg.svg'; 

import polygon from '../../public/img/polygon.png'; 
import Slider from "react-slick";
import Typewriter from 'typewriter-effect';
import VerticalScroll from "./vertical-scroll-sec";
import Request from "./request-form";
// import styles from "./VerticalSlideshow.module.css";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setTimeout(function() {
      const ModalBody = document.querySelector(".request-form");
      if(ModalBody){
        ModalBody.classList.add("transformAnim");
      }
                               
      }, 200);
  };

  const settings = {
    dots: false,
    arrows : false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false 
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    
      <Header />

      {/* <HomeBanner /> */}
      <div className="bg_home" 
        style={{ backgroundImage: `url(${radialBg.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} >
        <div className="container mx-auto pt-4 pb-5 full_height"> 
          <div className="row align-items-center position-relative">
            <div className="col-md-2 mob-none"  >  
                  <img src={b2b1.src} className='banner_icon_section' />
                  <img src={b2b2.src} className='banner_icon_section' /> 
            </div>
            <div className="col-md-8 text-center pt-5 mt-5 mt-md-0 pt-md-0 mob-top" data-aos="fade-up" > 
              <h2 className="sub_heading">Design, Develop, Deliver</h2> 
              <Typewriter 
                options={{
                  strings: ['Web Designing', 'Web Development', 'Digital Marketing'],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p className='sub_text text-center text-white mt-5'>Let&apos;s Build something Digital together, We are Leading Innovative<br />Partner for Start-ups and Enterprises</p>
              <div className="mt-md-5 mt-3 text-center">
                <button onClick={toggleModal} className='b2b-btn b2b-btn-lg'> 
                
                Request a Quote </button> 
              </div>
            </div>
            <div className="col-md-2 mob-none"  > 
                <img src={b2b3.src} className='icon_three banner_icon_section' />
                <img src={b2b4.src} className='icon_four banner_icon_section ml-4' />
            </div>
          </div>
        </div>
        <div className="p-3 logo-slider" >
            <div className="col-md-12 text-center pt-4" >
                <h3 className='b2b-partners-heading'>Our Trusted Partners Collaborate Seamlessly To Drive Mutual Success</h3> 
            </div>
            <div className="b2b-container-lg">
                <Slider {...settings} className="w-100">
                  <div>
                    <img src={logo1.src} className='social_logo' /> 
                  </div>
                  <div>
                    <img src={logo2.src} className='social_logo' /> 
                  </div> 
                  <div>
                  <img src={logo3.src} className='social_logo' /> 
                  </div>
                  <div>
                  <img src={logo4.src} className='social_logo' /> 
                  </div> 
                  <div>
                  <img src={logo5.src} className='social_logo' /> 
                  </div>
                  <div>
                  <img src={logo6.src} className='social_logo' /> 
                  </div>
                  <div>
                  <img src={logo7.src} className='social_logo' /> 
                  </div>  
                  <div>
                    <img src={logo1.src} className='social_logo' /> 
                  </div>
                  <div>
                    <img src={logo2.src} className='social_logo' /> 
                  </div> 
                  <div>
                  <img src={logo3.src} className='social_logo' /> 
                  </div>
                  <div>
                  <img src={logo4.src} className='social_logo' /> 
                  </div> 
                  <div>
                  <img src={logo5.src} className='social_logo' /> 
                  </div>
                  <div>
                  <img src={logo6.src} className='social_logo' /> 
                  </div>
                  <div>
                  <img src={logo7.src} className='social_logo' /> 
                  </div> 
                  {/* <div>
                  <img src={logo9.src} className='social_logo' /> 
                  </div> */}
                </Slider>
            </div>
        </div>
       
        <Projects />
        {/* <OurProject /> */}
        <About />
        {/* <Ourpurpose />  */}
        <Brand heading={"The brand we have worked with"}  bgcolor="" color="text-white" />
        {/* <HomeBlog /> */}
        <Feedback />
        <Career />
        {/* <VerticalScroll /> */}
                
        <FooterMap />
        <Footer />
      </div>

      {showModal && 
        <Request 
          onCloseModal={toggleModal} 
        />
      }
    </>
  )
}
