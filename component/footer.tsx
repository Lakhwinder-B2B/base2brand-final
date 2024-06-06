import Link from 'next/link'
import logo from '../public/img/logo.png';
import Facebook from '../public/img/Facebook.png';
import Twitter from '../public/img/Twitter.png';
import Instagram from '../public/img/Instagram.png';
import Linkedin from '../public/img/Linkedin.png';
import './footer.css'

export default function Header() {
  return (
    <footer className='footer'>
        <div className="main_footer p-5">
      <div className="row">
        <div className="col-md-3">
        <img src={logo.src} className="FooterLogo" alt="logo"/>
        <div className='social d-flex gap-4 mt-4'>
            <a href="https://www.facebook.com/TechBase2Brand/"><img src={Facebook.src} className="SocialIcon" alt="Facebook"/> </a>
            <a href="https://twitter.com/techBase2Brand"><img src={Twitter.src} className="SocialIcon" alt="Twitter"/> </a>
            <a href="https://www.instagram.com/techbase2brand/?hl=en"><img src={Instagram.src} className="SocialIcon" alt="Instagram"/> </a>
            <a href="https://in.linkedin.com/company/techbase2brand"><img src={Linkedin.src} className="SocialIcon" alt="Linkedin"/> </a>
        </div>
        </div>
        <div className="col-md-3 footerMenu">
            <h5>Working Hours:</h5>
            <ul>
                <li>Mon-Fri: 9 am- 6 pm</li>
                <li>Sat-Sun: Holiday</li>
            </ul>
        </div>
        <div className="col-md-3 footerMenu">
            <h5>Address:</h5>
            <ul>
                <li>F-209, Industrial area</li>
                <li>Phase 8-B, Sector 74, Mohali, 160074</li>
            </ul>
        </div>
        <div className="col-md-3 footerMenu">
            <h5>Hits Up:</h5>
            <ul>
                <li>+919041700209 | +918360116967</li>
                <li>hello@base2brand.com</li>
            </ul>
        </div>
      </div> 
      </div>
      <div className="p-5 borderbottom">
      <div className="row">
        <div className="col footerMenu">
        <h5>Digital Marketing</h5>
            <ul>
                <li><a href='/googlePPC'>PPC Management</a></li>
                <li><a href='/seo'>Search Engine Optimization</a></li>
                <li>Social Media Management</li>
                <li><a href='/youtube'>YouTube Marketing</a></li>
                <li><a href='/online-reputation'>Online Reputation Management</a></li>
            </ul>
        </div>
        <div className="col footerMenu">
        <h5>Web Development</h5>
            <ul>
                <li>Web Designing</li>
                <li>Laravel Development</li>
                <li>MEAN Stack Development</li>
                <li>MERN Development</li>
                <li>WordPress Development</li>
            </ul>
        </div>
        <div className="col footerMenu">
        <h5>Other Services</h5>
            <ul>
                <li><a href='/graphic'>Graphic Design</a></li>
                <li>App Development</li>
                <li>E-Commerce</li>
                <li>Hybrid Apps</li>
                <li>Native IOS & Android</li>
            </ul>
            </div>
            <div className="col footerMenu">
            <h5>Quick Links</h5>
            <ul>
                <li>Services</li>
                <li>About Us</li>
                <li>Blogs</li>
                <li>Career</li>
                <li>Resources</li>
                </ul>
                </div>
                <div className="col footerMenu">
            <h5>Other Links</h5>
            <ul>
                <li>Case Studies</li>
                <li>Privacy policy</li>
                <li>Cookies Policy</li>
                <li>Terms & Conditions</li>
                <li>Refund Policy</li>
                </ul>
                </div>
      </div>
      </div>
      <div className="text-center p-3">
        <p className='m-0 text-white'>© 2023 base2brand.com  All rights reserved  </p>
      </div>
</footer>
  )
}
