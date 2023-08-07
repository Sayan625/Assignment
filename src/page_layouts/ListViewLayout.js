import React from 'react'
import RowView from "../components/RowView.js";
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.js';
import {Link} from 'react-router-dom'

const ListViewLayout = ({ allData, setId }) => {

    useEffect(()=>{
/*initiating current page counter */
        setCurrentPage(1)

    },[allData])
/* current page counter */
    const [currentPage, setCurrentPage] = useState(1);
    
/* user per page */
    const usersPerPage = 5;
/* calculatin first and last index of pagination */
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;

    const currentData = allData.slice(indexOfFirstUser, indexOfLastUser);
/* function for pagination previous button */

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };
/* function for pagination next button */
    const handleNextPage = () => {
        const maxPage = Math.ceil(allData.length / usersPerPage);
        if (currentPage < maxPage) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };


    return (
        <>
            <Navbar />
            <div className="app">
                {/* title */}
                <h2 className='page_title'>All Users</h2>
                {/* all list of post or users */}
                {currentData.map((user) => (
                    user.name ? <RowView  id={user.id}  text={user.name} img={user.avatar} ID={user.id} setId={setId} type="user" /> :
                    <RowView id={user.id}   text={user.title} img={user.cover} ID={user.id} setId={setId} type="post" />
                ))}
                
                {/* create new post button */}
                <button className='create_new'><Link to='/form'>+</Link></button>
                
                {/* Pagination buttons */}
                <div>
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        Prev
                    </button>
                    <span>   {currentPage}   </span>
                    <button onClick={handleNextPage} disabled={currentPage === Math.ceil(allData.length / usersPerPage)}>
                        Next
                    </button>
                </div>
            </div>
        </>

    )
}

export default ListViewLayout