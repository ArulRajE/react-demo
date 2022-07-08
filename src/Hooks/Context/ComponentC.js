import React from 'react'
import { UserContext, ChannelContext } from "./App1"

function ComponentC() {
    return (
        <UserContext.Consumer>
            {
                username => {
                    return (<ChannelContext.Consumer>
                        {channel => {
                            return <div> UserContext : {username} and ChannelContext : {channel}</div>
                        }}
                    </ChannelContext.Consumer>)
                }
            }
        </UserContext.Consumer>
    )
}

export default ComponentC
