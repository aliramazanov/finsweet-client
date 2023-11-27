import { NavLink } from "react-router-dom";
import illustartion from "../../img/illustration.svg";
import "./Hero.scss";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Building stellar websites for early startups</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </h3>
        <div className="hero-buttons">
          <NavLink className={"viewourwork"} to="/portfolio">
            View our work
          </NavLink>
          <NavLink className={"pricing"} to="/pricing">
            View Pricing →
          </NavLink>
        </div>
      </div>
      <div className="hero-img">
        <img src={illustartion} alt="" />
      </div>
    </div>
  );
}
