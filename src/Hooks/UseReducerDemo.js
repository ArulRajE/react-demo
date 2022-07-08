// Write program of useReducer Hooks 

import React, { useReducer,useEffect } from 'react'
import axios from 'axios'

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

function Approach1() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            Count:{count}
            <div><button onClick={() => dispatch('Increment')}>Increment</button>{/* passing a string to reducer funtion*/}
                <button onClick={() => dispatch('Decrement')}>Decrement</button>
                <button onClick={() => dispatch('Reset')}>Reset</button>
            </div>
        </div>
    )
}

const initialState1 = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer1 = (state1, action1) => {// receives complex state as string and action are object here state and action are object 
    switch (action1.type) {
        case 'Increment':
            return { ...state1, firstCounter: state1.firstCounter + action1.value }
        case 'Decrement':
            return { ...state1, firstCounter: state1.firstCounter - action1.value }
        case 'Increment1':
            return { ...state1, secondCounter: state1.secondCounter + action1.value }
        case 'Decrement1':
            return { ...state1, secondCounter: state1.secondCounter - action1.value }
        case 'Reset':
            return initialState1
        default:
            return state1

    }
}

function Approach2() {

    const [count1, dispatch1] = useReducer(reducer1, initialState1)

    return (
        <div>
            First Count:{count1.firstCounter} <br />
            Second Counter: {count1.secondCounter}
            <div><button onClick={() => dispatch1({ type: 'Increment', value: 1 })}>Increment</button>{/* passing a object to reducer funtion*/}
                <button onClick={() => dispatch1({ type: 'Decrement', value: 1 })}>Decrement</button>
                <div>
                    <button onClick={() => dispatch1({ type: 'Increment1', value: 10 })}>Increment 10</button>
                    <button onClick={() => dispatch1({ type: 'Decrement1', value: 10 })}>Decrement 10</button>
                </div>
                <button onClick={() => dispatch1({ type: 'Reset' })}>Reset</button>
            </div>
        </div>
    )
}

const initialState3 = 0;
const reducer3 = (state3, action3) => {
    switch (action3) {
        case 'Increment':
            return state3 + 1
        case 'Decrement':
            return state3 - 1
        case 'Reset':
            return initialState3
        default:
            return state3

    }
}
function Approach3() {
    const [count3, dispatch3] = useReducer(reducer3, initialState3)
    const [count4, dispatch4] = useReducer(reducer3, initialState3)//multiple reducer example
    return (
        <div>
            Count:{count3}
            <div><button onClick={() => dispatch3('Increment')}>Increment</button>
                <button onClick={() => dispatch3('Decrement')}>Decrement</button>
                <button onClick={() => dispatch3('Reset')}>Reset</button>
            </div>
            Count:{count4}
            <div><button onClick={() => dispatch4('Increment')}>Increment</button>
                <button onClick={() => dispatch4('Decrement')}>Decrement</button>
                <button onClick={() => dispatch4('Reset')}>Reset</button>
            </div>
        </div>
    )
}

const initialState4 = {
    error: '',
    post: {},
    loading: true
}
const reducer4 = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                error: 'Some thing wrong',
                post: {}
            }
        default: return state
    }

}

function UseReducerDataFetch() {
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/55')
        .then(response=>{
            dispatch({type:"FETCH_SUCCESS", payload:response.data})
        })
        .catch(error=>{
            dispatch({type:"FETCH_ERROR"})
        })
    }, [])
    const [state, dispatch] = useReducer(reducer4, initialState4)
    return (
        <div>
            {state.loading?'Loading':state.post.title}
            {state.error?state.error:null}
        </div>
    ) 
}

function UseReducerDemo() {
    return (
        <div className="App">
            {/* <Approach1 />
            <Approach2 /> */}
            {/* <Approach3 /> */}
            <UseReducerDataFetch />
        </div>
    )
}

export default UseReducerDemo
