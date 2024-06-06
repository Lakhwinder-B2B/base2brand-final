"use client";

import React, { useState } from "react";
import Header from "../../../component/header";
import AboutMask from "../../../public/about-img/about-mask.png";
import About from "../../../public/about-img/about.png"
import About1 from "../../../public/about-img/about1.png"
import About2 from "../../../public/about-img/about2.png"
import AboutColumns from "../../../src/app/about-columns"
import Team from "../.././app/team"
import Quote from "../request-quote";
import Footer from "../../../component/footer";
import "../about/about.css";
import Request from "../request-form";



export default function AboutUs() {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  

  return (
    <>
      <Header />
        <div className="bg_about pt-0 pb-0">
          <div className="about-mask pt-5" data-aos="fade-up" style={{backgroundImage: `url(${AboutMask.src})`,width: '100%',height: '100%',}}>
          <div className="row mb-5 m-0"> 
              <div className="d-flex flex-wrap justify-content-center col-12 col-sm-12 col-md-6 m-auto mb-4" data-aos="slide-down">
                <h1 className="fs-3 font-light w-100 text-center web-head mb-4">SMART IDEAS FOR YOUR BRAND ARE HERE.</h1>
                <p className="w-100 text-center text-white mb-4">We blend incredible Design and Development Skills with phenomenal Digital Marketing techniques to furnish your brand with the online solutions you deserve.</p>
                <button className="btn btn-outline-primary m-0 mb-4"  onClick={toggleModal}> Request a Quote </button>
              </div>
              <div className="about-img col-12 col-sm-10 col-md-10 m-auto justify-content-center d-flex">
                <img src={About.src} alt="" />
              </div>
            </div>
            </div>
            <div className="container-fluid">
              <div className="row mt-5 mb-5 d-flex flex-wrap justify-content-start align-items-center"> 
                <div className="about-img col-12 col-sm-12 col-md-6 m-auto justify-content-start d-flex"  data-aos="fade-up">
                  <img src={About1.src} alt="" />
                </div>
                <div className="d-flex flex-wrap justify-content-start align-items-center col-12 col-sm-12 col-md-6 mb-4 p-4" data-aos="fade-down">
                  <h1 className="fs-3 font-light w-100 text-white text-left">Who are we?</h1>
                  <p className="w-100 text-white font-light fs-6 text-left mb-5"> Base2Brand is a rapidly expanding website development and digital marketing company with offices in India and Canada. Our team combines creative ideas with extensive experience to consistently deliver exceptional results. We specialize in providing results-oriented integrated online marketing solutions for medium and large businesses worldwide, helping them build sustainable and meaningful relationships with clients. Trust Base2Brand for a professional online marketing strategy.
                    <br/><br/>
                    At Base2Brand, our experts leverage their talent and creativity to craft professional online marketing strategies tailored to your business needs. With a focus on delivering distinguished results, we are committed to helping businesses succeed and thrive in today&apos;s competitive digital landscape.</p>
                    <button className="btn btn-outline-primary m-0"  onClick={toggleModal}> Request a Quote </button>
                </div>
              </div>
            </div>

            <div className="row mb-5 mt-5 m-0"> 
                <div className="d-flex flex-wrap justify-content-center col-12 col-sm-12 col-md-6 m-auto mb-4 mt-5 pt-5" data-aos="fade-down">
                  <h1 className="fs-3 font-light w-100 text-center text-white mb-4">We Believe That Results Speak For Themselves</h1>
                  {/* <p className="w-100 text-center text-white">“Do not be wise in words, be wise in deeds”, we believe that results speak for themselves!</p> */}
                </div>
                <div className="about-img col-12 col-sm-10 col-md-10 m-auto justify-content-center d-flex flex-wrap" data-aos="fade-up">
                  {/* <img src={About2.src} alt="" /> */}

                  <div className="rating-col col-12 col-sm-6 col-md-3 text-center">
                    <h1>85%</h1>
                    <p className="fs-5">
                      Increase in organic website traffic
                    </p>
                  </div>

                  <div className="rating-col col-12 col-sm-6 col-md-3 text-center">
                    <h1>90%</h1>
                    <p className="fs-5">
                      More leads one-commerce website
                    </p>
                  </div>

                  <div className="rating-col col-12 col-sm-6 col-md-3 text-center">
                    <h1>91%</h1>
                    <p className="fs-5">
                      Increase in no. of views on youtube
                    </p>
                  </div>

                  <div className="rating-col col-12 col-sm-6 col-md-3 text-center">
                    <h1>85%</h1>
                    <p className="fs-5">
                      Increase in organic website traffic
                    </p>
                  </div>

                </div>
            </div>
          
            <div className="row mb-5 mt-5 about-bg-mask m-0 pt-5 pb-5"> 
                <div className="d-flex flex-wrap justify-content-center col-12 col-sm-12 col-md-6 m-auto mb-4">
                  <h1 className="fs-3 font-light w-100 text-center text-white mb-4">Why Work With Us?</h1>
                </div>
                <div className="about-img col-12 col-sm-12 col-md-12 col-lg-10 m-auto justify-content-center d-flex">
                 <div className="container">
                    <ul className="d-flex flex-wrap justify-content-center gap-4 p-0">
                      <li className="p-3 text-white text-center">Extensive industry knowledge.</li>
                      <li className="p-3 text-white text-center">Innovative, unique solutions</li>
                      <li className="p-3 text-white text-center">International presence, local insights</li>
                      <li className="p-3 text-white text-center">Client-Centric Approach</li>
                      <li className="p-3 text-white text-center">Proven Track Record</li>
                      <li className="p-3 text-white text-center">All-in-one digital services</li>
                    </ul>
                  </div>
                </div>
            </div>
          
          <AboutColumns/>
          <Team/>
          <Quote/>
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

