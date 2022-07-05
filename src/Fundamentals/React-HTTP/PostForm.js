import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            message: ''

        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })

    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => { console.log(response) })
            .catch(error => { console.log(error) })
    }

    render() {
        const { userId, title, message } = this.state

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div><label htmlFor="userId">User Name: </label><input type="text" name="userId" onChange={this.changeHandler} value={userId} /></div>

                    <div><label htmlFor="title">User Title: </label><input type="text" name="title" onChange={this.changeHandler} value={title} /></div>
                    <div><label htmlFor="message">User Message: </label><input type="text" name="message" onChange={this.changeHandler} value={message} /></div>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
