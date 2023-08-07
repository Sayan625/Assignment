import React from 'react'
import {Link} from 'react-router-dom'

const RowView= ({ setId, text, img, ID , type }) => {

  return (

    /* Row view to display list of posts or users */
    <Link  className='row_view' onClick={()=>setId(ID)} to={type==="post"?('/post'):('/user') }>
    <div className='user_row' >
        <img src={img} alt="" />
        <h3>{text}</h3>
    </div>
    </Link>
    )
      
}


export default RowView
