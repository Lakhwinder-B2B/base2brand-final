'use client'

import React from "react"; 
import banner from '../../public/img/feedback-banner.png';        
import name from '../../public/img/name.png';        
import char from '../../public/img/char.jpg';        
import vip from '../../public/img/vip.svg';        
import seera from '../../public/img/seera.jpg';        
import video from '../../public/img/aumi.png';        
import aumi from '../../public/img/aumi2.jpg';        
import pro from '../../public/img/pro.jpg';        
import csem from '../../public/img/csem.svg';        
import './our-project.css'

export default function Home() {
 
  return (  
    <>  
    {/* <div className="bgimg" style={{
      backgroundImage: `url(${banner.src})`,
      width: '100%',
      height: '600px',
      display:'flex',
      alignItems: 'center',
      backgroundSize: 'cover', 
      position: 'relative',
    }}> */}
      <div className="bgimg_feed1 b2b-gray-bg">
      <div className="container-fluid"> 
          <div className="row text-white"> 
              <div className="col-md-12 p-0">
              <h3 className="b2b-main-heading text-center text-uppercase pt-5">What Our <strong>Clients</strong> Say</h3>
     <div id="carouselExampleDark" className="carousel carousel-dark slide " data-bs-ride="carousel"> 
       <div className="carousel-inner">
        <div className="carousel-item active"  > 
        <div className="p-5 Mainslide">
          <div className="container">
         <div className="row pl-5 pr-5">
          <div className="col-md-12 position-relative" data-aos="fade-left">
            {/* <p>Read what our clients have to say! Their feedback speaks volumes about our dedication to excellence. From prompt communication to stellar results, our clients consistently praise our commitment to quality and satisfaction. Check out their testimonials to learn more about their experiences working with us!</p> */}
            <div className="d-flex flex-wrap justify-content-start gap-10">
              
               
            </div>
          </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
                  <div className="col-md-6" data-aos="fade-right">
                    <div className="bg_feedback">
                    <div className="mb-3"><img className="name_latter miui" src={vip.src} alt="Product" /></div>
                      <p className="b2b-texttext-left"> I had the pleasure of working with an excellent and fully professional team comprising of Arti Bhatia, Ajay Kumar, Rakesh Kumar, and Aashu. They have delivered outstanding work, and I look forward to working with them in the future. Despite having very high standards and a deep understanding of what I wanted, they exceeded my expectations and delivered exceptional results. I got my full money&apos;s worth and more. Thank you for creating a website that was better than I imagined and for maintaining professionalism throughout the project. I highly recommend them to anyone seeking top-quality website design services.</p>
                        <div className="d-flex justify-content-start mt-4">
                        <div className="right d-flex align-items-center text-left pr-5">
                      
                          <div className="feedback_user ml-3">
                            <h3 className="mb-0 fs-6">Deepak Dhingra</h3>
                            <p className="mb-0 fs-6">VIP NUMBER SHOP</p>
                          </div>
              
                        </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-6" data-aos="fade-right">
            <div className="bg_feedback">
              <div className="mb-3"><img className="name_latter miui" src={csem.src} alt="Product" /></div>
              <p className="b2b-text text-left">Was good to collaborate and discuss innovative ideas. Was a very fair and pleasurable experience dealing with the team and we look forward to working together again soon.</p>
              <div className="d-flex justify-content-start mt-4">
              <div className="right d-flex align-items-center text-left pr-5">
                
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">Frank Quarato</h3>
                    <p className="mb-0 fs-6">CSEM, Inc. </p>
                  </div>
                </div>

                </div>
            </div>
        </div>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
        </div>
        </div>
      </div>
    </div>
    <div className="carousel-item "  > 
        <div className="p-5 Mainslide">
        <div className="container">

         <div className="row pl-5 pr-5">
          <div className="col-md-12 position-relative" data-aos="fade-left">
         
            {/* <p>Read what our clients have to say! Their feedback speaks volumes about our dedication to excellence. From prompt communication to stellar results, our clients consistently praise our commitment to quality and satisfaction. Check out their testimonials to learn more about their experiences working with us!</p> */}
            <div className="d-flex flex-wrap justify-content-start gap-10">
             
             
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <div className="col-md-6" data-aos="fade-right">
            <div className="bg_feedback">
              <div className="mb-3"><img className="name_latter" src={pro.src} alt="Product" /></div>
              <p className="b2b-text text-left">Base2Brand provides excellent social media marketing management, but their ability to be effective communicators sets them apart from the crowd. We&apos;ve had the pleasure of working with scores of UpWork Freelancers and are well aware of how rare it is to find assistance that has the technological expertise AND the skills to effectively communicate at every stage of the project -- this is what Base2Brand does so well! </p>
              <div className="d-flex justify-content-start mt-4">
                        <div className="right d-flex align-items-center text-left pr-5">
        
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">Christopher Meyer</h3>
                    <p className="mb-0 fs-6">Proimpact Group </p>
                  </div>
                </div>

                </div>
            </div>
        </div>
        <div className="col-md-6" data-aos="fade-right">
            <div className="bg_feedback">
              <div className="mb-3"> <img className="name_latter" src={video.src} alt="Product" /></div>
              <p className="b2b-text text-left">Arti and the Team were very communicative and eager to work together efficiently. Work was completed on time and if corrections were needed, they made it right away. I would recommend and hire again.</p>
              <div className="d-flex justify-content-start mt-4">
                        <div className="right d-flex align-items-center text-left pr-5">
               
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">Jimbo Marshall</h3>
                    <p className="mb-0 fs-6">That Video Thing </p>
                  </div>
                </div>

                </div>
            </div>
        </div>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
        </div>
      </div>
      </div>
    </div>
    
    <div className="carousel-item "  > 
        <div className="p-5 Mainslide">
        <div className="container"> 
         <div className="row pl-5 pr-5">
          <div className="col-md-12 position-relative" data-aos="fade-left">
          
            {/* <p>Read what our clients have to say! Their feedback speaks volumes about our dedication to excellence. From prompt communication to stellar results, our clients consistently praise our commitment to quality and satisfaction. Check out their testimonials to learn more about their experiences working with us!</p> */}
            
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <div className="col-md-6" data-aos="fade-right">
            <div className="bg_feedback">
              <div className="mb-3">  <img className="name_latter miui" src={aumi.src} alt="Product" /></div>
              <p className="b2b-text text-left">Saurabh is my team member for more than 5 years. If you need your site support on any issue any time of the day , Whenever you need. He is the Guy. Highly recommend</p>
              <div className="d-flex justify-content-start mt-4">
                        <div className="right d-flex align-items-center text-left pr-5">
              
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">olga vasilevsky</h3>
                    <p className="mb-0 fs-6">MiuOlui </p>
                  </div>
                </div>

                </div>
            </div>

        </div>
        <div className="col-md-6" data-aos="fade-right">
            <div className="bg_feedback">
              <div className="mb-3"><img className="name_latter" src={char.src} alt="Product" /></div>
              <p className="b2b-text text-left">Rahul is an incredible custom developer for Shopify. We will continue to use him for all custom development on Shopify</p>
              <div className="d-flex justify-content-start mt-4">
                        <div className="right d-flex align-items-center text-left pr-5">

                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">Eric Dunn</h3>
                    <p className="mb-0 fs-6">Plastix Marketing</p>
                  </div>
                </div>

                </div>
            </div>
        </div>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
        </div>
        </div>
      </div>
    </div>

    

    {/* <div className="carousel-item "  > 
        <div className="p-5 Mainslide">
        <div className="container">  

         <div className="row pl-5 pr-5">
          <div className="col-md-12 position-relative" data-aos="fade-left">
            <h2 className="feedback_heading mb-4 text-center">Client Testimonials</h2>
           
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
          <div className="col-md-12" data-aos="fade-right">
            <div className="bg_feedback">
              <p className="fs-6 text-center">they were extremely helpful and I was very happy</p>
                <div className="d-flex justify-content-center mt-4">
                <div className="left d-flex align-items-center">
                <img className="name_latter" src={seera.src} alt="Product" />
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">Serra Kirdar</h3>
                    <p className="mb-0 fs-6">Evolutionsk</p>
                  </div>
                </div>

                </div>
            </div>
        </div>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
        </div>
        </div>
      </div>
    </div> */}
  </div>
 
</div>
              </div>
             </div>
        </div> 
      </div> 
    </>
  )
}
