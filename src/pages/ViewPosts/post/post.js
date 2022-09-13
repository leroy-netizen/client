import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../../customHooks/useFetch'
import { useNavigate } from 'react-router-dom'

const Post = () => {
    const navigate = useNavigate()

  const { id } = useParams()
  const {data: post, error, loading } = useFetch('http://localhost:9292/posts/' + id)

  const handleDelete = () => {
    fetch('http://localhost:9292/posts/' + post.id, {
      // mode: 'no-cors',
      method: 'DELETE'
    }).then(()=>{
        console.log(id, post)
        navigate('/viewposts')
    })
  }
  return (
    <div>
          {error ? <div>{error}</div> :
              <div>
              
                  {
                      post && (
                          <div className="container">
                              {loading ? <p>Loading...</p> : null}
                              <img src={post.imageurl} alt={post.title} />
                              <div className="img">{post.title}
                              </div>
                          </div>
                      )
                  }
                  <button onClick={handleDelete}>delete</button>
              </div>
          }
      </div>
      
  )
}

export default Post