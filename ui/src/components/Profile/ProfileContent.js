import React from "react";

function ProfileContent({ profile }) {
  return (
    <div className="profile-content">
      <div className="about-card">
        <h2 className="section-title">About</h2>
        <p className="about-text">{profile.about}</p>
      </div>

      <div className="info-card">
        <h2 className="section-title">Blogs</h2>
        {/* blog container */}
        <div className="blogs-container">
          {profile.blogs && profile.blogs.length > 0 ? (
            profile.blogs.map((blog, index) => (
              <div key={index} className="blog-item">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-preview">{blog.preview}</p>
                <span className="blog-date">{blog.date}</span>
              </div>
            ))
          ) : (
            <p className="no-blogs-message">No blogs posted</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileContent;
