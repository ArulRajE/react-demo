import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentE extends Component {

    // Two Limitation of contextType
    // 1. it works only with class component
    // 2. you can subscribe only single context
    static contextType = UserContext; 
    
    render() {
        return (
            <div> ComponentE context {this.context}
                <ComponentF />
            </div>
        )
    }
}

export default ComponentE
