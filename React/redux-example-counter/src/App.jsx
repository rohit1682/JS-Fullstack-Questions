import React from 'react';
import CounterDisplay from './components/CounterDisplay';
import IncrementButton from './components/IncrementButton';
import DecrementButton from './components/DecrementButton';
import './App.css'

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <CounterDisplay />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <IncrementButton />
        <DecrementButton />
      </div>
    </div>
  );
}

export default App;
