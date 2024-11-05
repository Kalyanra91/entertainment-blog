import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/blog.css";
import user from "../assets/icons/user.svg";


import loki from "../assets/loki.jpg";
import gifted from "../assets/gifted.jpg";
import eras from "../assets/eras.jpg";

const defaultImage = "../assests/land.jpg";

const BlogPost = ({
  title = "Untitled Post",
  username = "Anonymous",
  created_at = new Date().toLocaleDateString(),
  content = "No content available",
  image = defaultImage,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${1}`);
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
              <img src={user} alt={username} className="author-image" />
              <div className="author-details">
                <div className="author-name-container">
                  <span className="author-name">{username}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="post-content">
            <h1 className="post-title">{title}</h1>
            <p className="post-subtitle">{content}</p>
          </div>
          <div className="post-details">
            <span className="post-date">{created_at}</span>
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
            src={image}
            alt={title}
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
  title: PropTypes.string,
  username: PropTypes.string,
  created_at: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
};

BlogPost.defaultProps = {
  image: defaultImage,
};

const Blog = () => {
  const blogPosts = [
    {
      title: "Loki Season 1: A Mind-Bending Journey Through Time and Identity",
      content:
        "Marvel Studios' Loki emerges as one of the most ambitious and compelling entries in the MCU's expanding television universe. Tom Hiddleston returns as the God of Mischief in a series that's part bureaucratic thriller, part sci-fi adventure, and entirely entertaining from start to finish.",
      username: "Sandy Laufeyson",
      created_at: "July 15",
      image: loki,
    },
    {
      title:
        "Gifted: A Heartwarming Tale of Mathematical Brilliance and Family Love",
      content:
        "In Marc Webb's touching drama Gifted (2017), Chris Evans trades his Captain America shield for the role of a devoted uncle in a film that beautifully explores the delicate balance between nurturing exceptional talent and preserving childhood innocence.",
      username: "Alex Chen",
      created_at: "Nov 2",
      image: gifted,
    },
    {
      title:
        "Taylor Swift's Eras Tour: A Spectacular Journey Through Musical History",
      content:
        "Taylor Swift's Eras Tour has redefined what a concert experience can be, creating a three-hour-plus musical odyssey that spans her entire career. This isn't just a concert – it's a comprehensive retrospective of one of music's most dynamic careers, brought to life with stunning production values and intimate moments that make even stadium venues feel personal.",
      username: "Maria Garcia",
      created_at: "Nov 4",
      image: eras,
    },
  ];

  return (
    <div className="blog-container">
      <main className="blog-main">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </main>
    </div>
  );
};

export default Blog;
