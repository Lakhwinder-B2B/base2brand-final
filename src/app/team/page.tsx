"use client";

import React, { useEffect,useState, useRef } from 'react';
import Header from "../../../component/header";
import About1 from "../../../public/img/team-page.svg"
import Footer from "../../../component/footer";
import "../team/about.css";
import Request from "../request-form";
import radialBg from '../../../public/img/radial_bg.svg'; 
import Icon1 from '../../../public/team-img/rakesh.png'; 
import Icon2 from '../../../public/team-img/rahul.png'; 
import manpreetSingh from '../../../public/team-img/manpreet-Singh.png'; 
import ArshpreetSingh from '../../../public/team-img/Arshpreet-Singh.png'; 
import Sumek from '../../../public/team-img/Sumek.png'; 
import SandeepSingh from '../../../public/team-img/Sandeep-Singh.png'; 
import SurajParkash from '../../../public/team-img/SurajParkash.png'; 
import DeeptiDixit from '../../../public/team-img/DeeptiDixit.png'; 
import LoveeJarewal from '../../../public/team-img/LoveeJarewal.png'; 
import MohdSami from '../../../public/team-img/MohdSami.png'; 
import SahilSolanki from '../../../public/team-img/SahilSolanki.png'; 
import SumitKumar from '../../../public/team-img/SumitKumar.png'; 
import VarshaKumari from '../../../public/team-img/VarshaKumari.png'; 
import AmanKumar from '../../../public/team-img/AmanKumar.png'; 
import RishabhDixit from '../../../public/team-img/RishabhDixit.png'; 
import SameerKathat from '../../../public/team-img/SameerKathat.png'; 
import Zaid from '../../../public/team-img/Zaid.png'; 
import NasirAhmed from '../../../public/team-img/NasirAhmed.png'; 
import Suryathakur from '../../../public/team-img/Suryathakur.png'; 
import VineetKumarRana from '../../../public/team-img/VineetKumarRana.png'; 
import AmbalikaPhanker from '../../../public/team-img/AmbalikaPhanker.png'; 
import RajanKumar from '../../../public/team-img/RajanKumar.png'; 
import AnuragSharma from '../../../public/team-img/AnuragSharma.png'; 
import RahulRaj from '../../../public/team-img/RahulRaj.png'; 
import MDSahjadAnsari from '../../../public/team-img/MDSahjadAnsari.png'; 
import DeepakChauhan from '../../../public/team-img/DeepakChauhan.png'; 
import Lakhwinder from '../../../public/team-img/Lakhwinder.png'; 
import VikashSoni from '../../../public/team-img/VikashSoni.png'; 
import SanjeevKumar from '../../../public/team-img/SanjeevKumar.png'; 
import ParshantKumar from '../../../public/team-img/ParshantKumar.png'; 
import Ramnish from '../../../public/team-img/Ramnish.png'; 
import OmParkash from '../../../public/team-img/OmParkash.png'; 
import SaddamHusain from '../../../public/team-img/SaddamHusain.png'; 
import GauravKumar from '../../../public/team-img/GauravKumar.png'; 
import RishavKarn from '../../../public/team-img/RishavKarn.png'; 
import HarshRaj from '../../../public/team-img/HarshRaj.png'; 
import ShubhamSharma from '../../../public/team-img/ShubhamSharma.png'; 
import LalitKumar from '../../../public/team-img/LalitKumar.png'; 

