import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <section>
        <div className="footer-hero">
          <div className="footer-left">
            <img src="./logo.png" alt="" />
            <p>
              We are always open to discuss your project and improve your online
              presence.
            </p>
          </div>
          <div className="footer-contacts">
            <div className="contacts-email">
              <h3>Email me at</h3>
              <p>contact@website.com</p>
            </div>
            <div className="contacts-call">
              <h3>Call us</h3>
              <p>0927 6277 28525</p>
            </div>
          </div>
          <div className="footer-right">
            <h2>Lets Talk!</h2>
            <p>
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </p>
            <div className="social-logos"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="page-end">
          <p>Copyright 2022, Finsweet.com</p>
        </div>
      </section>
    </div>
  );
}
