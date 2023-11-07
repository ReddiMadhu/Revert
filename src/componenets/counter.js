// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, reset } from '../Redux/CounterAction';
// import './Counter.css'; // Import your CSS file for styling

// const Counter = () => {
//   const counter = useSelector((state) => state.counter);
//   const dispatch = useDispatch();

//   return (
//     <div className="counter-card">
//       <h3>Counter</h3>
//       <h2>{counter}</h2>
//       <div className="button-container">
//         <button onClick={() => dispatch(increment())}>Increase</button>
//         <button onClick={() => dispatch(reset())}>Reset</button>
//         <button onClick={() => dispatch(decrement())}>Decrease</button>
//       </div>
//     </div>
//   );
// };

// export default Counter;


import React, { useState } from 'react'; // Import useState
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../Redux/CounterAction';
import './Counter.css';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [counterName, setCounterName] = useState("counter"); // Initialize counterName with a default name

  const handleNameChange = (e) => {
    setCounterName(e.target.value); // Update counterName when input value changes
  };

  return (
    <div className="counter-card">
      <h3>{counterName}</h3>
      
      <h2>{counter}</h2>
      <div className="button-container">
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
      </div>
      <input
        type="text"
        value={counterName}
        onChange={handleNameChange}
      />
    </div>
  );
};

export default Counter;
