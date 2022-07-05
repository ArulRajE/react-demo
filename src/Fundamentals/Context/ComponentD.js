import React, { Component } from 'react'
import { UserContext } from "./userContext"

class ComponentD extends Component {

    //we must use in class and we can use one context in class
    static contextType = UserContext 
    render() {
        return (
            <div>
                ComponentD  value :{this.context}
            </div>
        )
    }
}

export default ComponentD
