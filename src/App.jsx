import { useState } from 'react'
import './App.css'
import ReactDom from 'react-dom';
import Posts from "/components/posts.jsx"
import New_Post from "/components/new_post.jsx"
import ErrorPage from "./error_page.jsx"
import CreatePost from "/components/CreatePost.jsx"
import { Menu } from 'antd';
import { FormOutlined, EditOutlined } from '@ant-design/icons'

import { BrowserRouter, Routes, Route } from "react-router-dom";

const items = [
  {
    label: 'Posts',
    key: 'posts',
    icon: <FormOutlined />,
  },
  {
    label: 'Create Post',
    key: 'app',
    icon: <EditOutlined />,
  }
];

function App(props) {
  
  const [current, setCurrent] = useState('posts');
  
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
      <div className='app_container'>
        <div className='app_main_container'>
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
        </div>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Posts/>}/>
            <Route path="new_post/:id" element={<New_Post/>}/>
            <Route path="create_post" element={<CreatePost/>}/>
            <Route path="*" element={<ErrorPage/>} />
          </Routes>          
        </BrowserRouter>
      </div>
  )
}

export default App
