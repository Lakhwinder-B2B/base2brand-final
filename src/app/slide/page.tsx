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
            <div className="col-md-12 mb-5 mb-mb-0"  >
              <h2 className="b2b-heading text-center text-uppercase" >Our Services for Your Digital Transformation</h2>
            </div> 
          </div> 
        </div> 
    </div> 
    <div className="slide">
    <Slide6 />
    </div>
    <div className="slide">
       <Slide1 />
    </div>
    <div className="slide">
    <Slide2 />

    </div>
    <div className="slide">
    <Slide3 />

    </div>
    <div className="slide">
    <Slide4 />

    </div>
    <div className="slide">
    <Slide5 />
    </div>
    

 
  </>
  );
};

export default Home;