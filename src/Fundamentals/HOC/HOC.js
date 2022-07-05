import React from 'react'

const HOC = (Component, data) => {
    return class extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: data
            }
        }
        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }
        render() {
            const { count } = this.state//State destructuring
            return (
                <Component countNumber={count} clickHandler={this.incrementCount} />
            )
        }
    }
}
export default HOC
