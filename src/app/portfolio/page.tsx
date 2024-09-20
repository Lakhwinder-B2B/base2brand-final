"use client";

import React, { useState, useEffect } from "react";
import Header from "../../../component/header";
import radialLeft from '../../../public/img/radial-left.svg';
import case1 from '../../../public/img/port.svg';
import case2 from '../../../public/img/port2.svg';
import case3 from '../../../public/img/port3.svg';
import case4 from '../../../public/img/port4.svg';
import case5 from '../../../public/img/port5.svg';
import case6 from '../../../public/img/port6.svg';
import case7 from '../../../public/img/port7.svg';
import case8 from '../../../public/img/port8.svg';
import case9 from '../../../public/img/port9.svg';
import case10 from '../../../public/img/port10.svg';
import case11 from '../../../public/img/port11.svg';
import case12 from '../../../public/img/port12.svg';
import case13 from '../../../public/img/port13.svg';
import case14 from '../../../public/img/port14.svg';
import case15 from '../../../public/img/port15.svg';
import case16 from '../../../public/img/port16.svg';
import case17 from '../../../public/img/port17.svg';
import case18 from '../../../public/img/port18.svg';
import case19 from '../../../public/img/port19.svg';
import case20 from '../../../public/img/port20.svg';
import case21 from '../../../public/img/port21.svg';
import case22 from '../../../public/img/port22.svg';
import case23 from '../../../public/img/port23.svg';
import case24 from '../../../public/img/port24.svg';
import case25 from '../../../public/img/port25.svg';
import case26 from '../../../public/img/port26.svg';
import case27 from '../../../public/img/port27.svg';
import case28 from '../../../public/img/port28.svg';
import case29 from '../../../public/img/port29.svg';
import case30 from '../../../public/img/port30.svg';
import case31 from '../../../public/img/port31.svg';
import case32 from '../../../public/img/port32.svg';
import case33 from '../../../public/img/port33.svg';
import case34 from '../../../public/img/port34.svg';
import case35 from '../../../public/img/port35.svg';
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
                        <div className="col-md-6 mb-5" key={index}>
                          <div className="case_box">
                            <img src={image.src} alt="" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className="row mt-5 justify-content-center">
                      {[case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, case11, case12, case13, case14, case15].map((image, index) => (
                        <div className="col-md-6 mb-5" key={index}>
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
                        <div className="col-md-6 mb-5" key={index}>
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
                        <div className="col-md-6 mb-5" key={index}>
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
