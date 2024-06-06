"use client";

import React from "react";
import Header from "../../../component/header";
import Appdevelopment from "../mobile-application/app-development";
import DesignWork from "../digital-marketing/design-work";
import Technologystack from "../mobile-application/technologystack";
import Feedback from "../feedback"; 
import Faq from "../faq";
import Quote from "../request-quote"; 
import Footer from "../../../component/footer";
import banner from '../../../public/ecommerce/web.png';   
import ecommerce from '../../../public/ecommerce/w1.png';   
import ecommerce1 from '../../../public/ecommerce/w2.png';   
import ecommerce2 from '../../../public/ecommerce/w3.png';   
import ecommerce3 from '../../../public/ecommerce/w4.png';  
import Steps from "../../../public/ecommerce/steps.png"; 
import Typewriter from 'typewriter-effect';
import "../mobile-application/mobile.css";
import "../e-commerce/commerce.css";
import OurProject from '../shopify/project-slick';  

export default function WebApplication() {
 
  return (
    <>
      <Header />
      <div className="bgblack pt-0 pb-5">
        <div className=" ph_remove_banner pt-5" style={{
      backgroundImage: `url(${banner.src})`,
      width: '100%',
      height: '700px',  
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat', 
    }}>
         <div className="row w-100 pl-5"> 
         <div className="col-md-12 text-center text-white mt-5">
         <Typewriter 
                options={{
                  strings: ['Web Application'],
                  autoStart: true,
                  loop: true,
                }}
              /> 
            <p className="mb-5 mt-4 army">Our army of developers and designers have demonstrated capabilities in iOS app development. <br /> Our creations are helping iPad and iPhone users with apps that automate every kind of job <br /> related to business and personnel lifestyle.</p>
            <button className="btn btn-outline-primary"> 
            {/* <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i>  */}
            Request a Quote </button>
         </div>  
        </div>
        </div>  
              <div className="commerce mb-5 pb-5">
                <div className="container">
                  <div className="row text-white align-items-center">
                    <div className="col-md-12 pb-4 text-center">
                      <h1 className="text-white">Web Development</h1>
                    </div>
                    <div className="col-md-6 mt-5 mb-5">
                      <img src={ecommerce.src} className="ecommerce_img" alt="" />
                      <div className="web-app mt-3">
                        <h2 className="textprimary mb-3">ASP.NET Development</h2>
                        <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b</p>
                        <button className="btn btn-outline-primary m-0"> 
                        Request a Quote   <i className="fa fa-hand-o-right fs-4 hide_ic ml-3" aria-hidden="true"></i> 
                        </button> 
                      </div>
                    </div>
                     

 
                    <div className="col-md-6 mt-5 mb-5">
                      <img src={ecommerce1.src} className="ecommerce_img" alt="" />
                      <div className="web-app mt-3">
                        <h2 className="textprimary mb-3">PHP Development</h2>
                        <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b</p>
                        <button className="btn btn-outline-primary m-0"> 
                        Request a Quote   <i className="fa fa-hand-o-right fs-4 hide_ic ml-3" aria-hidden="true"></i> 
                        </button> 
                      </div>
                    </div>

                    <div className="col-md-6 mt-5 mb-5">
                      <img src={ecommerce2.src} className="ecommerce_img" alt="" />
                      <div className="web-app mt-3">
                        <h2 className="textprimary mb-3">Rich Internet Applications</h2>
                        <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b</p>
                        <button className="btn btn-outline-primary m-0"> 
                        Request a Quote   <i className="fa fa-hand-o-right fs-4 hide_ic ml-3" aria-hidden="true"></i> 
                        </button> 
                      </div>
                    </div>
                    <div className="col-md-6 mt-5 mb-5">
                      <img src={ecommerce3.src} className="ecommerce_img" alt="" />
                      <div className="web-app mt-3">
                        <h2 className="textprimary mb-3">Customised Solutions</h2>
                        <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b</p>
                        <button className="btn btn-outline-primary m-0"> 
                        Request a Quote   <i className="fa fa-hand-o-right fs-4 hide_ic ml-3" aria-hidden="true"></i> 
                        </button> 
                      </div>
                    </div>

                  
                     
                  </div>
                </div>
              </div>
                <DesignWork />

                <div className="text-center text-white pt-5 bgLight">
        <h1 className="mb-5">5 Steps Of web Development</h1>
        <img src={Steps.src} className="w-75 m-auto" alt="" />
    </div>
    <OurProject />

        <Technologystack />
        <Feedback/>
        <Faq/>
        <Quote/>
      
        <Footer />
       
      </div>
    </>
  );
}

