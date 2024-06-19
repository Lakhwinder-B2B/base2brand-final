'use client'
import React, { useState } from "react"; 
import "../../src/app/quote.css";
import Request from "./request-form";

export default function RequestQuote() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  

  return (
    <>  
    <div className="py-5 mb-5 b2b-black-bg" >
                <div className="col-md-12 text-center" >
                    <h3 className='b2b-partners-heading'>Let's Discuss Your Project, We'll Come Up<br />with the Best Solutions</h3> 
                    <p className="text-white">Ready to reach your business goals, faster? Drop us a line today.</p>
                    <div className="service-btn d-flex flex-wrap justify-content-center mt-3 w-100">
                      <button className="b2b-btn b2b-btn-lg m-0" onClick={toggleModal}>Request a Quote</button>
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