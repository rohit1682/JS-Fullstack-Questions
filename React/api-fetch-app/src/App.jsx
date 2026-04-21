import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'

function App() {
  // simple data fetching from an API 
  const [names, setNames] = useState([]);
  const link = 'https://5d835cadc9e34100140714a1.mockapi.io/TEST'

  async function fetchData(link) {
    const data = await fetch(link)
      .then(response => response.json());
    setNames(data)
  }

  useEffect(() => {
    fetchData(link)
  }, []);

  return (
    <>
      <div>
        <ul>
          {names.map(val => {
            return (<li key={val.id}>Name: {val.name}</li>)
          })}
        </ul>
      </div>
    </>
  )
}

export default App
