import React, { useEffect, useState } from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListViewLayout from "./page_layouts/ListViewLayout";
import SinglePageLayout from "./page_layouts/SinglePageLayout";
import FormLayout from "./page_layouts/FormLayout"

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [ID, setID]=useState(0);

  useEffect(() => {
    /* initiating the data */
    fetchAll();
  }, []);

  /* function for getting all post and user data */
  const fetchAll = async () => {

    try {
      const response1 = await fetch(
        "https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/users"
      );
      const response2 = await fetch(
        "https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/posts"
      );
      
      const dataUser = await response1.json();
      const dataPost = await response2.json();
      
      setUsers(dataUser);
      setPosts(dataPost);

    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };


/* wrapping the setter of ID variable in a function */
const SetId=(id)=>{
  setID(id)
  console.log(id)
}


  return (
    <Router>
      <Routes>
        {/* declaring all the paths while reusing the components */}
        <Route path="/" element={<ListViewLayout allData={users} setId={SetId} />}/>
        <Route path="/posts" element={<ListViewLayout allData={posts} setId={SetId} />}/>
        <Route path="/user" element={<SinglePageLayout type="users" ID={ID}/>}/>
        <Route path="/post" element={<SinglePageLayout type="posts" ID={ID}/>}/>
        <Route path="/form" element={<FormLayout/>}/>
      </Routes>
    </Router>
  );
}

export default App;