import React from 'react'
import BlogCard from '../components/BlogCard'
import blogs from '../data/blogs'

export default function Home(){
  return (
    <main className="home container">
      <h2>Latest Posts</h2>
      <section className="posts">
        {blogs.map(b => (
          <BlogCard key={b.id} blog={b} />
        ))}
      </section>
    </main>
  )
}
