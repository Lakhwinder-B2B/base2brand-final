'use client'

import React, { useState } from "react";   

// import { useEffect } from "react";
import Header from '../../../component/header';
import Footer from '../../../component/footer';
import Feedback from '../feedback';
import BigCommerce from './bigCommerce';  
import OurProject from '../shopify/project-slick';  
import AppCompany from '../app-development/dev-company';  
import Angagement from '../app-development/engagement-model';  
import Faq from '../faq';  
import Main from '../../../public/app/app.png';   
import Icon from '../../../public/app/icon.png';    
import Agency from '../../../public/big/agency.png';   
import AgencyIcon from '../../../public/big/bigIcon.png';   
import App from '../../../public/app/shopify.png';   
import Typewriter from 'typewriter-effect';
import '../big-commerce/commerce.css';
import '../app-development/app.css';
import Request from "../request-form";


export default function BigCommence() { 
  const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };
  return (
    <>
    
      <Header />
      <div className="bg-black">
        <div className="container-fluid mx-auto p-5"> 
          <div className="row align-items-center">
            <div className="col-md-7 Type_Writer text-white"> 
                <h1 className="big">Shopline <img src={Icon.src} className="icon" alt="" /> </h1>
            <Typewriter 
                options={{
                  strings: ['The Development'],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p className="mt-4 mb-5 desc_big">As a leading Shopline development company, we specialize in providing comprehensive Shopline development services.</p>
              <button className="btn btn-outline-primary m-0" onClick={toggleModal}> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>
                </div>      
                    <div className="col-md-5">

                        <img src={Main.src} className="w-100" alt="" />
                    </div>
            </div>
          </div>
                <div className="bg_gray_commerce">
                    <div className="p-4">
                        <div className="row align-items-center"> 
                            <div className="col-md-12 text-white text-center"> 
                                <h1 className="Agency_Heading ">Bring Revolution in eCommerce with Shopline Development</h1>
                                <p className="mt-4 desc_big fs-6">When entering the world of eCommerce or seeking performance enhancement, a reliable tool becomes essential. Our team of top-notch Shopline developers excels at integrating trending features into your platform, eliminating the need for coding. We deliver quality solutions, ensuring a seamless customer journey. Moreover, we take charge of maintaining store performance and staying up-to-date with industry demands.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <BigCommerce /> 
                <Angagement />
                <div className="bg_light_green pb-5"> 
                <OurProject />
                <AppCompany />
                <div className="text-center text-white mt-5">
                  <h1 className="mb-5">Shopline Project Completion Process</h1>
                <img className="app pb-5 m-auto" src={App.src} alt="" />

                </div>
                </div> 
               <Feedback /> 
               <Faq />
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
