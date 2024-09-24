"use client";
import Link from "next/link";
import { useEffect } from "react";
import logo from "../public/img/logo.svg";
import digital from "../public/img/header.png";
import call from "../public/img/call1.png";
import digital2 from "../public/img/header2.png";
import digital3 from "../public/img/header3.png";
import digital4 from "../public/img/header4.png";
import phone from "../public/header/phone.svg";
import india from "../public/header/india.svg";
import mail from "../public/header/mail.svg";
import whatsapp from "../public/header/whatsapp.svg";
import usa from "../public/header/usa.svg";
import uk from "../public/header/uk.svg";
import "./footer.css";
import { usePathname } from "next/navigation";
import "./header.css";
import "aos/dist/aos.css";
import AOS from "aos";


export default function Header() {
  const currentRoute = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

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
            <img src={logo.src} className="mr-3 h-6 sm:h-9" alt="logo" />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav main-menu align-items-center d-flex flex-wrap Header_link">
              <li>
                <Link
                  href="/"
                  className={
                    currentRoute === "/"
                      ? "active  py-2 px-1 "
                      : "block py-2 px-1"
                  }
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="dropdown">
                <Link
                  href="/about"
                  className={
                    currentRoute === "/about"
                      ? "active  py-2 px-1 dropdown-toggle"
                      : "dropdown-toggle block py-2 px-1"
                  }
                >
                  About Us
                </Link>
                <ul className="dropdown-menu ph_align_drop">
                  <li className="mega-menu">
                    <div className="row justify-content-center">
                      <div className="col-lg-3 mb-3">
                        <Link href="/about">
                          <div className="menuInner b2b-lightBlue-bg">
                            <h3 className="b2b-title-text text-black">
                              About Us
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="menuText mb-0">
                                We are super efficient and humble to serve you
                              </p>
                              <span className="menuIcon pl-3"></span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <Link href="/team">
                          <div className="menuInner b2b-pink-bg">
                            <h3 className="b2b-title-text text-black">Team</h3>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="menuText mb-0">
                                We are proud of our experienced and accomplished
                                team!
                              </p>
                              <span className="menuIcon pl-3"></span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <Link href="/career">
                          <div className="menuInner b2b-lightBlue-bg">
                            <h3 className="b2b-title-text text-black">
                              Career
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="menuText mb-0">
                                Can you offer such
                                <br /> experience?
                              </p>
                              <span className="menuIcon pl-3"></span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <Link
                  href="/services"
                  className={
                    currentRoute === "/services"
                      ? "active  py-2 px-1 dropdown-toggle"
                      : "dropdown-toggle block py-2 px-1"
                  }
                >
                  Services
                </Link>

                <ul className="dropdown-menu ph_align_drop">
                  <li className="mega-menu">
                    <div className="row justify-content-center">
                      <div className="col-lg-3 mb-3">
                        <Link href="/shopify">
                          <div className="menuInner b2b-pink-bg">
                            <h3 className="b2b-title-text text-black">
                              Shopify Development
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="menuText mb-0">
                                Bespoke Brand Growth Strategies
                              </p>
                              <span className="menuIcon pl-3"></span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <Link href="/digital-marketing">
                          <div className="menuInner b2b-lightBlue-bg">
                            <h3 className="b2b-title-text text-black">
                              Digital Marketing
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="menuText mb-0">
                                Bespoke Brand Growth Strategies
                              </p>
                              <span className="menuIcon pl-3"></span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <Link href="/graphic">
                          <div className="menuInner b2b-pink-bg">
                            <h3 className="b2b-title-text text-black">
                              Graphic &amp; UI/UX designing
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="menuText mb-0">
                                Creating Visual Solutions
                              </p>
                              <span className="menuIcon pl-3"></span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-lg-3 mb-3">
                        <Link href="/e-commerce">
                          <div className="menuInner b2b-lightBlue-bg">
                            <h3 className="b2b-title-text text-black">
                              Ecommerce
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="menuText mb-0">
                                Increase online sales seamlessly
                              </p>
                              <span className="menuIcon pl-3"></span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <Link href="/web-application">
                          <div className="menuInner b2b-pink-bg">
                            <h3 className="b2b-title-text text-black">
                              Web Development
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="menuText mb-0">
                                Innovative apps for mobile devices
                              </p>
                              <span className="menuIcon pl-3"></span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <Link href="/app-development">
                          <div className="menuInner b2b-lightBlue-bg">
                            <h3 className="b2b-title-text text-black">
                              Mobile App Development
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="menuText mb-0">
                                Innovative apps for mobile devices
                              </p>
                              <span className="menuIcon pl-3"></span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  href="/portfolio"
                  className={
                    currentRoute === "/case-study"
                      ? "active  py-2 px-1 "
                      : "block py-2 px-1"
                  }
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className={
                    currentRoute === "/blog"
                      ? "active  py-2 px-1 "
                      : "block py-2 px-1"
                  }
                >
                  Blogs
                </Link>
              </li>
              <li className="d-block d-xl-none">
 <Link href="/contact-us">Contact Us</Link>
 
</li>

            </ul>
          </div>

          <div className="d-flex flex-wrap align-items-center contact-num">
            <ul className="navbar-nav align-items-center d-flex flex-wrap Header_link">
              <li className="menuBtn">
                {/* <a href="/contact-us"><span>Contact</span></a> */}
                <Link href="/contact-us">
                  <span>Contact</span>
                </Link>
              </li>
              <li className="dropdown iconHover">
                <div className="call_number_drop">
                  <img className="call_icon" src={call.src} />
                </div>
                <ul className="dropdown-menu dropdown-menu-right ph_align_drop">
                  <li className="mega-menu">
                    <Link href="">
                      <div className="menuInner b2b-blue-bg">
                        <div className="phoneMenuIcon">
                          <img src={phone.src} alt="" />
                        </div>
                        <h4 className="b2b-title-text text-white">
                          Let&apos;s Connect with Base2brand Team
                        </h4>
                      </div>
                    </Link>
                  </li>
                  <li className="mega-menu">
                    <div className="menuInner border-bottom pt-3">
                      <div className="phoneMenuIcon"></div>
                      <h4 className="b2b-title-text text-white text-uppercase">
                        for sales inquiry
                      </h4>
                    </div>
                  </li>
                  <li className="mega-menu">
                    <Link href="tel:+919872487850">
                      <div className="menuInner align-items-center">
                        <div className="phoneMenuIcon">
                          <img src={india.src} alt="" />
                        </div>
                        <h3 className="b2b-sub-text-gk text-white">
                          +91 (987) 248 -7850
                        </h3>
                      </div>
                    </Link>
                  </li>
                  <li className="mega-menu">
                    <Link href="mailto:hello@base2brand.com">
                      <div className="menuInner align-items-center">
                        <div className="phoneMenuIcon">
                          <img src={mail.src} alt="" />
                        </div>
                        <h3 className="b2b-sub-text-gk text-white">
                          hello@base2brand.com
                        </h3>
                      </div>
                    </Link>
                  </li>
                  <li className="mega-menu">
                    <div className="menuInner border-bottom pt-3">
                      <div className="phoneMenuIcon"></div>
                      <h4 className="b2b-title-text text-white text-uppercase">
                        for quick connect :
                      </h4>
                    </div>
                  </li>
                  <li className="mega-menu">
                    <Link href="https://wa.me/919041700209">
                      <div className="menuInner align-items-center">
                        <div className="phoneMenuIcon">
                          <img src={whatsapp.src} alt="" />
                        </div>
                        <h3 className="b2b-sub-text-gk text-white">
                          +91 (904) 170-0209
                        </h3>
                      </div>
                    </Link>
                  </li>
                  {/* <li className='mega-menu'>
            
              <div className="menuInner border-bottom pt-3">
                <div className='phoneMenuIcon'></div>
                  <h3 className='b2b-title-text text-white text-uppercase'>others</h3>
              </div>
            
            </li> */}
                  <li className="mega-menu">
                    <Link href="tel:+17209035933">
                      <div className="menuInner align-items-center">
                        <div className="phoneMenuIcon">
                          <img src={usa.src} alt="" />
                        </div>
                        <h3 className="b2b-sub-text-gk text-white">
                          +1 (720) 903-5933
                        </h3>
                      </div>
                    </Link>
                  </li>
                  <li className="mega-menu">
                    <Link href="tel:+447552535341">
                      <div className="menuInner align-items-center">
                        <div className="phoneMenuIcon">
                          <img src={uk.src} alt="" />
                        </div>
                        <h3 className="b2b-sub-text-gk text-white">
                          +44 (755) 253-5341
                        </h3>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
