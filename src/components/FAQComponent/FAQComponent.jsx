import { useState } from "react";
import "./FAQ.scss";

export default function FAQ() {
  const questions = [
    <div key={0} className="faq-questions-interactive">
      <span>01</span>
      <p> How much time does it take?</p>
    </div>,
    <div key={2} className="faq-questions-interactive">
      <span>02</span>
      <p> How much time does it take?</p>
    </div>,
    <div key={3} className="faq-questions-interactive">
      <span>03</span>
      <p> How much time does it take?</p>
    </div>,
    <div key={4} className="faq-questions-interactive">
      <span>04</span>
      <p> How much time does it take?</p>
    </div>,
    <div key={5} className="faq-questions-interactive">
      <span>05</span>
      <p> How much time does it take?</p>
    </div>,
  ];

  const [open, setOpen] = useState(Array(questions.length).fill(false));
  const toggleQuestion = (index) => {
    const newOpenState = [...open];
    newOpenState[index] = !newOpenState[index];
    setOpen(newOpenState);
  };

  return (
    <div className="faq-section">
      <div className="faq-section-hero">
        <section>
          <h3>Frequently asked question</h3>
          <p>Contact us for more info</p>
        </section>
      </div>

      <section>
        <div className="faq-questions">
          {questions.map((question, index) => (
            <div className="question-card" key={index}>
              <h2 onClick={() => toggleQuestion(index)}>{question}</h2>
              {open[index] && (
                <div className="faq-displayed-card">
                  <p className="interactive-p-tag">
                    Apparently we had reached a great height in the atmosphere,
                    for the sky was a dead black, and the stars had ceased to
                    twinkle.
                  </p>
                </div>
              )}
              <hr />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
