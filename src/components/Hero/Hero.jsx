import "./Hero.scss";
import illustartion from "../../img/illustration.png";
import ViewOurWork from "../Buttons/ViewOurWork/ViewOurWork";
import ViewPricing from "../Buttons/ViewPricing/ViewPricing";

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
          <ViewPricing />
        </div>
      </div>
      <div className="hero-img">
        <img src={illustartion} alt="" />
      </div>
    </div>
  );
}
