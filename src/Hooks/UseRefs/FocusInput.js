import React,{useRef, useEffect} from 'react'

function FocusInput() {
    const inputRef= useRef(null)

    useEffect(() => {
        inputRef.current.focus()
        
    },[])
    return (
        <div>
            <input type="text"/>
            <input type="text" ref={inputRef}/>
            
        </div>
    )
}

export default FocusInput
