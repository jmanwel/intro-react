import React from 'react'
import { Card } from 'antd';
import { Link } from "react-router-dom";
import db from "../firebase.js"; 
import { doc, deleteDoc } from "firebase/firestore";

const Post = (props)=>{

    const onDeletePost = async() => {
        console.log("delete post:", props.id)
        await deleteDoc(doc(db, "posts", props.id));
        window.location.reload()
        
    }

    return(
        <div className="article_container">
            <Card title={props.title}
                  type="inner"
                  extra={
                    <div className='post_snippet_links'>
                        <Link 
                            to={`/new_post/${props.id}`} 
                            style={{ marginRight:'15px' }}
                        >
                            Read full article
                        </Link>
                        {props.user.user &&
                            <Link 
                            to={`/update_post/${props.id}`}
                            style={{ marginRight:'15px' }}
                            >
                                Update article
                            </Link>
                        }
                        {props.user.user &&
                            <Link 
                            to="#"
                            onClick = { onDeletePost}
                            >
                                Delete article
                            </Link>
                        }                        
                    </div>
                    } 
                  style={{ marginTop: 16 }}>
                <p className="contentStyle">{props.content}</p>
            </Card>
        </div>
    )
}

export default Post;