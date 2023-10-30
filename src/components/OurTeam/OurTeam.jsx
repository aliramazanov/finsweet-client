import "./OurTeam.scss";
import team1 from "../../img/team1.svg";
import team2 from "../../img/team2.svg";
import team3 from "../../img/team3.svg";
import team4 from "../../img/team4.svg";

export default function OurTeam() {
  return (
    <div className="ourteam">
      <div className="ourteam-header">
        <h2>Meet our team</h2>
      </div>
      <div className="team-cards">
        <div className="team-card">
          <img src={team1} />
          <h3>John Smith</h3>
          <p>CEO</p>
        </div>
        <div className="team-card">
          <img src={team2} />
          <h3>Simon Adams</h3>
          <p>CTO</p>
        </div>
        <div className="team-card">
          <img src={team3} />
          <h3>Paul Jones</h3>
          <p>Design Lead</p>
        </div>
        <div className="team-card">
          <img src={team4} />
          <h3>Sara Hardin</h3>
          <p>Project Manager</p>
        </div>
      </div>
    </div>
  );
}
