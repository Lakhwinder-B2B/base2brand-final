
import React, { useRef, useState, useEffect } from 'react';
  
import Slider from 'react-slick';

import tab2Icon1 from "../../../public/shopify/tab2-icon1.png";
import tab2Icon2 from "../../../public/shopify/tab2-icon2.png";
import tab2Icon3 from "../../../public/shopify/tab2-icon3.png";
import tab2Icon4 from "../../../public/shopify/tab2-icon4.png";
import tab2Icon5 from "../../../public/shopify/tab2-icon5.png";
import tab2Icon6 from "../../../public/shopify/tab2-icon6.png";


export default function Tab2() {
    const [nav3, setNav3] = useState(null);
    const [nav4, setNav4] = useState(null);
    let sliderRef3 = useRef(null);
    let sliderRef4 = useRef(null);
  
    useEffect(() => {
      setNav3(sliderRef3);
      setNav4(sliderRef4);
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
                        asNavFor={nav3}
                        ref={(slider4) => setNav4(slider4)}
                        slidesToShow={1}
                        slidesToScroll={0}
                        swipeToSlide={false}
                        autoplay={false}
                        arrows={false}
                        focusOnSelect={true}
                        speed={500}
                        infinite={false}
                      >
                    
                      
                      <a><img src={tab2Icon1.src} alt="" /></a>
                      <a><img src={tab2Icon2.src} alt="" /></a>
                      <a><img src={tab2Icon3.src} alt="" /></a>
                      <a><img src={tab2Icon4.src} alt="" /></a> 
                      <a><img src={tab2Icon5.src} alt="" /></a> 
                      <a><img src={tab2Icon6.src} alt="" /></a> 
                    
                      </Slider>
                  </div>
                  <div className="right_slider">
                      <Slider className="right_slider1" asNavFor={nav4} ref={(slider3) => setNav3(slider3)}
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
                               
                                <h2>Uni-Commerce</h2>
                                <p>We provide seamless integration services for Unicommerce and Shopify, streamlining your e-commerce operations. With this integration, you can efficiently manage orders, inventory, and warehouse operations across multiple channels, enhancing your business scalability and customer satisfaction. Let us optimize your workflow for maximum efficiency and growth.</p>
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
                                
                                <h2>Odoo</h2>
                                <p>Our Shopify experts are skilled in using Odoo for enhancing Shopify stores. With Odoo's robust suite of business management tools, we optimize inventory, sales, and customer relations seamlessly. Our expertise ensures smooth integration, empowering your Shopify store with efficient backend operations, driving growth and customer satisfaction.</p>
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
                                
                                <h2>Easy Ecom</h2>
                                <p>EasyEcom's intuitive features streamline inventory management, order processing, and multichannel selling. Our proficiency ensures seamless integration, empowering your Shopify Store with efficient operations, enabling scalability and customer satisfaction.</p>
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
                                
                                <h2>Increff</h2>
                                <p>We specialize in integrating Increff with your Shopify store, enhancing inventory management and order fulfillment. Increff's advanced algorithms optimize inventory levels and streamline operations, ensuring efficient supply chain management. Trust us to seamlessly integrate Increff into your Shopify platform for enhanced productivity and customer satisfaction.</p>
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
                                
                                <h2>Custom Recharge Integration</h2>
                                <p>Expertly integrate Custom Recharge into your Shopify store for streamlined subscription billing and management. Seamlessly handle recurring payments, subscription plans, and customer preferences. Enhance revenue streams and customer retention with tailored Recharge integration, optimizing your store for growth and sustainability.</p>
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
                                
                                <h2>Custom Loop Integration</h2>
                                <p>Efficiently integrate Custom Loop into your Shopify store for enhanced customer engagement and retention. Seamlessly manage loyalty programs, rewards, and referrals. Tailor promotions to individual customer preferences, driving sales and loyalty. With Custom Loop integration, optimize your Shopify store for sustained growth and customer satisfaction.</p>
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