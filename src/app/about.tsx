'use client'

import React from "react"; 
import Image from 'next/image';
import About from '../../public/img/about.png';   
import shopifyDev from '../../public/img/shopify-dev.png';   
import b2bTeam from '../../public/img/b2bTeam.png';   
import technologies from '../../public/img/technologies.png';   
import processIcon1 from '../../public/img/process-icon-1.svg';   
import processIcon2 from '../../public/img/process-icon-2.svg';   
import processIcon3 from '../../public/img/process-icon-3.svg';   
import processIcon4 from '../../public/img/process-icon-4.svg';   
import processIcon5 from '../../public/img/process-icon-5.svg';   
import processIcon6 from '../../public/img/process-icon-6.svg';   
import './our-project.css'

export default function Homeabout() {
 
  return (
    <>  
      <div className="container pt-5 pb-5">  
          <div className="row align-items-center row-reverse-mb"> 
            <div className="col-md-6 text-white"   >
              <h2 className="b2b-main-heading">Technologies we use</h2> 
              <h3 className="b2b-title-text">We use cutting-edge technologies to craft fully automated solutions</h3>
              <p className="b2b-sub-text">Our approach includes use of state-of-the-art technologies and tools across digital marketing, web development, and graphic design to deliver customized digital solutions tailored to address your most intricate challenges.</p>
              <p className="b2b-sub-text">From leveraging advanced analytics in digital marketing strategies to employing the latest coding languages and frameworks in web development, and employing cutting-edge design software in graphic design, we ensure that every aspect of our solutions is at the forefront of innovation.</p>
              <p className="b2b-sub-text">With our commitment to staying ahead of the curve, we empower your business to thrive in today's dynamic digital landscape with bespoke solutions that drive results.</p>
            
              <button className="b2b-btn b2b-btn-sm mt-4 m-0"> Read More </button>
            </div>
            <div className="col-md-6 text-center mb-5 mb-md-0 about_order"    >
              <img className="m-auto" src={technologies.src} alt="Product" />
            </div> 
            
          </div>

          <div className="row align-items-center row-reverse-mb mt-5"> 
            <div className="col-md-6 text-center mb-5 mb-md-0 about_order"    >
              <img className="m-auto" src={shopifyDev.src} alt="Product" />
            </div> 
            <div className="col-md-6 text-white"   >
              <h2 className="b2b-main-heading">We Excel in Shopify Development Services</h2> 
              <p className="b2b-sub-text">In Shopify development services, we don't just meet expectations; we exceed them. With a proven track record of success, we outperform in every aspect of Shopify development. From creating visually stunning and user-friendly storefronts to implementing robust backend solutions, we elevate your online presence to new heights.</p>
              <p className="b2b-sub-text">Our team of experts combines creativity, technical skills, and strategic insight to deliver tailor-made solutions that drive growth and maximize your ROI. Trust us to go above and beyond in crafting an exceptional Shopify experience that sets your brand apart from the competition.</p>
              <button className="b2b-btn b2b-btn-sm mt-4 m-0"> Read More </button>
            </div>
            
            
          </div>


          <div className='progress-column'>
        
        <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 header-columns p-5 m-auto'>
              <h2 className='text-center b2b-sub-heading-bold text-uppercase'>Request a Quote</h2>
              <p className='b2b-text text-center '>How we work for our customer</p>
            </div>
        </div>
        
        
          <div className='progress-count d-flex flex-wrap justify-content-between'>
            <div className="count-col">
              <div className='d-flex justify-content-between b2b-black-bg b2b-workProcess-wrap'>
                 
                  <div className=''>
                    <div className='img-wrap'>
                      <img src={processIcon1.src} />
                    </div>
                    <p className='text-white text-center'>Research</p>
                  </div>
              </div>
            </div>

            <div className="count-col">
              <div className='d-flex justify-content-between b2b-black-bg b2b-workProcess-wrap'>
                  
                  <div>
                    <div className='img-wrap'>
                      <img src={processIcon2.src} />
                    </div>
                    <p className='text-white text-center'>Planning</p>
                  </div>
              </div>
            </div>

            <div className="count-col">
              <div className='d-flex justify-content-between b2b-black-bg b2b-workProcess-wrap'>
                  
                  <div>
                    <div className='img-wrap'>
                      <img src={processIcon3.src} />
                    </div>
                    <p className='text-white text-center'>Design</p>
                  </div>
              </div>
            </div>

            <div className="count-col">
              <div className='d-flex justify-content-between b2b-black-bg b2b-workProcess-wrap'>
                 
                  <div>
                    <div className='img-wrap'>
                      <img src={processIcon4.src} />
                    </div>
                    <p className='text-white text-center'>Development</p>
                  </div>
              </div>
            </div>

            <div className="count-col">
              <div className='d-flex justify-content-between b2b-black-bg b2b-workProcess-wrap'>
                 
                  <div>
                    <div className='img-wrap'>
                      <img src={processIcon5.src} />
                    </div>
                    <p className='text-white text-center'>Testing</p>
                  </div>
              </div>
            </div>
            <div className="count-col">
              <div className='d-flex justify-content-between b2b-black-bg b2b-workProcess-wrap'>
                  
                  <div>
                    <div className='img-wrap'>
                      <img src={processIcon6.src} />
                    </div>
                    <p className='text-white text-center'>Launch</p>
                  </div>
              </div>
            </div>
          </div>

          <div className='row mt-5'>
            <div className='col-lg-12 text-center'>
              <button className='b2b-btn b2b-btn-lg'>Request a Quote</button>
            </div>
          </div>
        </div>
    


          <div className="row align-items-center row-reverse-mb"> 
            <div className="col-md-6 text-white"   >
              <h2 className="b2b-main-heading">HAVE A DREAM? <br />WE HAVE A TEAM!</h2> 
              <p className="b2b-sub-text">At our place, we have a stellar team of experts dedicated to bringing your vision to life. With extensive experience and a deep understanding of diverse industries, our team is equipped to handle any challenge that comes our way.</p>
              <p className="b2b-sub-text">Throughout the project, we prioritize clear communication and transparency, guiding you through every step and addressing any doubts or questions that may arise. Despite our high-quality services, we remain committed to offering competitive pricing to ensure accessibility for businesses of all sizes.</p>
              <p className="b2b-sub-text">Having successfully completed hundreds of projects, we bring a wealth of knowledge and expertise to each new endeavor, guaranteeing exceptional results that exceed expectations.</p>
             
              <button className="b2b-btn b2b-btn-sm mt-4 m-0"> Let&apos;s Talk Over a cup Of Tea </button>
            </div>
            <div className="col-md-6 text-center mb-5 mb-md-0 about_order"    >
              <img className="m-auto" src={b2bTeam.src} alt="Product" />
            </div> 
            
          </div>
      </div> 
    </>
  )
}
