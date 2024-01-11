import React from 'react'
import { Card } from 'antd';
import { Link } from "react-router-dom";

const Post = (props)=>{
    return(
        <div className="article_container">
            <Card title={props.title}
                  type="inner"
                  extra={
                    <div className='post_snippet_linkss'>
                        <Link 
                            to={`/new_post/${props.id}`} 
                            style={{ marginRight:'15px' }}
                        >
                            Read full article
                        </Link>
                        <Link 
                            to={`/update_post/${props.id}`}
                        >
                            Update article
                        </Link>
                    </div>
                    } 
                  style={{ marginTop: 16 }}>
                <p className="contentStyle">{props.content}</p>
            </Card>
        </div>
    )
}

export default Post;