'use client' 
import React, { useState } from "react";   
import Graphicservicewebsite from '../../public/graphic-service-img/website.png';
import Graphicservicemobile from '../../public/graphic-service-img/mobile.png';
import Graphicservicemedia from '../../public/graphic-service-img/media.png';
import Graphicservicebranding from '../../public/graphic-service-img/branding.png';
import AI from '../../public/graphic-service-img/ai.png';
import Request from "./request-form";


export default function Graphicservices() {
 
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };

  return (
    <>  
    <div className="p-4 graphic-services"> 
        {/* <div className="graphic-ser-head text-white mb-5 text-center" data-aos="fade-up">
            <h1  >Our Services</h1>
            <p  >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy tex</p>
        </div> */}
            <div className="inner-create row text-white align-items-center justify-content-around">
                <div className="row align-items-center p-0">
                    <div className="col-md-6 mb-5 mb-md-0">
                        <div className="inner-col">
                            <img src={Graphicservicewebsite.src} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-5 mb-md-0">
                        <div className="inner-col">
                            <h1 className="web-head">Website & App Design</h1>
                            <p className='mb-5'>Our Website & App Design service creates easy-to-use and attractive digital platforms. Design is crucial - it&apos;s what people notice first! We start from scratch and make sure your website or app looks great and works well. We&apos;ll create something that really stands out and keeps people coming back.</p>
                           <button className="btn btn-outline-primary m-0" onClick={toggleModal}> Request a Quote </button>
                      
                        </div>
                    </div>

                    <div className="col-md-6 mb-5 mb-md-0">
                        <div className="inner-col">
                            <h1 className="web-head">Motion Graphics</h1>
                            <p className='mb-5'>Our motion graphics service brings your ideas to life with moving visuals and animations. Whether it&apos;s for videos, presentations, or social media, we add dynamic elements to grab attention and convey messages effectively. Let us create eye-catching motion graphics that make your content shine and engage your audience.</p>
                           <button className="btn btn-outline-primary m-0" onClick={toggleModal}> Request a Quote </button>

                        </div>
                    </div>
                    <div className="col-md-6 mb-5 mb-md-0" >
                        <div className="inner-col">
                            <img src={Graphicservicemobile.src} alt="" />
                        </div>
                    </div>

                    <div className="col-md-6 mb-5 mb-md-0">
                        <div className="inner-col">
                            <img src={Graphicservicemedia.src} className='w-100' alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-5 mb-md-0" >
                    <div className="inner-col">
                        <h1 className="web-head">Social Media Design</h1>
                        <p className='mb-5'> Make your social media business accounts pop with our graphic design service. Did you know posts with pictures get way more likes and comments? We&apos;ll create cool images just for you, so your posts look awesome and people want to follow you. Let&apos;s make your social media accounts shine!</p>
                        <button className="btn btn-outline-primary m-0" onClick={toggleModal}> Request a Quote </button>

                    </div>
                    </div>
                 
                   

                    <div className="col-md-6 mb-5 mb-md-0">
                        <div className="inner-col">
                            <h1 className="web-head">Branding & Identity</h1>
                            <p className='mb-5'>Our branding and identity service is all about making your business stand out. We&apos;ll create a unique look and feel that represents who you are. From logos to colors and fonts, we&apos;ll design everything you need to make a lasting impression. Let us help you build a strong brand identity that sets you apart from the competition.</p>
                           <button className="btn btn-outline-primary m-0" onClick={toggleModal}> Request a Quote </button>

                        </div>
                    </div>
                    <div className="col-md-6 mb-5 mb-md-0"  >
                        <div className="inner-col">
                            <img src={Graphicservicebranding.src} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-5 mb-md-0"  >
                        <div className="inner-col">
                            <img src={AI.src} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-5 mb-md-0">
                        <div className="inner-col">
                            <h1 className="web-head">2D & Infographics Design</h1>
                            <p className='mb-5'>Our 2D & Infographics Design service transforms complex information into visually engaging graphics. Whether it&apos;s for presentations, reports, or marketing materials, we&apos;ll create clear and compelling visuals that captivate your audience. Let us simplify your message and make it easy to understand with our creative 2D designs and infographics.</p>
                           <button className="btn btn-outline-primary m-0" onClick={toggleModal}> Request a Quote </button>

                        </div>
                    </div>
                  
                </div>


                       
            </div>
    </div>

    {showModal && 
        <Request 
          onCloseModal={toggleModal} 
        />
      }
</>
)
}