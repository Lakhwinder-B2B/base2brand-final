
import React, { useRef, useState, useEffect } from 'react';
  
import Slider from 'react-slick';

import tab1Icon1 from "../../../public/shopify/tab1-icon1.png";
import tab1Icon2 from "../../../public/shopify/tab1-icon2.png";
import tab1Icon3 from "../../../public/shopify/tab1-icon3.png";
import tab1Icon4 from "../../../public/shopify/tab1-icon4.png";
import tab1Icon5 from "../../../public/shopify/tab1-icon5.png";


export default function Tab1() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
  
    useEffect(() => {
      setNav1(sliderRef1);
      setNav2(sliderRef2);
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
                        asNavFor={nav1}
                        ref={(slider2) => setNav2(slider2)}
                        slidesToShow={1}
                        slidesToScroll={0}
                        swipeToSlide={false}
                        autoplay={false}
                        arrows={false}
                        focusOnSelect={true}
                        speed={500}
                        infinite={false}
                      >
                    
                      
                      <a><img src={tab1Icon1.src} alt="" /></a>
                      <a><img src={tab1Icon2.src} alt="" /></a>
                      <a><img src={tab1Icon3.src} alt="" /></a>
                      <a><img src={tab1Icon4.src} alt="" /></a> 
                      <a><img src={tab1Icon5.src} alt="" /></a> 
                    
                      </Slider>
                  </div>
                  <div className="right_slider">
                      <Slider className="right_slider1" asNavFor={nav2} ref={(slider1) => setNav1(slider1)}
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
                               
                                <h2>Checkout UI Extension</h2>
                                <p>A Checkout UI Extension enhances the user experience during the checkout process on Shopify. Our Shopify experts can tailor this extension to streamline checkout, optimize form fields, implement guest checkout options, and integrate secure payment gateways, ensuring seamless transactions and higher conversion rates for your online store.</p>
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
                                <p>Upselling is a strategic technique to increase average order value by offering complementary or upgraded products during the checkout process. Our Shopify experts can implement upsell features, suggest related items, and design compelling offers to maximize revenue and enhance customer satisfaction.</p>
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
                                
                                <h2>Discount Formula&apos;s</h2>
                                <p>The Discount Formula in Shopify allows you to apply discounts to products based on fixed amounts or percentages. Our Shopify experts can configure discount codes, automatic discounts, or bulk discounts tailored to your promotional strategies, encouraging sales and customer engagement in your online store.</p>
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
                                
                                <h2>Custom Filters</h2>
                                <p>Custom Filters enable personalized product searches on Shopify, enhancing user experience. Our experts can implement filters based on attributes like size, color, or price, empowering customers to find products quickly. With tailored filters, you can boost conversion rates and improve customer satisfaction in your Shopify store.</p>
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
                                
                                <h2>Custom Search</h2>
                                <p>Custom Search functionality allows users to find specific products or information on a Shopify store with ease. Our experts can integrate advanced search features, such as autocomplete suggestions, filters, and synonyms, optimizing the search experience and helping customers discover relevant items efficiently, ultimately increasing sales.</p>
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