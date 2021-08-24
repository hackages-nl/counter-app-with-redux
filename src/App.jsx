import React from 'react'
import './App.css'
import { Counter } from './components/Counter'
import { CounterContext } from './context/counter.context'


function App() {
  const [count, setCount] = React.useState(0) 
  
  const increment = (step) => {
    setCount(count + step)
  }

  const decrement = (step) => {
    setCount(count - step)
  }


  return (
    <div className="App">
      <CounterContext.Provider value={{count, increment, decrement}}>
       <Counter />
      </CounterContext.Provider>
    </div>
  )
}

export default App
