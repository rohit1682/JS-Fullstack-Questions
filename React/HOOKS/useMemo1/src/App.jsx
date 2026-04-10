/* eslint-disable no-empty */
import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const [bgColor, setBgColor] = React.useState(getRandomRgbColor()); 

  const doubleNumber = React.useMemo(() => {
    return slowFunction(count);
  }, [count]);

  function slowFunction(num) {
    console.log('Slow Function Called');
    for (let i = 0; i < 10000000; i++) {} 
    return num * 2;
  }

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  function decrement() {
    setCount(prevCount => prevCount - 1);
  }

  function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function changeColor() {
    setBgColor(getRandomRgbColor());
  }

  return (
    <>
      <div>
        <button onClick={decrement}> - </button>
        <p>Number: {count}</p>
        <button onClick={increment}> + </button>
      </div>

      <div>
        <h1>Double Number: {doubleNumber}</h1>
      </div>

      <button
        style={{ backgroundColor: bgColor, color: 'black', padding: '10px', border: 'none', cursor: 'pointer' }}
        onClick={changeColor} 
      >
        Click To Change Color!
      </button>
    </>
  );
}

export default App;