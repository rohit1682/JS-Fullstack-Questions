import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main layout wraps all pages */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />          {/* Default page */}
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />  {/* 404 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
