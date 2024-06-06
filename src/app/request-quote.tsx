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
    <div className="p-5 quote"> 
            <div className="quote-box text-white text-center"  >
                <h1 className='mb-3'>Let&apos;s get to Work</h1>
                <p className='mb-4'>Ready to reach your business goals, faster? Drop us a line today.</p>
                <button type="button"  onClick={toggleModal} className="btn text-white radius outline border-white py-2 px-5">Request a Quote</button>
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