// Write a program of useEffect Hook

import React, { useState, useEffect } from 'react'

function UseEffectDemo() {

    return (
        <>
            <Approach1 /> 
            <Approach2 />
            <Approach3/>
            <Approach4/>
            <MouseContainer/>
        </>
    )
}

function Approach1() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        //the useEffect hook will execute after render method executed
        document.title = `You Clicked ${count} Times`
    })

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Count:{count}</button>
        </>
    )
}

function Approach2() {//conditional run useEffect

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        //the useEffect hook will execute after render method executed
        console.log("UseEffect - document updating title")
        document.title = `You Clicked ${count} Times`
    }, [count])
    //assigning conditional execute the useEffect function when count value/state changes

    return (
        <>
            <input value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Count:{count}</button>
        </>
    )
}

function Approach3() {//Rendering once in useEffect method using empty brackets
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log("useEffect Called")
        window.addEventListener('mousemove', logMousePosition)
    }, [])//Rendering the useEffect method once while passing empty brackets
    return (
        <>
            Hook X:{x} and Y:{y}
        </>
    )
}

function Approach4() {//Rendering once in useEffect method using empty brackets
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log("useEffect Called")
        window.addEventListener('mousemove', logMousePosition)
        return () => {//clean up code
            console.log("component unmounting code")
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])//Rendering the useEffect method once while passing empty brackets
    return (
        <>
            Hook X:{x} and Y:{y}
        </>
    )
}

function MouseContainer() {//useEffect with cleanup code 
    const [display, setDisplay] = useState(true)

    return (
        <>
            <button onClick={() => setDisplay(!display)}>Toggle Mouse Event</button>
            {display && <Approach4 />}
        </>
    )
}


export default UseEffectDemo
