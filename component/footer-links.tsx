import Link from "next/link";

interface linkProps {
  id?: number;

}
export default function FooterLinks({id}: linkProps) {
  return (
    <>
      {id === 1 ?
      (
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
      ): '' } 
      {id === 2 ?
      (
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
      ): '' } 
      {id === 3 ?
      (    
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
      ): '' } 
      {id === 4 ?
      (     
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
      ): '' }
      {id === 5 ?
      (     
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
      ): '' }
      {id === 6 ?
      (    
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
      ): '' } 
    </>
     
  );
}
