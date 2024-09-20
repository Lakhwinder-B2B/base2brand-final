"use client";
import { useEffect, useState } from 'react';

const Demo = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const numSlides = 5; // Total number of slides
  const headerHeight = 300; // Adjust this to match your header's height

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.5 - headerHeight; // Adjusted for header height
      const slideHeight = window.innerHeight;
      const newActiveSlide = Math.floor(scrollY / slideHeight);
      if (newActiveSlide !== activeSlide) {
        setActiveSlide(newActiveSlide);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSlide]);

  return (
    <div className='container'>
      {Array.from({ length: numSlides }, (_, index) => (
        <div
          key={index}
          className={`slide ${index === activeSlide ? 'active' : ''}`}
          style={{ opacity: index === activeSlide ? 1 : 0.5 }}
        >
          Slide {index + 1}
        </div>
      ))}
      <style jsx>{`
        .container {
          position: relative;
          width: 100%;
          height: calc(100vh * ${numSlides} - ${headerHeight}px); // Adjusting total height for header
          overflow: hidden;
          scroll-snap-type: y mandatory;
        }

        .slide {
          height: calc(100vh - ${headerHeight}px); // Adjust slide height for header
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
          transition: opacity 0.5s ease;
          scroll-snap-align: start;
          position: relative;
          background-color: white; // Change as needed
          color: black; // Change as needed
        }

        .active {
          filter: none;
          opacity: 1;
        }

        .slide:not(.active) {
          filter: blur(4px);
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

export default Demo;
