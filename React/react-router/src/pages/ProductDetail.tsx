import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  // Get the product id from URL params
  const { id } = useParams<{ id: string }>();

  // Sample product data (in a real app, you would fetch this based on the id)
  const products = [
    {
      id: "1",
      name: "Product 1",
      description:
        "This is a detailed description for Product 1. It includes all the specifications and features of this amazing product.",
      price: "$99.99",
    },
    {
      id: "2",
      name: "Product 2",
      description:
        "This is a detailed description for Product 2. It includes all the specifications and features of this fantastic product.",
      price: "$149.99",
    },
    {
      id: "3",
      name: "Product 3",
      description:
        "This is a detailed description for Product 3. It includes all the specifications and features of this wonderful product.",
      price: "$79.99",
    },
    {
      id: "4",
      name: "Product 4",
      description:
        "This is a detailed description for Product 4. It includes all the specifications and features of this excellent product.",
      price: "$199.99",
    },
  ];

  // Find the product that matches the id from URL
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div>
        <h2>Product Not Found</h2>
        <p>Sorry, the product you're looking for doesn't exist.</p>
        <Link
          to="/products"
          style={{
            display: "inline-block",
            backgroundColor: "#333",
            color: "white",
            padding: "0.5rem 1rem",
            textDecoration: "none",
            borderRadius: "4px",
          }}
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{product.name} Details</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "600px",
        }}
      >
        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "2rem",
            borderRadius: "8px",
          }}
        >
          <h2>{product.name}</h2>
          <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {product.price}
          </p>
          <p>{product.description}</p>
        </div>

        <Link
          to="/products"
          style={{
            display: "inline-block",
            backgroundColor: "#333",
            color: "white",
            padding: "0.5rem 1rem",
            textDecoration: "none",
            borderRadius: "4px",
            width: "fit-content",
          }}
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
