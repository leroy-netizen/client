import React from 'react'
import useFetch from '../../customHooks/useFetch'

const ViewPosts = () => {
    const { data: posts, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts')
    console.log(posts);
    
    return (
        <div>
            
         </div>
  )
}

export default ViewPosts