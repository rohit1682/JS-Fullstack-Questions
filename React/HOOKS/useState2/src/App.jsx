import { useState } from 'react'
import './App.css'

function App() {
  
  function initialState() {
    console.log("Initial State of the Object");
    return (
      {
        count: 0,
        color: "blue"
      }
    );
  }

  const [state, setState] = useState( () => initialState());

  function increment() {
    setState( (prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1
      };
    }
  );
  }

  function decrement() {
    setState( (prevState) => {
        return {
          ...prevState,
          count: prevState.count - 1
        };
      }
    );
  }

  return (
    <>
      <button onClick={decrement}> - </button>
      <h1>Count: {state.count}</h1>
      <h1>Color: {state.color}</h1>
      <button onClick={increment}> + </button>
    </>
  )
}

export default App
