// complex state and action in reducer example and state and action are object
import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state

    }
}

function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            First Count : {count.firstCounter}<br />
            Second Count : {count.secondCounter}<br />
            <button type="button" onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment 1</button>
            <button type="button" onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement 1</button>
            <button type="button" onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
            <button type="button" onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
            <div>
                <button type="button" onClick={() => dispatch({ type: 'increment2', value: 10 })}>Increment Counter 10</button>
                <button type="button" onClick={() => dispatch({ type: 'decrement2', value: 10 })}>Decrement Counter 10</button>
            </div>
            <button type="button" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default CounterTwo
