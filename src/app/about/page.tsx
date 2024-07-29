"use client";

import React, { useEffect,useState, useRef } from 'react';
import Header from "../../../component/header";
import AboutMask from "../../../public/about-img/about-mask.png";
import Ceo from "../../../public/about-img/ceo.png"
import QuoteIcon from "../../../public/about-img/quote-about.svg"
import About1 from "../../../public/about-img/about1.svg"
import About2 from "../../../public/json/about-us/About-Us.gif"
import AboutColumns from "../../../src/app/about-columns"
import Team from "../.././app/team"
import Quote from "../request-quote";
import Footer from "../../../component/footer";
import "../about/about.css";
import Request from "../request-form";
import radialBg from '../../../public/img/radial_bg.svg'; 
import Slider from "react-slick";
import { Link,  Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import radialRight from '../../../public/img/radial-right.svg'; 



export default function AboutUs() {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  const settings = { 
    dots: true,
    arrows : true, 
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    const memoriesSection = document.querySelector(".innerWrap");
    const headerSection = document.querySelector("header");
    const headerHeight = headerSection.offsetHeight;

    if (!memoriesSection) {
      console.error("Element with class 'innerWrap' not found");
      return;
    }

    const handleScroll = () => {
      const clientHeight = document.documentElement.clientHeight;
      const memoriesSectionY = memoriesSection.getBoundingClientRect().y;
      if (clientHeight > memoriesSectionY) {
            
            if(memoriesSectionY <= (headerHeight + 100)){

                const tabs = document.querySelectorAll(".tabInnerWrap");
                const tabbtns = document.querySelectorAll(".tabBtn");

                const tab1 = document.querySelector("#mission_tab");
                const tab2 = document.querySelector("#vission_tab");
                const tab3 = document.querySelector("#values_tab");
                const tab1SectionY = tab1.getBoundingClientRect().y;
                const tab2SectionY = tab2.getBoundingClientRect().y;
                const tab3SectionY = tab3.getBoundingClientRect().y;


                if(tab1SectionY <= (headerHeight + 100) && tab1SectionY >= 0){
                  tabs.forEach(tab => {
                    tab.classList.remove("b2b_vissible");
                  });
                  tabbtns.forEach(tabbtn => {
                    tabbtn.classList.remove("active");
                  });

                  const btnID = tab1.getAttribute("data-id");
                  tab1.classList.add("b2b_vissible");
                  const btnSection = document.querySelector(`#${btnID}`);
                  btnSection.classList.add("active");
                }else if(tab2SectionY <= (headerHeight + 100) && tab2SectionY >= 0){
                  
                  tabs.forEach(tab => {
                    tab.classList.remove("b2b_vissible");
                  });
                  tabbtns.forEach(tabbtn => {
                    tabbtn.classList.remove("active");
                  });

                  const btn2ID = tab2.getAttribute("data-id");
                  tab2.classList.add("b2b_vissible");
                  const btn2Section = document.querySelector(`#${btn2ID}`);
                  btn2Section.classList.add("active");

                }else if(tab3SectionY <= (headerHeight + 100) && tab3SectionY >= 0){

                  tabs.forEach(tab => {
                    tab.classList.remove("b2b_vissible");
                  });
                  tabbtns.forEach(tabbtn => {
                    tabbtn.classList.remove("active");
                  });
                  
                  const btn3ID = tab3.getAttribute("data-id");
                  tab3.classList.add("b2b_vissible");
                  const btn3Section = document.querySelector(`#${btn3ID}`);
                  btn3Section.classList.add("active");
                }
                else if(tab1SectionY > (headerHeight + 100)){
                  tabs.forEach(tab => {
                    tab.classList.remove("b2b_vissible");
                  });
                  tabbtns.forEach(tabbtn => {
                    tabbtn.classList.remove("active");
                  });
                }
                
          }
      }
     
    };

    document.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <>
      <Header />
        <div className="bg_about pt-0 pb-0">
          <div className="about-mask aboutWrap" data-aos="fade-up" style={{backgroundImage: `url(${radialBg.src})`,backgroundRepeat: 'no-repeat'}}>
          <div className="row m-0 position-relative text-white "> 
              <div className="col-12 col-sm-12 col-md-4 px-0 position-relative ph_remove_about d-flex align-items-end" data-aos="slide-down">
                <div className='about-gif'>
                  <img className="about_bottom" src={About2.src} alt="" />
                </div>
                
                
              </div>
              <div className="col-12 col-sm-12 col-md-4 text-center d-flex align-items-center">
                <div>
                    <h1 className='b2b-heading'>We Create Smart Ideas For<br />Your Brand Growth</h1>
                    <p className='b2b-text'>Our team of experts generate innovative concepts and strategies to drive your growth, offering smart solutions that propel your business forward and achieve your objectives efficiently.</p>
                    <div className="mt-5 text-center">
                  <button className="b2b-btn b2b-btn-lg">Request a Quote </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 px-0 position-relative pt-5 mt-5 d-flex align-items-end justify-content-end">
              <img className="about_bottom" src={About1.src} alt="" />
              
              </div>
             
            </div>
            </div>

        <div className="bg_dark_about">
          <div className="container ">
            <div className="row">
              <div className="col-md-10 mx-auto text-center text-white"> 
          <h2 className='b2b-heading mb-5'>About Us</h2>
          <p className='b2b-text'>Base2Brand is one of the rapidly expanding website development and digital marketing companies in the country with offices in India and Canada. Our teams of professionals have constantly delivered distinguished and exceptional results by combining together creative ideas with extensive experience.</p>
        <p className='b2b-text'>Here at Base2Brand, we specialize in providing results-oriented online marketing solutions for small, medium and large businesses across the globe. We help businesses to build a sustainable and expressive association with clients. Experts at Base2Brand have the requisite talent and creativity to provide you with expected growth in the competitive market.</p>
        <div className="mt-5 text-center">
                <button className="b2b-btn b2b-btn-sm">Read More</button>
                </div>
        </div>
        </div>
        </div>
            </div>



              <div className="slick_slider_about position-relative b2b-black-bg">
              <Slider {...settings} className="w-100">

                <div className="center_slide">
                  <div className="product_name">
                    <p className="border_pro_name col-md-3">Sahbad Guru</p> 
                    <div className="detail_box col-md-6">
                      <p>Dedicated SEO work for ShabadGuru for 2 years, a premier website for Gurbani, Raags, and Kirtan.</p>
                      <p>We've enhanced Shabad Guru online visibility and accessibility so that spiritual wisdom can easily be found. </p>
                    </div>
                  </div>
                </div>

                <div className="center_slide">
                  <div className="product_name">
                    <p className="border_pro_name col-md-3">VIP Number Shop</p> 
                    <div className="detail_box col-md-6">
                      <p>We have propelled VIP Number Shop to new heights, a Bollywood celebrities trusted brand, through targeted Meta Ads, Google Ads, Social Media campaigns, and SEO optimizations.</p>
                      <p>We&apos;ve boosted visibility, engagement, and sales of VIP phone numbers for VIP Number Shop.</p>
                    </div>
                  </div>
                </div>
                <div className="center_slide">
                  <div className="product_name">
                    <p className="border_pro_name col-md-3">International Nanny</p> 
                    <div className="detail_box col-md-6">
                      <p>With four years of dedicated SEO efforts, International Nanny has achieved remarkable success in ranking for various keywords related to nanny services.</p>
                      <p>Our goal is to provide quality work to our clients like International Nanny for the long term.</p>
                    </div>
                  </div>
                </div>
                <div className="center_slide">
                  <div className="product_name">
                    <p className="border_pro_name col-md-3">Insight Media Solution</p> 
                    <div className="detail_box col-md-6">
                      <p>We have been working together for three years, Insights Media Solution has harnessed the power of SEO to elevate its service pages to top rankings.</p>
                      <p>We have cemented Insights Media Solution&apos;s reputation as a trusted leader in the digital marketing industry.</p>
                    </div>
                  </div>
                </div>
                <div className="center_slide">
                  <div className="product_name">
                    <p className="border_pro_name col-md-3">CZUR</p> 
                    <div className="detail_box col-md-6">
                      <p>Our partnership with CZUR, a leading brand in office gadgets and equipment, has been achieving their sales goals through organic traffic.</p>
                      <p>Together, we have opened up the possibility of using digital marketing to supply companies or individuals with electronic equipment.</p>
                    </div>
                  </div>
                </div>
                <div className="center_slide">
                  <div className="product_name">
                    <p className="border_pro_name col-md-3">Mayacare Foundation</p> 
                    <div className="detail_box col-md-6">
                      <p>Mayacare, a charitable organization that makes a difference in the lives of Persons with Disabilities (PWDs) and the elderly.</p>
                      <p>By using social media marketing strategically, we've been able to expand Mayacare&apos;s reach and reach more people in need.</p>
                    </div>
                  </div>
                </div>
                <div className="center_slide">
                  <div className="product_name">
                    <p className="border_pro_name col-md-3">World Interior Decor</p> 
                    <div className="detail_box col-md-6">
                      <p>World Interior Decor provides high-quality window curtains, blinds, and draperies.</p>
                      <p>By executing strategic Meta Ads and SEO, we've grown its online presence, making it easier for customers to find World Interior Decor&apos;s window solutions.</p>
                    </div>
                  </div>
                </div>
                <div className="center_slide">
                  <div className="product_name">
                    <p className="border_pro_name col-md-3">Healthy Bedroom</p> 
                    <div className="detail_box col-md-6">
                      <p>Healthy Bedroom, a luxurious mattress seller, has thrived under our guidance for four years.</p>
                      <p>Through meticulous Google Ads and SEO strategies, we've positioned Healthy Bedroom at the forefront of the luxury mattress market.</p>
                    </div>
                  </div>
                </div>
                </Slider>
              </div>
          
         
            <div className="pt-5 b2b-black-bg">
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <h2 className='b2b-main-heading text-center mb-5'>Reasons to collaborate<br />with Base2Brand</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="tabs_section pb-5 b2b-black-bg">
              <div className='container d-flex align-items-start'>
                
                  <div className='col-lg-3 tabsLink'>
                      <a id="mission_btn" className="tabBtn b2b-main-heading text-uppercase" href="#mission_tab" >
                        Mission
                      </a>

                      <a id="vission_btn" className="tabBtn b2b-main-heading text-uppercase" href="#vission_tab" >
                        Vission
                      </a>
                      <a id="values_btn" className="tabBtn b2b-main-heading text-uppercase" href="#values_tab" >
                        Values
                      </a>
                  </div>
                  <div className='col-lg-9'>
                    <Element name="test7" className="element" id="containerElement" style={{
                        position: 'relative',
                      }}>
                        <div className='innerWrap'>
                        
                          <div className="tabInnerWrap" id='mission_tab' data-id="mission_btn">
                            <p className='b2b-text'>Our mission is to create innovative products and hand-over excellency with constant emphasis on process quality, consumer satisfaction and transparency.</p>
                            <p className='b2b-text'>We aim to become a remarkable institution by providing premier IT-based services and solutions to establishments worldwide</p>
                          </div>
                         
                        
                            <div className="tabInnerWrap" id='vission_tab' data-id="vission_btn">
                                <p className='b2b-text'>The vision in your mind is the future you wish to achieve! The vision of the company is to provide high-quality services to our global clients.</p> 
                                <p className='b2b-text'>With our vision, we want to create a work environment that encourages creativity, innovation and self-growth.</p>
                            </div>
                       
                          <div className="tabInnerWrap" id='values_tab' data-id="values_btn">
                            <p className='b2b-text'>The strengths of any organization lie in the values they uphold. We believe that quality should be maintained while meeting deadlines. Hence, our USP is delivering quality services within the deadlines!</p>

                            <p className='b2b-text'>As a company, we strive to do business with moral correctness, integrity, and a sincere heart for others. Thus, here at Base2Brand, we work towards nurturing and inculcating them at every stage!</p>
                          </div>
                       
                        </div>
                      </Element>
                  </div>
                
              </div>
                

          

            
            </div>
              <div className="b2b-black-bg pb-3 pt-5" style={{ backgroundImage: `url(${radialRight.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right'}}>
                <div className="container p-5">
                  <div className="row">
                    <div className="col-md-9 mx-auto">

                    <div className="ceo_img">
                      <img className="QuoteIcon-about" src={QuoteIcon.src} alt="" />
                      <div className='row align-items-end'>
                        <div className="col-md-8">
                            <div className='center_desc_about'>
                                <h3 className='pt-5 mt-3'>Arti Bhatia is the founder of the Base2Brand. After Spending more than a decade in the IT Industry, Arti founded Base2Brand in 2020 with its headquarter in Mohali.</h3>
                                <div className="ceo_name_align">
                                  <h2>Arti Bhatia</h2>
                                  <p className='mb-0 b2b-text'>Base2Brand is a team of specialists that consistently delivers outstanding results by combining creative ideas with our vast experience in web design, development, and digital marketing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                          <img src={Ceo.src} alt="" />
                          </div>
                        </div>
                    
                    </div>
                    </div>

                  </div>
                </div>

                <div className='container mb-5 pt-5'>
                          <div className="row justify-content-center">
                            <div className="col-lg-12">
                              <h2 className='b2b-main-heading text-center mb-5 text-uppercase'>More about us</h2>
                            </div>
                            <div className="col-xl-4 col-lg-3 mb-3">
                              <a className="menuLink" href="/team">
                                <div className="menuInner b2b-pink-bg">
                                    <h3 className='b2b-title-text text-black'>Team</h3>
                                    <div className='d-flex align-items-center justify-content-between'>
                                      <p className='menuText mb-0'>We are proud of our experienced and accomplished team!</p>
                                      <span className='menuIcon pl-3'></span>
                                    </div>
                                </div>
                              </a>
                            </div>
                            <div className="col-xl-4 col-lg-3 mb-3">
                              <a className="menuLink" href="/career">
                                <div className="menuInner b2b-lightBlue-bg">
                                    <h3 className='b2b-title-text text-black'>Career</h3>
                                    <div className='d-flex align-items-center justify-content-between'>
                                      <p className='menuText mb-0'>Know the latest openings in<br />our organization.</p>
                                      <span className='menuIcon pl-3'></span>
                                    </div>
                                </div>
                              </a>
                            </div>
                          </div>
                </div>
              </div>
          <Footer />
        </div>

        {showModal && 
        <Request 
          onCloseModal={toggleModal} 
        />
      }
      </>
  );
}

