import React, { Component, PureComponent } from 'react'

class PureCompDemo extends PureComponent {
    render() {
        return (
            <div className="App">
                <ParentComp />
            </div>
        )
    }
}

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
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

class RegComp extends Component {
    render() {
        console.log('Reg Component')
        return (
            <div>
                Reg Component {this.props.name}
            </div>
        )
    }
}

class PureComp extends PureComponent {
    render() {
        console.log('pure component')
        return (
            <div>
                pure component  {this.props.name}
            </div>
        )
    }
}

export default PureCompDemo
