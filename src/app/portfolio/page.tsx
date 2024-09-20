"use client";

import React, { useState, useEffect } from "react";
import Image from 'next/image';  
import Header from "../../../component/header";
import radialLeft from '../../../public/img/radial-left.svg';
import case1 from '../../../public/img/portfolio/case1.png';
import case2 from '../../../public/img/portfolio/case2.png';
import case3 from '../../../public/img/portfolio/case3.png';
import case4 from '../../../public/img/portfolio/case4.png';
import case5 from '../../../public/img/portfolio/case5.png';
import case6 from '../../../public/img/portfolio/case6.png';
import case7 from '../../../public/img/portfolio/case7.png';
import case8 from '../../../public/img/portfolio/case8.png';
import case9 from '../../../public/img/portfolio/case9.png';
import case10 from '../../../public/img/portfolio/case10.png';
import case11 from '../../../public/img/portfolio/case11.png';
import case12 from '../../../public/img/portfolio/case12.png';
import case13 from '../../../public/img/portfolio/case13.png';
import case14 from '../../../public/img/portfolio/case14.png';
import case15 from '../../../public/img/portfolio/case15.png';
import case16 from '../../../public/img/portfolio/case16.png';
import case17 from '../../../public/img/portfolio/case17.png';
import case18 from '../../../public/img/portfolio/case18.png';
import case19 from '../../../public/img/portfolio/case19.png';
import case20 from '../../../public/img/portfolio/case20.png';
import case21 from '../../../public/img/portfolio/case21.png';
import case22 from '../../../public/img/portfolio/case22.png';
import case23 from '../../../public/img/portfolio/case23.png';
import case24 from '../../../public/img/portfolio/case24.png';
import case25 from '../../../public/img/portfolio/case25.png';
import case26 from '../../../public/img/portfolio/case26.png';
import case27 from '../../../public/img/portfolio/case27.png';
import case28 from '../../../public/img/portfolio/case28.png';
import case29 from '../../../public/img/portfolio/case29.png';
import case30 from '../../../public/img/portfolio/case30.png';
import case31 from '../../../public/img/portfolio/case31.png';
import case32 from '../../../public/img/portfolio/case32.png';
import case33 from '../../../public/img/portfolio/case33.png';
import case34 from '../../../public/img/portfolio/case34.png';
import case35 from '../../../public/img/portfolio/case35.png';
import Typewriter from 'typewriter-effect';
import Footer from "../../../component/footer";
import "./portfolio.css";
import Request from "../request-form";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        const modalBody = document.querySelector(".request-form");
        if (modalBody) {
          modalBody.classList.add("transformAnim");
        }
      }, 200);
    }
  }, [showModal]);

  // const images = [case1, case2, case3,case4,case5,case6,case7,case8,case9,case10,case11,case12,case13,case14,case15,case16,case17,case18,case19,case20,case21,case22,case23,case24,case25,case26,case27,case28,case29,case30,case31,case32,case33,case34,case35,];

  // const images = [
  //   { src: case1, height: 300, width: 500 },
  //   { src: case2, height: 300, width: 500 },
  //   { src: case3, height: 300, width: 500 },
  //   { src: case4, height: 300, width: 500 },
  //   { src: case5, height: 300, width: 500 },
  //   { src: case6, height: 300, width: 500 },
  //   { src: case7, height: 300, width: 500 },
  //   { src: case8, height: 300, width: 500 },
  //   { src: case9, height: 300, width: 500 },
  //   { src: case10, height: 300, width: 500 },
  //   { src: case11, height: 300, width: 500 },
  //   { src: case12, height: 300, width: 500 },
  //   { src: case13, height: 300, width: 500 },
  //   { src: case14, height: 300, width: 500 },
  //   { src: case15, height: 300, width: 500 },
  //   { src: case16, height: 300, width: 500 },
  //   { src: case17, height: 300, width: 500 },
  //   { src: case18, height: 300, width: 500 },
  //   { src: case19, height: 300, width: 500 },
  //   { src: case20, height: 300, width: 500 },
  //   { src: case21, height: 300, width: 500 },
  //   { src: case22, height: 300, width: 500 },
  //   { src: case23, height: 300, width: 500 },
  //   { src: case24, height: 300, width: 500 },
  //   { src: case25, height: 300, width: 500 },
  //   { src: case26, height: 300, width: 500 },
  //   { src: case27, height: 300, width: 500 },
  //   { src: case28, height: 300, width: 500 },
  //   { src: case29, height: 300, width: 500 },
  //   { src: case30, height: 300, width: 500 },
  //   { src: case31, height: 300, width: 500 },
  //   { src: case32, height: 300, width: 500 },
  //   { src: case33, height: 300, width: 500 },
  //   { src: case34, height: 300, width: 500 },
  //   { src: case35, height: 300, width: 500 },
  //   // Add other images with appropriate height and width
  // ];
  const openImageInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <Header />
      <div className="service-banner b2b-black-bg" >
          <div className="container mx-auto">
            <div className="row flex-wrap align-items-center m-auto"> 
              <div className="col-12 col-sm-12 col-md-7 " data-aos="fade-up" >
                 <h1 className=" mb-md-3 mb-2 b2b-sub-heading-bold text-uppercase">Welcome to our Portfolio</h1>
                 <p className="text-white col-12 col-sm-12 col-md-10">
                 What sets us apart is the inspiring, creative people behind us; they are the soul of our company. Here, we proudly display the results of our hard work and dedication.</p>
                 <div className="service-btn d-flex flex-wrap mt-3 w-100">
                  <button className="b2b-btn b2b-btn-lg m-0" onClick={toggleModal}>Request a Quote</button>
                 </div>
              </div>
              <div className="col-12 col-sm-12 col-md-5 d-flex flex-wrap align-items-center justify-content-center" data-aos="fade-up" >
              <DotLottieReact
                  src='/json/Portfolio banner.json'
                  loop
                  autoplay
                  className="animated-imgs animated-banner-img"
                />
              </div>
            </div>
          </div> 
        </div>
      <div className="b2b-black-bg">
        {/* <div className="py-5">
          <div className="w-100">
            <div className="col-md-6 text-center text-white mt-5 m-auto mb-5 px-5">
              <h1 className="text-uppercase b2b-heading">Welcome to our Portfolio</h1>
              <p className="mb-5 mt-4 army">What sets us apart is the inspiring, creative people behind us; they are the soul of our company. Here, we proudly display the results of our hard work and dedication.</p>
              <button onClick={toggleModal} className="b2b-btn b2b-btn-sm m-0">Request a Quote</button>
            </div>
          </div>
        </div> */}

        <div className="work-gallery" style={{ backgroundImage: `url(${radialLeft.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
          <div className="w-100 pt-3">
            <div className="col-md-6 text-center text-white mt-5 m-auto px-5">
              <h2 className="text-uppercase b2b-heading">Impressive Portfolio in Our Work Gallery</h2>
            </div>
            <div className="col-12">
              <div className="container p-4">
                <ul className="nav nav-pills mb-3 caseTabs justify-content-center gap-5" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active btn_portfolio" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link btn_portfolio" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Web Design</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link btn_portfolio" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Mobile App Design</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link btn_portfolio" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Graphics</button>
                  </li>
                </ul>

                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                  <div className="row mt-5 justify-content-center"> 
                  {[case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, case11, case12, case13, case14, case15, case16, case17, case18, case19, case20, case21, case22, case23, case24, case25, case26, case27, case28, case29, case30, case31, case32, case33, case34, case35].map((image, index) => (
                        <div className="col-md-6 mb-5" data-aos="fade-up">
                          <div className="case_box">
                            <img src={image.src} alt=""   onClick={() => openImageInNewTab(image.src)}/>
                          </div>
                        </div>
                      ))}
                        </div>

                  {/* <div className="row mt-5 justify-content-center"> 

                  <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case1.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case2.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case3.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case4.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case5.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case6.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case7.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case8.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case9.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case10.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case11.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case12.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case13.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case14.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case15.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case16.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case17.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case18.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case19.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case20.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case21.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case22.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case23.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case24.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case25.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case26.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case27.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case28.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case29.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case30.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case31.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case32.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case33.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case34.src} alt="" />
                    </div>
                    </div>
                    <div className="col-md-6 mb-5">
                  <div className="case_box">
                  <img src={case35.src} alt="" />
                    </div>
                    </div> 
                        </div> */}
                  </div>

                  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className="row mt-5 justify-content-center"> 
                    {[case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, case11, case12, case13, case14, case15].map((image, index) => (
                        <div className="col-md-6 mb-5" data-aos="fade-up">
                          <div className="case_box">
                            <img src={image.src} alt="" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div className="row mt-5 justify-content-center">
                      {[case24, case28, case26, case27, case29, case30, case31, case32, case33, case34, case35].map((image, index) => (
                        <div className="col-md-6 mb-5" data-aos="fade-up">
                          <div className="case_box">
                            <img src={image.src} alt="" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab">
                    <div className="row mt-5 justify-content-center">
                      {[case16, case17, case18, case19, case20, case21, case22, case23].map((image, index) => (
                        <div className="col-md-6 mb-5" data-aos="fade-up">
                          <div className="case_box">
                            <img src={image.src} alt="" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {showModal && (
        <Request onCloseModal={toggleModal} />
      )}
    </>
  );
}
