import React, { useState, Suspense, lazy } from "react";

// Define a component to handle errors that might occur during lazy loading
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error-container">
          <h3>Something went wrong loading the component</h3>
          <p className="error-message">{this.state.error?.message}</p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Create a component that will fail to load
const BrokenComponent = lazy(
  () =>
    new Promise<any>((_, reject) => {
      setTimeout(() => {
        reject(
          new Error(
            "Failed to load component - this is an intentional error for demonstration"
          )
        );
      }, 1500);
    })
);

// Create a component that will load very slowly
const SlowComponent = lazy(
  () =>
    new Promise<{ default: React.ComponentType<{}> }>((resolve) => {
      setTimeout(() => {
        resolve({
          default: () => (
            <div className="slow-component">
              <h3>Finally Loaded!</h3>
              <p>This component took 5 seconds to load</p>
              <div className="success-icon">✓</div>
            </div>
          ),
        });
      }, 5000);
    })
);

const SuspenseDemo: React.FC = () => {
  const [demoType, setDemoType] = useState<"broken" | "slow" | null>(null);

  const resetDemo = () => {
    setDemoType(null);
  };

  return (
    <div className="suspense-demo-container">
      <h2>Advanced Suspense Demos</h2>

      <div className="demo-buttons-container">
        <button
          className={demoType === null ? "active" : ""}
          onClick={resetDemo}
        >
          Reset
        </button>
        <button
          className={demoType === "slow" ? "active" : ""}
          onClick={() => setDemoType("slow")}
        >
          Slow Loading Component (5s)
        </button>
        <button
          className={demoType === "broken" ? "active" : ""}
          onClick={() => setDemoType("broken")}
        >
          Error During Loading
        </button>
      </div>

      <div className="demo-explanation">
        <p>
          <span className="highlight-green">Suspense</span> works with{" "}
          <span className="highlight-purple">ErrorBoundary</span> to handle both
          loading states and errors.
        </p>
      </div>

      <div className="demo-content">
        {demoType && (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className="suspense-fallback">
                  <div className="loading-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <p>
                    Loading component...{" "}
                    {demoType === "slow" ? "(this will take 5 seconds)" : ""}
                  </p>
                  <p className="suspense-note">
                    This is the{" "}
                    <span className="highlight-green">
                      Suspense fallback UI
                    </span>
                  </p>
                </div>
              }
            >
              {demoType === "broken" && <BrokenComponent />}
              {demoType === "slow" && <SlowComponent />}
            </Suspense>
          </ErrorBoundary>
        )}

        {!demoType && (
          <div className="select-demo-message">
            Select a demo to see Suspense in action
          </div>
        )}
      </div>
    </div>
  );
};

export default SuspenseDemo;
