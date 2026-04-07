const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>This is the contact page of our application.</p>
      <form style={{ maxWidth: "400px", margin: "0 auto" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="message"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Message:
          </label>
          <textarea
            id="message"
            rows={5}
            style={{ width: "100%", padding: "0.5rem" }}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#333",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
