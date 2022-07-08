// Write a program of useMemo Hook

import React, { useState, useMemo } from 'react'

function UseMemoDemo() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementCounterOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementCounterTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 1000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <>
            <button onClick={incrementCounterOne}>count - {counterOne}</button>
            <span>{isEven ? "Even" : "Odd"}</span><br />
            <button onClick={incrementCounterTwo}>count - {counterTwo}</button>
        </>
    )
}

export default UseMemoDemo
