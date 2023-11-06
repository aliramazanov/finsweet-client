import BlogGrid from "../components/BlogGrid/BlogGrid";
import BlogHero from "../components/BlogHero/BlogHero";

export const Blog = () => {
  return (
    <div className="blog-page">
      <BlogHero />
      <BlogGrid />
    </div>
  );
};
