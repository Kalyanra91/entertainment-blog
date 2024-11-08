import React from "react";
import Header from "../components/HeaderComponent";
import Blog from "../components/BlogThumbnail";

import loki from "../assets/loki.jpg";
import gifted from "../assets/gifted.jpg";
import eras from "../assets/eras.jpg";

const exampleBlogPosts = [
  {
    _id: "1",
    title: "Loki Season 1: A Mind-Bending Journey Through Time and Identity",
    content:
      "Marvel Studios' Loki emerges as one of the most ambitious and compelling entries in the MCU's expanding television universe. Tom Hiddleston returns as the God of Mischief in a series that's part bureaucratic thriller, part sci-fi adventure, and entirely entertaining from start to finish.",
    author: {
      username: "Sandy Laufeyson",
      avatar: null,
    },
    created_at: "2023-07-15",
    category: "TV Shows",
    thumbnail: loki,
  },
  {
    _id: "2",
    title:
      "Gifted: A Heartwarming Tale of Mathematical Brilliance and Family Love",
    content:
      "In Marc Webb's touching drama Gifted (2017), Chris Evans trades his Captain America shield for the role of a devoted uncle in a film that beautifully explores the delicate balance between nurturing exceptional talent and preserving childhood innocence.",
    author: {
      username: "Alex Chen",
      avatar: null,
    },
    created_at: "2023-11-02",
    category: "Movies",
    thumbnail: gifted,
  },
  {
    _id: "3",
    title:
      "Taylor Swift's Eras Tour: A Spectacular Journey Through Musical History",
    content:
      "Taylor Swift's Eras Tour has redefined what a concert experience can be, creating a three-hour-plus musical odyssey that spans her entire career. This isn't just a concert – it's a comprehensive retrospective of one of music's most dynamic careers, brought to life with stunning production values and intimate moments that make even stadium venues feel personal.",
    author: {
      username: "Maria Garcia",
      avatar: null,
    },
    created_at: "2023-11-04",
    category: "Music",
    thumbnail: eras,
  },
];

function Home() {
  return (
    <>
      <Header />
      <div className="blog-container">
        <Blog blogs={exampleBlogPosts} />
      </div>
    </>
  );
}

export default Home;
