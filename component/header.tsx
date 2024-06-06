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

  <nav className="navbar navbar-expand-xl bg-dark navbar-dark pt-4 pb-4 ps-3 pe-3 position-relative">
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
        <li>
        <Link href="/about" className={currentRoute === "/about"? "active  py-2 pr-4 pl-3 " : "block py-2 pr-4 pl-3"}>About Us</Link>
        </li>
        
        <li className='dropdown'>
        <Link href="/services" className={currentRoute === "/services"? "active  py-2 pr-4 pl-3 dropdown-toggle" : "dropdown-toggle block py-2 pr-4 pl-3"}>Services</Link>
        
        <ul className="dropdown-menu ph_align_drop p-0">
            <li className='hover-menus'><a className={currentRoute === "/digital-marketing"? "active dropdown-item d-flex" : "dropdown-item d-flex align-items-center"}  href="/digital-marketing">
             <img src={digital2.src} className='service_icon' alt="" />  Digital Marketing 
            </a>
              {/* <ul className="dropdown-menu hover-menu-items p-0">
                <li><a className="dropdown-item" href="/seo">Search Engine Optimization</a></li>
                <li><a className="dropdown-item" href="/social-media">Social Media Management</a></li>
                <li><a className="dropdown-item" href="/online-reputation">Online Reputation Management</a></li>
                <li><a className="dropdown-item" href="/social-media">Social Media Management</a></li>
              </ul> */}
            </li>
            <li className='hover-menus'><a className={currentRoute === "/e-commerce"? "active dropdown-item d-flex" : "dropdown-item d-flex   align-items-center"} href="/e-commerce">
            <img src={digital4.src} className='service_icon' alt="" />Ecommercee </a>
              {/* <ul className="dropdown-menu hover-menu-items p-0">
                <li><a className="dropdown-item" href="#">Magneto Development</a></li> 
                <li><a className="dropdown-item" href="/shopify">Shopify Development</a></li>
                <li><a className="dropdown-item" href="/big-commerce">Woo Commerce Development</a></li>
                <li><a className="dropdown-item" href="#">Open cart Development</a></li>
              </ul> */}
            </li> 
            <li className='hover-menus'><a className={currentRoute === "/graphic"? "active dropdown-item d-flex " : "dropdown-item d-flex align-items-center"} href="/graphic">
            <img src={digital3.src} className='service_icon' alt="" /> Graphic Design </a>
              {/* <ul className="dropdown-menu hover-menu-items p-0">
                <li><a className="dropdown-item" href="/graphic">Website Redesign</a></li>
                <li><a className="dropdown-item" href="#">Responsive Web Design</a></li>
                <li><a className="dropdown-item" href="#">Video Animation</a></li>
                <li><a className="dropdown-item" href="/mobile-application">Mobile app designing</a></li>
              </ul> */}
            </li> 
            <li className='hover-menus'><a className={currentRoute === "/app-development"? "active dropdown-item d-flex" : "dropdown-item d-flex align-items-center"} href="/app-development">
            <img src={digital.src} className='service_icon' alt="" /> App Development </a>
              {/* <ul className="dropdown-menu hover-menu-items p-0">
                <li><a className="dropdown-item" href="/mobile-application">Android App Development</a></li>
                <li><a className="dropdown-item" href="#">IOS App Development</a></li>
                <li><a className="dropdown-item" href="#">React Native Development</a></li>
                <li><a className="dropdown-item" href="#">Hybrid App Development</a></li>
                <li><a className="dropdown-item" href="/php-development">PHP Development</a></li>
                <li><a className="dropdown-item" href="/asp-net">ASP Development</a></li>
              </ul> */}
              {/* <i className="fa fa-chevron-right"></i> */}
            </li> 
        </ul>
        </li>

        <li>
        <Link href="/case-study" className={currentRoute === "/case-study"? "active  py-2 pr-4 pl-3 " : "block py-2 pr-4 pl-3"}>Case Studies</Link>
        </li>
        

        <li>
        <a href="/resources" className={currentRoute === "/resources"? "active  py-2 pr-4 pl-3 " : "block py-2 pr-4 pl-3"}>Resources</a>
        </li>

        <li>
        <Link href="/blog" className={currentRoute === "/blog"? "active  py-2 pr-4 pl-3 " : "block py-2 pr-4 pl-3"}>Blogs</Link>
        </li>
        
       
        <li>
        <Link href="/carrer" className={currentRoute === "/carrer"? "active  py-2 pr-4 pl-3 " : "block py-2 pr-4 pl-3"}>Career</Link>
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
