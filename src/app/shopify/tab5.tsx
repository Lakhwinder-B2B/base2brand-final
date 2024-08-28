
import React, { useRef, useState, useEffect } from 'react';
  
import Slider from 'react-slick';

import tab5Icon1 from "../../../public/shopify/tab5-icon1.png";
import tab5Icon2 from "../../../public/shopify/tab5-icon2.png";
import tab5Icon3 from "../../../public/shopify/tab5-icon3.png";
import tab5Icon4 from "../../../public/shopify/tab5-icon4.png";
import tab5Icon5 from "../../../public/shopify/tab5-icon5.png";


export default function Tab5() {
    const [nav9, setNav9] = useState(null);
    const [nav10, setNav10] = useState(null);
    let sliderRef9 = useRef(null);
    let sliderRef10 = useRef(null);
  
    useEffect(() => {
      setNav9(sliderRef9);
      setNav10(sliderRef10);
    }, []);

    // useEffect(() => {
    //   const memoriesSection = document.querySelector(".tabMainWrap");
    //   const headerSection = document.querySelector("header");
    //   const bodySection = document.querySelector("body");
    //   const headerHeight = headerSection.offsetHeight;
  
    //   if (!memoriesSection) {
    //     console.error("Element with class 'tabMainWrap' not found");
    //     return;
    //   }
  
    //   const handleScroll = () => {
    //     const clientHeight = document.documentElement.clientHeight;
    //     const memoriesSectionY = memoriesSection.getBoundingClientRect().y;
    //     if (clientHeight > memoriesSectionY) {
    //        memoriesSection.classList.add("stickyElement");
    //        (memoriesSection as HTMLElement).style.top = `${headerHeight}px`;
    //        if(memoriesSectionY == headerHeight){
    //             // (bodySection as HTMLElement).style.overflow = `hidden`;
    //             console.log('reached');
                
    //        }
    //     }
    //     if (clientHeight < memoriesSectionY) {
    //       memoriesSection.classList.remove("stickyElement");
    //       (memoriesSection as HTMLElement).style.top = `unset`;
    //     }
    //   };
  
    //   document.addEventListener("scroll", handleScroll);
  
    //   // Clean up the event listener on component unmount
    //   return () => {
    //     document.removeEventListener("scroll", handleScroll);
    //   };
    // }, []);

  return (
     <>  
        <div className="gallery_slider">
                  <div className="left_thumnails">
                    <Slider
                        asNavFor={nav9}
                        ref={(slider10) => setNav10(slider10)}
                        slidesToShow={1}
                        slidesToScroll={0}
                        swipeToSlide={false}
                        autoplay={false}
                        arrows={false}
                        focusOnSelect={true}
                        speed={500}
                        infinite={false}
                      >
                    
                      
                      <a><img src={tab5Icon1.src} alt="" /></a>
                      <a><img src={tab5Icon2.src} alt="" /></a>
                      <a><img src={tab5Icon3.src} alt="" /></a>
                      <a><img src={tab5Icon4.src} alt="" /></a> 
                      <a><img src={tab5Icon5.src} alt="" /></a> 
                    
                      </Slider>
                  </div>
                  <div className="right_slider">
                      <Slider className="right_slider1" asNavFor={nav10} ref={(slider9) => setNav9(slider9)}
                      autoplay={false}
                      centerMode= {true}
                      centerPadding= '60px'
                      arrows={true}
                      dots={true}
                      slidesToShow={3}
                      slidesToScroll={1}
                      speed={500}
                      infinite={true}
                      focusOnSelect= {true}
                      cssEase= 'linear'
                      >
                        <div className='slider_right_main'>
                          <div className="row gap-5 align-items-center">
                            
                            <div className="col-md-10 m-auto">
                              <div className="social_ads text-white text-center">
                               
                                <h2>Workflow</h2>
                                <p>Workflow in ecommerce design streamlines the process of managing tasks, content, and approvals within a team. Our experts integrate efficient workflow tools, automate repetitive tasks, and establish clear communication channels, ensuring smooth collaboration and timely project delivery, ultimately enhancing productivity and quality in ecommerce design.</p>
                                <div className="mt-4">
                                  <a href="" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                                </div>
                              </div>
                              </div>
                          </div>
                        </div>


                        <div className='slider_right_main'>
                          <div className="row gap-5 align-items-center">
                            
                            <div className="col-md-10 m-auto">
                              <div className="social_ads text-white text-center">
                                
                                <h2>Promotion Design</h2>
                                <p>Promotion design in Shopify stores involves creating visually appealing banners, pop-ups, and promotional graphics to highlight special offers, sales, and discounts. Our designers craft eye-catching designs that align with your brand, effectively grabbing attention and driving conversions, ultimately maximizing the impact of your promotions.</p>
                                <div className="mt-4">
                                  <a href="" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        
                        <div className='slider_right_main'>
                          <div className="row gap-5 align-items-center">
                            
                            <div className="col-md-10 m-auto">
                              <div className="social_ads text-white text-center">
                                
                                <h2>Development</h2>
                                <p>Shopify store development entails building a customized online storefront tailored to your brand and audience. Our developers leverage Shopify's robust platform to create responsive, user-friendly designs, implement essential features like product management and checkout, and optimize performance, ensuring a seamless and engaging shopping experience for your customers.</p>
                                <div className="mt-4">
                                  <a href="" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='slider_right_main'>
                          <div className="row gap-5 align-items-center">
                            
                            <div className="col-md-10 m-auto">
                              <div className="social_ads text-white text-center">
                                
                                <h2>Klaviyo</h2>
                                <p>Klaviyo integration in Shopify store design enables personalized email marketing and automation. Our experts harness Klaviyo's powerful features to segment customers, send targeted campaigns, and analyze performance data. By leveraging Klaviyo's capabilities, we enhance customer engagement, drive sales, and optimize marketing strategies.</p>
                                <div className="mt-4">
                                  <a href="" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='slider_right_main'>
                          <div className="row gap-5 align-items-center">
                            
                            <div className="col-md-10 m-auto">
                              <div className="social_ads text-white text-center">
                                
                                <h2>Launch</h2>
                                <p>Shopify store launch is the result of meticulous planning and execution. Our team ensures a seamless rollout by testing functionality, optimizing design, and configuring payment gateways. With strategic marketing support, we drive traffic to your store, maximizing visibility and setting the stage for successful sales growth.</p>
                                <div className="mt-4">
                                  <a href="" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        

                      </Slider>
                  </div>
                </div>
     </>
)
}