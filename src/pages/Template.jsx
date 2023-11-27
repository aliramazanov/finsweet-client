import template1 from "../../src/img/template1.svg";
import waywework from "../../src/img/waywework.svg";
import Footer from "../../src/components/Footer/Footer";
import "./Pages.scss";

export default function Template() {
  return (
    <div>
      <div className="template-container">
        <div className="template-hero">
          <p>Web design and development</p>
          <h2>Finsweet Design case studies</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
          <div className="template-page-img">
            <img src={template1} alt="" />
          </div>
        </div>
        <div className="template-info">
          <div className="template-client-info">
            <p>Client</p>
            <span>Facebook</span>
          </div>
          <div className="template-client-service">
            <p>Service</p>
            <span>Product Design</span>
          </div>
          <div className="template-client-deliverable">
            <p>Deliverable</p>
            <span>UI Screens, UX Flow & Prototype</span>
          </div>
        </div>
        <div className="break">
          <hr />
        </div>
        <div className="about-project">
          <h3>About the project</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            </li>
            <li>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
            </li>
            <li>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa
            </li>
          </ul>
          <div className="waywework-img">
            <img src={waywework} alt="" />
          </div>
          <h3>How we do it</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            </li>
            <li>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
            </li>
            <li>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa
            </li>
          </ul>
        </div>
        <hr />
        <div className="template-keywords">
          <h6>Keywords</h6>
          <p>Design </p>
          <p>UI/UX </p>
          <p>Wireframing </p>
          <p>Branding </p>
          <p>Development </p>
          <p>Webflow </p>
        </div>
        <hr />
        <div className="portfolio-ending">
          <h2>Let&apos;s build something great together</h2>
          <p>
            Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
            ultricies nec dolor sit amet, scelerisque cursus purus.
          </p>
          <button>Contact Us</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
