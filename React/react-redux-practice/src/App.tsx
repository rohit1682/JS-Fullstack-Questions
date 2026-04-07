import React from "react";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";

const App: React.FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <Counter />
      <hr />
      <ThemeToggle />
    </div>
  );
};

export default App;
