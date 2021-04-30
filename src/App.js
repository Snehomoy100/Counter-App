import React, {useState} from 'react'
import "./App.css"

const App = () => {

  const [count, setCount] = useState(0)
  return(
    <div className="App">
    <header>
  <h1>COUNTER APP USING REACTJS</h1>
  </header>
    <h2>Your current value is {count}</h2>
    <button onClick={() => setCount(0)}>Reset Counter</button>
    <button onClick={() => setCount(count + 1)}>Icrease Counter</button>
    <button onClick={() => setCount(count - 1)}>Decrease Counter</button>
    <p>Created by Snehomoy Maitra.</p>
  </div>
  )
}


export default App
