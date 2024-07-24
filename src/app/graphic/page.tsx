"use client";

import  React  from "react";
// import { useEffect } from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Creative from "../creative";
import Graphicservices from "../graphic-services";
import UiUx from "../ui-ux";
import Faq from "../graphic/faq";   
import '../graphic/graphic.css'

import 'aos/dist/aos.css';

import Bg from '../../../public/services2-img/service-mask.svg';
import nextGeneration from '../../../public/graphics/representations-ui-ux.png';
import radialRight from '../../../public/img/radial-right.svg'; 
export default function Graphic() {
//   useEffect(() => {
//     AOS.init({
//          duration: 800,
//          once: false,
//        })
//  }, [])


  return (
    <>
      <Header />
      <div className="b2b-black-bg">
        <div className="service-banner full_height p-3 p-md-5" style={{backgroundImage: `url(${Bg.src})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="container mx-auto">
            <div className="row d-flex flex-wrap align-items-center justify-content-center m-auto"> 
              <div className="col-12 col-sm-12 col-md-9 d-flex flex-wrap align-items-center justify-content-center pt-5 pb-5" data-aos="fade-up" >
                 <h1 className="text-center mb-3 b2b-sub-heading-bold text-uppercase">graphic &amp; Ui/Ux designing</h1>
                 <p className="text-white text-center col-12 col-sm-12 col-md-12 m-auto">
                 Let us improve your digital presence and fascinate your audience with captivating and visually stunning designs with our UI/UX and graphic design services</p>
                 <div className="service-btn d-flex flex-wrap justify-content-center mt-3 w-100">
                  <button className="b2b-btn b2b-btn-lg m-0" >Request a Quote</button>
                 </div>
              </div>
            </div>
          </div> 
        </div>
        <div className="py-5">
          <div className="container">
              <div className="row align-items-center"> 
                  <div className="col-md-5">
                    <img src={nextGeneration.src} alt="" />
                  </div>
                  <div className="col-md-7 text-white"> 
                      <h1 className="b2b-main-heading mb-3">How UI/UX Affect Your App<br />or Website&apos;s Performance?</h1>
                      <p className="b2b-text-sm">Studies show that 86% of visitors leave a website or app within two seconds if it does not have good visuals and graphics. So the performance of your online platform largely depends on how it presents itself to visitors. No matter how skillfully and sincerely your content describes your services or products, if it lacks quality graphics and the product images are pixelated and unenhanced, it is a waste of resources.</p>
                      <button className="b2b-btn b2b-btn-sm m-0" >Request a Quote</button>
                  </div>
                  
              </div>
          </div>
        </div>
        
        <Creative/>
        <Graphicservices/>
        <UiUx/>
        <div className="b2b-black-bg pt-5 pb-3" style={{ backgroundImage: `url(${radialRight.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right'}}>
          <Faq />
            <div className='container mb-5 pt-5'>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2 className='b2b-main-heading text-center mb-4 text-uppercase'>Looking For Other Services</h2>
                  <p className="text-white text-center b2b-text mb-5">We&apos;re not just about mobile app development; we provide a comprehensive suite of IT solutions. From web development to digital marketing, our services encompass everything your business needs to thrive in the digital landscape</p>
                </div>
                <div className="col-lg-10">
                  <div className="row justify-content-center">
                      <div className="col-lg-4 mb-3">
                        <a className="menuLink" href="/">
                          <div className="menuInner b2b-pink-bg">
                              <h3 className='b2b-title-text text-black'>Web Development</h3>
                              <div className='d-flex align-items-center justify-content-between'>
                                <p className='menuText mb-0'>Dynamic Website for Mobile Devices</p>
                                <span className='menuIcon pl-3'></span>
                              </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 mb-3">
                        <a className="menuLink" href="/app-development">
                          <div className="menuInner b2b-lightBlue-bg">
                              <h3 className='b2b-title-text text-black'>Mobile App Development</h3>
                              <div className='d-flex align-items-center justify-content-between'>
                                <p className='menuText mb-0'>Sales Friendly App for Your Business</p>
                                <span className='menuIcon pl-3'></span>
                              </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 mb-3">
                        <a className="menuLink" href="/digital-marketing">
                          <div className="menuInner b2b-pink-bg">
                              <h3 className='b2b-title-text text-black'>Digital Marketing</h3>
                              <div className='d-flex align-items-center justify-content-between'>
                                <p className='menuText mb-0'>Marketing Strategies that Grow Sales</p>
                                <span className='menuIcon pl-3'></span>
                              </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 mb-3">
                        <a className="menuLink" href="/e-commerce">
                          <div className="menuInner b2b-lightBlue-bg">
                              <h3 className='b2b-title-text text-black'>Ecommerce</h3>
                              <div className='d-flex align-items-center justify-content-between'>
                                <p className='menuText mb-0'>Increase online sales seamlessly</p>
                                <span className='menuIcon pl-3'></span>
                              </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 mb-3">
                        <a className="menuLink" href="/">
                          <div className="menuInner b2b-pink-bg">
                              <h3 className='b2b-title-text text-black'>Shopify Development</h3>
                              <div className='d-flex align-items-center justify-content-between'>
                                <p className='menuText mb-0'>Bespoke Brand Growth Strategies</p>
                                <span className='menuIcon pl-3'></span>
                              </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <Footer />
       
      </div>
    </>
  );
}
