import React from 'react'
import ComponentE from './ComponentE'
import { UserProvider } from './userContext'

function ContextApp() {
    return (
        <>
            {/* <UserProvider value='Arul'>
                <ComponentC />
            </UserProvider> */}
            <ComponentE />
        </>
    )
}

export default ContextApp
