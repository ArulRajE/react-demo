import React, { Component } from 'react'

class Unmounting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div> Count1:{this.state.count}

                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Count</button>
                <Counter data={this.state.count} />
            </div>
        )
    }
}
class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentValue: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        return { currentValue: props.data * 10 }
    }

    render() {
        return (
            <div>
                <h1>Count2:{this.state.currentValue}</h1>
            </div>
        )
    }
}

export default Unmounting
