// Write a program for display a mouse point position using State

import React, { Component } from 'react'

class DisplayMousePosition extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }
    logMousePosition = e => {
        this.setState({ x: e.clientX, y: e.clientY })
    }
    componentDidMount() {
        window.addEventListener('mousemove', this.logMousePosition)
    }
    componentWillMount() {
        window.removeEventListener('mousedown', this.logMousePosition)
    }
    render() {
        return (
            <div>
                X-{this.state.x} Y-{this.state.y}
            </div>
        )
    }
}

export default DisplayMousePosition
