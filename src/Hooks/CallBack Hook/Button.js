import React from 'react'

function Button({ clickHandler, children }) {
    console.log(`Button Rendering ${children}`)
    return (
        <div>
            <button onClick={clickHandler}>{children}</button>
        </div>
    )
}

export default React.memo(Button)
