/* Conditional Rendering has four type 
1.If/Else 
2.Element Variable 
3.Conditional Ternary operator 
4.short circuit operator */

import React, { Component } from 'react'

class ConditionalRendering extends Component {
    render() {
        return (
            <>
                <If_Else_Rendering />
                <Element_Variable_Rendering />
                <Ternary_Operator_Rendering />
                <Short_Circuit_Operator_Rendering />
            </>
        )
    }
}

class If_Else_Rendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            age: 54
        }
    }

    render() {
        const age = this.state.age
        if (age >= 18)
            return <div> The user is Major</div>
        else
            return <div> The user is Minor</div >
    }
}

class Element_Variable_Rendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            age: 54
        }
    }

    render() {
        const age = this.state.age
        let message //declaring element variable
        if (age >= 18)
            message = <div> The user is Major</div>
        else
            message = <div> The user is Minor</div >
        return <div>{message}</div>
    }
}

class Ternary_Operator_Rendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            age: 17
        }
    }

    render() {
        const age = this.state.age
        return (
            age >= 18 ? <div> The user is Major</div> : <div> The user is Minor</div >
        )

    }
}

class Short_Circuit_Operator_Rendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            age: 54
        }
    }

    render() {
        const age = this.state.age
        return (
            age >= 18 && <div> The user is Major</div>
        )

    }
}

export default ConditionalRendering
