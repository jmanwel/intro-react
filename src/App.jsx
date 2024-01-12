import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './App.css';
import Posts from "/components/posts.jsx";
import New_Post from "/components/new_post.jsx";
import ErrorPage from "./error_page.jsx";
import CreatePost from "/components/CreatePost.jsx";
import Navbar from "/components/navbar.jsx";
import UpdatePost from '../components/update_post.jsx';
import Signup from '../components/sign_up.jsx';
import Signin from '../components/sign_in.jsx';
import Signout from '../components/sign_out.jsx';

function App(props) {

  const [user, setUser] = useState(false);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User signed in: ", user.uid);
      setUser(true)
    } else {
        console.log("No users signed in")
    }
  });

  return (
      <div className='app_container'>
        <BrowserRouter>
          <Navbar user={{ user }} />
          <Routes>
            <Route path ="/" element={< Signin />} />
            <Route path ="/signup" element={< Signup />} />
            <Route path ="/signout" element={< Signout user={{ user }} />} />
            <Route path ="/posts" element={< Posts user={{ user }} />} />
            <Route path ="new_post/:id" element={ <New_Post/> } />
            <Route path ="create_post" element={ <CreatePost/> } />
            <Route path ="update_post/:id" element={ <UpdatePost/> } />
            <Route path ="*" element={ <ErrorPage/> } />
          </Routes>          
        </BrowserRouter>
      </div>
  )
}

export default App