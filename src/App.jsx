import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDom from 'react-dom';
import Posts from "/components/posts.jsx"
import New_Post from "/components/new_post.jsx"
import ErrorPage from "./error_page.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App(props) {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={< Posts />} />
            <Route path="new_post/:id" element={< New_Post />}/>
            <Route path="*" element={< ErrorPage />} />
          </Routes>          
        </BrowserRouter>
      </div>
  )
}

export default App
