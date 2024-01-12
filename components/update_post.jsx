import { React, useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { Layout, Input, Button } from "antd";
import db from "../firebase.js"; 
import { getDoc, doc, updateDoc } from "firebase/firestore"; 

const { TextArea } = Input;
const { Header } = Layout;

const UpdatePost = (props)=>{

    let params = useParams()

    let [title, setTitle] = useState("")
    let [content, setContent] = useState("")
    
    useEffect(() => {
        (async () => {
            const docRef = doc(db, "posts", params.id);
            const docSnap = await getDoc(docRef)
            setTitle(docSnap.data().doc_title)
            setContent(docSnap.data().doc_content)
            }
        )()},[])

    const onTitleChange = (event)=> setTitle(event.target.value)
    const onContentChange = (event)=> setContent(event.target.value)

    const navigate = useNavigate();

    const onUpdatePost = async() => {
        let payload = { doc_title: title, doc_content: content }
        const docRef = doc(db, "posts", params.id)
        await updateDoc(docRef, payload);
        console.log("Document updated!");
        navigate('/posts', { replace: true });
    }

    return(
        <div className="create_post_container">
            <Header className="headerStyle">Update Post</Header>
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
                            onClick = { onUpdatePost }
                        >
                            Edit Post
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default UpdatePost