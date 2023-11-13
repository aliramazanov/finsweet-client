import PropTypes from "prop-types";
import "./BenefitsOf.scss";
import icon1 from "../../img/icon1.svg";
import icon2 from "../../img/icon2.svg";
import icon3 from "../../img/icon3.svg";
import logo1 from "../../img/logo1.svg";
import logo2 from "../../img/logo2.svg";
import logo3 from "../../img/logo3.svg";
import logo4 from "../../img/logo4.svg";
import logo5 from "../../img/logo5.svg";

const BenefitsOf = ({ featuresPage, aboutUs }) => (
  <div className="benefitsof">
    {featuresPage && (
      <div className="benefitsof-logos">
        <div className="benefitsof-logos-text">
          <h2>100.000+</h2>
          <p>Finsweet Users</p>
        </div>
        <div className="benefitsof-logos-img">
          <img src={logo1} alt="Logo 1" />
          <img src={logo2} alt="Logo 2" />
          <img src={logo3} alt="Logo 3" />
          <img src={logo4} alt="Logo 4" />
          <img src={logo5} alt="Logo 5" />
        </div>
      </div>
    )}
    <div className="benefitsof-header">
      {aboutUs ? (
        <h2>The benefits of working with us</h2>
      ) : (
        <h2>The benefits of working with our team</h2>
      )}
    </div>
    <div className="benefitsof-cards">
      <div className="benefitsof-card">
        <img src={icon1} alt="Icon 1" />
        <h3>Customize with ease</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
        </p>
      </div>
      <div className="benefitsof-card">
        <img src={icon2} alt="Icon 2" />
        <h3>Perfectly Responsive</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
        </p>
      </div>
      <div className="benefitsof-card">
        <img src={icon3} alt="Icon 3" />
        <h3>Friendly Support</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
        </p>
      </div>
    </div>
    {aboutUs && (
      <div className="benefitsof-logos">
        <div className="benefitsof-logos-text">
          <h2>100.000+</h2>
          <p>Finsweet Users</p>
        </div>
        <div className="benefitsof-logos-img">
          <img src={logo1} alt="Logo 1" />
          <img src={logo2} alt="Logo 2" />
          <img src={logo3} alt="Logo 3" />
          <img src={logo4} alt="Logo 4" />
          <img src={logo5} alt="Logo 5" />
        </div>
      </div>
    )}
  </div>
);

BenefitsOf.propTypes = {
  featuresPage: PropTypes.bool,
  aboutUs: PropTypes.bool,
};

export default BenefitsOf;
