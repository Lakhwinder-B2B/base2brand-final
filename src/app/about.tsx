'use client';

import React, { useState } from "react"; 
import Image from 'next/image';


const images = {
  frontend: [
    { src: "/img/languages/Group 1707480008.svg", alt: "HTML", width: 50, height: 50 },
    { src: "/img/languages/Group 1707480009.svg", alt: "CSS", width: 50, height: 50 },
    { src: "/img/languages/Group 1707480012.svg", alt: "Angular", width: 50, height: 50 },
    { src: "/img/languages/Group 1707480011.svg", alt: "JavaScript", width: 50, height: 50 },
    { src: "/img/languages/Group 1707480010.svg", alt: "React", width: 50, height: 50 },
    { src: "/img/languages/Group 1707480015.svg", alt: "Flutter", width: 50, height: 50 },
  ],
  backend: [
    { src: "/img/languages/php.svg", alt: "PHP", width: 50, height: 50 },
    { src: "/img/languages/nodejs.svg", alt: "Node.js", width: 50, height: 50 },
    { src: "/img/languages/jsbackend.svg", alt: "JavaScript Backend", width: 50, height: 50 },
  ],
  ecommerce: [
    { src: "/img/languages/shopify.svg", alt: "Shopify", width: 50, height: 50 },
    { src: "/img/languages/woocemerse.svg", alt: "WooCommerce", width: 50, height: 50 },
    { src: "/img/languages/shopiftpp.svg", alt: "Shopify Plus", width: 50, height: 50 },
    { src: "/img/languages/emet.svg", alt: "Emet", width: 50, height: 50 },
    { src: "/img/languages/wordpress.svg", alt: "WordPress", width: 50, height: 50 },
    { src: "/img/languages/shopifyplus.svg", alt: "Shopify Plus", width: 50, height: 50 },
  ],
  framework: [
    { src: "/img/languages/net.svg", alt: ".NET", width: 50, height: 50 },
    { src: "/img/languages/f1.svg", alt: "Framework 1", width: 50, height: 50 },
    { src: "/img/languages/firebase.svg", alt: "Firebase", width: 50, height: 50 },
    { src: "/img/languages/codeintiger.svg", alt: "CodeIgniter", width: 50, height: 50 },
    { src: "/img/languages/cakephp.svg", alt: "CakePHP", width: 50, height: 50 },
  ]
};

export default function Homeabout() {
  const [activeTab, setActiveTab] = useState('frontend'); // State for active tab

  const renderImages = (category) => (
    images[category].map(({ src, alt, width, height }, index) => (
      <div key={index} className="p-0 m-1 col">
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
    ))
  );

  return (
    <div className="blackGradient b2b-brands-wrap ">
      
      <div className="b2b-container-lg py-md-5 py-sm-1 py-1">  
        <div className="col-md-12 text-center">
          <h2 className="b2b-main-heading" data-aos="fade-up-right">Technologies we use</h2> 
          <h3 className="b2b-title-text" data-aos="fade-up-right" data-aos-delay="300">We use cutting-edge technologies to craft fully automated solutions</h3>
        </div>
        <div className="row pt-4">
          <div className="btn-col col-lg-5">
            <div className="nav flex-column nav-pills me-3 gap-lg-5 gap-md-4 gap-2 gap-md-3 btn-col" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              {Object.keys(images).map((key) => (
                <button
                  key={key}
                  className={`nav-link  ${key === activeTab ? `${key}-active` : ''}` }
                  id={`v-pills-${key}-tab`}
                  data-bs-toggle="pill"
                  data-bs-target={`#v-pills-${key}`}
                  type="button"
                  role="tab"
                  aria-controls={`v-pills-${key}`}
                  aria-selected={key === activeTab}
                  onClick={() => setActiveTab(key)}
                >
                  {key.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <div className="contant-col col-lg-7" >
            <div className="tab-content" id="v-pills-tabContent">
              {Object.keys(images).map((key) => (
                <div
                  key={key}
                  className={`tab-pane fade ${key === activeTab ? 'show active' : ''}`}
                  id={`v-pills-${key}`}
                  role="tabpanel"
                  aria-labelledby={`v-pills-${key}-tab`}
                >
                  <p className="col-12 b2b-sub-text aos-init aos-animate pt-lg-2 pt-2">
                    Our approach includes use of state-of-the-art technologies and tools across digital marketing, web development, and graphic design to deliver customized digital solutions tailored to address your most intricate challenges.
                  </p>
                  <div className="row row-cols-lg-4 row-cols-3 justify-content-center justify-content-lg-start pt-lg-2 pt-2 gap-4">
                    {renderImages(key)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
