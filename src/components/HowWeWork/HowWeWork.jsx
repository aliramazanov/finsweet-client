import pointer1 from "../../img/pointer1.svg";
import pointer2 from "../../img/pointer2.svg";
import pointer3 from "../../img/pointer3.svg";
import pointer4 from "../../img/pointer4.svg";
import "./HowWeWork.scss";

export default function HowWeWork() {
  return (
    <div className="howwework">
      <section>
        <div className="main-text">
          <h2>How we work</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <button>Get in touch with us →</button>
        </div>
      </section>
      <section>
        <div className="pointers">
          <div className="pointer">
            <img src={pointer1} alt="" />
            <h2 className="pointer-text">Strategy</h2>
            <p className="pointer-content">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam .
            </p>
          </div>
          <div className="pointer">
            <img src={pointer2} alt="" />
            <h2 className="pointer-text">Wireframing</h2>
            <p className="pointer-content">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam .
            </p>
          </div>
          <div className="pointer">
            <img src={pointer3} alt="" />
            <h2 className="pointer-text">Design</h2>
            <p className="pointer-content">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam .
            </p>
          </div>
          <div className="pointer">
            <img src={pointer4} alt="" />
            <h2 className="pointer-text">Development</h2>
            <p className="pointer-content">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
