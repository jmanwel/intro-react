import { React, useState } from "react";
import { Layout, Input, Button } from "antd";
import db from "../firebase.js"; 
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;
const { Header } = Layout;

const CreatePost = (props)=>{
    let [title, setTitle] = useState("")
    let [content, setContent] = useState("")

    const onTitleChange = (event)=> setTitle(event.target.value)
    
    const onContentChange = (event)=> setContent(event.target.value)

    const navigate = useNavigate();

    const onCreatePost = async() => {
        let payload = { doc_title: title, doc_content: content, doc_uid: props.user.user }
        const docRef = await addDoc(collection(db, "posts"), payload);
        console.log("Document written with ID: ", docRef.id);
        navigate('/posts', { replace: true });
    }

    return(
        <div className="create_post_container">
            <Header className="headerStyle">Create Post</Header>
            <div className="post_inputs_container">
                <div className="post_input_title">
                    <h2>Post title</h2>
                </div>
                <div className="post_input">
                    <Input 
                        placeholder="enter post title" 
                        onChange={ onTitleChange }
                        value = { title }
                    />
                </div>
                <div className="post_inputs_container">                
                    <div className="post_input_title">
                        <h2>Post content</h2>
                    </div>
                    <div className="post_input_content">
                        <TextArea 
                            rows={10} 
                            value = { content }
                            onChange={ onContentChange } 
                        />
                    </div>
                    <div className="post_input_button">
                        <Button type="primary" size="large"
                            onClick = { onCreatePost }
                        >
                            Create Post
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default CreatePost