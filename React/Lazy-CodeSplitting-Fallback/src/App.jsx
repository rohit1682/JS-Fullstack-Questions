import React, { Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css"; // Import styles

// Lazy-loaded components
const Header = React.lazy(() => import("./components/Header"));
const Content = React.lazy(() => import("./components/Content"));

function App() {
  return (
    <div className="app">
      {/* Wrap everything in the Error Boundary */}
      <ErrorBoundary>
        {/* Suspense handles the fallback during lazy loading */}
        <Suspense fallback={<div className="loading-spinner">⚡ Loading...</div>}>
          <Header />
          <Content />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;