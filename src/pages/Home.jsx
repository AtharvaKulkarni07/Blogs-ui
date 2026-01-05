import blogs from "../data/blogs";
import BlogCard from "../components/BlogCard";

function Home() {
  return (
    <section className="container">
      <h1>Latest Blogs</h1>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
