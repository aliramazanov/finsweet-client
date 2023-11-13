import "./Pages.scss";
import template1 from "../../src/img/template1.svg";

export default function Template() {
  return (
    <div className="template-container">
      <div className="template-hero">
        <p>Web design and development</p>
        <h2>Finsweet Design case studies</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse.
        </p>
        <div className="template-page-img">
          <img src={template1} alt="" />
        </div>
        <div className="template-info">
          <div className="template-client-info">
            <p>Client</p>
            <p>Facebook</p>
          </div>
          <div className="template-client-service">
            <p>Service</p>
            <p>Product Design</p>
          </div>
          <div className="template-client-deliverable">
            <p>Deliverable</p>
            <p>UI Screens, UX Flow & Prototype</p>
          </div>
          <div className="break">
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
