import "./Features.scss";
import featuresicon1 from "../../img/featuresicon1.svg";
import featuresicon2 from "../../img/featuresicon2.svg";
import featuresicon3 from "../../img/featuresicon3.svg";
import featuresicon4 from "../../img/featuresicon4.svg";
import featuresicon5 from "../../img/featuresicon5.svg";
import featuresicon6 from "../../img/featuresicon6.svg";

export default function Features() {
  return (
    <div className="features">
      <section>
        <div className="features-header">
          <h3>Features</h3>
          <p>Design that solves problems, one product at a time</p>
        </div>
        <div className="features-cards">
          <div className="feature-card">
            <img src={featuresicon1} alt="" />
            <h3>Uses Client First</h3>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="feature-card">
            <img src={featuresicon2} alt="" />
            <h3>Two Free Revision Round</h3>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="feature-card">
            <img src={featuresicon3} alt="" />
            <h3>Template Customization</h3>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="feature-card">
            <img src={featuresicon4} alt="" />
            <h3>24/7 Support</h3>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="feature-card">
            <img src={featuresicon5} alt="" />
            <h3>Quick Delivery</h3>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="feature-card">
            <img src={featuresicon6} alt="" />
            <h3>Hands-on approach</h3>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
