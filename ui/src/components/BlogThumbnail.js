import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/thumbnail.css";
import user from "../assets/icons/user.svg";

const BlogPost = ({ blog }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${blog._id}`);
  };

  return (
    <article className="blog-post" onClick={handleClick}>
      <div
        className="post-wrapper"
        style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}
      >
        <div className="post-content-wrapper" style={{ flex: 1 }}>
          <div className="post-meta">
            <div className="author-info">
              <img
                src={blog.author.avatar || user}
                alt={blog.author.username}
                className="author-image"
              />
              <div className="author-details">
                <div className="author-name-container">
                  <span className="author-name">{blog.author.username}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="post-content">
            <h1 className="post-title">{blog.title}</h1>
            <p className="post-subtitle">
              {blog.content.length > 200
                ? `${blog.content.slice(0, 200)}...`
                : blog.content}
            </p>
          </div>
          <div className="post-details">
            <span className="post-date">
              {new Date(blog.created_at).toLocaleDateString()}
            </span>
            <span>&bull;</span>
            <span className="post-category">{blog.category}</span>
          </div>
        </div>

        <div
          className="post-thumbnail"
          style={{
            flexShrink: 0,
            marginTop: "40px",
            width: "200px",
            height: "134px",
            borderRadius: "7px",
            overflow: "hidden",
          }}
        >
          <img
            src={blog.thumbnail || "/images/default.png"}
            alt={blog.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </article>
  );
};

BlogPost.propTypes = {
  blog: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    content: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.shape({
      username: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    }).isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

const Blog = ({ blog }) => {
  if (!blog) {
    return null;
  }
  
  return <BlogPost blog={blog} />;
};

Blog.propTypes = {
  blog: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    content: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.shape({
      username: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    }).isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default Blog;