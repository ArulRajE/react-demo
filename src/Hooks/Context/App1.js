import React from 'react'
import ComponentE from './ComponentE'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App1() {

  return (
    <div>
      <UserContext.Provider value={"raj"}>
        <ChannelContext.Provider value={"TECH CODE"}>
          <ComponentE />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App1
