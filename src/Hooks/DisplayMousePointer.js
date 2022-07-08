// Write a program display mouse pointer using useEffect Hook

import React, { useState, useEffect } from 'react'

function DisplayMousePointer() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
        return () => {
            console.log('component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
    return (
        <div>
            Hooks X-{x} Y-{y}
        </div>
    )
}

export default DisplayMousePointer
