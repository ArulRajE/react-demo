// Write a program for update document title using class component

import React, { Component } from 'react'

class UpdateDocumentTitle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0, name: ''
        }
    }
    incrementCount = () => {
        this.setState(
            prevState => {
                return {
                    count: prevState.count + 1
                }

            })
    }
    componentDidMount() {
        document.title = `Clicked ${this.state.count} Times`
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('Updating the document title')
            document.title = `Clicked ${this.state.count} Times`
        }

    }

    render() {
        const { count } = this.state
        return (
            <div>
                <input type='text' value={this.state.name} onChange={e => { this.setState({ name: e.target.value }) }} />
                <button onClick={this.incrementCount}>Click {count}</button>
            </div>
        )
    }
}

export default UpdateDocumentTitle
