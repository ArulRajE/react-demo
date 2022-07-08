import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const [post, setPost] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setLoading(false)
                setPost(response.data)
                setError('')
                console.log(response)
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError('Some thing error')
            })
    }, [])
    return (
        <div>
            {loading ? 'loading' : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetchingOne
