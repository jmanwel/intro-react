import { React, useState } from "react";
import { Layout, Input, Button } from "antd";
import { doc, setDoc } from "firebase/firestore"; 


const { TextArea } = Input;
const { Header } = Layout;

const CreatePost = (props)=>{

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const onTitleChange = (event)=> setTitle(event.target.value)
    
    const onContentChange = (event)=> setContent(event.target.value)
    
    async const onCreatePost = () => {
        await setDoc(doc(db, "posts", "LA"), 
            { 
                doc_title: title, 
                doc_content: content 
            }
        );
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