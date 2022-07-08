// Write a program of useRef Hook

import React, { useRef, useEffect, useState } from 'react'

function UseRefsDemo() {
    return (
        <>
            <Approach1 />
            <Approach2 />
        </>
    )
}

function Approach1() {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <>
            <input ref={inputRef} />

        </>
    )
}

function Approach2() {

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef(null)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return (() => {
            clearInterval(intervalRef.current)
        })
    }, [])

    return (<div>
        <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
        Timer = {timer}
    </div>
    )
}

export default UseRefsDemo