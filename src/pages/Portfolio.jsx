import { NavLink } from "react-router-dom";
import facebook from "../../src/img/facebook.svg";
import instagram from "../../src/img/instagram.svg";
import linkedin from "../../src/img/linkedin.svg";
import template1 from "../../src/img/template1.svg";
import template2 from "../../src/img/template2.svg";
import template3 from "../../src/img/template3.svg";
import template4 from "../../src/img/template4.svg";
import template5 from "../../src/img/template5.svg";
import template6 from "../../src/img/template6.svg";
import twitter from "../../src/img/twitter.svg";
import "./Pages.scss";

export default function Portfolio() {
  return (
    <div className="portfolio-page-container">
      <div className="portfolio-hero-container">
        <div className="portfolio-hero-main">
          <p>What we created</p>
          <h2>Our Work Portfolio</h2>
          <p>
            We help teams create great digital products by providing them with
            tools and technology to make the design-to-code process universally
            accessible.
          </p>
          <div className="portfolio-social-logos">
            <img src={facebook} alt="Social" />
            <img src={twitter} alt="Social" />
            <img src={instagram} alt="Social" />
            <img src={linkedin} alt="Social" />
          </div>
        </div>
      </div>

      <div className="work-categories">
        <NavLink>All</NavLink>
        <NavLink>UI Design</NavLink>
        <NavLink>Webflow Design</NavLink>
        <NavLink>Figma Design</NavLink>
      </div>
      <div className="templates-container">
        <div className="portfolio-template">
          <div className="template-img">
            <img src={template1} alt="" />
          </div>
          <h3>Template 1</h3>
          <p>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle.
          </p>
          <NavLink to="/template1">View Portfolio →</NavLink>
        </div>
        <div className="portfolio-template">
          <div className="template-img">
            <img src={template2} alt="" />
          </div>
          <h3>Template 2</h3>
          <p>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle.
          </p>
          <NavLink>View Portfolio →</NavLink>
        </div>
        <div className="portfolio-template">
          <div className="template-img">
            <img src={template3} alt="" />
          </div>
          <h3>Template 3</h3>
          <p>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle.
          </p>
          <NavLink>View Portfolio →</NavLink>
        </div>
        <div className="portfolio-template">
          <div className="template-img">
            <img src={template4} alt="" />
          </div>
          <h3>Template 4</h3>
          <p>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle.
          </p>
          <NavLink>View Portfolio →</NavLink>
        </div>
        <div className="portfolio-template">
          <div className="template-img">
            <img src={template5} alt="" />
          </div>
          <h3>Template 5</h3>
          <p>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle.
          </p>
          <NavLink>View Portfolio →</NavLink>
        </div>
        <div className="portfolio-template">
          <div className="template-img">
            <img src={template6} alt="" />
          </div>
          <h3>Template 6</h3>
          <p>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle.
          </p>
          <NavLink>View Portfolio →</NavLink>
        </div>
      </div>
      <div className="portfolio-ending">
        <h2>Let&apos;s build something great together</h2>
        <p>
          Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
          ultricies nec dolor sit amet, scelerisque cursus purus.
        </p>
        <button>Contact Us</button>
      </div>
    </div>
  );
}
