'use client'
import { useState, useEffect } from 'react';
// import Slide from '../slide/slide';
import Slide1 from '../slide/slide1';
import Slide2 from '../slide/slide2';
import Slide3 from '../slide/slide3';
import Slide4 from '../slide/slide4';
import Slide5 from '../slide/slide5';
import Slide6 from '../slide/slide6';
import Slider from "react-slick";
import './slide.css'; 
import '../project.css'; 
import './slider.js'; 
import Icon from '../../../public/service-icon/1.svg'
import Icon2 from '../../../public/service-icon/2.svg'
import Icon3 from '../../../public/service-icon/3.svg'
import Icon4 from '../../../public/service-icon/4.svg'
import Icon5 from '../../../public/service-icon/5.svg'
import Icon6 from '../../../public/service-icon/6.svg'
import Arrow from '../../../public/service-icon/arrow.png'
import Arrow1 from '../../../public/service-icon/arrow1.png'
import Arrow2 from '../../../public/service-icon/arrow2.png'
import Arrow3 from '../../../public/service-icon/arrow3.png'
import Arrow4 from '../../../public/service-icon/arrow4.png'
import Arrow5 from '../../../public/service-icon/arrow5.png'
const Home = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const handleScroll = (e:any) => {
  //     if (e.deltaY > 0 && currentSlide < slides.length - 1) {
  //       setCurrentSlide(prev => prev + 1);
  //     } else if (e.deltaY < 0 && currentSlide > 0) {
  //       setCurrentSlide(prev => prev - 1);
  //     }
  //   };

  //   window.addEventListener('wheel', handleScroll);

  //   return () => window.removeEventListener('wheel', handleScroll);
  // }, [currentSlide]);
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe:true,
    swipeToSlide:true,
    verticalSwiping:true, 
    touchMove:true,
  arrows: false,
  vertical: true,
  dots: true,
  speed: 1200,
  draggable:true,
  cssEase: 'cubic-bezier(0.86, 0, 0.07, 1)'
  };

  return (
    <> 
    <div className="section-padding-hm-serv w-100"> 
        <div className="b2b-container-lg"> 
          <div className="row">  
            <div className="col-md-12"  >
              <h2 className="b2b-heading text-center text-uppercase" data-aos="fade-up">Our Services for Your Digital Transformation</h2>
            </div> 
          </div> 
        </div> 
    </div> 
    <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up-left" data-aos-delay="300">
      <a href="shopify">
        <div className="service_box_outer greenGradiant">
          <div className="service_box_gradiant ">
            <div className="serviceIcon">
              <img className='IconAlign' src={Icon.src} alt="" />
              <div className="d-flex justify-content-between align-items-end mt-4">
                <h3 className='b2b-service-heading'>Shopify <br /> development</h3>
                <span className='b2b-service-text'>Learn more  <img className='arrowIcon' src={Arrow.src} alt="" /> </span>
              </div>
              </div>
            </div>
          </div>
          </a>
        </div>

        <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up-left" data-aos-delay="400">
          <a href="/digital-marketing">
            <div className="service_box_outer purpleGradiant">
              <div className="service_box_gradiant ">
                <div className="serviceIcon">
                  <img className='IconAlign' src={Icon6.src} alt="" />
                  <div className="d-flex justify-content-between align-items-end mt-4">
                    <h3 className='b2b-service-heading'>Digital  <br /> Marketing</h3>
                    <span className='b2b-service-text'>Learn more  <img className='arrowIcon' src={Arrow1.src} alt="" /> </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>


        <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up-left"data-aos-delay="500" >
          <a href="/e-commerce">
            <div className="service_box_outer skyBlueGradiant">
              <div className="service_box_gradiant ">
                <div className="serviceIcon">
                  <img className='IconAlign' src={Icon2.src} alt="" />
                  <div className="d-flex justify-content-between align-items-end mt-4">
                    <h3 className='b2b-service-heading'>Ecommrce  <br /> development</h3>
                    <span className='b2b-service-text'>Learn more  <img className='arrowIcon' src={Arrow2.src} alt="" /> </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>


        <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up-left" data-aos-delay="600">
          <a href="/graphic">
            <div className="service_box_outer yellowGradiant">
              <div className="service_box_gradiant ">
                <div className="serviceIcon">
                  <img  className='IconAlign' src={Icon3.src} alt="" />
                  <div className="d-flex justify-content-between align-items-end mt-4">
                    <h3 className='b2b-service-heading'>Graphic &amp; uI/UX  <br /> Designing</h3>
                    <span className='b2b-service-text'>Learn more  <img className='arrowIcon' src={Arrow3.src} alt="" /> </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>


        <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up-left" data-aos-delay="700">
          <a href="/web-application">
            <div className="service_box_outer pinkGradiant">
              <div className="service_box_gradiant ">
                <div className="serviceIcon">
                  <img className='IconAlign' src={Icon4.src} alt="" />
                  <div className="d-flex justify-content-between align-items-end mt-4">
                    <h3 className='b2b-service-heading'>Web  <br /> development</h3>
                    <span className='b2b-service-text'>Learn more  <img className='arrowIcon' src={Arrow4.src} alt="" /> </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>


        <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up-left" data-aos-delay="800">
          <a href="/app-development">
            <div className="service_box_outer blueGradiant">
              <div className="service_box_gradiant ">
                <div className="serviceIcon">
                  <img className='IconAlign' src={Icon5.src} alt="" />
                  <div className="d-flex justify-content-between align-items-end mt-4">
                    <h3 className='b2b-service-heading'>Mobile <br /> development</h3>
                    <span className='b2b-service-text'>Learn more  <img className='arrowIcon' src={Arrow5.src} alt="" /> </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div className="slide">
    <Slide6 />
    </div>
    {/* <div className="slide">
       <Slide1 />
    </div> */}
    {/* <div className="slide">
    <Slide2 />

    </div> */}
    {/* <div className="slide">
    <Slide3 />

    </div> */}
    {/* <div className="slide">
    <Slide4 />

    </div> */}
    {/* <div className="slide">
    <Slide5 />
    </div> */}
    

 
  </>
  );
};

export default Home;