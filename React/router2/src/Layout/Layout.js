import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>|<Link to="about">About</Link>|
        <Link to="contact">Contact</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
