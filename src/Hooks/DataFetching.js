// Write a program fetch a data from api for particular ID using useEffect concept

import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [buttonClickedId, setButtonClickedId] = useState(1)

    const handleClick = () => { setButtonClickedId(id) }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {

                setPost(res.data)
                console.log(res)

            })
            .catch(error => {
                console.log(error)
            })


    }, [buttonClickedId])
    return (
        <React.Fragment>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button onClick={handleClick}>Fetch Data</button>
            <ul>
                <li>{post.title}</li>
                {/* {posts.map(post => {
                    return <li key={post.id}> {post.title}</li>
                }
                )} */}
            </ul>
        </React.Fragment>
    )
}

export default DataFetching
