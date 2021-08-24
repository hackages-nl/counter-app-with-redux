import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrementAction, incrementAction, updateStepAction } from '../store/action'

export default function Counter() {
    const dispatch = useDispatch();
    const stepRef = React.createRef(1);
    const {count, step} = useSelector(state => {
        return {
            count: state.count,
            step: state.step
        }
    })
    const increment = () => dispatch(incrementAction(step));
    const decrement = () => dispatch(decrementAction(step));
    const updateStep = (value) => dispatch(updateStepAction(parseInt(value)));

    return (<>
        <h1>Counter's value {count}</h1>
        <label htmlFor="step"></label>
        <input type="text" name="step" onChange={(event) => updateStep(event.target.value)} />
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </>)
}
