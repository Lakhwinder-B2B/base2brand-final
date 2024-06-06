'use client'

import React, { useState } from "react";    
import ServicesDigital from '../../public/services2-img/service-digital.png';
import Quote from "../../public/services2-img/quote-ico.png";
import Digital1 from "../../public/services2-img/digital1.png";
import Digital2 from "../../public/services2-img/digital2.png";
import Digital3 from "../../public/services2-img/digital3.png";
import Digital4 from "../../public/services2-img/digital4.png";
import Digital5 from "../../public/services2-img/digital5.png";
import Service1 from "../../public/img/ser1.png";
import Service2 from "../../public/img/ser2.png";
import Service3 from "../../public/img/ser3.png";
import Service4 from "../../public/img/ser4.png";
import Service5 from "../../public/img/ser5.png";

import shopify from "../../public/services2-img/s.png";
import shopify1 from "../../public/services2-img/s1.png";
import shopify2 from "../../public/services2-img/s2.png";
import shopify3 from "../../public/services2-img/s3.png";
import shopify4 from "../../public/services2-img/s4.png";
import graphic1 from "../../public/services2-img/g1.png";
import graphic2 from "../../public/services2-img/g2.png";
import graphic3 from "../../public/services2-img/g3.png";
import graphic4 from "../../public/services2-img/g4.png";
import graphic5 from "../../public/services2-img/g5.png";
import web from "../../public/services2-img/web.png";
import mobile from "../../public/services2-img/m.png";
import mobile1 from "../../public/services2-img/m1.png";
import Brand from '../app/brand';
import Request from '../app/request-quote';
import RequestForm from "./request-form";



