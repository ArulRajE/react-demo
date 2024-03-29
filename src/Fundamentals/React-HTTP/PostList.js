import React, { Component } from 'react'
import axios from 'axios';

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            error: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error);
                this.setState({ errorMsg: 'Error retriving data' })
            })

    }
    
    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                posts of Postposts
                {
                    posts.length ? posts.map(posts => <div key={posts.id}>{posts.title}</div>) : null

                } {errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}

export default PostList
