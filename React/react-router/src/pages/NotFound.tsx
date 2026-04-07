import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          backgroundColor: "#333",
          color: "white",
          padding: "0.5rem 1rem",
          textDecoration: "none",
          borderRadius: "4px",
          marginTop: "1rem",
        }}
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
