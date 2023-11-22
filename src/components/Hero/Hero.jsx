import "./Hero.scss";
import illustartion from "../../img/illustration.png";
import ViewOurWork from "../Buttons/ViewOurWork/ViewOurWork";
import { NavLink } from "react-router-dom";

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
          <ViewOurWork />
          <NavLink to="/pricing">View Pricing →</NavLink>
        </div>
      </div>
      <div className="hero-img">
        <img src={illustartion} alt="" />
      </div>
    </div>
  );
}
