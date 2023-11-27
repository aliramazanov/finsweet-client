import "./FeaturesHero.scss";
import features from "../../../src/img/features.svg";
export default function FeaturesHero() {
  return (
    <div className="features-page">
      <div className="header-features">
        <div className="header-text-features">
          <h1>All the features you need</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>View Pricing</button>
        </div>
        <div className="header-img-features">
          <img src={features} alt="" />
        </div>
      </div>
    </div>
  );
}
