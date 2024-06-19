"use client";

import React, { useRef, useState } from 'react';
// import { useEffect } from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Bg from '../../../public/services2-img/service-mask.svg';
import '../../app/services/services2.css';
import './digital.css';
import Request from "../request-form";
import Digital0 from "../../../public/digital/digital.png";
import Digital1 from "../../../public/digital/digital1.png";
import Digital2 from "../../../public/digital/digital2.png";
import Icon1 from "../../../public/digital/icon.svg";
import Icon2 from "../../../public/digital/icon1.svg";
import Icon3 from "../../../public/digital/icon2.svg";

import Ads from "../../../public/digital/ads.svg";
import Ads1 from "../../../public/digital/ads1.svg";
import Ads2 from "../../../public/digital/ads2.svg";
import Ads3 from "../../../public/digital/ads3.svg";
import Ads4 from "../../../public/digital/ads4.svg";
import Ads5 from "../../../public/digital/ads5.svg";
import Social from "../../../public/digital/social.svg";
import Slider from 'react-slick';

// const thumbnails = [
//   { src: Ads.src, text: 'Ad Text 1' },
//   { src: Ads1.src, text: 'Ad Text 2' },
//   { src: Ads2.src, text: 'Ad Text 3' },
//   { src: Ads3.src, text: 'Ad Text 4' },
//   { src: Ads4.src, text: 'Ad Text 5' },
//   { src: Ads5.src, text: 'Ad Text 6' }
// ];
export default function Digital() {
  const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };
    const sliderForRef = useRef<Slider | null>(null);
    const sliderNavRef = useRef<Slider | null>(null);
  
   
  
    const settingsFor = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      adaptiveHeight: true,
      asNavFor: sliderNavRef.current,
    };
  
    const settingsNav = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      variableWidth: true,
      asNavFor: sliderForRef.current,
      beforeChange: (current: number, next: number) => {
        if (sliderForRef.current) {
          sliderForRef.current.slickGoTo(next);
        }
      }
    };

    const handleThumbnailClick = (index: number) => {
      if (sliderForRef.current) {
        sliderForRef.current.slickGoTo(index);
      }
    };

  return (
    <>
      <Header />
      <div className="bg_home p-0">
        <div className="service-banner full_height p-3 p-md-5" style={{backgroundImage: `url(${Bg.src})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="container mx-auto">
            <div className="row col-12 col-lg-10 d-flex flex-wrap align-items-center justify-content-center m-auto"> 
              <div className="col-12 col-sm-12 col-md-9 d-flex flex-wrap align-items-center justify-content-center pt-5 pb-5" data-aos="fade-up" >
                 <h1 className="text-center mb-3 b2b-sub-heading-bold text-uppercase">Digital Marketing</h1>
                 <p className="text-white text-center col-12 col-sm-12 col-md-8 m-auto">
                 Improve Your Online Presence with Our Proven Digital Marketing Strategies. Partner with us for digital marketing excellence</p>
                 <div className="service-btn d-flex flex-wrap justify-content-center mt-3 w-100">
                  <button className="b2b-btn b2b-btn-lg m-0" onClick={toggleModal}>Request a Quote</button>
                 </div>
              </div>
            </div>
          </div> 
        </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-4">
                <div className="digital_box">
                  <img className="digital_img" src={Digital0.src} alt="" />
                  <img className="digital_icon" src={Icon3.src} alt="" /> 
                 <div className="leader_box">
                 <a>Leader in digital marketing <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                 </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="digital_box">
                  <img className="digital_img" src={Digital2.src} alt="" />
                  <img className="digital_icon" src={Icon2.src} alt="" /> 
                 <div className="leader_box">
                 <a>Highest Success rates <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                 </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="digital_box">
                  <img className="digital_img" src={Digital1.src} alt="" />
                  <img className="digital_icon" src={Icon1.src} alt="" /> 
                 <div className="leader_box">
                 <a>Quality Marketing Solutions <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                 </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main_gallery">
          <div className="container">
            <div className="gallery_slider">
            <div className="left_thumnails">
            <Slider {...settingsNav} ref={sliderNavRef} className="slider-for">
            {/* {thumbnails.map((thumb, index) => (
          <a key={index} onClick={() => handleThumbnailClick(index)}>
            <img src={thumb.src} alt={`Thumbnail ${index + 1}`} />
          </a>
        ))} */}
              <div>
               <a onClick={() => handleThumbnailClick(0)}>
              <img src={Ads.src} alt="" />
              </a>
              <a onClick={() => handleThumbnailClick(1)}>
              <img src={Ads1.src} alt="" />
              </a>
              <a>
              <img src={Ads2.src} alt="" />
              </a>
              <a>
              <img src={Ads3.src} alt="" />
              </a>
              <a>
              <img src={Ads4.src} alt="" />
              </a>
              <a>
              <img src={Ads5.src} alt="" />
              </a> 
              </div>
               </Slider>
            </div>
            <div className="right_slider">
            <Slider {...settingsFor} ref={sliderForRef} className="slider-nav">
              <div className='slider_right_main'>
                <div className="row align-items-center">
                  <div className="col-md-4">
                  {/* {thumbnails.map((thumb, index) => (
          <a key={index} onClick={() => handleThumbnailClick(index)}>
            <img className='social_img' src={thumb.src} alt={`Thumbnail ${index + 1}`} />
          </a>
        ))} */}

                    <img className="social_img" src={Social.src} alt="" />
                  </div>
                  <div className="col-md-8">
                    <div className="social_ads">
                      <p>PAID ADS + SOCIAL</p>
                      <h2>Social media Ads</h2>
                      <p>We provide comprehensive social media marketing and advertising services, crafting tailored strategies to elevate your brand's online presence and drive results.</p>
                      <div className="service-btn d-flex flex-wrap justify-content-left mt-3 w-100">
                  <button className="b2b-btn b2b-btn-lg m-0">See All Services</button>
                 </div>
                    </div>
                    </div>
                    </div>
                    </div>


                    <div className='slider_right_main'>
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <img className="social_img" src={Social.src} alt="" />
                  </div>
                  <div className="col-md-8">
                    <div className="social_ads">
                      <p>PAID ADS + 22222222</p>
                      <h2>Social media Ads</h2>
                      <p>We provide comprehensive social media marketing and advertising services, crafting tailored strategies to elevate your brand's online presence and drive results.</p>
                      <div className="service-btn d-flex flex-wrap justify-content-left mt-3 w-100">
                  <button className="b2b-btn b2b-btn-lg m-0">See All Services</button>
                 </div>
                    </div>
                    </div>
                    </div>
                    </div>

        </Slider>

                  </div>
                </div>
            </div>
          </div>
        {/* <Services2/> */}
        <Footer />
       
      </div>
   

 {showModal && 
        <Request 
          onCloseModal={toggleModal} 
        />
      }
    </>
  ); 
}
