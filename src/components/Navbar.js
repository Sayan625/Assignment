import React from 'react'
import { Link } from 'react-router-dom'

const Navbar= () => {
  return (
    /* navbar component */
    <div className='navbar'>
      {/* link to users page */}
        <Link to='/'>
            Users
        </Link>
      {/* link to posts page */}
        <Link to='/posts'>
            Posts
        </Link>
    </div>
  )
}

export default Navbar
