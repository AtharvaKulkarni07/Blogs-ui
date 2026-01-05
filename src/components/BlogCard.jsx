function BlogCard({ title, description }) {
  return (
    <div className="blog-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Read More</button>
    </div>
  );
}

export default BlogCard;
