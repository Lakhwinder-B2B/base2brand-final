
import React, { useRef, useState, useEffect } from 'react';
  
import Slider from 'react-slick';

import tab3Icon1 from "../../../public/shopify/tab3-icon1.png";
import tab3Icon2 from "../../../public/shopify/tab3-icon2.png";
import tab3Icon3 from "../../../public/shopify/tab3-icon3.png";


export default function Tab3() {
    const [nav5, setNav5] = useState(null);
    const [nav6, setNav6] = useState(null);
    let sliderRef5 = useRef(null);
    let sliderRef6 = useRef(null);
  
    useEffect(() => {
      setNav5(sliderRef5);
      setNav6(sliderRef6);
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
                        asNavFor={nav5}
                        ref={(slider6) => setNav6(slider6)}
                        slidesToShow={1}
                        slidesToScroll={0}
                        swipeToSlide={false}
                        autoplay={false}
                        arrows={false}
                        focusOnSelect={true}
                        speed={500}
                        infinite={false}
                        initialSlide = {1}
                      >
                    
                      
                      <a><img src={tab3Icon1.src} alt="" /></a>
                      <a><img src={tab3Icon2.src} alt="" /></a>
                      <a><img src={tab3Icon3.src} alt="" /></a>
                    
                      </Slider>
                  </div>
                  <div className="right_slider">
                      <Slider className="right_slider1" asNavFor={nav6} ref={(slider5) => setNav5(slider5)}
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
                      initialSlide = {1}
                      >
                        <div className='slider_right_main'>
                          <div className="row gap-5 align-items-center">
                            
                            <div className="col-md-10 m-auto">
                              <div className="social_ads text-white text-center">
                               
                                <h2>Hydrogen</h2>
                                <p>Hydrogen in Shopify refers to a versatile framework for building custom storefronts and progressive web apps (PWAs). Leveraging modern web technologies like React and GraphQL, Hydrogen enables developers to create fast, engaging, and tailored shopping experiences, enhancing brand identity and customer satisfaction on Shopify platforms.</p>
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
                                
                                <h2>Node JS</h2>
                                <p>Node.js offers a lightweight, efficient, and scalable runtime environment for server-side JavaScript applications. Our developers harness its non-blocking I/O model and event-driven architecture to build fast, real-time applications. With expertise in Node.js, we ensure optimized performance and seamless scalability for your projects</p>
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
                                
                                <h2>React JS</h2>
                                <p>React.js is a powerful JavaScript library for building dynamic user interfaces. Its component-based architecture and virtual DOM enable developers to create reusable, interactive UI components efficiently. Our team specializes in React.js development, crafting responsive, high-performance web applications that engage users and drive business growth.</p>
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