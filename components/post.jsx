import React from 'react'
import { Card } from 'antd';
import { Link } from "react-router-dom";

const Post = (props)=>{
    return(
        <div className="article_container">
            <Card title={props.title}
                  type="inner"
                  extra={<Link to={`/new_post/${props.id}`}>Read full article</Link>} 
                  style={{ marginTop: 16 }}>
                <p className="contentStyle">{props.content}</p>
            </Card>
        </div>
    )
}

export default Post;