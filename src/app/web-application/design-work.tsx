'use client' 
import React, { useState } from "react";  
import design1 from '../../../public/web-app/design1.svg'; 
import design2 from '../../../public/web-app/design2.svg'; 
import design3 from '../../../public/web-app/design3.svg'; 
import design4 from '../../../public/web-app/design4.svg'; 
import design5 from '../../../public/web-app/design5.svg'; 
import design6 from '../../../public/web-app/design6.svg'; 

import develop from '../../../public/web-app/develop.svg'; 
import backend from '../../../public/web-app/backend.svg'; 
import adminPanel from '../../../public/web-app/admin-panel.svg'; 

import WEB_STRATEGY from '../../../public/web-app/WEB_STRATEGY.svg'; 
import PLANNING_INFORMATION from '../../../public/web-app/PLANNING_INFORMATION.svg'; 
import CREATIVE_DESIGN from '../../../public/web-app/CREATIVE_DESIGN.svg'; 
import RESPONSIVE_DEVELOPMENT from '../../../public/web-app/RESPONSIVE_DEVELOPMENT.svg'; 
import QUALITY_ASSURANCE from '../../../public/web-app/QUALITY_ASSURANCE.svg'; 
import LAUNCH_OPTIMIZATION from '../../../public/web-app/LAUNCH_OPTIMIZATION.svg';

import system_website from '../../../public/web-app/system_website.png';

import Icon1 from '../../../public/web-app/icon1.svg'; 
import Icon2 from '../../../public/web-app/icon2.svg'; 
import Icon3 from '../../../public/web-app/icon3.svg'; 
import Icon4 from '../../../public/web-app/icon4.svg'; 
import Icon5 from '../../../public/web-app/icon5.svg'; 

import Icons1 from '../../../public/web-app/icons1.svg'; 
import Icons2 from '../../../public/web-app/icons2.svg'; 
import Icons3 from '../../../public/web-app/icons3.svg'; 
import Icons4 from '../../../public/web-app/icons4.svg'; 
import Icons5 from '../../../public/web-app/icons5.svg'; 

import Request from "../request-form";


