import { useState } from "react";
import { Query } from "./query";
import Blog from "./Blog";

export default function Blogs() {
  const [blogs, setBlogs] =
    useState<{ id: number; title: string; body: string; author: {id: number, name: string} }[]>([]);
  const updateBlogs = () => {
    Query.getBlogs().then(blogs => setBlogs(blogs));
    console.log(blogs)
  };
  return (
    <>
      <button onClick={updateBlogs}>Refresh Blogs</button>
      <div className="blogs">
        {blogs?.map((blog) => (
          <Blog
            id={blog.id}
            title={blog.title}
            author={blog.author}
            body={blog.body}
            key={blog.id}
          />
        ))}
      </div>
    </>
  );
}
