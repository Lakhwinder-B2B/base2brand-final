
import FooterLinks from "./footer-links";
import FooterBottom from "./footer-bottom";
export default function FooterDesktop() {
  return (
    <footer className="footer">
      <div className="p-5 borderbottom b2b-black-bg">
        <div className="row footer-box">
          <div className="col footerMenu">
            <h5>Digital Marketing</h5>
            <FooterLinks id={1} />
          </div>
          <div className="col footerMenu">
            <h5>Web/Mobile Development</h5>
            <FooterLinks id={2} />
          </div>
          <div className="col footerMenu">
            <h5>Graphic Design</h5>
            <FooterLinks id={3} />
          </div>
          <div className="col footerMenu">
            <h5>Ecommerce  Development</h5>
            <FooterLinks id={4} />
          </div>
          <div className="col footerMenu">
            <h5>Quick Links</h5>
            <FooterLinks id={5} />
          </div>
          {/* <div className="col footerMenu">
            <h5>Other Links</h5>
            <FooterLinks id={6} />
          </div> */}
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
}
