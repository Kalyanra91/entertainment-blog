// import React from "react";
// import { ArrowLeft, User } from "lucide-react";
// import loki from "../assets/loki.jpg";
// import Header from "./HeaderComponent";

// const BlogDetail = () => {
//   const samplePost = {
//     title: "Loki Season 1: A Mind-Bending Journey Through Time and Identity",
//     content: `Marvel Studios' "Loki" emerges as one of the most ambitious and compelling entries in the MCU's expanding television universe. Tom Hiddleston returns as the God of Mischief in a series that's part bureaucratic thriller, part sci-fi adventure, and entirely entertaining from start to finish.

//     1. Innovative Premise and World-Building
//     The Time Variance Authority (TVA) is one of Marvel's most fascinating creations to date. The retro-futuristic aesthetic, combined with the absurdist bureaucratic elements, creates a unique atmosphere that sets this series apart. The production design masterfully blends vintage office aesthetics with cosmic sci-fi elements, resulting in a visually distinct and memorable setting.

//     2. Outstanding Performances
//     Tom Hiddleston delivers his best performance yet as Loki, bringing new depths to the character we've known for over a decade. His chemistry with Sophia Di Martino's Sylvie is electric, while Owen Wilson's Mobius provides the perfect straight-man counterpoint to Loki's chaos. The entire cast brings their A-game, with special mention to Jonathan Majors' scene-stealing finale appearance.

//     3. Complex Narrative Structure
//     The show expertly weaves together multiple timelines and variants while maintaining a coherent and engaging story. The narrative tackles complex themes of free will, destiny, and identity while never losing sight of its entertainment value. Each episode builds upon the last, creating a compelling mystery that keeps viewers guessing until the end.

//     4. Visual Effects and Direction
//     The series boasts cinema-quality visual effects that bring its multiversal concepts to life. From the apocalyptic events to the cosmic timekeeper's realm, each episode delivers stunning imagery that serves the story rather than overshadowing it. The direction, particularly in episodes like "Lamentis," demonstrates remarkable creativity in staging and execution.

//     5. Thematic Depth
//     At its core, "Loki" is a story about identity and self-acceptance. The show explores what makes someone who they are - their choices, their pain, their potential for change. It tackles these philosophical questions while maintaining the wit and charm that fans expect from the character.

//     6. Music and Sound Design
//     Natalie Holt's score is a standout element, incorporating ethereal electronic elements with classical orchestration to create something truly unique in the MCU. The main theme perfectly captures both the grandeur and the playfulness of the series.

//     7. Impact on the MCU
//     The series serves as a crucial turning point for the Marvel Cinematic Universe, introducing concepts and characters that will clearly have far-reaching implications for future projects. The finale, in particular, opens up exciting possibilities for the MCU's multiverse saga.

//     Final Verdict: "Loki" Season 1 is a triumph of storytelling that manages to be both intellectually stimulating and thoroughly entertaining. It successfully reinvents one of Marvel's most beloved characters while expanding the MCU in bold new directions. The show proves that Marvel's most ambitious storytelling risks can yield their greatest rewards, setting a high bar for future Disney+ series.`,
//     username: "Sandy Laufeyson",
//     created_at: "July 15",
//     category: "TV Series",
//   };

//   return (
//     <>
//       <style>
//         {`
//           .blog-detail-container {
//             max-width: 800px;
//             margin: 0 auto;
//             padding: 0 20px 20px 20px;
//           }

//           .blog-detail-header {
//             margin-top: 20px;
//             margin-bottom: 32px;
//           }

//           .back-button {
//             background: none;
//             border: none;
//             font-size: 16px;
//             color: #374151;
//             cursor: pointer;
//             padding: 8px 0;
//             margin-bottom: 24px;
//             transition: color 0.2s;
//             display: flex;
//             align-items: center;
//             gap: 4px;
//           }

//           .back-button:hover {
//             color: #111827;
//           }

//           .blog-detail-meta {
//             display: flex;
//             gap: 16px;
//             margin-bottom: 16px;
//           }

//           .blog-detail-category {
//             font-size: 14px;
//             color: #6b7280;
//             background-color: #e5e7eb;
//             padding: 4px 12px;
//             border-radius: 30px;
//           }

