import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement } from '../redux/counterSlice';

const DecrementButton = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(decrement())}>
      Decrement
    </button>
  );
};

export default DecrementButton;
