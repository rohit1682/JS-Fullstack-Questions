import { Link } from "react-router-dom";

const Products = () => {
  // Sample product data
  const products = [
    { id: 1, name: "Product 1", description: "Description for Product 1" },
    { id: 2, name: "Product 2", description: "Description for Product 2" },
    { id: 3, name: "Product 3", description: "Description for Product 3" },
    { id: 4, name: "Product 4", description: "Description for Product 4" },
  ];

  return (
    <div>
      <h1>Products Page</h1>
      <p>Browse our products below:</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1rem",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "4px",
              padding: "1rem",
              transition: "transform 0.2s",
              cursor: "pointer",
              ":hover": {
                transform: "scale(1.02)",
              },
            }}
          >
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Link
              to={`/products/${product.id}`}
              style={{
                display: "inline-block",
                backgroundColor: "#333",
                color: "white",
                padding: "0.5rem 1rem",
                textDecoration: "none",
                borderRadius: "4px",
              }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
