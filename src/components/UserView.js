import React from 'react'

const UserView = ({img, name, email, about, date}) => {

  /* function to create date in dd/mm/yy format */
    const GetDate=(dateString) =>{

        const dateObject = new Date(dateString);
    
        return `${dateObject.getDate()}/${dateObject.getMonth() + 1}/${dateObject.getFullYear()}`
      }


    return (
        /* displaying individual users */
        <div className='card'>
            <div className="card_header">
                <img src={img} />
                <div className="text_group">
                    <p>{name}</p>
                    <p> {email}</p>
                </div>
            </div>
            <div className="card_footer">
                <p>About Me</p>
                <p>{about}</p>
                <p><small>Joined on: {GetDate(date)}</small></p>
            </div>
        </div>
    )
}

export default UserView