//           .blog-detail-title {
//             font-size: 48px;
//             font-weight: 900;
//             color: #111827;
//             margin-bottom: 24px;
//             line-height: 1.2;
//           }

//           .blog-detail-author {
//             border-top: 1px solid #e5e7eb;
//             border-bottom: 1px solid #e5e7eb;
//             padding: 10px 0 10px 0;
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             gap: 12px;
//             margin-bottom: 32px;
//             width: 100%;
//           }

//           .blog-main {
//             display: flex;
//             gap: 10px;
//           }

//           .author-image {
//             width: 48px;
//             height: 48px;
//             border-radius: 50%;
//             background-color: #e5e7eb;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             flex-shrink: 0;
//           }

//           .author-info {
//             display: flex;
//             flex-direction: column;
//             justify-content: center;
//           }

//           .author-name {
//             font-weight: 500;
//             color: #111827;
//             font-size: 16px;
//             line-height: 1.4;
//           }

//           .post-date {
//             font-size: 14px;
//             color: #6b7280;
//             line-height: 1.4;
//           }

//           .blog-detail-thumbnail {
//             width: 100%;
//             height: 400px;
//             margin-bottom: 48px;
//             border-radius: 12px;
//             overflow: hidden;
//             background-color: #f3f4f6;
//           }

//           .blog-detail-thumbnail img {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//           }

//           .blog-detail-content {
//             font-size: 17.5px;
//             line-height: 1.8;
//             color: #1f2937;
//             font-family: "Libre Baskerville", serif;
//           }
          
//           .blog-detail-content * {
//             font-family: inherit !important;
//           }

//           .blog-detail-content p {
//             margin-bottom: 24px;
//           }

//           .comment-button .comment {
//             color: #6b7280;
//             cursor: pointer;
//           }

//           @media (max-width: 768px) {
//             .blog-detail-container {
//               padding: 16px;
//             }

//             .blog-detail-title {
//               font-size: 32px;
//             }

//             .blog-detail-thumbnail {
//               height: 300px;
//             }

//             .blog-detail-content {
//               font-size: 18px;
//             }
//           }

//           @media (max-width: 480px) {
//             .blog-detail-title {
//               font-size: 28px;
//             }

//             .blog-detail-thumbnail {
//               height: 200px;
//             }

//             .blog-detail-content {
//               font-size: 16px;
//             }
//           }
//         `}
//       </style>
//       <Header />
//       <div className="blog-detail-container">
//         <div className="blog-detail-header">
//           <div className="blog-detail-meta">
//             <span className="blog-detail-category">{samplePost.category}</span>
//           </div>
//           <h1 className="blog-detail-title">{samplePost.title}</h1>
//           <div className="blog-detail-author">
//             <div className="blog-main">
//               <div className="author-image">
//                 <User size={24} color="#6b7280" />
//               </div>
//               <div className="author-info">
//                 <span className="author-name">{samplePost.username}</span>
//                 <span className=" post-date">{samplePost.created_at}</span>
//               </div>
//             </div>
//             <div className="comment-button">
//               <a className="comment">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   class="feather feather-message-circle"
//                 >
//                   <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="blog-detail-thumbnail">
//           <img src={loki} alt={samplePost.title} />
//         </div>

//         <article className="blog-detail-content">
//           {samplePost.content.split("\n\n").map((paragraph, index) => (
//             <p key={index}>{paragraph}</p>
//           ))}
//         </article>
//       </div>
//     </>
//   );
// };

// export default BlogDetail;

import React, { useState, useEffect } from "react";
import { User } from "lucide-react";
import Header from "./HeaderComponent";
import "../styles/blog.css"

const BlogComponent = ({ match }) => {
  const [blog, setBlog] = useState(null);

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
            <div className="blog-main">
              <div className="author-image">
                <User size={24} color="#6b7280" />
              </div>
              <div className="author-info">
                <span className="author-name">{blog.author.username}</span>
                <span className="post-date">
                  {new Date(blog.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="comment-button">
              <a className="comment"></a>
            </div>
          </div>
        </div>

        <div className="blog-detail-thumbnail">
          <img src={blog.thumbnail} alt={blog.title} />
        </div>

        <article className="blog-detail-content">
          {blog.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </div>
    </>
  );
};

export default BlogComponent;