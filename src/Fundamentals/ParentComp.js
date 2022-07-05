import React, { Component } from 'react'
import MemoCompDemo from './MemoCompDemo'

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Raj'
        }

    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ name: 'Raj' })
        }, 2000)
    }
    render() {
        console.log('************Parent Component*************')
        return (
            <div>
                <MemoCompDemo name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
