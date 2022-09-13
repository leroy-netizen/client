import React from 'react'
import useFetch from '../../customHooks/useFetch'
import { Link } from 'react-router-dom'

const ViewPosts = () => {
    const { data: posts, error, loading } = useFetch('http://localhost:9292/posts')
    console.log(posts);
    
    return (
        <div>
            {error && <p>{ error}</p>}
                 {loading ? <p>Loading...</p> : null}
            { 
                posts.map((post) => (
                    <div className="postCard" key={post.id}>
                        <img src={post.imageurl} alt={post.title} />
                        <p> Creator{ post.creator}</p>
                        <h6> Title{ post.title}</h6>
                     <Link to={`/posts/${post.id}`}>
                        <p>Description:{ post.description}</p>
                        <p> Created at:{ post.created_at}</p>
                     </Link>
                    </div>
                ))
            }
        </div>
    )
    
}

export default ViewPosts
