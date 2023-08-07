import React from 'react'

const PostView = ({title, desc, img, date}) => {

  /* function to create date in dd/mm/yy format */
  const GetDate=(dateString) =>{

    const dateObject = new Date(dateString);

    return `${dateObject.getDate()}/${dateObject.getMonth() + 1}/${dateObject.getFullYear()}`
  }

  return (
    /* displaying the individual post */
    <div className='post_view'>
        <img src={img} alt="" />
        <h2 className='post_title'>{title}</h2>
        <small className='post_date'>Posted on: {GetDate(date)}</small>
        <p className='post_desc'>{desc}</p>
    </div>
  )
}

export default PostView