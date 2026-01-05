function BlogCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <button className="mt-4 px-4 py-2 bg-yellow-400 text-white font-semibold rounded hover:bg-yellow-500 transition-colors">
        Read More
      </button>
    </div>
  );
}

export default BlogCard;
