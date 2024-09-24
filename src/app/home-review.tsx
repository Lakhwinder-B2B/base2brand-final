'use client';

import React from "react";
import Slider from "react-slick";
import './our-project.css';

const feedbacks = [
  {
    imgSrc: '/img/vip-number-shop.svg',
    text: 'I had the pleasure of working with an excellent and fully professional team comprising of Arti Bhatia, Ajay Kumar, Rakesh Kumar, and Aashu. They have delivered outstanding work, and I look forward to working with them in the future.',
    name: 'Deepak Dhingra',
    company: 'VIP NUMBER SHOP',
  },
  {
    imgSrc: '/img/Tim Hildebrand.svg',
    text: 'Excellent creatives, excellent ads posted. Highest quality work. Thank you! Already referred them to a friend who owns a marketing agency.',
    name: 'Tim Hildebrand ',
    company: 'DIG AGENCY',
  },
  {
    imgSrc: '/img/Askus Anytime Limited.svg',
    text: 'Excellent and skilled work and advice. Arti made sure that she understood our requirements and provided consistent feedback and provision as to what was being done and why with worked examples.',
    name: 'Owen',
    company: 'Askus Anytime Limited',
  },
  {
    imgSrc: '/img/David Mandler.svg',
    text: 'Excellent work! very responsive, reliable and fast! thank you so much for your work!',
    name: 'David Mandler',
    company: 'CEO & Founder at Vous Music Group Ltd',
  },
  {
    imgSrc: '/img/just-in-time.svg',
    text: 'Was good to collaborate and discuss innovative ideas. Was a very fair and pleasurable experience dealing with the team and we look forward to working together again soon.',
    name: 'Frank Quarato',
    company: 'CSEM, Inc.',
  }
];

const reviewSliderSettings = {
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 2500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 991, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
  ]
};

const FeedbackItem = ({ imgSrc, text, name, company }) => (
  <div className="bg_feedback">
    <div className="mb-3 reviewImgWrap">
      <img className="name_latter" src={imgSrc} alt={company} loading="lazy" />
    </div>
    <p className="b2b-text text-left">{text}</p>
    <div className="mt-4 pr-5">
      <div className="feedback_user">
        <h3 className="mb-0">{name}</h3>
        <p className="mb-0">{company}</p>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="bgimg_feed1 pt-5">
      <div className="container">
        <div className="row text-white">
          <div className="col-lg-11 col-md-11 col-11 m-auto p-0">
            <h3 className="b2b-main-heading text-center text-uppercase" data-aos="fade-up">
              What Our <strong>Clients</strong> Say
            </h3>
            <div className="reviewSlider mt-5" data-aos="fade-up" data-aos-delay="500">
              <Slider {...reviewSliderSettings} className="w-100">
                {feedbacks.map((feedback, index) => (
                  <FeedbackItem key={index} {...feedback} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
