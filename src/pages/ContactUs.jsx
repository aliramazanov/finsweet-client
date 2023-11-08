import "./Pages.scss";
import { useRef, useState } from "react";

export default function ContactUs() {
  const inputRef = useRef(null);
  const [setUpdated] = useState("");

  const handleClick = () => {
    setUpdated(inputRef.current.value);
  };

  return (
    <div className="contact-us-container">
      <h3>Contact Us</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
      <div className="contactus-form">
        <form>
          <label>
            Name
            <input type="text" placeholder="Enter your Name" />
          </label>
          <label>
            Surname
            <input type="text" placeholder="Enter your Surname" />
          </label>
          <label>
            Email
            <input type="text" placeholder="Enter your email" />
          </label>
          <label>
            Subject
            <input type="text" placeholder="Enter a subject" />
          </label>
        </form>
        <div className="inputofcontact">
          <p>Message</p>
          <input type="text" />
          <button onClick={handleClick}>Send Message</button>
        </div>
      </div>
    </div>
  );
}
