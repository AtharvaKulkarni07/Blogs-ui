import { useParams } from "react-router-dom";
import blogs from "../data/blogs";

export default function Blog() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id);

  if (!blog) return <p className="text-center mt-20">Not found</p>;

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <span className="text-sm text-gray-500">{blog.category}</span>

      <h1 className="mt-3 text-4xl font-extrabold">
        {blog.title}
      </h1>

      <p className="mt-8 text-lg text-gray-700 leading-relaxed">
        {blog.content}
      </p>
    </article>
  );
}
