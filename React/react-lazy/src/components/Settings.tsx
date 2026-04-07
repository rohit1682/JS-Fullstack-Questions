import React, { useState } from "react";

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [emailUpdates, setEmailUpdates] = useState(true);

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="settings-content">
        <div className="settings-section">
          <h3>Preferences</h3>
          <div className="setting-item">
            <label htmlFor="notifications">
              Notifications
              <input
                id="notifications"
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />
              <span className="toggle-switch"></span>
            </label>
          </div>
          <div className="setting-item">
            <label htmlFor="darkMode">
              Dark Mode
              <input
                id="darkMode"
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <span className="toggle-switch"></span>
            </label>
          </div>
          <div className="setting-item">
            <label htmlFor="emailUpdates">
              Email Updates
              <input
                id="emailUpdates"
                type="checkbox"
                checked={emailUpdates}
                onChange={() => setEmailUpdates(!emailUpdates)}
              />
              <span className="toggle-switch"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
