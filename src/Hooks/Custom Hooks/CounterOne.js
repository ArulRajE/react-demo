import React from 'react'
import useCounter from './useCounter'

function CounterOne() {

    const [increment, decrement, reset, count] = useCounter(5, 1)

    return (
        <div>
            <h2> Count - {count} </h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterOne
