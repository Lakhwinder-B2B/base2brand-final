'use client'
import { useEffect } from 'react';

import React from "react";     


export default function FAQ() {
 
  

  return (
    <>  
        <div className="container">
            <div className="row">
              <div className="col-md-12">
                  <h2 className='text-white b2b-main-heading text-center'>Got Specific Questions? Get Clear Answers</h2>
              </div>
              <div className="col-md-8 m-auto mt-5">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item"  >
                    <h2 className="accordion-header fs-4">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      What is app development?
                      </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>App development refers to the process of creating software applications designed to run on mobile devices like smartphones and tablets.</p></div>
                    </div>
                  </div>
                  <div className="accordion-item"  >
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      What platforms do you develop apps for?
                      </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"> <p>We specialize in developing apps for both iOS and Android platforms, ensuring compatibility with a wide range of devices.</p></div>
                    </div>
                  </div>
                  <div className="accordion-item"  >
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      How long does it take to develop an app?
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
                      What technologies do you use for app development?
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
                      Do you provide ongoing maintenance and support after app launch?
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
                      Can you help with app design?
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
                      Do you assist with app store submission?
                      </button>
                    </h2>
                    <div id="flush-collapseNew1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>Yes, we provide assistance with app store submission, ensuring that your app meets all guidelines and requirements for a successful launch.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  >
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNew1" aria-expanded="false" aria-controls="flush-collapseNew1">
                      How do you ensure the security of the apps you develop?
                      </button>
                    </h2>
                    <div id="flush-collapseNew1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>Security is a top priority for us. We implement industry best practices and security measures throughout the development process to safeguard your app and user data.</p>
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