export default function DesignWork() {
 
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };

  return (
    <>  
        <div className="designTabsWrap b2b-gray-bg"> 
            <div className="b2b-container-lg"> 
                <div className="row">
                    <div className="col-lg-12 m-auto">
                        <ul className="nav nav-pills mb-3 designTabs" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className=" active btn_design" id="pill1-tab" data-bs-toggle="pill" data-bs-target="#pill1" type="button" role="tab" aria-controls="pill1" aria-selected="true">
                                Web Strategy
                                <span><img src={design1.src} alt="" /></span>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className=" btn_design" id="pill2-tab" data-bs-toggle="pill" data-bs-target="#pill2" type="button" role="tab" aria-controls="pill2" aria-selected="false">
                                Planning &amp; Information Architecture
                                <span><img src={design2.src} alt="" /></span>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className=" btn_design" id="pill3-tab" data-bs-toggle="pill" data-bs-target="#pill3" type="button" role="tab" aria-controls="pill3" aria-selected="false">
                                Creative Design
                                <span><img src={design3.src} alt="" /></span>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className=" btn_design" id="pill4-tab" data-bs-toggle="pill" data-bs-target="#pill4" type="button" role="tab" aria-controls="pill4" aria-selected="false">
                                Responsive Development
                                <span><img src={design4.src} alt="" /></span>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className=" btn_design" id="pill5-tab" data-bs-toggle="pill" data-bs-target="#pill5" type="button" role="tab" aria-controls="pill5" aria-selected="false">
                                Quality Assurance (QA)
                                <span><img src={design5.src} alt="" /></span>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className=" btn_design" id="pill6-tab" data-bs-toggle="pill" data-bs-target="#pill6" type="button" role="tab" aria-controls="pill6" aria-selected="false">
                                Launch &amp; Optimization
                                <span><img src={design6.src} alt="" /></span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="designTabsContentWrap"> 
            <div className="b2b-container-lg"> 
                <div className="row">
                    <div className="col-lg-12 m-auto">                
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pill1" role="tabpanel" aria-labelledby="pill1-tab">
                                <div>
                                    <div className="row align-items-center"> 
                                        <div className="col-md-6 text-white"> 
                                            <h1 className="b2b-sub-heading mb-3">Web Strategy</h1>
                                            <p className="b2b-text-sm">Before we put pen to paper (or start on your digital design, rather), we conduct thorough research into your industry, competitors and target market to gather insights that will inform your custom digital strategy</p>
                                            <p className="b2b-text-sm fw-semibold">In this phase, we</p>
                                            <ul className="arrowListing">
                                                <li>Identify the ideal positioning for your brand</li>
                                                <li>Collect target audience data and create user personas</li>
                                                <li>Define valuable content and marketing channels</li>
                                                <li>Define KPIs to measure performance</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={WEB_STRATEGY.src} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pill2" role="tabpanel" aria-labelledby="pill2-tab">
                            <div>
                                    <div className="row align-items-center"> 
                                        
                                        <div className="col-md-6 text-white"> 
                                            <h1 className="b2b-sub-heading mb-3">Planning &amp; Information Architecture</h1>
                                            <p className="b2b-text-sm">Next, we map out your unique landing pages and define your site map and navigation. We create a plan for your URL structure, along with redirects and a search engine optirnization strategy, careful to maintain any existing SEO value from your current site, if applicable</p>
                                            <p className="b2b-text-sm fw-semibold">In this phase, we</p> 
                                            <ul className="arrowListing">
                                                <li>Design your site structure, navigation and page hierarchy</li>
                                                <li>Map out the conversion funnel for each unique landing page</li>
                                                <li>Create black and white wireframes to show you the bones of your new site</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={PLANNING_INFORMATION.src} alt="" />
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div className="tab-pane fade" id="pill3" role="tabpanel" aria-labelledby="pill3-tab">
                                    <div className="row align-items-center"> 
                                        
                                        <div className="col-md-6 text-white"> 
                                            <h1 className="b2b-sub-heading mb-3">Creative Design</h1>
                                            <p className="b2b-text-sm">Here's where your website begins to come to life, as ow award-winning designers step in Your design is filled with color and custom elements as we incorporate your brand's personality and tailor the user journey to your target market.</p>
                                            <p className="b2b-text-sm fw-semibold">In this phase, we</p> 
                                            <ul className="arrowListing">
                                                <li>Design your custom website</li>
                                                <li>Incorporate your unique branding elements</li>
                                                <li>Present you with Tull-scale designs in Figma</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={CREATIVE_DESIGN.src} alt="" />
                                        </div>
                                    </div>
                            </div>
                            <div className="tab-pane fade" id="pill4" role="tabpanel" aria-labelledby="pill4-tab">
                                    <div className="row align-items-center"> 
                                        
                                        <div className="col-md-6 text-white"> 
                                            <h1 className="b2b-sub-heading mb-3">Responsive Development</h1>
                                            <p className="b2b-text-sm">In the development phase, our expert development team works behind the scenes to build a custoin, secure and scalable solution for your brand, on your chosen platform From B2B to eCommerce, we ensure clean code and a website that's fully optimized.</p>
                                            <p className="b2b-text-sm fw-semibold">In this phase, we</p> 
                                            <ul className="arrowListing">
                                                <li>Write and finalize coding for your website</li>
                                                <li>Bring your custom solution to life in a secure staging site</li>
                                                <li>Ensure a responsive solution for both desktop and mobile</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={RESPONSIVE_DEVELOPMENT.src} alt="" />
                                        </div>
                                    </div>
                            </div>
                            <div className="tab-pane fade" id="pill5" role="tabpanel" aria-labelledby="pill5-tab">
                                    <div className="row align-items-center"> 
                                        
                                        <div className="col-md-6 text-white"> 
                                            <h1 className="b2b-sub-heading mb-3">Quality Assurance (QA)</h1>
                                            <p className="b2b-text-sm">Before we push your custom solution live for the world to see, we follow a stringent quality assurance process, leaving no stone unturned We continuously test your site's speed, functionality and other key elements to make sure it's ready for Launch</p>
                                            <p className="b2b-text-sm fw-semibold">In this phase, we</p> 
                                            <ul className="arrowListing">
                                                <li>Perform meticulously testing across the frontend and backend</li>
                                                <li>Ensure all features and functionalities are working as intended</li>
                                                <li>Make changes as needed to ensure a superior user experience</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={QUALITY_ASSURANCE.src} alt="" />
                                        </div>
                                    </div>
                            </div>
                            <div className="tab-pane fade" id="pill6" role="tabpanel" aria-labelledby="pill6-tab">
                                    <div className="row align-items-center"> 
                                        
                                        <div className="col-md-6 text-white"> 
                                            <h1 className="b2b-sub-heading mb-3">Launch &amp; Optimization</h1>
                                            <p className="b2b-text-sm">When our QA is complete, it's time for launch! Our team will set up your server, carry out the DNS configuration and make sure all updates are finalized We'll provide Cloudflare security protection, along with both internal and external monitoring.</p>
                                            <p className="b2b-text-sm fw-semibold">In this phase, we</p> 
                                            <ul className="arrowListing">
                                                <li>Perform final QA testing</li>
                                                <li>Devise a marketing plan for launch</li>
                                                <li>Push your new digital solution live</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={LAUNCH_OPTIMIZATION.src} alt="" />
                                        </div>
                                    </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-5 interfaceWrap mt-4">
            <div className="b2b-container-lg">
                <div className="row">
                    <div className="col-lg-12 mb-5">
                        <h2 className="text-center mb-3 b2b-heading">Proficient in Each Interface of a Website Development</h2>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <div className="cell-wrap b2b-gray-bg text-center">
                        <img src={develop.src} className="imgIcon" alt="" />
                        <h3>Front-end</h3>
                        <p className="b2b-text mb-0">Craft intuitive interfaces, captivating designs, and seamless navigation for engaging user experiences on websites and applications.</p>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <div className="cell-wrap b2b-gray-bg text-center">
                        <img src={backend.src} className="imgIcon" alt="" />
                        <h3>Front-end + Backend</h3>
                        <p className="b2b-text mb-0">Build robust, scalable, and secure server-side solutions, optimizing performance and data processing for reliable digital operations.</p>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <div className="cell-wrap b2b-gray-bg text-center">
                        <img src={adminPanel.src} className="imgIcon" alt="" />
                        <h3>Admin Panel</h3>
                        <p className="b2b-text mb-0">Develop intuitive tools for managing websites and applications, empowering administrators with efficient content control and system oversight.</p>
                      </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="py-5 b2b-gray-bg">
          <div className="container">
              <div className="row align-items-center"> 
                  <div className="col-md-5">
                    <img className="w-100" src={system_website.src} alt="" /> 
                  </div>
                  <div className="col-md-7 text-white"> 
                      <h1 className="b2b-main-heading mb-3">Why Does Your Business <br />Need a Website?</h1>
                      <p className="b2b-text-sm">In today's digital landscape, a website serves as your business's virtual storefront, accessible to potential customers 24/7. It establishes credibility, expands market reach, and facilitates customer engagement. A well-designed website showcases your brand, offers valuable information, and converts visitors into loyal customers, driving growth and fostering lasting relationships.</p>
                      <button onClick={toggleModal} className="b2b-btn b2b-btn-sm m-0 mt-3" >Request a Quote</button>
                  </div>
                  
              </div>
          </div>
        </div>
        <div className="w-100 py-5"> 
            <div className="b2b-container-lg">
                <div className="row">
                    <div className="col-lg-9 m-auto">
                        <h3 className="b2b-heading text-center">Web Development Services We Offer</h3>
                        <p className="b2b-text text-center">We cater to our client&apos;s unique and diverse business requirements with our end-to-end web development services. Design responsive web apps that work perfectly on desktops, tablets, and smartphones.</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-xl-6 mb-5">
                        <div className="deliverable-step">
                            <div className="deliverable-icon">
                                <div className="deliverable-icon-bg">
                                    <img src={Icon1.src} alt="" />
                                </div>
                            </div>
                            <div className="deliverable-content">
                                <h2 className="b2b-sub-heading">Website Development</h2>
                                <p className="b2b-text">Crafted from scratch, our custom websites are tailored to your unique business needs, ensuring a personalized online presence that resonates with your audience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 mb-5">
                        <div className="deliverable-step">
                            <div className="deliverable-icon">
                                <div className="deliverable-icon-bg">
                                    <img src={Icon2.src} alt="" />
                                </div>
                            </div>
                            <div className="deliverable-content">
                                <h2 className="b2b-sub-heading">Responsive Web Design</h2>
                                <p className="b2b-text">With our responsive web design expertise, your website will adapt flawlessly to various devices and screen sizes, providing an optimal viewing experience for every visitor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 mb-5">
                        <div className="deliverable-step">
                            <div className="deliverable-icon">
                                <div className="deliverable-icon-bg">
                                    <img src={Icon3.src} alt="" />
                                </div>
                            </div>
                            <div className="deliverable-content">
                                <h2 className="b2b-sub-heading">Ecommerce Development</h2>
                                <p className="b2b-text">We create dynamic online stores with seamless navigation, secure payment gateways, and intuitive product management systems to empower your business.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 mb-5">
                        <div className="deliverable-step">
                            <div className="deliverable-icon">
                                <div className="deliverable-icon-bg">
                                    <img src={Icon4.src} alt="" />
                                </div>
                            </div>
                            <div className="deliverable-content">
                                <h2 className="b2b-sub-heading">CMS Development</h2>
                                <p className="b2b-text">Our CMS solutions offer user-friendly interfaces for effortless content creation, editing, and publishing, enabling you to maintain a dynamic and engaging online presence with ease.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 mb-5">
                        <div className="deliverable-step">
                            <div className="deliverable-icon">
                                <div className="deliverable-icon-bg">
                                    <img src={Icon5.src} alt="" />
                                </div>
                            </div>
                            <div className="deliverable-content">
                                <h2 className="b2b-sub-heading">Web Application Development</h2>
                                <p className="b2b-text">Our web applications are designed to streamline processes, enhance user engagement, and drive efficiency, leveraging cutting-edge technologies to deliver intuitive and scalable solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        
        </div>
        <div className="py-5 b2b-gray-bg">
          <div className="b2b-container-lg">
              <div className="row align-items-center"> 
                  <div className="col-md-6 text-white"> 
                      <h1 className="b2b-main-heading mb-3">More About Custom <br />Website Development</h1>
                      <p className="b2b-text-sm">Custom website development crafts unique, brand-tailored sites, bypassing templates for precise alignment with your objectives. This approach allows for unlimited creativity, specialized features, and optimal user experience, driving standout online presence and business growth. With advanced functionalities and search engine optimization, your website stands out, effectively meeting business goals in the digital realm.</p>
                      <p className="b2b-text-sm">Our custom approach integrates advanced functionalities and SEO, ensuring your website's prominence and effectiveness in achieving business objectives in the digital realm.</p>
                      
                  </div>
                  <div className="col-md-6 text-white"> 
                    <div className="accordion accordion-flush b2b-accordion about-accordion" id="accordionFlushExample">
                        <div className="accordion-item"  >
                            <h2 className="accordion-header fs-4">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-abt-1" aria-expanded="false" aria-controls="flush-collapse-abt-1">
                            UI/UX Designers
                            </button>
                            </h2>
                            <div id="flush-collapse-abt-1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body"><p>Our UI/UX designers create custom websites by focusing on optimizing user experience through intuitive navigation and aesthetic appeal. They align functionalities with client goals, integrating user research, wireframing, prototyping, and testing to ensure engaging digital experiences for target audiences.</p></div>
                            </div>
                        </div>
                        <div className="accordion-item"  >
                            <h2 className="accordion-header fs-4">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-abt-2" aria-expanded="false" aria-controls="flush-collapse-abt-2">
                            Front-end Developers
                            </button>
                            </h2>
                            <div id="flush-collapse-abt-2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body"><p>Team of front-end developers at Base2Brand enhance user experience by translating UI/UX designs into interactive web interfaces. They utilize languages like HTML, CSS, and JavaScript to ensure responsiveness, accessibility, and seamless functionality across various devices and browsers.</p></div>
                            </div>
                        </div>
                        <div className="accordion-item"  >
                            <h2 className="accordion-header fs-4">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-abt-3" aria-expanded="false" aria-controls="flush-collapse-abt-3">
                            Back-end Developers
                            </button>
                            </h2>
                            <div id="flush-collapse-abt-3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body"><p>To create a custom website, our back-end developers focus on server-side operations and database management to ensure the functionality and performance of websites and applications. They use languages like Python, PHP, Ruby, or Java to handle data storage, security, and server logic.</p></div>
                            </div>
                        </div>
                        <div className="accordion-item"  >
                            <h2 className="accordion-header fs-4">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-abt-4" aria-expanded="false" aria-controls="flush-collapse-abt-4">
                            Full-Stack Developers
                            </button>
                            </h2>
                            <div id="flush-collapse-abt-4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body"><p>Our full-stack developers are proficient in both front-end and back-end technologies, enabling them to oversee entire web development projects. They handle client-side and server-side tasks, ensuring cohesive integration and optimal performance across all aspects of digital solutions.</p></div>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
        <div className="py-5 whyChooseWrap" >
          <div className="b2b-container-lg">
            <div className="row">
              <div className="col-md-8 text-center m-auto" >
                <h3 className='b2b-partners-heading'>Why Choose Us?</h3> 
                <p className="text-white">Choose us for web development Service because we offer tailored solutions that align with your unique business goals. Our experienced team ensures top-notch quality, timely delivery, and ongoing support.</p>
              </div>
              <div className="col-lg-8 m-auto">
                <div className="row mt-4">
                    <div className="col-lg-6 mb-4">
                      <div className="cell-wrap b2b-gray-bg">
                        <img src={Icons4.src} className="imgIcon" alt="" />
                        <div className="ps-4">
                            <h3>Team of Experts</h3>
                            <p className="b2b-text mb-0">Years of experience and skilled professionals ensure diverse expertise in web development, guaranteeing precision and excellence throughout your project's execution.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="cell-wrap b2b-gray-bg">
                        <img src={Icons1.src} className="imgIcon" alt="" />
                        <div className="ps-4">
                            <h3>Custom Solutions</h3>
                            <p className="b2b-text mb-0">We understand that every business is unique. Our custom solutions are tailored to your specific needs, ensuring that your website reflects your brand identity and meets your objectives perfectly.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="cell-wrap b2b-gray-bg">
                        <img src={Icons2.src} className="imgIcon" alt="" />
                        <div className="ps-4">
                            <h3>Responsive Design</h3>
                            <p className="b2b-text mb-0">Our websites are designed to adapt seamlessly to different devices and screen sizes, providing an optimal user experience for visitors regardless of how they access your site.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="cell-wrap b2b-gray-bg">
                        <img src={Icons3.src} className="imgIcon" alt="" />
                        <div className="ps-4">
                            <h3>Quality Assurance</h3>
                            <p className="b2b-text mb-0">Rigorous testing ensures flawless website functionality, delivering a smooth, error-free user experience through integrated quality assurance procedures in our development process.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="cell-wrap b2b-gray-bg">
                        <img src={Icons4.src} className="imgIcon" alt="" />
                        <div className="ps-4">
                            <h3>Communication</h3>
                            <p className="b2b-text mb-0">We prioritize clear and transparent communication, keeping you informed every step of the way and ensuring your feedback is incorporated into the final product.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="cell-wrap b2b-gray-bg">
                        <img src={Icons5.src} className="imgIcon" alt="" />
                        <div className="ps-4">
                            <h3>Customer Satisfaction</h3>
                            <p className="b2b-text mb-0">Our ultimate goal is your satisfaction. We exceed expectations by delivering high-quality, innovative solutions that not only meet but surpass your requirements, ensuring a positive experience working with us.</p>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
                
        </div> 
        {showModal && 
        <Request 
          onCloseModal={toggleModal} 
        />
      }
</>
)
}