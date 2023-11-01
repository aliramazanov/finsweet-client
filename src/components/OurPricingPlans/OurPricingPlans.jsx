import "./OurPricingPlans.scss";
import pointergreen from "../../img/pointergreen.svg";
import pointerpink from "../../img/pointerpink.svg";

export default function OurPricingPlans() {
  return (
    <div>
      <div className="header-ourpricingplans">
        <h2>Our Pricing Plans</h2>
        <p>
          When you’re ready to go beyond prototyping in Figma, Webflow is ready
          to help you bring your designs to life — without coding them.
        </p>
      </div>
      <div className="plans-container">
        <div className="plans">
          <div className="plan1">
            <div className="price">
              <h5>$299</h5>
              <p>Per Design</p>
            </div>
            <div className="category-ourpricingplans">
              <h6>Landing Page </h6>
              <p>When you’re ready to go beyond prototyping in Figma, </p>
            </div>
            <div className="whatisincluded">
              <div className="pointers">
                <img src={pointergreen} alt="" />
                <p>All limited links</p>
              </div>
              <div className="pointers">
                <img src={pointergreen} alt="" />
                <p>Own analytics platform</p>
              </div>
              <div className="pointers">
                <img src={pointergreen} alt="" />
                <p>Chat support</p>
              </div>
              <div className="pointers">
                <img src={pointerpink} alt="" />
                <p>Optimize hashtags</p>
              </div>
              <div className="pointers">
                <img src={pointerpink} alt="" />
                <p>Unlimited users</p>
              </div>
            </div>
            <div className="button-ourpricingplans">
              <button>Get Started</button>
            </div>
          </div>
          <div className="plan2">
            <div className="price">
              <h5>$399</h5>
              <p>Multi Design </p>
            </div>
            <div className="category-ourpricingplans">
              <h6>Website Page</h6>
              <p>
                When you’re ready to go beyond prototyping in Figma, Webflow’s
                ready to help.
              </p>
            </div>
            <div className="whatisincluded">
              <div className="pointers">
                <img src={pointergreen} alt="" />
                <p>All limited links</p>
              </div>
              <div className="pointers">
                <img src={pointergreen} alt="" />
                <p>Own analytics platform</p>
              </div>
              <div className="pointers">
                <img src={pointergreen} alt="" />
                <p>Chat support</p>
              </div>
              <div className="pointers">
                <img src={pointergreen} alt="" />
                <p>Optimize hashtags</p>
              </div>
              <div className="pointers">
                <img src={pointergreen} alt="" />
                <p>Unlimited users</p>
              </div>
            </div>
            <div className="button-ourpricingplans">
              <button>Get Started</button>
            </div>
          </div>
          <div className="plan3">
            <div className="price">
              <h5>$299</h5>
              <p>Per Design</p>
            </div>
            <div className="category-ourpricingplans">
              <h6>Landing Page </h6>
              <p>When you’re ready to go beyond prototyping in Figma, </p>
            </div>
            <div className="whatisincluded">
              <div className="pointers">
                <img src={pointergreen} alt="" />
                <p>All limited links</p>
              </div>
              <div className="pointers">
                <img src={pointergreen} alt="" />
                <p>Own analytics platform</p>
              </div>
              <div className="pointers">
                <img src={pointergreen} alt="" />
                <p>Chat support</p>
              </div>
              <div className="pointers">
                <img src={pointergreen} alt="" />
                <p>Optimize hashtags</p>
              </div>
              <div className="pointers">
                <img src={pointergreen} alt="" />
                <p>Unlimited users</p>
              </div>
              <div className="pointers">
                <img src={pointergreen} alt="" />
                <p>Assist and Help</p>
              </div>
            </div>
            <div className="button-ourpricingplans">
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
