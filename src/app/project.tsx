'use client'
import { useEffect } from 'react'; 
import React ,{useState } from "react"; 
import './project.css';
import CountUp from 'react-countup'; 
 
import Slide from './slide/page'
import Slide1 from './slide/slide2'
import Slide2 from './slide/slide3'
import Slide3 from './slide/slide4'
import Slide4 from './slide/slide5'
import Request from "./request-form";



import processIcon1 from '../../public/img/process-icon-1.svg';   
import processIcon2 from '../../public/img/process-icon-2.svg';   
import processIcon3 from '../../public/img/process-icon-3.svg';   
import processIcon4 from '../../public/img/process-icon-4.svg';   
import processIcon5 from '../../public/img/process-icon-5.svg';   
import processIcon6 from '../../public/img/process-icon-6.svg'; 

import processIcon1Anim from '../../public/json/working-Process/process-icon-1-anim.gif';  
import processIcon2Anim from '../../public/json/working-Process/process-icon-2-anim.gif';  
import processIcon3Anim from '../../public/json/working-Process/process-icon-3-anim.gif';  
import processIcon4Anim from '../../public/json/working-Process/process-icon-4-anim.gif';  
import processIcon5Anim from '../../public/json/working-Process/process-icon-5-anim.gif';  
import processIcon6Anim from '../../public/json/working-Process/process-icon-6-anim.gif';   

export default function home() {
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
 

    <div className="">
      <Slide />

    </div>
    <div className='radialGradient'>
      <div className='b2b-container-lg'>
          <div className='progress-column'>
              
              <div className='row'>
                  <div className='col-lg-6 col-md-6 col-sm-12 header-columns p-3 m-auto'>
                    <h2 className='text-center b2b-sub-heading-bold text-uppercase'>working Process</h2>
                    <p className='b2b-text text-center '>How we work for our customer</p>
                  </div>
              </div>
          
          
              <div className='progress-count d-flex flex-wrap justify-content-between b2b-workProcess'>
                <div className="count-col">
                  <div className='d-flex justify-content-between b2b-workProcess-wrap'>
                    
                      <div className=''>
                        <div className='img-wrap'>
                          <img src={processIcon1.src} className="icon" />
                          <div className='animated-icon-wrap'>
                            <img src={processIcon1Anim.src} className="animated-icon" />
                          </div>
                          
                        </div>
                        <p className='text-white text-center'>Research</p>
                      </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex justify-content-between  b2b-workProcess-wrap'>
                      
                      <div>
                        <div className='img-wrap'>
                          <img src={processIcon2.src} />
                        </div>
                        <p className='text-white text-center'>Planning</p>
                      </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex justify-content-between  b2b-workProcess-wrap'>
                      
                      <div>
                        <div className='img-wrap'>
                          <img src={processIcon3.src} />
                        </div>
                        <p className='text-white text-center'>Design</p>
                      </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex justify-content-between b2b-workProcess-wrap'>
                    
                      <div>
                        <div className='img-wrap'>
                          <img src={processIcon4.src} />
                        </div>
                        <p className='text-white text-center'>Development</p>
                      </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex justify-content-between b2b-workProcess-wrap'>
                    
                      <div>
                        <div className='img-wrap'>
                          <img src={processIcon5.src} />
                        </div>
                        <p className='text-white text-center'>Testing</p>
                      </div>
                  </div>
                </div>
                <div className="count-col">
                  <div className='d-flex justify-content-between b2b-workProcess-wrap'>
                      
                      <div>
                        <div className='img-wrap'>
                          <img src={processIcon6.src} />
                        </div>
                        <p className='text-white text-center'>Launch</p>
                      </div>
                  </div>
                </div>
              </div>

              <div className='row mt-4'>
                <div className='col-lg-12 text-center'>
                  <button onClick={toggleModal} className='b2b-btn b2b-btn-lg'>Request a Quote</button>
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