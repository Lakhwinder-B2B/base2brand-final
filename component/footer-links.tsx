import Link from "next/link";

interface linkProps {
  id?: number;
}

export default function FooterLinks({ id }: linkProps) {
  return (
    <>
      {id === 1 ? (
        <ul className="mb-0">
          <li>
            <Link href="/digital-marketing">Media Buyer</Link>
          </li>
          <li>
            <Link href="/digital-marketing">Content Writing</Link>
          </li>
          <li>
            <Link href="/digital-marketing">Google Ads (PPC)</Link>
          </li>
          <li>
            <Link href="/digital-marketing">YouTube Marketing</Link>
          </li>
          <li>
            <Link href="/digital-marketing">Search Engine Optimization</Link>
          </li>
          <li>
            <Link href="/digital-marketing">Social Media Optimization</Link>
          </li>
          <li>
            <Link href="/digital-marketing">Online Reputation Management</Link>
          </li>
        </ul>
      ) : null}
      {id === 2 ? (
        <ul className="mb-0">
          <li>
            <Link href="/web-application">Remix Framework</Link>
          </li>
          <li>
            <Link href="/web-application">Laravel Development</Link>
          </li>
          <li>
            <Link href="/web-application">MEAN Stack Development</Link>
          </li>
          <li>
            <Link href="/web-application">ASP.NET Development</Link>
          </li>
          <li>
            <Link href="/web-application">MERN Stack Development</Link>
          </li>
          <li>
            <Link href="/web-application">Native IOS and Android</Link>
          </li>
          <li>
            <Link href="/web-application">Hybrid apps Development</Link>
          </li>
        </ul>
      ) : null}
      {id === 3 ? (
        <ul className="mb-0">
          <li>
            <Link href="/graphic">Branding &amp; Identity</Link>
          </li>
          <li>
            <Link href="/graphic">Website &amp; App Design</Link>
          </li>
          <li>
            <Link href="/graphic">Motion Graphics</Link>
          </li>
          <li>
            <Link href="/graphic">Social Media Design</Link>
          </li>
          <li>
            <Link href="/graphic">2D &amp; infographic Design</Link>
          </li>
        </ul>
      ) : null}
      {id === 4 ? (
        <ul className="mb-0">
          <li>
            <Link href="/shopify">Shopify Theme Development</Link>
          </li>
          <li>
            <Link href="/e-commerce">Woo Commerce Development</Link>
          </li>
          <li>
            <Link href="/e-commerce">Magento Development</Link>
          </li>
          <li>
            <Link href="/e-commerce">Big Commerce Development</Link>
          </li>
          <li>
            <Link href="/e-commerce">Open Cart Development</Link>
          </li>
          <li>
            <Link href="/shopify">Shopify App Development</Link>
          </li>
        </ul>
      ) : null}
      {id === 5 ? (
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
            <Link href="/underconstrution">Hire Resources</Link>
          </li>
        </ul>
      ) : null}
      {id === 6 ? (
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
      ) : null}
    </>
  );
}
