import { useState } from "react";
import "./OurTeam.scss";
import team1 from "../../img/team1.svg";
import team2 from "../../img/team2.svg";
import team3 from "../../img/team3.svg";
import team4 from "../../img/team4.svg";
import eclipseImage from "../../img/eclipse.png";
import facebook from "../../../src/img/facebook.svg";
import twitter from "../../../src/img/twitter.svg";
import linkedin from "../../../src/img/linkedin.svg";

export default function OurTeam() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="ourteam">
      <div className="ourteam-header">
        <h2>Meet our team</h2>
      </div>
      <div className="team-cards">
        {teamData.map((team, index) => (
          <div
            key={index}
            className="team-card"
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
          >
            <div className="image-container">
              <img src={team.image} alt={team.name} className="team-image" />
              {hoveredCard === index && (
                <div className="overlay-container">
                  <img
                    src={eclipseImage}
                    alt={`Eclipse Overlay for ${team.name}`}
                    className="overlay-image"
                  />
                  <div className="social-icons">
                    <img
                      src={facebook}
                      alt="Facebook"
                      className="social-icon"
                    />
                    <img src={twitter} alt="Twitter" className="social-icon" />
                    <img
                      src={linkedin}
                      alt="LinkedIn"
                      className="social-icon"
                    />
                  </div>
                </div>
              )}
            </div>
            <h3>{team.name}</h3>
            <p>{team.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const teamData = [
  { name: "John Smith", role: "CEO", image: team1 },
  { name: "Simon Adams", role: "CTO", image: team2 },
  { name: "Paul Jones", role: "Design Lead", image: team3 },
  { name: "Sara Hardin", role: "Project Manager", image: team4 },
];
