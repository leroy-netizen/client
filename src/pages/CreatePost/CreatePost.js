import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateBook = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [creator, setCreator] = useState('')
  const [imageurl, setImageurl] = useState('')

  const post = {title, description, creator, imageurl}
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:9292/posts', {
      method: 'POST',
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify(post)
    }).then(() => {
      console.log("New doctor added successfuly");
      navigate('/viewposts');
    })
    console.log(post);
  }
  return (

    <form>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="description">Description</label>
        <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <label htmlFor="creator"> Creator</label>
        <input type="text" name="creator" value={creator} onChange={(e) => setCreator(e.target.value)} />
        <label htmlFor="imageurl">Image URL</label>
      <input type="text" name="imageurl" value={imageurl} onChange={(e) => setImageurl(e.target.value)} />
    </div>
          <button type="subit" onClick={handleSubmit}>Create</button>
    </form>
  )
}

export default CreateBook