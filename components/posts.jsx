import React, { useState, useEffect } from 'react';
import { Layout, Flex } from 'antd';
import Post from './post';
import { collection, getDocs,  onSnapshot, query, where } from "firebase/firestore"; 
const { Header, Footer, Sider, Content } = Layout;
import _ from 'lodash';
import db from '../firebase';

function Posts(props) {
        
    const [posts, setPosts] = useState([]);

    console.log(props.user.user)
    
    useEffect(() => {        
        let q = query(collection(db, "posts"), where("doc_uid", "==", props.user.user));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const posts1 = [];
            querySnapshot.forEach((doc) => {
                let {id, } = doc
                let payload = {id, ...doc.data()}
                setPosts((posts)=>[...posts, payload])
            });
            });
    }, []);

    return(
        <div className="post_container">
            <Flex gap="middle" wrap="wrap">
                <Layout className="layoutStyle">
                    <Header className="headerStyle">Posts</Header>
                    <Content className="article_container">
                        {posts.length > 0
                            ?
                            _.map(posts, (article, idx)=>{
                                return (
                                    <Post 
                                        key = { idx }
                                        id = { article.id }
                                        title = { _.capitalize(article.doc_title) } 
                                        content = { article.doc_content.substring(0,100) }
                                        user = { props.user }
                                    />
                                )
                            })
                            :
                            <h2 className="headerStyle">No post yet</h2>
                        }
                    </Content>
                    <Footer className="footerStyle">Footer</Footer>
                </Layout>  
            </Flex>
        </div>
    
    )
}


export default Posts