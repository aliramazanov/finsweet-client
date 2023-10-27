import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import Contact from "../Buttons/Contact/Contact";

export default function Navigation() {
  return (
    <div className="navigation">
      <NavLink className="navlinks" to="/">
        <div className="logo">
          <img src="/logo.png" alt="" />
        </div>
      </NavLink>
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
      <div className="contact-button">
        <Contact />
      </div>
    </div>
  );
}
