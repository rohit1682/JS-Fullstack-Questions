import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div>
      {/* Navbar always visible */}
      <nav style={{ padding: "1rem", backgroundColor: "#eee" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "1rem" }}>About</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      {/* Page content changes here */}
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
