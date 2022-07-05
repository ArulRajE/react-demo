import React, { Component } from 'react'

class FormControlledComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'react'

        }
    }
    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments}${this.state.topic}`);
        event.preventDefault()
    }
    render() {
        const { username, comments, topic } = this.state //state destructuring
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label> user name</label>
                        <input type="text" onChange={this.handleUsernameChange} value={username} />
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea onChange={this.handleCommentsChange} value={comments} />
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={topic} onChange={this.handleTopicChange}>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="Vue">Vue</option>
                        </select>
                    </div>
                    <button type="submit" onSubmit={this.handleSubmit} >Submit</button>
                </form>
            </div>
        )
    }
}

export default FormControlledComponent
