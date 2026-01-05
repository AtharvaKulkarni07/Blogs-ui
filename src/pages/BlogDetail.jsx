import React from 'react'
import {useParams} from 'react-router-dom'
import blogs from '../data/blogs'

export default function BlogDetail(){
  const {id} = useParams() || {}
  const blog = blogs.find(b => String(b.id) === String(id)) || blogs[0]

  return (
    <main className="blog-detail container">
      <h2>{blog.title}</h2>
      <p className="meta">By {blog.author} — {blog.date}</p>
      <article className="content">{blog.content}</article>
    </main>
  )
}
