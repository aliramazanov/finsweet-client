import BlogHero from "../components/BlogHero/BlogHero";
import BlogGrid from "../components/BlogGrid/BlogGrid";
import Footer from "../components/Footer/Footer";

export const Blog = () => {
  return (
    <div className="blog-page">
      <BlogHero blogHero={true} />
      <BlogGrid />
      <Footer />
    </div>
  );
};