import Img1 from '../../../public/team-img/img1.png'; 
import Img2 from '../../../public/team-img/img2.png'; 
import Img3 from '../../../public/team-img/img3.png'; 
import Img4 from '../../../public/team-img/img4.png'; 
import Img5 from '../../../public/team-img/img5.png'; 
import Img6 from '../../../public/team-img/img6.png'; 
import Slider from "react-slick";
import { Link,  Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import radialRight from '../../../public/img/radial-right.svg'; 

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Team() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <Header />
        <div className="pt-0 pb-0 b2b-black-bg">
          <div className="about-mask pt-5" style={{backgroundImage: `url(${radialBg.src})`,backgroundSize: 'contain',backgroundRepeat: 'no-repeat'}}>
            <div className="row m-0 position-relative text-white pt-5"> 
              
              <div className="col-12 col-sm-12 col-md-7 m-auto text-center">
                  <h1 className='b2b-sub-heading-bold text-uppercase'>Our Cherished Teams</h1>
                  <p className='b2b-sub-text'>Each member in our team is experienced and well efficient to deliver the assigned projects before the deadline. We rely on them to fulfill the promises we make to our clients.</p>
                  <div className="mt-5 text-center mb-5 pb-5">
                    <button onClick={toggleModal} className="b2b-btn b2b-btn-lg">Request a Quote </button>
                  </div>
                  <div className='text-center'>
                    {/* <img src={About1.src} alt="" /> */}
                    <DotLottieReact
                        src='/json/about-us/Our Cherished Teams.json'
                        loop
                        autoplay
                        className="team-animated-img"
                      />
                  </div>
                
              </div>
              
             
            </div>
          
            
              <div className="crew-wrap mt-5">
                <div className="row justify-content-center higher-officials">
                  <div className="col-md-12 mx-auto text-center text-white mb-5"> 
                      <h1 className='b2b-sub-heading-bold text-uppercase'>Higher Officials</h1>
                  </div>
                  <div className='col-md-4 mb-5'>
                    <img src={Icon1.src} alt='' />
                    <div className='team-details'>
                      <h3>Rakesh Arora</h3>
                      <p>Managing Director (MD)</p>
                    </div>
                  </div>
                  <div className='col-md-4 mb-5'>
                    <img src={Icon2.src} alt='' />
                    <div className='team-details'>
                      <h3>Rahul Dhyaniya</h3>
                      <p>Chief Executive Officer (CEO)</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center mt-5">
                  <div className="col-md-12 mx-auto text-center text-white mb-5"> 
                      <h1 className='b2b-sub-heading-bold text-uppercase'>Team</h1>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={manpreetSingh.src} alt='' />
                    <div className='team-details'>
                      <h3>manpreet Singh</h3>
                      <p>Project Manager</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={ArshpreetSingh.src} alt='' />
                    <div className='team-details'>
                      <h3>Arshpreet Singh</h3>
                      <p>Project Coordinator</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={SandeepSingh.src} alt='' />
                    <div className='team-details'>
                      <h3>Sandeep Singh</h3>
                      <p>Technical Lead</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={Sumek.src} alt='' />
                    <div className='team-details'>
                      <h3>Sumek</h3>
                      <p>Human Resource Executive</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={SurajParkash.src} alt='' />
                    <div className='team-details'>
                      <h3>Suraj Parkash</h3>
                      <p>Quality Analyst</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={DeeptiDixit.src} alt='' />
                    <div className='team-details'>
                      <h3>Deepti Dixit</h3>
                      <p>Business Development Executive</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={LoveeJarewal.src} alt='' />
                    <div className='team-details'>
                      <h3>Lovee Jarewal</h3>
                      <p>Business Development Executive</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={MohdSami.src} alt='' />
                    <div className='team-details'>
                      <h3>Mohd Sami</h3>
                      <p>Business Development Executive</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={SahilSolanki.src} alt='' />
                    <div className='team-details'>
                      <h3>Sahil Solanki</h3>
                      <p>graphic designer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={SumitKumar.src} alt='' />
                    <div className='team-details'>
                      <h3>Sumit Kumar</h3>
                      <p>Graphic Designer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={VarshaKumari.src} alt='' />
                    <div className='team-details'>
                      <h3>Varsha Kumari</h3>
                      <p>Graphic Designer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={AmanKumar.src} alt='' />
                    <div className='team-details'>
                      <h3>Aman Kumar</h3>
                      <p>Graphic Designer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={RishabhDixit.src} alt='' />
                    <div className='team-details'>
                      <h3>Rishabh Dixit</h3>
                      <p>Video Editor</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={SameerKathat.src} alt='' />
                    <div className='team-details'>
                      <h3>Sameer Kathat</h3>
                      <p>Digital Marketing Team Lead</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={Zaid.src} alt='' />
                    <div className='team-details'>
                      <h3>Zaid</h3>
                      <p>Digital Marketing Project Manager</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={NasirAhmed.src} alt='' />
                    <div className='team-details'>
                      <h3>Nasir Ahmed</h3>
                      <p>Senior Digital Marketer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={Suryathakur.src} alt='' />
                    <div className='team-details'>
                      <h3>Surya thakur</h3>
                      <p>Senior Digital Marketer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={VineetKumarRana.src} alt='' />
                    <div className='team-details'>
                      <h3>Vineet Kumar Rana</h3>
                      <p>Digital Marketer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={AmbalikaPhanker.src} alt='' />
                    <div className='team-details'>
                      <h3>Ambalika Phanker</h3>
                      <p>Digital Marketer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={RajanKumar.src} alt='' />
                    <div className='team-details'>
                      <h3>Rajan Kumar</h3>
                      <p>Digital Marketer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={AnuragSharma.src} alt='' />
                    <div className='team-details'>
                      <h3>Anurag Sharma</h3>
                      <p>Content Writer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={RahulRaj.src} alt='' />
                    <div className='team-details'>
                      <h3>Rahul Raj</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={MDSahjadAnsari.src} alt='' />
                    <div className='team-details'>
                      <h3>MD. Sahjad Ansari</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={DeepakChauhan.src} alt='' />
                    <div className='team-details'>
                      <h3>Deepak Chauhan</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={Lakhwinder.src} alt='' />
                    <div className='team-details'>
                      <h3>Lakhwinder</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={VikashSoni.src} alt='' />
                    <div className='team-details'>
                      <h3>Vikash Soni</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={SanjeevKumar.src} alt='' />
                    <div className='team-details'>
                      <h3>Sanjeev Kumar</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={ParshantKumar.src} alt='' />
                    <div className='team-details'>
                      <h3>Parshant Kumar</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={Ramnish.src} alt='' />
                    <div className='team-details'>
                      <h3>Ramnish</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={OmParkash.src} alt='' />
                    <div className='team-details'>
                      <h3>Om Parkash</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={SaddamHusain.src} alt='' />
                    <div className='team-details'>
                      <h3>Saddam Husain</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={GauravKumar.src} alt='' />
                    <div className='team-details'>
                      <h3>Gaurav Kumar</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={RishavKarn.src} alt='' />
                    <div className='team-details'>
                      <h3>Rishav Karn</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={HarshRaj.src} alt='' />
                    <div className='team-details'>
                      <h3>Harsh Raj</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={ShubhamSharma.src} alt='' />
                    <div className='team-details'>
                      <h3>Shubham Sharma</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div className='col-md-3 mb-5'>
                    <img src={LalitKumar.src} alt='' />
                    <div className='team-details'>
                      <h3>Lalit Kumar</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            
          </div>

          
          
          <div className="b2b-black-bg pb-3" style={{ backgroundImage: `url(${radialRight.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right'}}>
              <div className="crew-wrap work-with-us mt-5">
                <div className="row justify-content-center higher-officials">
                  <div className="col-md-12 mx-auto text-center text-white mb-5"> 
                      <h1 className='b2b-sub-heading-bold text-uppercase'>We Believe In Ourselves <br />You&apos;ll Love Working With Us</h1>
                  </div>
                  <div className='col-md-12 mb-4'>
                    <img src={Img1.src} alt='' />
                  </div>
                  <div className='col-12 col-md-6  mb-4'>
                    <img src={Img2.src} alt='' />
                  </div>
                  <div className='col-12 col-md-6  mb-4'>
                    <img src={Img3.src} alt='' />
                  </div>
                  <div className='col-md-12  mb-4'>
                    <img src={Img4.src} alt='' />
                  </div>
                  <div className='col-12 col-md-6  mb-4'>
                    <img src={Img5.src} alt='' />
                  </div>
                  <div className='col-12 col-md-6  mb-4'>
                    <img src={Img6.src} alt='' />
                  </div>
                </div>
              </div>
              
              <div className='container mb-5 pt-5'>
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <h2 className='b2b-main-heading text-center mb-5 text-uppercase'>More about us</h2>
                  </div>
                  <div className="col-xl-4 col-lg-3 mb-3">
                    <a className="menuLink" href="/about">
                      <div className="menuInner b2b-lightBlue-bg">
                          <h3 className='b2b-title-text text-black'>About Us</h3>
                          <div className='d-flex align-items-center justify-content-between'>
                            <p className='menuText mb-0'>We are super efficient and humble to serve you.</p>
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
                            <p className='menuText mb-0'>Can you offer such<br /> experience?</p>
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

