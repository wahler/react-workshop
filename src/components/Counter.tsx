import React, {useState} from 'react';
import './Counter.css';

interface CounterProps {
  initialValue?: number
}

export const Counter: React.FC<CounterProps> = ({ initialValue = 100}) => {
  const [count, setCount] = useState(initialValue);

  const incrementCount = () => {
    setCount(prev => prev +1);
  }

  const decrementCount = () => {
    setCount(prev => prev - 1);
  }

  return (
    <div className='counter'>
      <span>Counter: {count}</span>

      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}