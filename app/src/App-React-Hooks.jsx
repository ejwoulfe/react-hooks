import React, { useState } from 'react';
import './App.css';


function App() {
  /* useState has 2 ways to initalize state. hard coded like:
  * const [count, setCount] = useState(4)
  *  however, that 4 will be run each time our component is rendered, which can lead to performance issues if that state is complicated.
  *  or a function parameter which will only run it a single time:
  *  const [count, setCount] = useState(() => {
  *  console.log("Run") // Only ran once.
  *  return 4;
  });
  */
  const [count, setCount] = useState(4);

  function decrementCount() {
    setCount(prevCount => prevCount - 1);
  }
  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }



  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
