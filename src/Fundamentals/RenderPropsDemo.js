import React, { Component } from 'react'

class RenderPropsDemo extends Component {
    render() {
        return (
            <>
                <Counter render={(count, incrementCount) => (
                    <ClickCounter count={count} incrementCount={incrementCount} />
                )} />
                <Counter render={(count, incrementCount) => (
                    <HoverCounter count={count} incrementCount={incrementCount} />
                )} />
            </>
        )
    }
}

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }

    render() {
        return (
            <>
                {this.props.render(this.state.count, this.incrementCount)}
            </>
        )
    }
}

class ClickCounter extends Component {
    render() {
        const { count, incrementCount } = this.props
        return <button type="button" onClick={incrementCount}>Click {count} Times</button>
    }
}

class HoverCounter extends Component {
    render() {
        const { count, incrementCount } = this.props
        return <h2 onMouseOver={incrementCount}>Hovered {count} Times</h2>
    }
}

export default RenderPropsDemo
