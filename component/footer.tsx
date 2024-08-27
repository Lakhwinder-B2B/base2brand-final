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
                <a href="/">Media Buyer</a>
              </li>
              <li>
                <a href="/">Content Writing</a>
              </li>
              <li>
                <a href="/">Google Ads (PPC)</a>
              </li>
              <li>
                <a href="/">YouTube Marketing</a>
              </li>
              <li>
                <a href="/">Search Engine Optimization</a>
              </li>
              <li>
                <a href="/">Social Media Optimization</a>
              </li>
              <li>
                <a href="/">Online Reputation Management</a>
              </li>
            </ul>
          </div>
          <div className="col footerMenu">
            <h5>Web/Mobile Development</h5>
            <ul className="mb-0">
              <li>
                <a href="/">Remix Framework</a>
              </li>
              <li>
                <a href="/">Laravel Development</a>
              </li>
              <li>
                <a href="/">MEAN Stack Development</a>
              </li>
              <li>
                <a href="/">ASP.NET Development</a>
              </li>
              <li>
                <a href="/">MERN Stack Development</a>
              </li>
              <li>
                <a href="/">Native IOS and Android</a>
              </li>
              <li>
                <a href="/">Hybrid apps Development</a>
              </li>
            </ul>
          </div>
          <div className="col footerMenu">
            <h5>Graphic Design</h5>
            <ul className="mb-0">
              <li>
                <a href="/">Branding &amp; Identity</a>
              </li>
              <li>
                <a href="/">Website &amp; App Design</a>
              </li>
              <li>
                <a href="/">Motion Graphics</a>
              </li>
              <li>
                <a href="/">Social Media Design</a>
              </li>
              <li>
                <a href="/">2D &amp; infographic Design</a>
              </li>
              
            </ul>
          </div>
          <div className="col footerMenu">
            <h5>Ecommerce  Development</h5>
            <ul className="mb-0">
              <li>
                <a href="">Shopify Theme Development</a>
              </li>
              <li>
                <a href="">Woo Commerce Development</a>
              </li>
              <li>
                <a href="">Magento Development</a>
              </li>
              <li>
                <a href="">Big Commerce Development</a>
              </li>
              <li>
                <a href="">Open Cart Development</a>
              </li>
              <li>
                <a href="">Shopify App Developemnt</a>
              </li>
            </ul>
          </div>
          <div className="col footerMenu">
            <h5>Quick Links</h5>
            <ul className="mb-0">
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Blogs</a>
              </li>
              <li>
                <a href="">Career</a>
              </li>
              <li>
                <a href="">Hire Resources</a>
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
