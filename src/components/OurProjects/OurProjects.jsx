import { NavLink } from "react-router-dom";
import card1 from "../../img/card1.svg";
import card2 from "../../img/card2.svg";
import card3 from "../../img/card3.svg";
import "./OurProjects.scss";

export default function OurProjects() {
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
          <div className="big-card">
            <img src={card1} alt="" />
          </div>
          <div className="small-cards">
            <div className="small-card">
              <img src={card2} alt="" />
            </div>
            <div className="small-card">
              <img src={card3} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
