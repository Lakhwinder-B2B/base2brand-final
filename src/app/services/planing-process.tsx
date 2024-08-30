'use client'

import React, { useState } from "react";    

import planStep1 from "../../../public/services2-img/plan-step-1.svg";
import planStep2 from "../../../public/services2-img/plan-step-2.svg";
import planStep3 from "../../../public/services2-img/plan-step-3.svg";
import planStep4 from "../../../public/services2-img/plan-step-4.svg";
import planStep5 from "../../../public/services2-img/plan-step-5.svg";


export default function Servicetwo() {
   
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>  
    <div className="py-md-5 py-3">
      <div className="container m-auto"> 
            <div className="row">
                <div className="col-12">
                    <h2 className="text-white b2b-main-heading text-center text-uppercase mb-5" data-aos="fade-up">Our Planning &amp; Execution Process</h2>
                </div>
            </div>
            <div className="row row-cols-lg-5 row-cols-1 planningSteps pt-3">
                <div className="col">
                    <div className="hexWrap">
                        <div className="hexBg">
                            <div className="hexagon"></div>
                            <div className="hexagon hexagon-bottom"></div>
                            <div className="hexagon-inner"></div>
                        </div>
                        <img src={planStep1.src} alt="" />
                    </div>
                    <div className="process-content" data-aos="fade-in" data-aos-delay="500">
                        <div className="step-count"><span>01</span></div>
                        <h2 className="step-title">PLANNING</h2>
                        <p className="step-text">Define project goals, gather stakeholder input, analyze requirements, and identify constraints, risks, and dependencies.</p>
                    </div>
                </div>
                <div className="col">
                    
                    <div className="process-content" data-aos="fade-in" data-aos-delay="500">
                        <div className="step-count"><span>02</span></div>
                        <h2 className="step-title">DESIGN</h2>
                        <p className="step-text">Develop a detailed project plan, allocate resources, establish communication channels, and create a risk management strategy.</p>
                    </div>
                    <div className="hexWrap">
                        <div className="hexBg">
                            <div className="hexagon"></div>
                            <div className="hexagon hexagon-bottom"></div>
                            <div className="hexagon-inner"></div>
                        </div>
                        <img src={planStep2.src} alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="hexWrap">
                        <div className="hexBg">
                            <div className="hexagon"></div>
                            <div className="hexagon hexagon-bottom"></div>
                            <div className="hexagon-inner"></div>
                        </div>
                        <img src={planStep3.src} alt="" />
                    </div>
                    <div className="process-content" data-aos="fade-in" data-aos-delay="500">
                        <div className="step-count"><span>03</span></div>
                        <h2 className="step-title">DEVELOPMENT</h2>
                        <p className="step-text">Design architecture and UI, develop software, conduct testing, and iteratively refine the product based on feedback.</p>
                    </div>
                </div>
                <div className="col">
                <div className="process-content" data-aos="fade-in" data-aos-delay="500">
                        <div className="step-count"><span>04</span></div>
                        <h2 className="step-title">LAUNCH</h2>
                        <p className="step-text">Execute the project plan, deploy the solution, provide training, and monitor performance during implementation</p>
                    </div>
                    <div className="hexWrap">
                        <div className="hexBg">
                            <div className="hexagon"></div>
                            <div className="hexagon hexagon-bottom"></div>
                            <div className="hexagon-inner"></div>
                        </div>
                        <img src={planStep4.src} alt="" />
                    </div>
                   
                </div>
                <div className="col">
                    <div className="hexWrap">
                        <div className="hexBg">
                            <div className="hexagon"></div>
                            <div className="hexagon hexagon-bottom"></div>
                            <div className="hexagon-inner"></div>
                        </div>
                        <img src={planStep5.src} alt="" />
                    </div>
                    <div className="process-content" data-aos="fade-in" data-aos-delay="500">
                        <div className="step-count"><span>05</span></div>
                        <h2 className="step-title">MAINTENANCE</h2>
                        <p className="step-text">Conduct post-implementation review, gather feedback, establish a maintenance plan, and continuously monitor and update the system.</p>
                    </div>
                </div>
            </div>
      </div>

    </div>

    </>
  )
}
