import React, { Component } from 'react'
import HOC from "./HOC";

class LikesCount extends Component {
    render() {
        const { countNumber, clickHandler } = this.props//destructuring props
        return (
            <div>
                No of Likes :{countNumber}
                <button onClick={clickHandler}>Like</button>
            </div>
        )
    }
}

const EnhancedLikes = HOC(LikesCount, 10)
export default EnhancedLikes
