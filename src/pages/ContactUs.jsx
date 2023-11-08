import { useRef, useState } from "react";

export default function ContactUs() {
  const inputRef = useRef(null);
  const [setUpdated] = useState("");

  const handleClick = () => {
    setUpdated(inputRef.current.value);
  };

  return (
    <div>
      <h3>Contact Us</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
      <form>
        <label>
          Name
          <input type="text" />
        </label>
        <label>
          Surname
          <input type="text" />
        </label>
        <label>
          Email
          <input type="text" />
        </label>
        <label>
          Subject
          <input type="text" />
        </label>
        <label>
          Message
          <input type="text" />
        </label>
        <button onClick={handleClick}>Send Message</button>
      </form>
    </div>
  );
}
