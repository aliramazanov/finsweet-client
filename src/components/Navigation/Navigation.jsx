import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navigation.scss";

export default function Navigation({ isnav }) {
  return (
    <div className={isnav ? "navigation" : "footer-nav"}>
      {isnav && (
        <NavLink className="navlinks" to="/">
          <div className="logo">
            <img src="/logo.png" alt="" />
          </div>
        </NavLink>
      )}
      {!isnav && (
        <div className="footer-copyright">
          <p>Copyright 2021, Finsweet.com</p>
        </div>
      )}
      <NavLink className="navlinks" to="/">
        Home
      </NavLink>
      <NavLink className="navlinks" to="/about">
        About us
      </NavLink>
      <NavLink className="navlinks" to="/features">
        Features
      </NavLink>
      <NavLink className="navlinks" to="/pricing">
        Pricing
      </NavLink>
      <NavLink className="navlinks" to="/faq">
        FAQ
      </NavLink>
      <NavLink className="navlinks" to="/blog">
        Blog
      </NavLink>
      <NavLink className="navlinks" to="/contactus">
        Contact Us
      </NavLink>
    </div>
  );
}

Navigation.propTypes = {
  isnav: PropTypes.boolean,
};
