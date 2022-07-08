// Write a program clock counter using Interval

import React, { Component } from 'react'

class DisplayIntervalCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.count}
            </React.Fragment>
        )
    }
}

export default DisplayIntervalCounter
