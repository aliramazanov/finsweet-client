import "./Inquiry.scss";

export default function Inquiry() {
  return (
    <div className="inquiry-container">
      <div className="inquiry-hero">
        <h3>Building stellar websites for early startups</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
        </p>
      </div>
      <div className="inquiry-form">
        <form>
          <h5>Send inquiry</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <label htmlFor="name">
            <p>Name</p>
            <input type="text" />
          </label>
          <label htmlFor="name">
            <p>Email</p>
            <input type="text" />
          </label>
          <label htmlFor="name">
            <p> Paste your Figma design URL</p>
            <input type="text" />
          </label>
          <button type="submit">Send an Inquiry</button>
        </form>
        <button>Get in touch with us</button>
      </div>
    </div>
  );
}
