import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        backgroundColor: "#333",
        color: "white",
      }}
    >
      <div className="logo">
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        >
          React Router Demo
        </Link>
      </div>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "1rem",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={{ color: "white", textDecoration: "none" }}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            style={{ color: "white", textDecoration: "none" }}
          >
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
