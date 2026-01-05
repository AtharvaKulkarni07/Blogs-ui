import { useParams } from "react-router-dom";
import blogs from "../data/blogs";

function Blog() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id);

  if (!blog) return <p className="text-center mt-10">Blog not found</p>;

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Category: {blog.category}
      </p>
      <p className="leading-7">{blog.content}</p>
    </section>
  );
}

export default Blog;
