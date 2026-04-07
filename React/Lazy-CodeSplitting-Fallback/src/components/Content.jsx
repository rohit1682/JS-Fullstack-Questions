import React from "react";
import "../App.css";

function Content() {
    // Simulating an error
    // const isBroken = true;
    const isBroken = false;


  if (isBroken) {
    // Throw an error intentionally to simulate what will happen
    throw new Error("Intentionally broken Content component!");
  }

  return (
    <div className="content">
      <p>Go to the Content.jsx file and change the isBroken variable value. This variable is intentionally throwing an error.</p>
    </div>
  );
}

export default Content;