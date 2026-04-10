import React from "react";

interface LoadingFallbackProps {
  componentName?: string;
}

const LoadingFallback: React.FC<LoadingFallbackProps> = ({ componentName }) => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner-circle"></div>
        <div className="spinner-circle inner"></div>
      </div>
      <div className="loading-text">
        <p>Loading {componentName || "component"}...</p>
        <div className="loading-progress">
          <div className="loading-bar"></div>
        </div>
        <p className="loading-info">
          This demonstrates the{" "}
          <span className="highlight-green">Suspense</span> fallback UI while
          the lazy component loads
        </p>
      </div>
    </div>
  );
};

export default LoadingFallback;
