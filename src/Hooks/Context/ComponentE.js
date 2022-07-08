import React, { useContext } from 'react'
import { UserContext, ChannelContext as ChannelContext } from "./App1"

function ComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            {user} and {channel}
        </div>
    )
}

export default ComponentE
