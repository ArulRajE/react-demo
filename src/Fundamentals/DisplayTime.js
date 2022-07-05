import React, { Component } from 'react'

class DisplayTime extends Component {
    constructor(props) {
        super(props)

        this.state = {
            time: new Date()
        }
    }
    Tick = () => {
        this.setState({
            time: new Date()
        })


    }
    componentDidMount() {
        this.intervalId = setInterval(() => this.Tick(), 1000);
    }
    componentWillMount() {
        clearInterval(this.intervalId)
    }

    render() {
        return (
            <div className="App">
                Date : {this.state.time.toLocaleDateString()}<br />
                Time: {this.state.time.toLocaleTimeString()}
            </div>
        )
    }
}

export default DisplayTime
