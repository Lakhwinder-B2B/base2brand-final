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
      <div className="p-5 borderbottom b2b-black-bg">
        <div className="row footer-box">
          <div className="col footerMenu">
            <h5>Digital Marketing</h5>
            <ul className="mb-0">
              <li>
                <a href="/digital-marketing">Media Buyer</a>
              </li>
              <li>
                <a href="/digital-marketing">Content Writing</a>
              </li>
              <li>
                <a href="/digital-marketing">Google Ads (PPC)</a>
              </li>
              <li>
                <a href="/digital-marketing">YouTube Marketing</a>
              </li>
              <li>
                <a href="/digital-marketing">Search Engine Optimization</a>
              </li>
              <li>
                <a href="/digital-marketing">Social Media Optimization</a>
              </li>
              <li>
                <a href="/digital-marketing">Online Reputation Management</a>
              </li>
            </ul>
          </div>
          <div className="col footerMenu">
            <h5>Web/Mobile Development</h5>
            <ul className="mb-0">
              <li>
                <a href="/web-application">Remix Framework</a>
              </li>
              <li>
                <a href="/web-application">Laravel Development</a>
              </li>
              <li>
                <a href="/web-application">MEAN Stack Development</a>
              </li>
              <li>
                <a href="/web-application">ASP.NET Development</a>
              </li>
              <li>
                <a href="/web-application">MERN Stack Development</a>
              </li>
              <li>
                <a href="/web-application">Native IOS and Android</a>
              </li>
              <li>
                <a href="/web-application">Hybrid apps Development</a>
              </li>
            </ul>
          </div>
          <div className="col footerMenu">
            <h5>Graphic Design</h5>
            <ul className="mb-0">
              <li>
                <a href="/graphic">Branding &amp; Identity</a>
              </li>
              <li>
                <a href="/graphic">Website &amp; App Design</a>
              </li>
              <li>
                <a href="/graphic">Motion Graphics</a>
              </li>
              <li>
                <a href="/graphic">Social Media Design</a>
              </li>
              <li>
                <a href="/graphic">2D &amp; infographic Design</a>
              </li>
              
            </ul>
          </div>
          <div className="col footerMenu">
            <h5>Ecommerce  Development</h5>
            <ul className="mb-0">
              <li>
                <a href="/shopify">Shopify Theme Development</a>
              </li>
              <li>
                <a href="/e-commerce">Woo Commerce Development</a>
              </li>
              <li>
                <a href="/e-commerce">Magento Development</a>
              </li>
              <li>
                <a href="/e-commerce">Big Commerce Development</a>
              </li>
              <li>
                <a href="/e-commerce">Open Cart Development</a>
              </li>
              <li>
                <a href="/shopify">Shopify App Developemnt</a>
              </li>
            </ul>
          </div>
          <div className="col footerMenu">
            <h5>Quick Links</h5>
            <ul className="mb-0">
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/blog">Blogs</a>
              </li>
              <li>
                <a href="/career">Career</a>
              </li>
              <li>
                <a href="/resources">Hire Resources</a>
              </li>
            </ul>
          </div>
          <div className="col footerMenu">
            <h5>Other Links</h5>
            <ul className="mb-0">
              <li>
                <a href="">Case Studies</a>
              </li>
              <li>
                <a href="">Privacy policy</a>
              </li>
              <li>
                <a href="">Cookies Policy</a>
              </li>
              <li>
                <a href="">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="">Refund Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main_footer p-5 b2b-black-bg">
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
              <a href="https://twitter.com/techBase2Brand" target="_blank">
                <img src={Twitter.src} className="SocialIcon" alt="Twitter" />{" "}
              </a>
              
              <a
                href="https://in.linkedin.com/company/techbase2brand"
                target="_blank"
              >
                <img src={Linkedin.src} className="SocialIcon" alt="Linkedin" />{" "}
              </a>
              
              {/* <a href="https://maps.app.goo.gl/xMquw6oWpdiJwLBh8"><img src={Googlemap.src} className="SocialIcon" alt="Googlemap"/> </a> */}
            </div>
          </div>
          <div className="mb-sm-0 mb-4 footerMenu">
            <h5>Working Hours:</h5>
            <ul className="mb-0">
              <li>Mon-Fri: 9 am- 6 pm</li>
              <li>Sat-Sun: Holiday</li>
            </ul>
          </div>
          <div className="mb-sm-0 mb-4 footerMenu">
            <h5>India (headquater) </h5>
            <ul className="mb-0">
              <li>F-209, Industrial area Phase 8-B, <br/>
                Sector 74, Mohali, 160074 <br/>
                <a className="text-white" href="tel:+91-9872487850">+91 9872487850</a></li>
            </ul>
          </div>

          <div className="mb-sm-0 mb-4 footerMenu">
          <h5>USA</h5>
            <ul className="mb-0">
              <li>7311 Gladys Ave, El Cerrito, CA 94530, <br/>
               USA, <a className="text-white" href="tel:+1-720-903-5933">+1 (720) 903-5933</a></li>
             
            </ul>
        </div>


          <div className="mb-sm-0 mb-4 footerMenu">
            <h5>UK</h5>
            <ul className="mb-0">
              <li>Ms Ady 114, Bellchase Trail Brampton <br/>
               ON L6P 3LA <a className="text-white" href="tel:+44-7552-535341">+44 7552 535341</a></li>
             
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
