import { useState } from "react";
import blogs from "../data/blogs";
import { Link } from "react-router-dom";

export default function Home() {
  const [search, setSearch] = useState("");

  const filtered = blogs.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Read. Learn. Build.
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            High-quality articles on React, frontend engineering, and career growth.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        {/* Search */}
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-xl px-5 py-3 rounded-full border shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Blog grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(blog => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              className="group"
            >
              <article className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
                <span className="text-sm font-medium text-gray-500">
                  {blog.category}
                </span>

                <h2 className="mt-3 text-xl font-bold text-gray-900 group-hover:underline">
                  {blog.title}
                </h2>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {blog.content.slice(0, 90)}...
                </p>

                <div className="mt-5 text-sm font-semibold text-black">
                  Read more →
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
