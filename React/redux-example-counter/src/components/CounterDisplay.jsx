import React from 'react';
import { useSelector } from 'react-redux';

const CounterDisplay = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Current Count: {count}</h2>
    </div>
  );
};

export default CounterDisplay;
