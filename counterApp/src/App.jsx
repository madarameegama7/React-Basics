import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';

function App(){
  const [count,setCount]=useState(0);

  const increment = () => setCount(count+1);
  const decrement = () => setCount(count-1);
  const reset = () => setCount(0);
  return(
    <div>
      <h1>Counter App</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      {/*<h1>Count is {count}</h1>*/}
      <h1>
      <CounterDisplay count={count}/>
      </h1>
    </div>
  )
}

export default App;