import "./OurMission.scss";
import people3 from "../../img/people3.svg";
import people4 from "../../img/people4.svg";

export default function OurMission() {
  return (
    <div className="ourmission">
      <div className="ourmission-grids">
        <div className="grid-ourmission">
          <p>Our Mission</p>
          <h1>Inspire, Innovate, Share</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="grid-ourmission">
          <img src={people3} />
        </div>
        <div className="grid-ourmission">
          <img src={people4} />
        </div>
        <div className="grid-ourmission">
          <p>Our Vision</p>
          <h1>Laser focus</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}
