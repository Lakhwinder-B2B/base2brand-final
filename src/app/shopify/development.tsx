'use client'
import { useEffect } from 'react';

import React from "react";  
import design1 from '../../../public/shopify/design1.svg'; 
import design2 from '../../../public/shopify/design2.svg'; 
import design3 from '../../../public/shopify/design3.svg'; 
import design4 from '../../../public/shopify/design4.svg'; 
import design5 from '../../../public/shopify/design5.svg'; 
 
import PLANNING_INFORMATION from '../../../public/web-app/PLANNING_INFORMATION.svg'; 
import CREATIVE_DESIGN from '../../../public/web-app/CREATIVE_DESIGN.svg'; 
import RESPONSIVE_DEVELOPMENT from '../../../public/web-app/RESPONSIVE_DEVELOPMENT.svg'; 
import QUALITY_ASSURANCE from '../../../public/web-app/QUALITY_ASSURANCE.svg'; 

import Tab1 from './tabs';
// import TabSlick from './tab-slick';
import '../shopify/service.css'

export default function Development() {
 
     // useEffect(() => {
     //      const memoriesSection = document.querySelector(".tabMainWrap");
     //      const headerSection = document.querySelector("header");
     //      const bodySection = document.querySelector("body");
     //      const headerHeight = headerSection.offsetHeight;
      
     //      if (!memoriesSection) {
     //        console.error("Element with class 'tabMainWrap' not found"); 
     //        return;
     //      }
     //      console.log('headerHeight'+headerHeight);
      
     //      const handleScroll = () => {
     //        const clientHeight = document.documentElement.clientHeight;
     //        const memoriesSectionY = memoriesSection.getBoundingClientRect().y;
     //        if (clientHeight > memoriesSectionY) {
     //           memoriesSection.classList.add("stickyElement");
     //           (memoriesSection as HTMLElement).style.top = `${headerHeight}px`;
     //           if(memoriesSectionY == headerHeight){
     //                memoriesSection.classList.add("inViewport"); 
                    
     //           }
     //        }
     //        if (clientHeight < memoriesSectionY) {
     //          memoriesSection.classList.remove("stickyElement");
     //          (memoriesSection as HTMLElement).style.top = `unset`;
     //          memoriesSection.classList.remove("inViewport");
     //        }
     //      };
      
     //      document.addEventListener("scroll", handleScroll);
      
     //      // Clean up the event listener on component unmount
     //      return () => {
     //        document.removeEventListener("scroll", handleScroll);
     //      };
     //    }, []);

  return (
     <>  
     
          <div className="b2b-gray-bg w-100 py-5"> 
            <div className="b2b-container-lg"> 
               <div className="row">
                    <div className="col-md-8 text-center m-auto" >
                         <h3 className='b2b-partners-heading'>Shopify Website Development Services</h3> 
                         <p className="text-white">Creating or refining your Shopify store? Let us assist you! From building new shops to optimizing existing ones, we've got you covered.</p>
                    </div>
               </div>
            </div>
          </div>
          <div className='tabMainWrap'>
               <div className="designTabsWrap b2b-gray-bg"> 
               <div className="b2b-container-lg"> 
                    <div className="row">
                         <div className="col-lg-12 m-auto">
                         <ul className="row row-cols-5 nav nav-pills mb-3 designTabs" id="pills-tab" role="tablist">
                              <li className="nav-item" role="presentation">
                                   <button className=" active btn_design" id="pill1-tab" data-bs-toggle="pill" data-bs-target="#pill1" type="button" role="tab" aria-controls="pill1" aria-selected="true">
                                   App <br />Development
                                   <span><img src={design1.src} alt="" /></span>
                                   </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                   <button className=" btn_design" id="pill2-tab" data-bs-toggle="pill" data-bs-target="#pill2" type="button" role="tab" aria-controls="pill2" aria-selected="false">
                                   Custom <br />Integration
                                   <span><img src={design2.src} alt="" /></span>
                                   </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                   <button className=" btn_design" id="pill3-tab" data-bs-toggle="pill" data-bs-target="#pill3" type="button" role="tab" aria-controls="pill3" aria-selected="false">
                                   Headless Store <br />Development
                                   <span><img src={design3.src} alt="" /></span>
                                   </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                   <button className=" btn_design" id="pill4-tab" data-bs-toggle="pill" data-bs-target="#pill4" type="button" role="tab" aria-controls="pill4" aria-selected="false">
                                   CRO ( Conversation <br />Rate Optimization)
                                   <span><img src={design4.src} alt="" /></span>
                                   </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                   <button className=" btn_design" id="pill5-tab" data-bs-toggle="pill" data-bs-target="#pill5" type="button" role="tab" aria-controls="pill5" aria-selected="false">
                                   E-commerce <br />Store Design
                                   <span><img src={design5.src} alt="" /></span>
                                   </button>
                              </li>
                         </ul>
                         </div>
                    </div>
               </div>
               </div>
               <div className="designTabsContentWrap"> 
                    <div className=""> 
                         <div className="row">
                              <div className="col-lg-12 m-auto">                
                              <div className="tab-content" id="pills-tabContent">
                                   <div className="tab-pane fade show active" id="pill1" role="tabpanel" aria-labelledby="pill1-tab">
                                        <div>
                                             <Tab1 />
                                        </div>
                                   </div>
                                   <div className="tab-pane fade" id="pill2" role="tabpanel" aria-labelledby="pill2-tab">
                                        <div>
                                             <Tab1 />
                                        </div> 
                                   </div>
                                   <div className="tab-pane fade" id="pill3" role="tabpanel" aria-labelledby="pill3-tab">
                                        <div>
                                             <Tab1 />
                                        </div>
                                   </div>
                                   <div className="tab-pane fade" id="pill4" role="tabpanel" aria-labelledby="pill4-tab">
                                        <div>
                                             <Tab1 />
                                        </div>
                                   </div>
                                   <div className="tab-pane fade" id="pill5" role="tabpanel" aria-labelledby="pill5-tab">
                                        <div>
                                             <Tab1 />
                                        </div>
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