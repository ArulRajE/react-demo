import React, { useRef, useEffect } from 'react'
import useInput from './useInput'

function UserForm() {

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')
    const inputRef = useRef()

    const submitHandler = e => {
        e.preventDefault()
        alert(`fn- ${firstName} ln- ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    useEffect(() => {
        inputRef.current.focus()

    }, [])
    return (
        <div><form onSubmit={submitHandler}>
            <input type="text" ref={inputRef}  {...bindFirstName} />
            <input type="text" {...bindLastName} />
            <button type='submit'>submit</button>
        </form>
        </div>
    )
}

export default UserForm
