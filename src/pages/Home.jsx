import Features from "../components/Features/Features";
import Feedback from "../components/Feedback/Feedback";
import Hero from "../components/Hero/Hero";
import HowWeWork from "../components/HowWeWork/HowWeWork";
import Inquiry from "../components/Inquiry/Inquiry";
import OurProjects from "../components/OurProjects/OurProjects";

import homeblog1 from "../../src/img/homeblog1.svg";
import homeblog2 from "../../src/img/homeblog2.svg";
import homeblog3 from "../../src/img/homeblog3.svg";

export const Home = () => {
  return (
    <div>
      <Hero />
      <HowWeWork />
      <OurProjects />
      <Features />
      <Feedback />
      <Inquiry />
      <div className="blog-ending">
        <h3>Our blog</h3>
        <div className="blog-grids-home">
          <div className="blog-grid-card">
            <div className="blog-grid-img">
              <img src={homeblog1} />
              <p>27 Jan 2021</p>
              <h6>
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h6>
              <p>
                See how pivoting to Webflow changed one person’s sales strategy
                and allowed him to attract
              </p>
              <button>Read More &rarr; </button>
            </div>
          </div>
          <div className="blog-grid-card">
            <div className="blog-grid-img">
              <img src={homeblog2} />
              <p>27 Jan 2021</p>
              <h6>
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h6>
              <p>
                See how pivoting to Webflow changed one person’s sales strategy
                and allowed him to attract
              </p>
              <button>Read More &rarr; </button>
            </div>
          </div>
          <div className="blog-grid-card">
            <div className="blog-grid-img">
              <img src={homeblog3} />
              <p>27 Jan 2021</p>
              <h6>
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h6>
              <p>
                See how pivoting to Webflow changed one person’s sales strategy
                and allowed him to attract
              </p>
              <button>Read More &rarr; </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
