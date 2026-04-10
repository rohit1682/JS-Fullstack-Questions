import React, { useState, Suspense, lazy, useEffect } from "react";
import "./App.css";
import "./components/Components.css";
import NetworkMonitor from "./components/NetworkMonitor";
import LoadingFallback from "./components/LoadingFallback";
import SuspenseDemo from "./components/SuspenseDemo";

// Lazy load components instead of importing them directly
// React.lazy takes a function that must call a dynamic import()
// This code will only load the component when it's needed
const Dashboard = lazy(
  () =>
    // We can simulate a slow network by adding a delay
    new Promise<typeof import("./components/Dashboard")>((resolve) => {
      // Artificial delay of 1.5 seconds for dashboard to demonstrate loading
      setTimeout(() => {
        import("./components/Dashboard").then(resolve);
      }, 1500);
    })
);

const Profile = lazy(
  () =>
    // Simulate a delay of 2 seconds for Profile component
    new Promise<typeof import("./components/Profile")>((resolve) => {
      setTimeout(() => {
        import("./components/Profile").then(resolve);
      }, 2000);
    })
);

const Settings = lazy(
  () =>
    // Simulate a delay of 1 second for Settings component
    new Promise<typeof import("./components/Settings")>((resolve) => {
      setTimeout(() => {
        import("./components/Settings").then(resolve);
      }, 1000);
    })
);

function App() {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [showLazyExplanation, setShowLazyExplanation] = useState(false);

  // After initial render, mark first load as complete
  useEffect(() => {
    setIsFirstLoad(false);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setShowLazyExplanation(true);

    // Hide explanation after 5 seconds
    setTimeout(() => {
      setShowLazyExplanation(false);
    }, 5000);
  };

  return (
    <div className="app-container">
      <h1>React Lazy Loading Demo</h1>

      <div
        className={`explanation-box ${
          showLazyExplanation ? "highlight-box" : ""
        }`}
      >
        <h2>How React Lazy Loading Works</h2>
        <p>
          <span className="highlight-blue">React.lazy</span> lets you defer
          loading component code until it's rendered for the first time.
        </p>
        <p>
          <span className="highlight-green">Suspense</span> displays a fallback
          UI while components are loading.
        </p>
        <p>
          When combined, they create{" "}
          <span className="highlight-orange">code-splitting</span> to reduce
          initial bundle size and improve performance!
        </p>
      </div>

      <div className="tab-container">
        <div className="tab-buttons">
          <button
            className={activeTab === "dashboard" ? "active" : ""}
            onClick={() => handleTabChange("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => handleTabChange("profile")}
          >
            Profile
          </button>
          <button
            className={activeTab === "settings" ? "active" : ""}
            onClick={() => handleTabChange("settings")}
          >
            Settings
          </button>
        </div>

        <div className="tab-content">
          {/* 
            Suspense is the component that handles the loading state
            It requires a fallback prop that can be any React element
            This gets shown while the lazy component is loading
          */}
          <Suspense fallback={<LoadingFallback componentName={activeTab} />}>
            {/* Each tab renders a different lazy-loaded component */}
            {activeTab === "dashboard" && <Dashboard />}
            {activeTab === "profile" && <Profile />}
            {activeTab === "settings" && <Settings />}
          </Suspense>
        </div>
      </div>

      <div className="suspense-explanation">
        <h3>What's happening behind the scenes?</h3>
        <ol>
          <li>
            <span className="highlight-orange">When you clicked a tab</span>:
            React encountered a lazy component that hasn't been loaded yet
          </li>
          <li>
            <span className="highlight-green">Suspense activated</span>: It
            showed the fallback UI while the component loads
          </li>
          <li>
            <span className="highlight-blue">Import happened</span>: A separate
            JavaScript chunk was fetched from the server
          </li>
          <li>
            <span className="highlight-purple">Component rendered</span>: Once
            loaded, React rendered the actual component
          </li>
        </ol>
      </div>

      {/* Error handling demonstration with Suspense */}
      <SuspenseDemo />

      <NetworkMonitor />
    </div>
  );
}

export default App;
