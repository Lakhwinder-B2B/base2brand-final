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
                <Link href="/underconstrution">Media Buyer</Link>
              </li>
              <li>
                <Link href="/underconstrution">Content Writing</Link>
              </li>
              <li>
                <Link href="/underconstrution">Google Ads (PPC)</Link>
              </li>
              <li>
                <Link href="/underconstrution">YouTube Marketing</Link>
              </li>
              <li>
                <Link href="/underconstrution">Search Engine Optimization</Link>
              </li>
              <li>
                <Link href="/underconstrution">Social Media Optimization</Link>
              </li>
              <li>
                <Link href="/underconstrution">Online Reputation Management</Link>
              </li>
            </ul>
          </div>
          <div className="col footerMenu">
            <h5>Web/Mobile Development</h5>
            <ul className="mb-0">
              <li>
                <Link href="/underconstrution">Remix Framework</Link>
              </li>
              <li>
                <Link href="/underconstrution">Laravel Development</Link>
              </li>
              <li>
                <Link href="/underconstrution">MEAN Stack Development</Link>
              </li>
              <li>
                <Link href="/underconstrution">ASP.NET Development</Link>
              </li>
              <li>
                <Link href="/underconstrution">MERN Stack Development</Link>
              </li>
              <li>
                <Link href="/underconstrution">Native IOS and Android</Link>
              </li>
              <li>
                <Link href="/underconstrution">Hybrid apps Development</Link>
              </li>
            </ul>
          </div>
          <div className="col footerMenu">
            <h5>Graphic Design</h5>
            <ul className="mb-0">
              <li>
                <Link href="/underconstrution">Branding &amp; Identity</Link>
              </li>
              <li>
                <Link href="/underconstrution">Website &amp; App Design</Link>
              </li>
              <li>
                <Link href="/underconstrution">Motion Graphics</Link>
              </li>
              <li>
                <Link href="/underconstrution">Social Media Design</Link>
              </li>
              <li>
                <Link href="/underconstrution">2D &amp; infographic Design</Link>
              </li>
            </ul>
          </div>
          <div className="col footerMenu">
            <h5>Ecommerce Development</h5>
            <ul className="mb-0">
              <li>
                <Link href="/underconstrution">Shopify Theme Development</Link>
              </li>
              <li>
                <Link href="/underconstrution">Woo Commerce Development</Link>
              </li>
              <li>
                <Link href="/underconstrution">Magento Development</Link>
              </li>
              <li>
                <Link href="/underconstrution">Big Commerce Development</Link>
              </li>
              <li>
                <Link href="/underconstrution">Open Cart Development</Link>
              </li>
              <li>
                <Link href="/underconstrution">Shopify App Development</Link>
              </li>
            </ul>
          </div>
          <div className="col footerMenu">
            <h5>Quick Links</h5>
            <ul className="mb-0">
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
              </li>
              <li>
                <Link href="/career">Career</Link>
              </li>
              <li>
                <Link href="/resources">Hire Resources</Link>
              </li>
            </ul>
          </div>
          <div className="col footerMenu">
            <h5>Other Links</h5>
            <ul className="mb-0">
              <li>
                <Link href="/underconstrution">Case Studies</Link>
              </li>
              <li>
                <Link href="/underconstrution">Privacy policy</Link>
              </li>
              <li>
                <Link href="/underconstrution">Cookies Policy</Link>
              </li>
              <li>
                <Link href="/underconstrution">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link href="/underconstrution">Refund Policy</Link>
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
          <Link href="/"className="text-white">  ©2024 base2brand.com </Link>
        .All rights reserved{" "}
        </p>
      </div>
    </footer>
  );
}
