/* eslint-disable no-unused-vars */
import React from "react";
import "../App.css"; // Import custom styles if needed

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update the state when an error is caught
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error details (for debugging)
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>😞 Oops! Something went wrong.</h1>
          <p>
            We're sorry, but there was an error. Please try refreshing the page.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;