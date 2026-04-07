import "./styles.css";
import React from "react";

export default function App() {
  function handleClick() {
    console.log("Button is clicked");
  }

  function debounce(func, delay) {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.call(this);
      }, delay);
    };
  }

  const debouncedClick = React.useRef(debounce(handleClick, 1000)).current;

  return (
    <div className="App">
      <button
        className="btn"
        onClick={() => {
          debouncedClick();
        }}
      >
        Click
      </button>
    </div>
  );
}
