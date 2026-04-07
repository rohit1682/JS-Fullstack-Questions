import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
       console.log("called");
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    let timer = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => clearTimeout(timer);
  }, [data]);

  return (
    <>
     <input type="search" value={data} onChange={(event) => {
        setData(event.target.value);
     }}/>
    </>
  )
}

export default App
