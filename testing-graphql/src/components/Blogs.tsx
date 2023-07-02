import { useState } from "react";
import { Query } from "./query";
import Blog from "./Blog";

export default function Blogs() {
  const [blogs, setBlogs] =
    useState<{ id: number; title: string; body: string; authorId: number }[]>();
  const updateBlogs = () => {
    Query.getBlogs().then((blogs) => setBlogs(blogs));
  };
  return (
    <>
      <button>Refresh Blogs</button>
      <div className="blogs">
        {blogs?.map((blog) => (
          <Blog
            id={blog.id}
            title={blog.title}
            authorId={blog.authorId}
            body={blog.body}
            key={blog.id}
          />
        ))}
      </div>
    </>
  );
}
