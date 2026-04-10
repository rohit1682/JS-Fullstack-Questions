import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div className="root-layout">
      {/* Navbar will be persistent across all pages */}
      <Navbar />

      {/* Main content area where child routes will be rendered */}
      <main style={{ padding: "2rem" }}>
        {/* The Outlet component renders the matched child route */}
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
