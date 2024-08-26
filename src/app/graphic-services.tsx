'use client' 
import React, { useState } from "react";   
import Icon1 from '../../public/graphics/icon1.svg';
import Icon2 from '../../public/graphics/icon2.svg';
import Icon3 from '../../public/graphics/icon3.svg';
import Icon4 from '../../public/graphics/icon4.svg';
import Icon5 from '../../public/graphics/icon5.svg';
import Icon6 from '../../public/graphics/icon6.svg';
import Icon7 from '../../public/graphics/icon7.svg';
import Icon8 from '../../public/graphics/icon8.svg';
import Request from "./request-form";


export default function Graphicservices() {
 
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
      setTimeout(function() {
        const ModalBody = document.querySelector(".request-form");
        if(ModalBody){
          ModalBody.classList.add("transformAnim");
        }
                                 
        }, 200);
    };

  return (
    <>  
    <div className="w-100 b2b-gray-bg py-md-5 py-4 deliverableSteps"> 
       <div className="b2b-container-lg">
        <div className="row">
            <div className="col-lg-12">
                <h3 className="b2b-sub-heading">what we create</h3>
                <h2 className="b2b-heading">Deliverables</h2>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-xl-6 col-lg-6 mb-4">
                <div className="deliverable-step-outer">
                    <div className="deliverable-step">
                        <div className="deliverable-icon">
                            <div className="deliverable-icon-bg">
                                <img src={Icon1.src} alt="" />
                            </div>
                        </div>
                        <div className="deliverable-content">
                            <h2 className="b2b-sub-heading">App Design</h2>
                            <p className="b2b-text">User-friendly interfaces, intuitive navigation, engaging visuals, responsive layouts, seamless interactions.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-4">
                <div className="deliverable-step-outer">
                    <div className="deliverable-step">
                        <div className="deliverable-icon">
                            <div className="deliverable-icon-bg">
                                <img src={Icon2.src} alt="" />
                            </div>
                        </div>
                        <div className="deliverable-content">
                            <h2 className="b2b-sub-heading">Websites</h2>
                            <p className="b2b-text">Responsive layouts, captivating visuals, easy navigation, clear messaging, optimized performance.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-4">
                <div className="deliverable-step-outer">
                    <div className="deliverable-step">
                        <div className="deliverable-icon">
                            <div className="deliverable-icon-bg">
                                <img src={Icon3.src} alt="" />
                            </div>
                        </div>
                        <div className="deliverable-content">
                            <h2 className="b2b-sub-heading">Design Systems</h2>
                            <p className="b2b-text">Consistent design elements, modular components, reusable patterns, scalable frameworks, streamlined workflows.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-4">
                <div className="deliverable-step-outer">
                    <div className="deliverable-step">
                        <div className="deliverable-icon">
                            <div className="deliverable-icon-bg">
                                <img src={Icon4.src} alt="" />
                            </div>
                        </div>
                        <div className="deliverable-content">
                            <h2 className="b2b-sub-heading">UI Kits</h2>
                            <p className="b2b-text">Comprehensive design elements, customizable components, consistent styles, efficient resource for designers.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-4">
                <div className="deliverable-step-outer">
                    <div className="deliverable-step">
                        <div className="deliverable-icon">
                            <div className="deliverable-icon-bg">
                                <img src={Icon5.src} alt="" />
                            </div>
                        </div>
                        <div className="deliverable-content">
                            <h2 className="b2b-sub-heading">Branding</h2>
                            <p className="b2b-text">Memorable logos, cohesive visual identity, brand guidelines, impactful messaging, consistent across platforms</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-4">
                <div className="deliverable-step-outer">
                    <div className="deliverable-step">
                        <div className="deliverable-icon">
                            <div className="deliverable-icon-bg">
                                <img src={Icon6.src} alt="" />
                            </div>
                        </div>
                        <div className="deliverable-content">
                            <h2 className="b2b-sub-heading">Prototypes</h2>
                            <p className="b2b-text">Interactive mockups, user flows, clickable prototypes, usability testing, effective communication of design concepts.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-4">
                <div className="deliverable-step-outer">
                    <div className="deliverable-step">
                        <div className="deliverable-icon">
                            <div className="deliverable-icon-bg">
                                <img src={Icon7.src} alt="" />
                            </div>
                        </div>
                        <div className="deliverable-content">
                            <h2 className="b2b-sub-heading">Illustration</h2>
                            <p className="b2b-text">Custom illustrations, visual storytelling, brand personality, enhancing user experience, conveying complex ideas.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-4">
                <div className="deliverable-step-outer">
                    <div className="deliverable-step">
                        <div className="deliverable-icon">
                            <div className="deliverable-icon-bg">
                                <img src={Icon8.src} alt="" />
                            </div>
                        </div>
                        <div className="deliverable-content">
                            <h2 className="b2b-sub-heading">Animation</h2>
                            <p className="b2b-text">Engaging motion graphics, enhancing user interactions, storytelling, adding depth to designs, capturing attention.</p>
                        </div>
                    </div>
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