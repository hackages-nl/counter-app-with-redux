import React from 'react'

export function Counter() {
    const [count, setCount] = React.useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }
    
    return (<>
        <h1>Counter's value {count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </>)
}