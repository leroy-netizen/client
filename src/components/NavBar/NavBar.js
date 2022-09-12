import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
              <ul className="nav">
                  <li> <Link to="/">Home</Link> </li>
                  <li> <Link to="/viewposts">View Post</Link> </li>
                  <li> <Link to="/createpost">Create a Post</Link> </li>
              </ul>
  )
}

export default NavBar