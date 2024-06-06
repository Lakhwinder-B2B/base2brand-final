'use client'
import { useEffect } from 'react';

import React from "react";     


export default function FAQ() {
 
  

  return (
    <>  
        <div className="pl-4 pr-4 pb-0 bg_patner"> 
    <div className="container-fluid pb-5 position-relative">
      <div className="row">
        <div className="col-md-12 text-center mt-5">
            <h2 className='text-white'>Answers To Some Questions You May Have</h2>
        </div>
        <div className="col-md-6"  >
        <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item"  >
    <h2 className="accordion-header fs-4">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      How long does it take to complete a design project?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">The time frame varies depending on the project&apos;s complexity. Generally, we provide estimated timelines during the consultation phase and strive to deliver within agreed-upon deadlines.</div>
    </div>
  </div>
  <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Do you offer revisions if we&apos;re not satisfied with the initial designs? 
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> Yes, we value client satisfaction. We provide a certain number of revisions depending on the package chosen to ensure the final designs meet your expectations.</div>
    </div>
  </div>
  <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      What types of files will we receive upon project completion?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">You&apos;ll receive high-resolution files in various formats suitable for both print and digital use, ensuring versatility and compatibility with different platforms and applications.
    </div>
    </div>
  </div> 
  <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNew" aria-expanded="false" aria-controls="flush-collapseNew">
      Can you work with our existing brand guidelines?
      </button>
    </h2>
    <div id="flush-collapseNew" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Absolutely! We&apos;re adept at adhering to established brand guidelines while incorporating fresh elements to maintain consistency and enhance brand identity across all designs.
    </div>
    </div>
  </div> 
  <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNew1" aria-expanded="false" aria-controls="flush-collapseNew1">
      How do you ensure the confidentiality of our project?
      </button>
    </h2>
    <div id="flush-collapseNew1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> We prioritize client confidentiality and sign non-disclosure agreements upon request. Your project details and sensitive information are kept secure and confidential throughout the collaboration.
    </div>
    </div>
  </div> 
</div>
        </div>
        <div className="col-md-6"  >
        <div className="accordion accordion-flush" id="accordion">
        <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      Do you offer rush services for urgent projects?
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordion">
      <div className="accordion-body">Yes, we understand the importance of tight deadlines. Depending on our workload, we may offer rush services for an additional fee to expedite project delivery.</div>
    </div>
  </div> 

  <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      Can you assist with printing and production?
      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordion">
      <div className="accordion-body">Yes, we can recommend trusted printing and production partners or coordinate the process on your behalf. We ensure that the final printed materials meet our high standards of quality.</div>
    </div>
  </div>

  <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
      What payment methods do you accept?
      </button>
    </h2>
    <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordion">
      <div className="accordion-body">We accept various payment methods, including bank transfers, credit cards, and online payment platforms. Our invoicing system provides detailed breakdowns of services rendered for transparency.</div>
    </div>
  </div>
  <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNew4" aria-expanded="false" aria-controls="flush-collapseNew4">
      Can you provide ongoing design support for our business?

      </button>
    </h2>
    <div id="flush-collapseNew4" className="accordion-collapse collapse" data-bs-parent="#accordion">
      <div className="accordion-body">Yes, we offer retainer packages for clients seeking ongoing design support. These packages provide flexibility and priority access to our services at discounted rates.</div>
    </div>
  </div>

  <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNew4" aria-expanded="false" aria-controls="flush-collapseNew4">
      How do we get started with a design project?
      </button>
    </h2>
    <div id="flush-collapseNew4" className="accordion-collapse collapse" data-bs-parent="#accordion">
      <div className="accordion-body">Simply reach out to us via email, phone, or our website contact form to discuss your project requirements. We&apos;ll schedule a consultation to understand your needs and provide a tailored proposal.</div>
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