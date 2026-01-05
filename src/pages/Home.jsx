import blogs from "../data/blogs";
import BlogCard from "../components/BlogCard";

function Home() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
        Latest Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
