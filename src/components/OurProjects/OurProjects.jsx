import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./OurProjects.scss";
import card1 from "../../img/card1.svg";
import card2 from "../../img/card2.svg";
import card3 from "../../img/card3.svg";

export default function OurProjects() {
  const [isHoveredCard1, setIsHoveredCard1] = useState(false);
  const [isHoveredCard2, setIsHoveredCard2] = useState(false);
  const [isHoveredCard3, setIsHoveredCard3] = useState(false);

  const handleMouseEnterCard1 = () => {
    setIsHoveredCard1(true);
  };

  const handleMouseLeaveCard1 = () => {
    setIsHoveredCard1(false);
  };

  const handleMouseEnterCard2 = () => {
    setIsHoveredCard2(true);
  };

  const handleMouseLeaveCard2 = () => {
    setIsHoveredCard2(false);
  };

  const handleMouseEnterCard3 = () => {
    setIsHoveredCard3(true);
  };

  const handleMouseLeaveCard3 = () => {
    setIsHoveredCard3(false);
  };

  const hoverStyleCard1 = {
    backgroundColor: isHoveredCard1 ? "rgba(0, 0, 255, 0.3)" : "transparent",
    zIndex: isHoveredCard1 ? 9 : 1,
  };

  const hoverStyleCard2 = {
    backgroundColor: isHoveredCard2 ? "rgba(0, 0, 255, 0.3)" : "transparent",
  };

  const hoverStyleCard3 = {
    backgroundColor: isHoveredCard3 ? "rgba(0, 0, 255, 0.3)" : "transparent",
  };

  return (
    <div className="ourprojects">
      <section>
        <div className="projects-header">
          <h2>View our projects</h2>
          <NavLink to="/portfolio">View more →</NavLink>
        </div>
      </section>
      <section>
        <div className="all-cards">
          <div
            className="big-card"
            style={hoverStyleCard1}
            onMouseEnter={handleMouseEnterCard1}
            onMouseLeave={handleMouseLeaveCard1}
          >
            <img src={card1} alt="" />
          </div>
          <div className="small-cards">
            <div
              className="small-card"
              style={hoverStyleCard2}
              onMouseEnter={handleMouseEnterCard2}
              onMouseLeave={handleMouseLeaveCard2}
            >
              <img src={card2} alt="" />
            </div>
            <div
              className="small-card"
              style={hoverStyleCard3}
              onMouseEnter={handleMouseEnterCard3}
              onMouseLeave={handleMouseLeaveCard3}
            >
              <img src={card3} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
