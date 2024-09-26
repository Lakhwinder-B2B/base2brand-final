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
import FooterLinks from "./footer-links";
export default function FooterBottom() {
  return (
    <>
     
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
              <a
                href="https://www.youtube.com/channel/UCEHsjR1TFlEfsbcYQPlLW4Q"
                target="_blank"
              >
                <img src={Youtube.src} className="SocialIcon" alt="Youtube" />{" "}
              </a>
              
              {/* <a href="https://maps.app.goo.gl/xMquw6oWpdiJwLBh8"><img src={Googlemap.src} className="SocialIcon" alt="Googlemap"/> </a> */}
            </div>
          </div>
          <div className="mb-sm-0 mb-4 footerMenu">
            <h5>Working Hours:</h5>
            <ul className="mb-0">
              <li>Mon-Fri: 11 Am- 08 Pm</li>
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
              <li>7311 Gladys Ave El Cerrito CA 94530, <br/>
               USA, <a className="text-white" href="tel:+1-720-903-5933">+1 720 9035933</a></li>
             
            </ul>
        </div>


          <div className="mb-sm-0 mb-4 footerMenu">
            <h5>UK</h5>
            <ul className="mb-0">
              <li>69 Grove St, Edinburgh. EH3 8FD<br />
              UK  <a className="text-white" href="tel:+44-7552-535341">+44 7448435973
               </a></li>
             
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3">
        <p className="m-0 text-white">
        © 2024 All rights reserved |  <Link className="text-white" href="/"> Base2brand</Link> |  <Link className="text-white" href="/disclaimer"> Disclaimer</Link> | 
        <Link className="text-white" href="/privacy-policy"> Privacy Policy</Link> |  <Link className="text-white" href="/terms-of-service">Terms of Service</Link>
       
        </p>
      </div>
    </>
  );
}
