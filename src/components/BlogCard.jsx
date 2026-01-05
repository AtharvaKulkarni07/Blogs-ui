import React from 'react'

export default function BlogCard({blog}){
  return (
    <article className="blog-card">
      <h2 className="title">{blog.title}</h2>
      <p className="excerpt">{blog.excerpt}</p>
      <a className="read-more" href={`/blog/${blog.id}`}>Read more</a>
    </article>
  )
}