export default function Servicetwo() {
   
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>  
      <div className="container-fluid py-0 py-md-5 pb-5 overflow-hidden"> 
        <div className="row process text-white align-items-center mb-5 justify-content-center pt-5 px-5"> 
          {/* <div className="col-md-12 pb-5">
            <h1 className="text-left">OUR SERVICES</h1>
          </div> */}
           
            <div className="ser-digital-col col-12 col-sm-6 col-md-6 pb-5" data-aos="fade-left">
              <div className="d-flex flex-wrap justify-content-start align-items-center">
                <h2 className="digital-txt mb-4 textprimary">Digital Marketing</h2>
                <p className="digital-para">We offer expert Digital Marketing services to boost your brand&apos;s online visibility and reach. Did you know? 81% of shoppers research online before buying. Let us optimize your digital strategy for success.</p>
              <a className="service_link" href="/digital-marketing"> <button className="btn btn-outline-primary m-0">Read More</button></a> 
              </div>
            </div>

            <div className="ser-digital col-12 col-sm-6 col-md-6 pb-5 justify-content-end d-flex flex-wrap"  data-aos="fade-right">
                  <img src={Service1.src} alt=""/>
            </div> 
       
        <div className="digital-row d-flex flex-wrap mb-5"  data-aos="zoom-in">
        <div className="col-6 col-md-4 p-5 remove_service_padding text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital2.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Search Engine Optimization</p>
          </div>
          <div className="col-6 col-md-4 p-5 remove_service_padding text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital1.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Media Buyer</p>
          </div>

        

          <div className="col-6 col-md-4 p-5 remove_service_padding text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital3.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Social Media Management</p>
          </div>

          <div className="col-6 col-md-4 p-5 remove_service_padding text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
          <img src={Digital5.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">YouTube Marketing</p>
          </div>

          <div className="col-6 col-md-4 p-5 remove_service_padding text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
          <img src={Digital4.src} alt=""/> 
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Online Reputation Management</p>
          </div>
          <div className="col-6 col-md-4 p-5 remove_service_padding text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
          <img src={Digital5.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Content Writing</p>
          </div>
          <div className="col-6 col-md-4 p-5 remove_service_padding text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
          <img src={Digital5.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Google ads (PPC)</p>
          </div>
          <div className="col-6 col-md-4 p-5 remove_service_padding text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
            <button className="btn btn-outline-primary m-0 ph_size_btn" onClick={toggleModal}> Request a Quote </button>
          </div>
        </div>
      </div>


        <div className="row process bg-gray text-white mb-5 align-items-center justify-content-center pt-5 px-5 pb-5">  
              <div className="ser-digital col-12 col-sm-6 col-md-6 pb-5 justify-content-start d-flex flex-wrap"  data-aos="fade-left">
                  <img src={Service2.src} alt=""/>
              </div>

              <div className="ser-digital-col col-12 col-sm-6 col-md-6 pb-5"  data-aos="fade-right">
                  <div className="d-flex flex-wrap   align-items-center">
                    <h2 className="digital-txt mb-4 textprimary">E-commerce Development</h2>
                    <p className="w-100 digital-para">Easily turn your store into a customer-centric shopping destination with our tailored e-commerce solutions. Build a fully customized online store that resonates with your audience and tap into the expanding mobile commerce market with our expert app development services.</p>
                    <a className="service_link" href="/e-commerce"><button className="btn btn-outline-primary m-0">Read More</button></a>
                  </div>
              </div> 
        
        <div className="digital-row d-flex flex-wrap"  data-aos="zoom-in">
        <div className="col-6 col-md-4 p-5 text-white digital-column remove_service_padding  justify-content-center align-items-center d-flex flex-wrap">
              <img src={shopify.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4  w-100 text-center">Shopify Development</p>
          </div>
         
          <div className="col-6 col-md-4 p-5 text-white digital-column remove_service_padding  justify-content-center align-items-center d-flex flex-wrap">
              <img src={shopify1.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4  w-100 text-center">Woo Commerce Development</p>
          </div>

          <div className="col-6 col-md-4 p-5 text-white digital-column remove_service_padding  justify-content-center align-items-center d-flex flex-wrap">
              <img src={shopify2.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4  w-100 text-center">Open cart Development</p>
          </div>

          <div className="col-6 col-md-4 p-5 text-white digital-column remove_service_padding  justify-content-center align-items-center d-flex flex-wrap">
              <img src={shopify3.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4  w-100 text-center">Magneto Development</p>
          </div> 

          <div className="col-6 col-md-4 p-5 text-white digital-column remove_service_padding  justify-content-center align-items-center d-flex flex-wrap">
              <img src={shopify4.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4  w-100 text-center">Big Commerce Development</p>
          </div>

          <div className="col-6 col-md-4 p-5 text-white digital-column remove_service_padding  justify-content-center align-items-center d-flex flex-wrap">
            <button className="btn btn-outline-primary m-0 ph_size_btn" onClick={toggleModal}> Request a Quote </button>
          </div>
        </div>
      </div>

      <div className="row process text-white align-items-center mb-5 justify-content-center pt-5 px-5">  
              <div className="ser-digital-col col-12 col-sm-6 col-md-6 pb-5"  data-aos="fade-left">
                <div className="d-flex flex-wrap justify-content-start align-items-center">
                  <h2 className="digital-txt mb-4 textprimary">Graphic Design</h2>
                  <p className="digital-para">Did you know? 90% of information transmitted to the brain is visual. Harness the power of visuals with our Graphic Design services. From captivating logos to stunning marketing materials, we craft designs that leave a lasting impression, helping your brand stand out in a crowded marketplace.</p>
                  <a className="service_link" href="/graphic"> <button className="btn btn-outline-primary m-0">Read More </button></a>
                </div>
              </div>

              <div className="ser-digital col-12 col-sm-6 col-md-6 pb-5 justify-content-end d-flex flex-wrap"  data-aos="fade-right">
                  <img src={Service3.src} alt=""/>
              </div> 
       
        <div className="digital-row d-flex flex-wrap mb-5"  data-aos="zoom-in">
          <div className="col-6 col-md-4 p-5 text-white digital-column remove_service_padding justify-content-center align-items-center d-flex flex-wrap">
              <img src={graphic1.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Branding & Identity</p>
          </div>

          <div className="col-6 col-md-4 p-5 text-white digital-column remove_service_padding justify-content-center align-items-center d-flex flex-wrap">
              <img src={graphic2.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Website & App Design</p>
          </div>

          <div className="col-6 col-md-4 p-5 text-white digital-column remove_service_padding justify-content-center align-items-center d-flex flex-wrap">
              <img src={graphic3.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Motion Graphics</p>
          </div>

          <div className="col-6 col-md-4 p-5 text-white digital-column remove_service_padding justify-content-center align-items-center d-flex flex-wrap">
              <img src={graphic4.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Social Media Design</p>
          </div>

          <div className="col-6 col-md-4 p-5 text-white digital-column remove_service_padding justify-content-center align-items-center d-flex flex-wrap">
              <img src={graphic5.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">2D & Infographic Design</p>
          </div>

          <div className="col-6 col-md-4 p-5 text-white digital-column remove_service_padding justify-content-center align-items-center d-flex flex-wrap">
            <button className="btn btn-outline-primary m-0 ph_size_btn" onClick={toggleModal}> Request a Quote </button>
          </div>
        </div>
      </div>


      <div className="row process bg-gray text-white mb-5 align-items-center justify-content-center pt-5 px-5 pb-5"   >  
              <div className="ser-digital col-12 col-sm-6 col-md-6 pb-5 justify-content-start d-flex flex-wrap">
                  <img src={web.src} alt=""/>
              </div>

              <div className="ser-digital-col col-12 col-sm-6 col-md-6 pb-5"  data-aos="fade-right">
                  <div className="d-flex flex-wrap align-items-center">
                    <h2 className="digital-txt mb-4 textprimary">Web development</h2>
                    <p className="w-100 digital-para">We offer comprehensive Web Development services. From responsive website design to seamless functionality, we build tailored solutions that elevate your online presence and drive results for your business.</p>
                    <a className="service_link" href="/web-application"><button className="btn btn-outline-primary m-0"> Read More</button></a>
                  </div>
              </div> 
        
        <div className="digital-row d-flex flex-wrap"  data-aos="zoom-in">
          <div className="col-6 col-md-4 p-5 text-white digital-column remove_service_padding justify-content-center align-items-center d-flex flex-wrap">
              <img src={graphic1.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Remix Framework</p>
          </div>

          <div className="col-6 col-md-4 p-5 text-white digital-column remove_service_padding justify-content-center align-items-center d-flex flex-wrap">
              <img src={graphic2.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Laravel Development</p>
          </div>

          <div className="col-6 col-md-4 p-5 text-white digital-column remove_service_padding justify-content-center align-items-center d-flex flex-wrap">
              <img src={graphic3.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">MEAN Stack Development</p>
          </div>

          <div className="col-6 col-md-4 p-5 text-white digital-column remove_service_padding justify-content-center align-items-center d-flex flex-wrap">
              <img src={graphic4.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">MERN Stack Development</p>
          </div>

          <div className="col-6 col-md-4 p-5 text-white digital-column remove_service_padding justify-content-center align-items-center d-flex flex-wrap">
              <img src={graphic5.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">ASP.NET Development</p>
          </div>

          <div className="col-6 col-md-4 p-5 text-white digital-column remove_service_padding justify-content-center align-items-center d-flex flex-wrap">
            <button className="btn btn-outline-primary m-0 ph_size_btn" onClick={toggleModal}> Request a Quote</button>
          </div>
        </div>
      </div>


      <div className="row process text-white mb-5 justify-content-center align-items-center pt-5 px-5 pb-5"  data-aos="fade-left">  
              <div className="ser-digital-col col-12 col-sm-6 col-md-6 pb-5"  data-aos="fade-right">
                  <div className="d-flex flex-wrap justify-content-start align-items-center">
                    <h2 className="digital-txt mb-4 textprimary">Mobile APP Development </h2>
                    <p className="  w-100 digital-para">Tap into the mobile market with our expert Mobile Application Development service. With mobile app usage accounting for 92% of total digital time spent, we craft innovative apps tailored to your needs, enhancing user engagement and expanding your reach.</p>
                    <a className="service_link" href="/mobile-application"><button className="btn btn-outline-primary m-0">Read More </button></a>
                  </div>
              </div>

              <div className="ser-digital col-12 col-sm-6 col-md-6 pb-5 justify-content-end d-flex flex-wrap">
                  <img src={Service5.src} alt=""/>
              </div> 
        
        <div className="digital-row d-flex flex-wrap"  data-aos="zoom-in">
          <div className="col-6 col-md-4 p-5 text-white digital-column remove_service_padding justify-content-center align-items-center d-flex flex-wrap">
              <img src={mobile.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Hybrid App Development</p>
          </div>

          <div className="col-6 col-md-4 p-5 text-white digital-column remove_service_padding justify-content-center align-items-center d-flex flex-wrap">
              <img src={mobile1.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Native IOS Android</p>
          </div> 

          <div className="col-6 col-md-4 p-5 text-white digital-column remove_service_padding justify-content-center align-items-center d-flex flex-wrap">
            <button className="btn btn-outline-primary m-0 ph_size_btn" onClick={toggleModal}> Request a Quote</button>
          </div>

        </div>
      </div>

          <Brand />
          <Request />
    </div> 

    {showModal && 
        <RequestForm 
          onCloseModal={toggleModal} 
        />
      }
    </>
  )
}
