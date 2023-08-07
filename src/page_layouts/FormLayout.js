import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Redirect } from 'react-router';

const FormLayout = () => {
    const [title, setTitle] = useState('')
    const [description, setDesc] = useState('')

    const handleSubmit = async () => {
        const data = {
            title: title,
            description: description,
        }
        console.log("first")
        try {
            /*fetching the post data on render (this end-point doesnt work tested in postman also) */
            const resp = await fetch('https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/post', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            console.log(resp)

        } catch (error) {
            /*handling error*/
            console.log(error)
        }
        /* giving user visual promt of from sibmission */
        alert("Post submitted")

        /* resetting the form field */
        setTitle('')
        setDesc('')

    }

    return (
        /* displaying form and navbar */
        <div className="form_container">
            <Navbar/>
            {/* form */}
            <div className='form'>
                <h3 className='page_title'>Create New Post</h3>
                <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea name="" id="" cols="30" rows="10" placeholder='description' value={description} onChange={(e) => setDesc(e.target.value)}></textarea>
                <button onClick={() => handleSubmit()}>Submit</button>
            </div>
        </div>
    )
}

export default FormLayout