// Write a program Interval Counter using useEffect Hook

// Write a program Time Counter using useEffect Hook

import React, { useState, useEffect } from 'react'

function DisplayIntervalCounter() {

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <React.Fragment>
            {count}
        </React.Fragment>
    )
}

export default DisplayIntervalCounter
