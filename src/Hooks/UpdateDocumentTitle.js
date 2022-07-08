// Write a program update a document title using  useEffect Hook

import React, { useState, useEffect } from 'react'

function UpdateDocumentTitle() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect updating title')
        document.title = `clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click {count}</button>

        </div>
    )
}

export default UpdateDocumentTitle

