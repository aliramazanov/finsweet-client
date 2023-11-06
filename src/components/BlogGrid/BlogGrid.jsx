import "./BlogGrid.scss";
import bloggrid1 from "../../../src/img/bloggrid1.svg";
import bloggrid2 from "../../../src/img/bloggrid2.svg";
import bloggrid3 from "../../../src/img/bloggrid3.svg";
import bloggrid4 from "../../../src/img/bloggrid4.svg";
import bloggrid5 from "../../../src/img/bloggrid5.svg";
import bloggrid6 from "../../../src/img/bloggrid6.svg";

export default function BlogGrid() {
  return (
    <div className="blog-grid-container">
      <h2>Our Blog</h2>
      <div className="blog-grids">
        <div className="blog-grid-card">
          <div className="blog-grid-img">
            <img src={bloggrid1} />
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
            <img src={bloggrid2} />
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
            <img src={bloggrid3} />
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
            <img src={bloggrid4} />
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
            <img src={bloggrid5} />
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
            <img src={bloggrid6} />
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
  );
}
