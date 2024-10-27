// ... existing imports ...
import { Plus } from "lucide-react";

function EditModal({ editedProfile, setEditedProfile, onClose, onSave }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        // ... existing modal header ...
        <div className="modal-form">
          <div className="form-group">
            <label>Profile Picture</label>
            <div className="profile-upload-container">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setEditedProfile({
                        ...editedProfile,
                        profilePicture: reader.result,
                      });
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="profile-upload-input"
                id="profile-upload"
              />
              <label htmlFor="profile-upload" className="profile-upload-label">
                {editedProfile.profilePicture ? (
                  <img
                    src={editedProfile.profilePicture}
                    alt="Profile preview"
                    className="profile-preview"
                  />
                ) : (
                  <>
                    <Plus className="upload-icon" />
                    <span>Add profile</span>
                  </>
                )}
              </label>
            </div>
          </div>
          // ... rest of the form ...
        </div>
      </div>
    </div>
  );
}
