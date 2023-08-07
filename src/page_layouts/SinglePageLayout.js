import React from 'react'
import { useEffect, useState } from 'react';
import PostView from '../components/PostView';
import Navbar from '../components/Navbar';
import UserView from '../components/UserView';

const SinglePageLayout = ({type,ID}) => {

    const [alldata, setAllData] = useState([]);

    useEffect(() => {
        /* initiating all post data with dependency ID */
        fetchData();
    }, [ID]);
/* getting data based on given type (posts/users) */
    const fetchData = async () => {
        try {
            const response = await fetch(
                `https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/${type}/${ID}`
            );
            const data = await response.json();
            setAllData(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };
/* rendering post or user page based on type (posts/users)given in props */
    return (type === "posts" ?<><Navbar/>
    <div className='single_page'>
        <PostView title={alldata.title} 
                    desc={alldata.description} 
                    img={alldata.cover} 
                    date={alldata.createdAt} 
        />
    </div></>  :<><Navbar/>
    <div className='single_page'>
        <UserView name={alldata.name} 
                    about={alldata.about} 
                    img={alldata.avatar}
                    email={alldata.email} 
                    date={alldata.createdAt} 
        />
    </div></> 

    )
}

export default SinglePageLayout