import React, { useState, useEffect } from "react";
import Header from "./HeaderComponent";
import "../styles/blog.css";

const BlogComponent = () => {
  const [blog, setBlog] = useState(null);
  // Extracting blog id from URL
  const _id = window.location.pathname.split("/")[2];
  useEffect(() => {
    // Fetching blog post
    fetch(`http://localhost:3001/blog/${_id}`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBlog(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (!blog) return <p>Loading...</p>; // Loading state if blog data is not yet fetched

  return (
    <>
      <Header />
      <div className="blog-detail-container">
        <div className="blog-detail-header">
          <div className="blog-detail-meta">
            <span className="blog-detail-category">{blog.category}</span>
          </div>
          <h1 className="blog-detail-title">{blog.title}</h1>
          <div className="blog-detail-author">
            <div className="author-info">
                <img src={blog.author.avatar} alt={blog.author.username} />
                <span className="author-name">{blog.author.username}</span>
            </div>
            <span className="post-date">
                  Posted on {new Date(blog.created_at).toLocaleDateString()}
            </span>
            </div>
            <div className="comment-button">
              <a className="comment"></a>
            </div>
        </div>

        <div className="blog-detail-thumbnail">
          <img
            src={"http://localhost:3001" + blog.thumbnail}
            alt={blog.title}
          />
        </div>

        <article className="blog-detail-content">
          {blog.content?.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </div>
    </>
  );
};

export default BlogComponent;
