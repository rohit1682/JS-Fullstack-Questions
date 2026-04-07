import "./styles.css";
import React from "react";

export default function App() {
  function handleClick() {
    console.log("Button is clicked continuously");
  }

  function throttle(func, limit) {
    let inThrottle;
    return function () {
      if (!inThrottle) {
        func.call(this);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  const throttledClick = React.useRef(throttle(handleClick, 1000)).current;

  return (
    <div className="App">
      <button
        className="btn"
        onClick={() => {
          throttledClick();
        }}
      >
        Click
      </button>
    </div>
  );
}
