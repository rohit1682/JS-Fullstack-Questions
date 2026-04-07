import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-content">
        <div className="profile-avatar">
          <img src="https://via.placeholder.com/150" alt="User Avatar" />
        </div>
        <div className="profile-details">
          <h3>John Doe</h3>
          <p>Email: john.doe@example.com</p>
          <p>Role: Administrator</p>
          <p>Member since: January 15, 2023</p>
        </div>
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-value">42</span>
            <span className="stat-label">Posts</span>
          </div>
          <div className="stat">
            <span className="stat-value">1.2k</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat">
            <span className="stat-value">568</span>
            <span className="stat-label">Following</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
