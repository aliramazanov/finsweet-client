import BlogHero from "../components/BlogHero/BlogHero";
import BlogGrid from "../components/BlogGrid/BlogGrid";

export const Blog = () => {
  return (
    <div className="blog-page">
      <BlogHero blogHero={true} />
      <BlogGrid />
    </div>
  );
};
