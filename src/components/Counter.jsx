import React from 'react'
import { CounterContext } from '../context/counter.context'

export function Counter() {
    const stepRef = React.createRef(0);
    const {count, increment, decrement} = React.useContext(CounterContext);    

    return (
        <>
            <h1>Counter's value {count}</h1>
            <label htmlFor="step"></label>
            <input type="text" name="step" ref={stepRef} />
            <button onClick={() => increment(parseInt(stepRef.current.value))}>+</button>
            <button onClick={() => decrement(parseInt(stepRef.current.value))}>-</button>
        </>
    )
}
