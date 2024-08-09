'use client'

import React, { useState } from "react";

import Typewriter from 'typewriter-effect';
import Request from "./request-form";
// import "./gsap";


export default function HomeBanner() {
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
    

      <div className="bannerSection pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-2">
              <h2 className="sub_heading">Build your</h2>
            <Typewriter 
                options={{
                  strings: ['Web Designing', 'Web Development', 'Digital Marketing','Shopify Development'],
                  autoStart: true,
                  loop: true,
                }}
              />
              </div> 
              <h2 className="sub_heading">with flawless technology, <br /> design, and execution</h2> 
              <p className='sub_text text-white mt-4'>Let&apos;s Build something Digital together, We are Leading <br /> Innovative Partner for Start-ups and Enterprises</p>
              <div className="mt-4">
                <button onClick={toggleModal} className='b2b-btn b2b-btn-lg'> 
                
                Request a Quote </button> 
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