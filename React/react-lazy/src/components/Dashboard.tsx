import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h3>Statistics</h3>
          <p>Active Users: 5,782</p>
          <p>Total Revenue: $12,384</p>
        </div>
        <div className="dashboard-card">
          <h3>Recent Activity</h3>
          <ul>
            <li>John submitted a new order</li>
            <li>Sarah updated her profile</li>
            <li>Mark completed 5 tasks</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
