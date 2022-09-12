import React from 'react'
import useFetch from '../../customHooks/useFetch'

const ViewPosts = () => {
    const { data: posts, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts')
    console.log(posts);
    
    return (
        <div>
            {error && <p>{ error}</p>}
                 {loading ? <p>Loading...</p> : null}
            { 
                posts.map((post) => (
                    <h3>{ post.title}</h3>
                ))
            }
        </div>
    )
    
}

export default ViewPosts