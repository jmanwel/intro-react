import { useState } from 'react'
import './App.css'
import ReactDom from 'react-dom';
import Posts from "/components/posts.jsx"
import New_Post from "/components/new_post.jsx"
import ErrorPage from "./error_page.jsx"
import CreatePost from "/components/CreatePost.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "/components/navbar.jsx"
import UpdatePost from '../components/update_post.jsx';


function App(props) {
  return (
      <div className='app_container'>

        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Posts/>}/>
            <Route path="new_post/:id" element={ <New_Post/> }/>
            <Route path="create_post" element={ <CreatePost/> }/>
            <Route path="update_post/:id" element={ <UpdatePost/> }/>
            <Route path="*" element={ <ErrorPage/> } />
          </Routes>          
        </BrowserRouter>
      </div>
  )
}

export default App
