import React, { Component } from 'react'
import HOC from './HOC'

class CommentsCount extends Component {
    render() {
        const { countNumber, clickHandler } = this.props//destructuring props
        return (
            <div>
                No of Comments :{countNumber}
                <button onClick={clickHandler}>Add Comments</button>
            </div>
        )
    }
}
const EnhancedComments = HOC(CommentsCount, 5)
export default EnhancedComments
