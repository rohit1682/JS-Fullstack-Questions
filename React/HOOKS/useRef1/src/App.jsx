import './App.css'

import React from 'react'

function App() {
  
  const [name, setName] = React.useState('');

  const renderCount = React.useRef(0);
  // this basically gives an object like: { current: 0 }
  // we could also use another useState() but it will fall into an infinite loop for the initial render. 

  React.useEffect( () => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <input type="text" value={name} onChange= {e => setName(e.target.value)} />
      <div>My name is: {name}</div>
      <div>Render Count: {renderCount.current}</div>
    </>
  )
}

export default App
