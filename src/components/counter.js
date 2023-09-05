import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  //Write a code for implementing button
  return <div></div>;
};

export default Counter;
