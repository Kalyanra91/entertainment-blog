import React, { useState, useEffect } from "react";
import ProfileHeader from "../components/ProfileHeader";
import ProfileContent from "../components/ProfileContent";
import EditModal from "../components/EditModal";
import "../styles/profile.css";
import Header from "../components/HeaderComponent.js";

function ProfilePage() {

  useEffect(() => {
    fetch("http://localhost:3001/profile/johndoe")
      .then((response) => response.json())
      .then((data) => {
        const date = new Date(data.created_at);
        const options = { year: "numeric", month: "long"};
        data.created_at = date.toLocaleDateString("en-US", options);
        setProfile(data);
      });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfile] = useState({
    username: "",
    about: "",
    email: "",
    avatar: "",
    created_at: ""
  });

  const [editedProfile, setEditedProfile] = useState(profile);

  const handleEditClick = () => {
    setEditedProfile(profile);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    setProfile(editedProfile);
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <Header />
      <div style={{height:"64px"}}></div>
      <ProfileHeader
        profile={profile}
        onEditClick={handleEditClick}
      />
      <ProfileContent profile={profile} />
      {isModalOpen && (
        <EditModal
          editedProfile={editedProfile}
          setEditedProfile={setEditedProfile}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

export default ProfilePage;
