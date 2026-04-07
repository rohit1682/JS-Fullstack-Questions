import React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../redux/counterSlice';

const IncrementButton = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(increment())}>
      Increment
    </button>
  );
};

export default IncrementButton;
