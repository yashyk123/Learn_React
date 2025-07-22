import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
    if(counter ==20)
    {
      alert("Counter reached 20");
      setCounter(0); // Reset counter to 0 after alert
    }
  }
  const decrement = ()=>{
    setCounter(counter-1);
    if(counter == 0)
    {
      alert("Counter cannot be less than 0");
      setCounter(0);
    }
  }

  return (
    <>
      <h1>Update the counter</h1>
      <h2>counter : {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
