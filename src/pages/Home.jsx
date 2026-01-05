import { useState } from "react";
import blogs from "../data/blogs";
import BlogCard from "../components/BlogCard";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || blog.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Latest Articles
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          className="flex-1 px-4 py-2 border rounded"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-4 py-2 border rounded"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>React</option>
          <option>CSS</option>
          <option>Career</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}

export default Home;
