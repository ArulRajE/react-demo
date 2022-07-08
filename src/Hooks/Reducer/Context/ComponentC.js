import React, { useContext } from 'react'
import { CountContext } from './Apps'
function ComponentC() {
    const countContext = useContext(CountContext)
    return (
        <div>
            ComponentC Count:{countContext.countState}
            <div><button onClick={() => countContext.countDispatch('Increment')}>Increment</button>{/* passing a string to reducer function*/}
                <button onClick={() => countContext.countDispatch('Decrement')}>Decrement</button>
                <button onClick={() => countContext.countDispatch('Reset')}>Reset</button>
            </div>
        </div>
    )
}

export default ComponentC
