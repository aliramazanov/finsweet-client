import "./BenefitsOf.scss";
import icon1 from "../../img/icon1.svg";
import icon2 from "../../img/icon2.svg";
import icon3 from "../../img/icon3.svg";
import logo1 from "../../img/logo1.svg";
import logo2 from "../../img/logo2.svg";
import logo3 from "../../img/logo3.svg";
import logo4 from "../../img/logo4.svg";
import logo5 from "../../img/logo5.svg";

export default function BenefitsOf() {
  return (
    <div className="benefitsof">
      <div className="benefitsof-header">
        <h2>The benefits of working with us</h2>
      </div>
      <div className="benefitsof-cards">
        <div className="benefitsof-card">
          <img src={icon1} />
          <h3>Customize with ease</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>
        <div className="benefitsof-card">
          <img src={icon2} />
          <h3>Perfectly Responsive</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>
        <div className="benefitsof-card">
          <img src={icon3} />
          <h3>Friendly Support</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>
      </div>
      <div className="benefitsof-logos">
        <div className="benefitsof-logos-text">
          <h2>100.000+</h2>
          <p>Finsweet Users</p>
        </div>
        <div className="benefitsof-logos-img">
          <img src={logo1} />
          <img src={logo2} />
          <img src={logo3} />
          <img src={logo4} />
          <img src={logo5} />
        </div>
      </div>
    </div>
  );
}
