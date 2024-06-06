import Link from "next/link";
import logo from "../public/img/logo.png";
import Facebook from "../public/img/Facebook.png";
import Twitter from "../public/img/Twitter.png";
import Instagram from "../public/img/Instagram.png";
import Linkedin from "../public/img/Linkedin.png";
import Behance from "../public/img/behance.png";
import Youtube from "../public/img/youtube.png";
import Pinterest from "../public/img/pinterest.png";
import Googlemap from "../public/img/GoogleMap.png";

export default function Header() {
  return (
    <footer className="footer">
      <div className="p-5 borderbottom">
        <div className="row footer-box">
          <div className="col footerMenu">
            <h5>Digital Marketing</h5>
            <ul className="mb-0">
              <li>
                <a href="/digital-marketing">PPC Management</a>
              </li>
              <li>
                <a href="/digital-marketing">Search Engine Optimization</a>
              </li>
              <li>
                <a href="/digital-marketing">Social Media Management</a>
              </li>
              <li>
                <a href="/digital-marketing">YouTube Marketing</a>
              </li>
              <li>
                <a href="/digital-marketing">Online Reputation Management</a>
              </li>
            </ul>
          </div>
          <div className="col footerMenu">
            <h5>Web Development</h5>
            <ul className="mb-0">
              <li>
                <a href="/web-application">Web Designing</a>
              </li>
              <li>
                <a href="/web-application">Laravel Development</a>
              </li>
              <li>
                <a href="/web-application">MEAN Stack Development</a>
              </li>
              <li>
                <a href="/web-application">MERN Development</a>
              </li>
              <li>
                <a href="/web-application">WordPress Development</a>
              </li>
            </ul>
          </div>
          <div className="col footerMenu">
            <h5>Other Services</h5>
            <ul className="mb-0">
              <li>
                <a href="/graphic">Graphic Design</a>
              </li>
              <li>
                <a href="/mobile-application">App Development</a>
              </li>
              <li>
                <a href="/e-commerce">E-Commerce</a>
              </li>
              <li>Hybrid Apps</li>
              <li>Native IOS & Android</li>
            </ul>
          </div>
          <div className="col footerMenu">
            <h5>Quick Links</h5>
            <ul className="mb-0">
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/blog">Blogs</a>
              </li>
              <li>
                <a href="/carrer">Career</a>
              </li>
              <li>
                <a href="/resources">Resources</a>
              </li>
            </ul>
          </div>
          <div className="col footerMenu">
            <h5>Other Links</h5>
            <ul className="mb-0">
              <li>
                <a href="/case-study">Case Studies</a>
              </li>
              <li>Privacy policy</li>
              <li>Cookies Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main_footer p-5">
        <div className="row d-flex flex-wrap align-items-start row-gap-5"> 
          <div className="mb-sm-0 mb-4 footerMenu">
            {/* <img src={logo.src} className="FooterLogo" alt="logo" /> */}
            <h2 className="text-white"><b>Follow Us</b></h2>
            <div className="social d-flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/TechBase2Brand/"
                target="_blank"
              >
                <img src={Facebook.src} className="SocialIcon" alt="Facebook" />{" "}
              </a>
              <a href="https://twitter.com/techBase2Brand" target="_blank">
                <img src={Twitter.src} className="SocialIcon" alt="Twitter" />{" "}
              </a>
              <a
                href="https://www.instagram.com/techbase2brand/?hl=en"
                target="_blank"
              >
                <img
                  src={Instagram.src}
                  className="SocialIcon"
                  alt="Instagram"
                />{" "}
              </a>
              <a
                href="https://in.linkedin.com/company/techbase2brand"
                target="_blank"
              >
                <img src={Linkedin.src} className="SocialIcon" alt="Linkedin" />{" "}
              </a>
              <a href="https://www.behance.net/base2brand" target="_blank">
                <img src={Behance.src} className="SocialIcon" alt="Behance" />{" "}
              </a>
              <a href="https://www.youtube.com/@base2brand" target="_blank">
                <img src={Youtube.src} className="SocialIcon" alt="Linkedin" />{" "}
              </a>
              <a
                href="https://www.pinterest.com/techbase2brand/_created/"
                target="_blank"
              >
                <img
                  src={Pinterest.src}
                  className="SocialIcon"
                  alt="Linkedin"
                />{" "}
              </a>
              {/* <a href="https://maps.app.goo.gl/xMquw6oWpdiJwLBh8"><img src={Googlemap.src} className="SocialIcon" alt="Googlemap"/> </a> */}
            </div>
          </div>
          <div className="mb-sm-0 mb-4 footerMenu">
            <h5>Working Hours:</h5>
            <ul className="mb-0">
              <li>Mon-Fri: 10am- 7pm</li>
              <li>Sat-Sun: Holiday</li>
            </ul>
          </div>
          <div className="mb-sm-0 mb-4 footerMenu">
            <h5>Address:</h5>
            <ul className="mb-0">
              <li>F-209, Industrial area<br/>
              Phase 8-B, Sector 74, Mohali, 160074</li>
            </ul>
          </div>

          <div className="mb-sm-0 mb-4 footerMenu">
          <h5>Canada Address:</h5>
            <ul className="mb-0">
              <li>Ms Ady 114,<br/>
              Bellchase Trail Brampton ON L6P 3L4</li>
              <li><a className="text-white" href="tel:+1-416-879-2244">+1 (416) 879-2244</a></li>
            </ul>
        </div>


          <div className="mb-sm-0 mb-4 footerMenu">
            <h5>Hits Up:</h5>
            <ul className="number mb-0">
              <li>
                <a href="tel:+919041700209">+919041700209</a> |{" "}
                <a href="tel:+918360116967">+918360116967</a>
              </li>
              <li>
                <a href="mailto:hello@base2brand.com">hello@base2brand.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3">
        <p className="m-0 text-white">
          ©2024 base2brand.com .All rights reserved{" "}
        </p>
      </div>
    </footer>
  );
}
