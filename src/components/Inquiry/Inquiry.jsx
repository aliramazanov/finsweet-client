import { NavLink } from "react-router-dom";
import "./Inquiry.scss";

export default function Inquiry() {
  return (
    <div className="inquiry-container">
      <div className="inquiry-content">
        <div className="inquiry-hero">
          <h3>Building stellar websites for early startups</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>
        <div className="inquiry-form">
          <form>
            <h5>Send inquiry</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <label htmlFor="name">
              <input type="text" placeholder="Your Name" />
            </label>
            <label htmlFor="name">
              <input type="email" placeholder="Email" />
            </label>
            <label htmlFor="name">
              <input type="text" placeholder="Paste your Figma design URL" />
            </label>
            <button type="submit">Send an Inquiry</button>
            <NavLink to="/contactus">Get in touch with us →</NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}
