// Write a program of useState Hook

import React, { useState } from 'react'

function UseStateDemo() {
    return (
        <>
            <Approach1 />
            <Approach2 />
            <Approach3 />
            <Approach4 />
        </>
    )

}

function Approach1() {

    const initialValue = 0
    //array destructing and assigning the initial value to state variable 
    const [count, setCount] = useState(initialValue) 
    return (
        <div>
            Cont: {count}
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

function Approach2() {//state with previous value
    const initialValue = 0
    //array destructing and assigning the initial value to state variable 
    const [count, setCount] = useState(initialValue) 

    const IncrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)//assigning the previous value to state
        }
    }

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(prevCount => prevCount + 1)} >Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={IncrementFive}>Increment By 5</button>
            <button onClick={() => setCount(initialValue)}>Reset</button>
        </div>
    )
}

function Approach3() {//state with object
    //useState is not automatically merge or update in hooks
    const [name, setName] = useState({ firstName: '', lastName: '' }) 
    return (
        <div>
            <input value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
            {/* using spread operator to merge state value to state*/}
            <input value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
            <p> firstName:{name.firstName} and lastName:{name.lastName}</p>
        </div>
    )
}

function Approach4() {
    const [items, setItems] = useState([])
    const addItem = () => {
        setItems([
            ...items, {//merging the new value to state using spread operator
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }])
    }
    return (
        <>
            <button onClick={addItem}>Add Item</button>
            <ul> {
                items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))
            }
            </ul>
        </>
    )
}

export default UseStateDemo
