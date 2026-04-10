import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  const [myText, setMyText] = useState('Initial Text');
  
  useEffect(() => {

    //see the console in the browser for getting the clarity what has been done

    console.log("State Changed!"); // this will run everytime when myText is updated

    return () => { // this is a cleanup function used for cleaning up resourses, unsubscribing or removing event listeners
      console.log("Cleared") // this will run everytime before the next state change is triggered. 
    };

  }, [myText]);

  return (
    <>
      <button onClick={() => setMyText('Text1')}>Text1</button>
      <button onClick={() => setMyText('Text2')}>Text2</button>
      <button onClick={() => setMyText('Text3')}>Text3</button>

      <h1>{ myText }</h1>
    </>
  )
}

export default App
