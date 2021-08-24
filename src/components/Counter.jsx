import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrementAction, incrementAction } from '../store/action'

export function Counter() {
    const dispatch = useDispatch();
    const stepRef = React.createRef(1);
    const count = useSelector(state => state)
    const increment = () => dispatch(incrementAction(parseInt(stepRef.current.value)))
    const decrement = () => dispatch(decrementAction(parseInt(stepRef.current.value)))

    return (<>
        <h1>Counter's value {count}</h1>
        <label htmlFor="step"></label>
        <input type="text" name="step" ref={stepRef} />
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </>)
}
