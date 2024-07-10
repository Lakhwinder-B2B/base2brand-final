'use client'

import React, { useState } from "react";
import Header from '../../component/header'
import Footer from '../../component/footer'
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
import logo1 from '../../public/img/logo1.svg'; 
import logo2 from '../../public/img/logo2.svg'; 
import logo3 from '../../public/img/logo3.svg'; 
import logo4 from '../../public/img/logo4.svg'; 
import logo5 from '../../public/img/logo5.svg'; 
import logo6 from '../../public/img/logo6.svg'; 
import logo7 from '../../public/img/logo7.svg';  
import logo9 from '../../public/img/logo9.png'; 
import radialBg from '../../public/img/radial_bg.svg'; 

import polygon from '../../public/img/polygon.png'; 
import Slider from "react-slick";
import Typewriter from 'typewriter-effect';
import Request from "./request-form";
import VerticalScroll from "./vertical-scroll";
// import styles from "./VerticalSlideshow.module.css";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const settings = {
    dots: false,
    arrows : false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
      <div className="bg_home" style={{ backgroundImage: `url(${radialBg.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
        <div className="container mx-auto pt-4 pb-5 full_height"> 
          <div className="row align-items-center position-relative">
            <div className="col-md-2 mob-none"  >  
                  <img src={b2b1.src} className='banner_icon_section' />
                  <img src={b2b2.src} className='banner_icon_section' /> 
            </div>
            <div className="col-md-8 text-center pt-5 mt-5 mob-top" data-aos="fade-up" > 
              <h2 className="sub_heading">Design, Develop, Deliver</h2> 
              <Typewriter 
                options={{
                  strings: ['Web Designing', 'Web Development', 'Digital Marketing'],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p className='sub_text text-center text-white mt-5'>Let’s Build something Digital together, We are Leading Innovative Partner for Start-ups and Enterprises</p>
              <div className="mt-5 text-center">
                <button onClick={toggleModal} className='b2b-btn b2b-btn-lg'> 
                {/* <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i>  */}
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
              {/* <div>
              <img src={logo9.src} className='social_logo' /> 
              </div> */}
            </Slider>
        </div>
       
      <Projects />
      {/* <OurProject /> */}
      <About />
      {/* <Ourpurpose />  */}
      <Brand />
      <HomeBlog />
      <Feedback />
      <Career />
      <VerticalScroll />
              
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
