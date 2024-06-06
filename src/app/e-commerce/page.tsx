"use client";

import React, { useState } from "react"; 
import Header from "../../../component/header";
import Appdevelopment from "../mobile-application/app-development";
import DesignWork from "../digital-marketing/design-work";
import Technologystack from "../mobile-application/technologystack";
import Feedback from "./E-feedback"; 
import Faq from "./E-faq";
import Quote from "../request-quote"; 
import Footer from "../../../component/footer";
import banner from '../../../public/ecommerce/banner.png';   
import ecommerce from '../../../public/ecommerce/e.png';   
import ecommerce1 from '../../../public/ecommerce/e2.png';   
import ecommerce2 from '../../../public/ecommerce/e3.png';   
import ecommerce3 from '../../../public/ecommerce/e4.png';  
import Steps from "../../../public/net/lines.png"; 
import Typewriter from 'typewriter-effect';
import "../mobile-application/mobile.css";
import "../e-commerce/commerce.css";
import Request from "../request-form";


export default function Ecommerce() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Header />
      <div className="bgblack pt-0 pb-5">
        <div className="ph_remove_banner  pt-5" style={{
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
                  strings: ['E-Commerce Web & Apps Development'],
                  autoStart: true,
                  loop: true,
                }}
              /> 
            <p className="mb-5 mt-4 army">Research indicates that 9 out of 10 individuals prefer using mobile apps over browsing websites for online shopping. <br /> Our mobile app development company has leveraged this trend by creating highly functional and personalized e-commerce apps. <br /> With our round-the-clock dedication, we&apos;ve made purchasing goods more convenient and accessible than ever before.</p>
            <button className="btn btn-outline-primary" onClick={toggleModal}> 
            {/* <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i>  */}
            Request a Quote </button>
         </div>  
        </div>
        </div>  
              <div className="commerce mb-5 pb-5">
                <div className="container">
                  <div className="row text-white align-items-center">
                    {/* <div className="col-md-12 pb-4 text-center">
                      <h1 className="text-white">e-Commerce Development</h1>
                    </div> */}
                    <div className="col-md-6">
                      <img src={ecommerce.src} className="ecommerce_img" alt="" />
                    </div>
                    <div className="col-md-6 ps-4 pe-4">
                      <h2 className="textprimary mb-4">Shopify Theme and App Development </h2>
                      <p className="mb-1"> We specialize in Shopify theme and app development, providing tailored solutions to enhance your e-commerce store. Our team of experts can customize Shopify themes to match your brand identity and optimize user experience. </p>
                      <p className="mb-5">Additionally, we create bespoke Shopify apps to add advanced functionalities and streamline your business operations. Let us help you elevate your online presence and drive sales growth.</p>
                      <button className="btn btn-outline-primary m-0" onClick={toggleModal}>  
                       Request a Quote   
                       <i className="fa fa-hand-o-right fs-4 hide_ic ml-3" aria-hidden="true"></i>
                       </button>
                    </div>


                  
                    <div className="col-md-6 mt-5 ps-4 pe-4">
                      <h2 className="textprimary mb-4">Woo Commence Theme and App Development  </h2>
                      <p className="mb-5"> WooCommerce theme and app development entail crafting visually appealing and functional online stores and mobile applications using the WooCommerce platform. We specialize in creating custom themes and apps tailored to your brand&apos;s needs, ensuring seamless user experiences and robust e-commerce functionality. Let us transform your vision into reality, elevating your online presence and driving sales.</p>
                      <button className="btn btn-outline-primary m-0" onClick={toggleModal}>  
                       Request a Quote   
                       <i className="fa fa-hand-o-right fs-4 hide_ic ml-3" aria-hidden="true"></i>
                       </button>
                    </div>
                    <div className="col-md-6 mt-5">
                      <img src={ecommerce1.src} className="ecommerce_img" alt="" />
                    </div>

                    <div className="col-md-6 mt-5">
                      <img src={ecommerce2.src} className="ecommerce_img" alt="" />
                    </div>
                    <div className="col-md-6 mt-5 ps-4 pe-4">
                      <h2 className="textprimary mb-4">Shopline Theme and App Development   </h2>
                      <p className="mb-1"> Shopline theme and app development involves creating engaging and efficient e-commerce websites and mobile applications using the Shopline platform. Our team excels in crafting bespoke themes and apps that align with your brand identity and business goals. </p>
                        <p className="mb-5">With a focus on user experience and functionality, we empower businesses to thrive in the digital marketplace. Let us tailor a solution that amplifies your online presence and maximizes sales potential.</p>
                      <button className="btn btn-outline-primary m-0" onClick={toggleModal}>  
                       Request a Quote   
                       <i className="fa fa-hand-o-right fs-4 hide_ic ml-3" aria-hidden="true"></i>
                       </button>
                    </div>

                  
                    <div className="col-md-6 mt-5 ps-4 pe-4">
                      <h2 className="textprimary mb-4">Big Commence Theme and App Development  </h2>
                      <p className="mb-5"> BigCommerce theme and app development services encompass designing and building captivating online stores and mobile applications using the BigCommerce platform. Our expertise lies in creating customized themes and apps that reflect your brand&apos;s essence while optimizing for user experience and sales conversion. Let us propel your e-commerce venture forward by delivering tailored solutions that enhance your online presence and drive growth.</p>
                      <button className="btn btn-outline-primary m-0" onClick={toggleModal}>  
                       Request a Quote   
                       <i className="fa fa-hand-o-right fs-4 hide_ic ml-3" aria-hidden="true"></i>
                       </button>
                    </div>
                    <div className="col-md-6 mt-5">
                      <img src={ecommerce3.src} className="ecommerce_img" alt="" />
                    </div>
                  </div>
                </div>
              </div>
                <DesignWork />

                <div className="text-center text-white pt-5 bgLight">
        <h1 className="mb-5">5 Steps of Ecommerce Development Project Completion</h1>
        <img src={Steps.src} className="w-75 m-auto" alt="" />
    </div>

        <Technologystack />
        <Feedback/>
        <Faq/>
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

