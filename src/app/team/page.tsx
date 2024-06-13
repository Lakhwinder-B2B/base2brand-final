"use client";

import React, { useEffect,useState, useRef } from 'react';
import Header from "../../../component/header";
import AboutMask from "../../../public/about-img/about-mask.png";
import Ceo from "../../../public/about-img/ceo.svg"
import About1 from "../../../public/about-img/about1.svg"
import About2 from "../../../public/about-img/about-left.svg"
import AboutColumns from "../about-columns"
import Quote from "../request-quote";
import Footer from "../../../component/footer";
import "../about/about.css";
import Request from "../request-form";
import radialBg from '../../../public/img/radial_bg.svg'; 
import Slider from "react-slick";
import { Link,  Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import radialRight from '../../../public/img/radial-right.svg'; 



export default function Team() {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  const settings = {
    dots: true,
    arrows : true, 
    infinite: true,
    centerMode: true,
    autoplay: false,
    autoplaySpeed: 2500,
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

  const tabContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeTab = tabContainerRef.current?.querySelector('.nav-link.active');
    if (activeTab) {
      const parentRect = tabContainerRef.current?.getBoundingClientRect();
      const activeRect = activeTab.getBoundingClientRect();
      const isInView = activeRect.top >= parentRect.top && activeRect.bottom <= parentRect.bottom;
      if (!isInView) {
        const offset = activeRect.top - parentRect.top - (parentRect.height - activeRect.height) / 2;
        tabContainerRef.current?.scrollBy({ top: offset, behavior: 'smooth' });
      }
    }
  }, []);



  return (
    <>
      <Header />
        <div className="bg_about pt-0 pb-0">
          <div className="about-mask pt-5" data-aos="fade-up" style={{backgroundImage: `url(${radialBg.src})`,width: '100%',height: '100%',}}>
          <div className="row m-0 position-relative text-white pt-5"> 
              <div className="col-12 col-sm-12 col-md-4 position-relative ph_remove_about" data-aos="slide-down">
              <img className="about_bottom" src={About2.src} alt="" />
                
              </div>
              <div className="col-12 col-sm-12 col-md-4 text-center">
                  <h1>SMART IDEAS FOR <br /> YOUR BRAND ARE HERE.</h1>
                  <p>We blend incredible Design and Development Skills with phenomenol Digital Marketing techniques to furnish your brand with the online solutions you deserve</p>
                  <div className="mt-5 text-center mb-5 pb-5">
                <button className="b2b-btn b2b-btn-lg">Request a Quote </button>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 position-relative">
              <img className="about_bottom" src={About1.src} alt="" />

              </div>
             
            </div>
            </div>

        <div className="bg_dark_about">
          <div className="container ">
            <div className="row">
              <div className="col-md-10 mx-auto text-center text-white"> 
          <h1>About Us</h1>
          <p className='b2b-text'>Base2Brand is one of the rapidly expanding website development and digital marketing companies in the country with offices in India and Canada. Our teams of professionals have constantly delivered distinguished and exceptional results by combining together creative ideas with extensive experience.</p>
        <p className='b2b-text'>Here at Base2Brand, we particularize in providing results-oriented integrated online marketing solutions for medium and large businesses across the globe. We facilitate businesses to build a sustainable and expressive association with clients. Experts at Base2Brand have the requisite talent and creativity to provide you with a Professional Online Marketing Strategy.</p>
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
          
         
            <div className="tabs_section py-5 b2b-black-bg">
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <h2 className='b2b-main-heading text-center mb-5'>Reasons to collaborate<br />with Base2Brand</h2>
                  </div>
                  <div className='col-lg-3 tabsLink'>
                      <Link className="b2b-main-heading text-uppercase" activeClass="active" to="firstInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement">
                        Mission
                      </Link>

                      <Link className="b2b-main-heading text-uppercase" activeClass="active" to="secondInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement">
                        Vission
                      </Link>
                      <Link className="b2b-main-heading text-uppercase" activeClass="active" to="thirdInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement">
                        Values
                      </Link>
                  </div>
                  <div className='col-lg-9'>
                    <Element name="test7" className="element" id="containerElement" style={{
                        position: 'relative',
                        height: '200px',
                        overflowY: 'scroll',
                        scrollBehavior: 'smooth',
                      }}>
                        <div className='innerWrap'>
                        <Element name="firstInsideContainer" style={{
                            paddingBottom: '200px'
                          }}>
                          <p className='b2b-text'>Our mission is to create innovative products and hand-over excellency with constant emphasis on process quality, consumer satisfaction and transparency.</p>
                          <p className='b2b-text'>We aim to become a remarkable institution by providing premier IT-based services and solutions to establishments worldwide</p>
                        </Element>

                        <Element name="secondInsideContainer" style={{
                            paddingBottom: '200px'
                          }}>
                            <p className='b2b-text'>The vision in your mind is the future you wish to achieve! The vision of the company is to provide high-quality services to our global clients.</p> 
                            <p className='b2b-text'>With our vision, we want to create a work environment that encourages creativity, innovation and self-growth.</p>
                        </Element>
                        <Element name="thirdInsideContainer" style={{
                            paddingBottom: '0px'
                          }}>
                            <p className='b2b-text'>The strengths of any organization lie in the values they uphold. We believe that quality should be maintained while meeting deadlines. Hence, our USP is delivering quality services within the deadlines!</p>

                            <p className='b2b-text'>As a company, we strive to do business with moral correctness, integrity, and a sincere heart for others. Thus, here at Base2Brand, we work towards nurturing and inculcating them at every stage!</p>
                        </Element>
                        </div>
                      </Element>
                  </div>
                </div>
              </div>
                

          

            
            </div>
              <div className="b2b-black-bg pb-3" style={{ backgroundImage: `url(${radialRight.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right'}}>
                <div className="container p-5">
                  <div className="row">
                    <div className="col-md-8 mx-auto">

                    <div className="ceo_img" style={{backgroundImage: `url(${Ceo.src})`,width: '100%',height: '100%',}}>
                    <div className='center_desc_about'>
                      <h3 className='pt-5 mt-3'>Arti Bhatia is the Co-founder, CEO, and growth hacker at Base2Brand  headquartered in MOhali, India, and an office in U.K., CANADA..</h3>
                        <div className="ceo_name_align">
                        <h2>Arti Bhatia</h2>
                          <p className='mb-0 b2b-text fs-7'>Base2Brand is a team of creative and great minds that resonate and find solutions to all the challenges and hardships they face in their jobs.</p>
                    </div>
                    </div>
                    </div>
                    </div>

                  </div>
                </div>

                <div className='container mb-5'>
                          <div className="row justify-content-center">
                            <div className="col-lg-12">
                              <h2 className='b2b-main-heading text-center mb-5'>More about us</h2>
                            </div>
                            <div className="col-lg-3 mb-3">
                              <div className="menuInner b2b-pink-bg">
                                  <h3 className='b2b-title-text text-black'>Team</h3>
                                  <div className='d-flex align-items-center justify-content-between'>
                                    <p className='menuText mb-0'>We are proud of our experienced and accomplished team!</p>
                                    <span className='menuIcon pl-3'></span>
                                  </div>
                              </div>
                            </div>
                            <div className="col-lg-3 mb-3">
                              <div className="menuInner b2b-lightBlue-bg">
                                  <h3 className='b2b-title-text text-black'>Career</h3>
                                  <div className='d-flex align-items-center justify-content-between'>
                                    <p className='menuText mb-0'>Can you offer such<br /> experience?</p>
                                    <span className='menuIcon pl-3'></span>
                                  </div>
                              </div>
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

