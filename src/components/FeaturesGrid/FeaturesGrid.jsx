import "./FeaturesGrid.scss";

import featuresgrid1 from "../../img/featuresgrid1.svg";
import featuresgrid2 from "../../img/featuresgrid2.svg";
import featuresgrid3 from "../../img/featuresgrid3.svg";
import featuresgrid4 from "../../img/featuresgrid4.svg";

export default function FeaturesGrid() {
  return (
    <div className="features-grid-container">
      {" "}
      <div className="features-grid">
        <div id="grid1" className="grid">
          <div className="features-grid-header">
            <p>Free Revision Rounds</p>
            <h3>Get free Revisions and one week of free maintenance </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="features-grid-img">
            <img src={featuresgrid1} />
          </div>
        </div>
        <div id="grid2" className="grid">
          <div className="features-grid-img">
            <img src={featuresgrid2} />
          </div>
          <div className="features-grid-header">
            <p>Use Client-first</p>
            <h3>
              Top agencies and freelancers around the world use Client-first
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </div>
        <div id="grid3" className="grid">
          <div className="features-grid-header">
            <p>24/7 Support</p>
            <h3>Working with us, you will be getting 24/7 priority support </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="features-grid-img">
            <img src={featuresgrid3} />
          </div>
        </div>
        <div id="grid4" className="grid">
          <div className="features-grid-img">
            <img src={featuresgrid4} />
          </div>
          <div className="features-grid-header">
            <p>Quick Delivery</p>
            <h3>Guranteed 1 week delivery for standard five pager website </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
