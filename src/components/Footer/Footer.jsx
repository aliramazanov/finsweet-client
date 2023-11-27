import "./Footer.scss";
import Navigation from "../../components/Navigation/Navigation";
import twitter from "../../../src/img/twitter.svg";
import facebook from "../../../src/img/facebook.svg";
import instagram from "../../../src/img/instagram.svg";
import linkedin from "../../../src/img/linkedin.svg";
import logo from "/logo.svg";

export default function Footer() {
  return (
    <div className="footer-component-container">
      <div className="footer-top-container">
        <div className="footer-container-left">
          <div className="footer-hero">
            <div className="footer-logo-container">
              <img src={logo} alt="Company Logo" />
            </div>
            <p>
              We are always open to discuss your project and improve your online
              presence.
            </p>
          </div>
          <div className="footer-contacts">
            <div className="footer-email">
              <h6>Email me at</h6>
              <p>contact@website.com</p>
            </div>
            <div className="footer-email">
              <h6>Call us</h6>
              <p>0927 6277 28525</p>
            </div>
          </div>
        </div>
        <div className="footer-container-right">
          <h2>Lets Talk!</h2>
          <p>
            We are always open to discuss your project, improve your online
            presence and help with your UX/UI design challenges.
          </p>
          <div className="footer-social-icons">
            <img src={facebook} alt="Social" />
            <img src={twitter} alt="Social" />
            <img src={instagram} alt="Social" />
            <img src={linkedin} alt="Social" />
          </div>
        </div>
      </div>
      <div className="footer-ending">
        <Navigation isnav={false} />
      </div>
    </div>
  );
}
