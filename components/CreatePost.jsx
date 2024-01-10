import { React, useState } from "react";
import { Layout, Input, Button } from 'antd';


const { TextArea } = Input;
const { Header } = Layout;

const CreatePost = (props)=>{

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const onTitleChange = (event)=> setTitle(event.target.value)
    const onContentChange = (event)=> {console.log(event.target.value); setContent(event.target.value)}
    const onCreatePost = () => {
        console.log("CREATE!")
        console.log(title)
        console.log(content)
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