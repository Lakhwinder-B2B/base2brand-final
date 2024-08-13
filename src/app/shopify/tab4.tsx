
import React, { useRef, useState, useEffect } from 'react';
  
import Slider from 'react-slick';

import tab4Icon1 from "../../../public/shopify/tab4-icon1.png";
import tab4Icon2 from "../../../public/shopify/tab4-icon2.png";
import tab4Icon3 from "../../../public/shopify/tab1-icon2.png";
import tab4Icon4 from "../../../public/shopify/tab4-icon3.png";


export default function Tab4() {
    const [nav7, setNav7] = useState(null);
    const [nav8, setNav8] = useState(null);
    let sliderRef7 = useRef(null);
    let sliderRef8 = useRef(null);
  
    useEffect(() => {
      setNav7(sliderRef7);
      setNav8(sliderRef8);
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
                        asNavFor={nav7}
                        ref={(slider8) => setNav8(slider8)}
                        slidesToShow={1}
                        slidesToScroll={0}
                        swipeToSlide={false}
                        autoplay={false}
                        arrows={false}
                        focusOnSelect={true}
                        speed={500}
                        infinite={false}
                      >
                    
                      
                      <a><img src={tab4Icon1.src} alt="" /></a>
                      <a><img src={tab4Icon2.src} alt="" /></a>
                      <a><img src={tab4Icon3.src} alt="" /></a>
                      <a><img src={tab4Icon4.src} alt="" /></a> 
                    
                      </Slider>
                  </div>
                  <div className="right_slider">
                      <Slider className="right_slider1" asNavFor={nav8} ref={(slider7) => setNav7(slider7)}
                      autoplay={false}
                      centerMode= {true}
                      centerPadding= '60px'
                      arrows={false}
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
                               
                                <h2>Special Optimization</h2>
                                <p>Special optimization involves fine-tuning various aspects of a Shopify store to enhance performance and user experience. This may include optimizing images, minimizing code, improving page load times, and ensuring mobile responsiveness. Our experts implement tailored optimizations to boost speed, SEO ranking, and conversions, maximizing your store's success.</p>
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
                                
                                <h2>UI/UX Improvement</h2>
                                <p>UI/UX improvement in Shopify focuses on enhancing the design and usability of your online store. Our experts analyze user behavior, streamline navigation, optimize product presentation, and refine checkout processes. By prioritizing user satisfaction and engagement, we elevate your Shopify store's performance and drive conversions.</p>
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
                                
                                <h2>Up Sell</h2>
                                <p>Upselling involves suggesting additional or upgraded products to customers to increase their purchase value. Our strategy includes personalized recommendations during checkout or product pages, enticing offers, and seamless integration to enhance user experience and maximize revenue in your Shopify store.</p>
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
                                
                                <h2>Cash Flow</h2>
                                <p>Cash flow refers to the movement of money into and out of a business. In a Shopify store, optimizing cash flow involves managing inventory, sales, and expenses efficiently. Our experts implement strategies like inventory management tools, sales forecasting, and payment gateway optimization to ensure consistent cash flow and business stability.</p>
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