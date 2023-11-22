import { NavLink } from "react-router-dom";
import "./BlogHero.scss";
import peopleworking from "../../../src/img/peopleworking.svg";

// eslint-disable-next-line react/prop-types
export default function BlogHero({ blogHero }) {
  return (
    <div className="blog-container">
      <div>
        <h2>A UX Case Study on Creating a Studious Environment for Students</h2>
      </div>
      <div className="author-date-blog">
        <p>Andrew Jonson</p>
        <p>Posted on 27th January 2021</p>
      </div>
      <div className="image-blog-hero">
        <img src={peopleworking} alt="People working" />
      </div>
      {blogHero && (
        <>
          <p>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon of the sea to the level of the
            spectator on a hillside.
          </p>
          <NavLink to="/readblog">Read more →</NavLink>
        </>
      )}
    </div>
  );
}
