import './App.css'

import React from 'react'

function App() {
  
  const [name, setName] = React.useState('');
  const prevName = React.useRef('');

  React.useEffect( () => {
    prevName.current = name;
  });

  return (
    <>
      <input type="text" value={name} onChange= {e => setName(e.target.value)} />
      <div>My name is: {name}</div>
      <div>My old name was: {prevName.current}</div>
    </>
  )
}

export default App
