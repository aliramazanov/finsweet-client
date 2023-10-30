import "./OurDesigns.scss";
import people1 from "../../img/people1.svg";
import people2 from "../../img/people2.svg";
import lineindicator from "../../img/lineindicator.svg";
import circle from "../../img/circle.svg";

export default function OurDesigns() {
  return (
    <div className="ourdesigns">
      <div className="ourdesigns-first-part">
        <div className="ourdesigns-text">
          <h3>About us</h3>
          <h1>Our designs solve problems</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="ourdesigns-img">
          <img src={people1} alt="" />
        </div>
      </div>
      <div className="ourdesigns-second-part">
        <div className="second-part-content">
          <h3>Who we are</h3>
          <div className="text-second-part">
            <div className="goal-focused">
              <h1>Goal focussed</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="continous-improvement">
              <h1>Continuous improvement</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className="img-second-part">
          <img src={people2} />
        </div>
      </div>
      <div className="ourdesigns-third-part">
        <div className="header-third-part">
          <h1>The process we follow</h1>
        </div>
        <div className="processes">
          <div className="process">
            <div className="process-img">
              <img className="ourdesigns-circle" src={circle} />
              <img className="ourdesigns-line" src={lineindicator} />
            </div>
            <h2>Planning</h2>
            <div className="third-part-paragraph">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
          </div>
          <div className="process">
            <div className="process-img">
              <img className="ourdesigns-circle" src={circle} />
              <img className="ourdesigns-line" src={lineindicator} />
            </div>
            <h2>Conception</h2>
            <div className="third-part-paragraph">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
          </div>
          <div className="process">
            <div className="process-img">
              <img className="ourdesigns-circle" src={circle} />
              <img className="ourdesigns-line" src={lineindicator} />
            </div>
            <h2>Design</h2>
            <div className="third-part-paragraph">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
          </div>
          <div className="process">
            <div className="process-img">
              <img className="ourdesigns-circle" src={circle} />
              <img className="ourdesigns-line" src={lineindicator} />
            </div>
            <h2>Development</h2>
            <div className="third-part-paragraph">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
