import { useState } from "react";
import "./Feedback.scss";
import arrowright from "../../img/arrowright.svg";
import arrowleft from "../../img/arrowleft.svg";
import human1 from "../../img/human1.svg";
import human2 from "../../img/human2.svg";
import human3 from "../../img/human3.svg";
import human4 from "../../img/human4.svg";
import human5 from "../../img/human5.svg";

export default function Feedback() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      text: "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.",
      author: "Jenny Wilson",
      title: "Vice President",
      image: human1,
    },
    {
      text: "Exceptional service from a highly skilled team. Their expertise in our industry is evident. Their contribute significantly",
      author: "Michael Thompson",
      title: "CEO",
      image: human2,
    },
    {
      text: "A reliable partner that goes above and beyond. Their attention to detail and commitment to quality is amazing.",
      author: "Emily Rodriguez",
      title: "Founder",
      image: human3,
    },
    {
      text: "Incredible teamwork and a deep understanding of our goals. This agency consistently delivers high-quality work.",
      author: "Sophie Martinez",
      title: "Director of Marketing",
      image: human4,
    },
    {
      text: "Remarkable professionalism and a proactive approach. Their ability to adapt to our evolving needs is key to our success.",
      author: "David Harris",
      title: "Chief Operating Officer",
      image: human5,
    },
  ];

  const handleLeftArrowClick = () => {
    setCurrentReview(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const handleRightArrowClick = () => {
    setCurrentReview((prevIndex) => (prevIndex + 1) % reviews.length);
  };

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
          <p>&quot;{reviews[currentReview].text}&quot;</p>
          <div className="feedback-interactions">
            <div className="feedback-author">
              <img src={reviews[currentReview].image} alt="" />
              <div className="review-auther-creds">
                <h3>{reviews[currentReview].author}</h3>
                <p>{reviews[currentReview].title}</p>
              </div>
            </div>
            <div className="buttons">
              <button id="arrowleft" onClick={handleLeftArrowClick}>
                <img src={arrowleft} alt="Arrow to Left" />
              </button>
              <button id="arrowright" onClick={handleRightArrowClick}>
                <img src={arrowright} alt="Arrow to Righ" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
