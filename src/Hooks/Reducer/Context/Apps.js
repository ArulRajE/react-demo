import React, { Component, useReducer } from 'react'
import ComponentA from './ComponentA'
import ComponentC from './ComponentC'
import ComponentF from './ComponentF'

export const CountContext = React.createContext()

const initialState = 0;
const reducer = (state, action) => {// receives simple state as string and action are simple 
    switch (action) {
        case 'Increment':
            return state + 1
        case 'Decrement':
            return state - 1
        case 'Reset':
            return initialState
        default:
            return state

    }
}
function Apps() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
            <div className="App">
                <ComponentA />
                <ComponentC />
                <ComponentF />
            </div>
        </CountContext.Provider>

    )
}

export default Apps
