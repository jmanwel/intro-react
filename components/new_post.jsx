import { React, useState, useEffect } from "react";
import { useParams } from "react-router";
import { Layout, Card } from 'antd';
import api from '../mock_api';

const { Header } = Layout;

const New_Post =()=>{
    let params = useParams()

    let post = api[params.id]
    let title = post.title
    let content = post.content

    return(
        <div className="app_container">
            <Header className="headerStyle">{title}</Header>
            <div className="article_container">
                <Card style={{ marginTop: '20px' }}>
                    {
                        content.split("\n").map((item, i)=>{
                            return <p key={i}>{item}</p>;
                        })                 
                    }
                </Card>
            </div>
        </div>
        
    )
}

export default New_Post;