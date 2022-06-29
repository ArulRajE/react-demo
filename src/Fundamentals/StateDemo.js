import React, { Component } from 'react'

class Method1 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'hello world' //assigning the initial state properties 
        }
    }

    changeText = () => {
        this.setState({ message: 'Text Changed' })
    }

    render() {
        const message = this.state.message //State Destructuring

        return (
            <div className="App">
                <span>{message}</span><br />{/* Retrieving the state properties*/}
                <button type='button' onClick={this.changeText}>Change the text</button><br /><br />
            </div>
        )
    }
}

class Method2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            age: 0,
            ageMessage: ''
        }
    }

    setAge = (value) => {
        //assigning the age value to state object and calling a callback function
        this.setState({ age: value }, this.checkAge) 
    }

    checkAge = () => {
        if (this.state.age >= 18)
            this.setState({ ageMessage: 'Major' })
        else
            this.setState({ ageMessage: 'Minor' })
    }

    render() {
        return (
            <div className="App">
                <label htmlFor="age">Check the use is Major or Not</label><br />
                <input type="text" name="age" onChange={e => this.setAge(e.target.value)} />
                <span>{this.state.ageMessage}</span>
            </div>
        )
    }
}

class StateDemo extends Component {

    render() {
        return (
            <React.Fragment>
                <Method1 />
                <Method2 />
            </React.Fragment>
        )
    }
}

export default StateDemo
