'use client'
import { useEffect } from 'react';

import React from "react";     


export default function FAQ() {
 
  

  return (
    <>  
        <div className="container">
            <div className="row">
              <div className="col-md-12">
                  <h2 className='text-white b2b-main-heading text-center'>Frequently Asked Questions</h2>
              </div>
              <div className="col-md-8 m-auto mt-5">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item"  >
                    <h2 className="accordion-header fs-4">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      What is the difference between UI and UX design?
                      </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>App development refers to the process of creating software applications designed to run on mobile devices like smartphones and tablets.</p></div>
                    </div>
                  </div>
                  <div className="accordion-item"  >
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Why is UI/UX design important for my business?
                      </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"> <p>We specialize in developing apps for both iOS and Android platforms, ensuring compatibility with a wide range of devices.</p></div>
                    </div>
                  </div>
                  <div className="accordion-item"  >
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      What tools do you use for UI/UX design?
                      </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>The timeline for app development varies based on factors such as complexity, features, and client requirements. We provide detailed timelines during the planning phase.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  >
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNew" aria-expanded="false" aria-controls="flush-collapseNew">
                      What is the typical process for UI/UX design projects?
                      </button>
                    </h2>
                    <div id="flush-collapseNew" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>We utilize a variety of technologies depending on project requirements. This may include programming languages like Swift, Java, Kotlin, and frameworks like React Native or Flutter.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  >
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNew1" aria-expanded="false" aria-controls="flush-collapseNew1">
                      How do you ensure consistency across different devices and platforms?
                      </button>
                    </h2>
                    <div id="flush-collapseNew1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>Yes, we offer ongoing maintenance and support services to ensure your app remains up-to-date, secure, and optimized for performance.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  >
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNew1" aria-expanded="false" aria-controls="flush-collapseNew1">
                      Can you work with our existing brand guidelines?
                      </button>
                    </h2>
                    <div id="flush-collapseNew1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>Absolutely, we offer comprehensive app design services to create visually appealing, intuitive user interfaces that enhance user experience.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  >
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNew1" aria-expanded="false" aria-controls="flush-collapseNew1">
                      How do you handle feedback and revisions during the design process?
                      </button>
                    </h2>
                    <div id="flush-collapseNew1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>Yes, we provide assistance with app store submission, ensuring that your app meets all guidelines and requirements for a successful launch.</p>
                    </div>
                    </div>
                  </div> 
                  
                </div>
              </div>
       
            </div> 
        </div>
    </>
)
}