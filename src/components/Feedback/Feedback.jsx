import "./Feedback.scss";
import arrowright from "../../img/arrowright.svg";
import arrowleft from "../../img/arrowleft.svg";
import feedbackwoman from "../../img/feedbackwoman.svg";

export default function Feedback() {
  return (
    <div className="feedback">
      <section>
        <div className="feedback-hero">
          <h2>What our clients say about us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
        </div>
      </section>
      <section>
        <div className="feedback-reviews">
          <p>
            &quot;The best agency we’ve worked with so far. They understand our
            product and are able to add new features with a great focus.&quot;
          </p>
          <div className="feedback-interactions">
            <div className="feedback-author">
              <img src={feedbackwoman} alt="" />
              <div className="review-auther-creds">
                <h3>Jenny Wilson</h3>
                <p>Vice President</p>
              </div>
            </div>
            <div className="buttons">
              <button id="arrowleft">
                <img src={arrowleft} alt="" />
              </button>
              <button id="arrowright">
                <img src={arrowright} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
