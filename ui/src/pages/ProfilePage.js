import React, { useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import ProfileContent from "../components/ProfileContent";
import EditModal from "../components/EditModal";
import "../styles/profile.css";
import Header from "../components/HeaderComponent.js";


function ProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
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
