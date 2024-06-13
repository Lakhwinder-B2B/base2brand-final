"use client";
import Link from 'next/link'
import { useEffect } from "react"; 
import logo from '../public/img/logo.svg';
import digital from '../public/img/header.png';
import call from '../public/img/call1.png';
import digital2 from '../public/img/header2.png'; 
import digital3 from '../public/img/header3.png';
import digital4 from '../public/img/header4.png';
import './footer.css'
import { usePathname } from 'next/navigation';
import './header.css'
import 'aos/dist/aos.css';
import AOS from 'aos'; 

 
export default function Header() {

  const currentRoute = usePathname();

useEffect(() => {
  AOS.init({
       duration: 800,
       once: false,
     })
}, [])


  return (
    <header>
  {/* <div className='top-header bg-dark pl-4 pr-4 pt-1 pb-1'>
  <div className="d-flex flex-wrap align-items-center justify-content-end contact-num">
        <a href="tel:+91-836-011-6967" className="text-orange text-white font-semibold hover:text-white text-decoration-none py-2 px-4">
        India:- +91-836-011-6967</a> 
        <a href="tel:+1-416-879-2244" className="text-orange text-white font-semibold hover:text-white text-decoration-none py-2 px-4">
        Canada:- +1 (416) 879-2244</a> 
    </div>
            
  </div> */}

  <nav className="navbar navbar-expand-xl pt-4 pb-4 ps-3 pe-3 position-relative">
    <div className="container-fluid"> 
      <a href="/" className="flex items-center navbar-brand pt-0">
        <img src={logo.src} className="mr-3 h-6 sm:h-9" alt="logo"/>
      </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
      <ul className="navbar-nav align-items-center d-flex flex-wrap Header_link">
      <li>
        <a href="/" className={currentRoute === "/"? "active  py-2 pr-4 pl-3 " : "block py-2 pr-4 pl-3"} aria-current="page">
           Home 
        </a>
        </li>
        <li className='dropdown'>
        <Link href="/about" className={currentRoute === "/about"? "active  py-2 pr-4 pl-3 dropdown-toggle" : "dropdown-toggle block py-2 pr-4 pl-3"}>About Us</Link>
            <ul className="dropdown-menu ph_align_drop">
                <li className='mega-menu'>
                  <div className='row justify-content-center'>
                      <div className="col-lg-3 mb-3">
                        <a href="/about">
                          <div className="menuInner b2b-lightBlue-bg">
                              <h3 className='b2b-title-text text-black'>About Us</h3>
                              <div className='d-flex align-items-center justify-content-between'>
                                <p className='menuText mb-0'>We are super efficient and humble to serve you</p>
                                <span className='menuIcon pl-3'></span>
                              </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <a href=''>
                          <div className="menuInner b2b-pink-bg">
                              <h3 className='b2b-title-text text-black'>Team</h3>
                              <div className='d-flex align-items-center justify-content-between'>
                                <p className='menuText mb-0'>We are proud of our experienced and accomplished team!</p>
                                <span className='menuIcon pl-3'></span>
                              </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <a href="">
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
                </li>
            </ul>
        </li>
        
        <li className='dropdown'>
        <Link href="/services" className={currentRoute === "/services"? "active  py-2 pr-4 pl-3 dropdown-toggle" : "dropdown-toggle block py-2 pr-4 pl-3"}>Services</Link>
        
        <ul className="dropdown-menu ph_align_drop">
            <li className='mega-menu'>
              <div className='row justify-content-center'>
                  <div className="col-lg-3 mb-3">
                    <a href="">
                      <div className="menuInner b2b-lightBlue-bg">
                          <h3 className='b2b-title-text text-black'>Web Development</h3>
                          <div className='d-flex align-items-center justify-content-between'>
                            <p className='menuText mb-0'>Innovative apps for mobile devices</p>
                            <span className='menuIcon pl-3'></span>
                          </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3 mb-3">
                    <a href='/app-development'>
                      <div className="menuInner b2b-pink-bg">
                          <h3 className='b2b-title-text text-black'>Mobile App Development</h3>
                          <div className='d-flex align-items-center justify-content-between'>
                            <p className='menuText mb-0'>Innovative apps for mobile devices</p>
                            <span className='menuIcon pl-3'></span>
                          </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3 mb-3">
                    <a href="/graphic">
                      <div className="menuInner b2b-lightBlue-bg">
                          <h3 className='b2b-title-text text-black'>Graphic &amp; UI/UX designing</h3>
                          <div className='d-flex align-items-center justify-content-between'>
                            <p className='menuText mb-0'>Creating Visual Solutions</p>
                            <span className='menuIcon pl-3'></span>
                          </div>
                      </div>
                    </a>
                  </div>
              </div>
              <div className='row justify-content-center'>
                  <div className="col-lg-3 mb-3">
                    <a href="/digital-marketing">
                      <div className="menuInner b2b-pink-bg">
                          <h3 className='b2b-title-text text-black'>Digital Marketing</h3>
                          <div className='d-flex align-items-center justify-content-between'>
                            <p className='menuText mb-0'>Bespoke Brand Growth Strategies</p>
                            <span className='menuIcon pl-3'></span>
                          </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3 mb-3">
                    <a href="/e-commerce">
                      <div className="menuInner b2b-lightBlue-bg">
                          <h3 className='b2b-title-text text-black'>Ecommerce</h3>
                          <div className='d-flex align-items-center justify-content-between'>
                            <p className='menuText mb-0'>Increase online sales seamlessly</p>
                            <span className='menuIcon pl-3'></span>
                          </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3 mb-3">
                    <a href="">
                      <div className="menuInner b2b-pink-bg">
                          <h3 className='b2b-title-text text-black'>Shopify Development</h3>
                          <div className='d-flex align-items-center justify-content-between'>
                            <p className='menuText mb-0'>Bespoke Brand Growth Strategies</p>
                            <span className='menuIcon pl-3'></span>
                          </div>
                      </div>
                    </a>
                  </div>
              </div>
            </li>
        </ul>
        </li>

        <li>
        <Link href="/portfolio" className={currentRoute === "/case-study"? "active  py-2 pr-4 pl-3 " : "block py-2 pr-4 pl-3"}>Portfolio</Link>
        </li>
        

        <li>
        <a href="/resources" className={currentRoute === "/resources"? "active  py-2 pr-4 pl-3 " : "block py-2 pr-4 pl-3"}>Resource Outsourcing</a>
        </li>

        <li>
        <Link href="/blog" className={currentRoute === "/blog"? "active  py-2 pr-4 pl-3 " : "block py-2 pr-4 pl-3"}>Blogs</Link>
        </li>
        
        
      </ul>
    </div>

    <div className="d-flex flex-wrap align-items-center contact-num">
        <div className="call_number_drop">
          <img className='call_icon' src={call.src} />
          </div> 
    </div>
            
  </div>
</nav>
</header>
  )
}
