import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <Link to={`/blog/${blog.id}`}>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition">
        <span className="text-sm text-blue-500">{blog.category}</span>
        <h3 className="text-xl font-semibold mt-2">{blog.title}</h3>
      </div>
    </Link>
  );
}

export default BlogCard;
