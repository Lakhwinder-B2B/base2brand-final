'use client' 
import React, { useState } from "react";     
import Theme from '../../../public/app/theme.png';            
import benefits from '../../../public/app/benefita-of-mobile-app.png';            
import Big2 from '../../../public/app/social-media-marketing.png';            
import Big3 from '../../../public/app/b3.png';            
import Big4 from '../../../public/app/b4.png';            
import Big5 from '../../../public/app/b5.png';            
import Big6 from '../../../public/app/b6.png';            
import Request from "../request-form";

export default function Big_Commerce() {
 
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };

  return (
    <>  
        <div className="p-5 bg_light_green"> 
          <div className="container"> 
            <div className="row text-white justify-content-center">
              <div className="col-md-12 mx-auto text-center">
                <h2 className="b2b-heading">Benefits of a Mobile App For Your Business</h2>
              </div>
              <div className="col-md-4 mt-5">
                <div className="benefit-wrap">
                    <div className="px-3">
                        <h4 className='b2b-text-lg'>1. Customer Engagemen</h4>
                        <p className='b2b-text-sm mb-0'>Mobile apps enable personalized notifications, promotions, and feedback, fostering deeper engagement and understanding of preferences, vital for refining products.</p>
                        
                    </div>
                    <div className="px-3">
                        <h4 className='b2b-text-lg'>2. Brand Visibility</h4>
                        <p className='b2b-text-sm mb-0'>Brand Visibility: Well-designed apps strengthen brand recognition and recall, ensuring continuous visibility on customers' screens, essential for staying competitive.</p>
                        
                    </div>
                </div>
              </div>

              <div className="col-md-4 mt-5">
                    <img className="w-100" src={benefits.src} alt="" />
              </div>

              <div className="col-md-4 mt-5">
                <div className="benefit-wrap">
                    <div className="px-3">
                        <h4 className='b2b-text-lg'>3. Marketing Efforts</h4>
                        <p className='b2b-text-sm text-end mb-0'>Apps facilitate targeted campaigns through user data analysis, tailoring promotions and offers to maximize conversion rates and optimize ROI.</p>
                        
                    </div>
                    <div className="px-3">
                        <h4 className='b2b-text-lg'>4. Customer Service</h4>
                        <p className='b2b-text-sm text-end mb-0'>Convenient platforms for support, offering features like live chat and FAQs, enhance user experience, resolve issues promptly, and foster long-term loyalty.</p>
                        
                    </div>
                </div>
              </div>

              <div className="col-md-4 mt-5">
                    <div className="p-3 pb-3">
                        <h4 className='b2b-text-lg'>5. Increased Sales</h4>
                        <p className='b2b-text-sm'>Seamless purchasing experiences on mobile apps significantly boost sales, providing convenient access to products or services anytime, anywhere, driving revenue growth.</p>
                        
                    </div>
              </div>


            </div> 
          </div>
        </div>


        <div className="py-5">
          <div className="container">
              <div className="row align-items-center"> 
              <div className="col-md-5">
                    <img className="w-100" src={Big2.src} alt="" />
                  </div> 
                  <div className="col-md-7 text-white"> 
                      <h1 className="b2b-heading mb-3">Mobile App Development <br />Services We Offer</h1>
                      <p className="b2b-text-sm">Our mobile app development services cover iOS, Android, React Native, and Flutter platforms, offering versatile solutions. For iOS, we create sleek, user-friendly experiences optimized for Apple devices, incorporating the latest features. Similarly, our Android expertise ensures seamless performance across a wide range of devices. Additionally, we excel in React Native and Flutter for efficient cross-platform development and visually stunning apps</p>
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