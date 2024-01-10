import React from 'react'
import { Layout, Flex, Card, Space } from 'antd';
import Post from './post';
import api from '../mock_api';
const { Header, Footer, Sider, Content } = Layout;
import _ from 'lodash';


function Posts(props) {
    return(
        <div className="post_container">
            <Flex gap="middle" wrap="wrap">
                <Layout className="layoutStyle">
                    <Header className="headerStyle">Posts</Header>
                    <Content className="article_container">
                        {
                            _.map(api, (article, idx)=>{
                                return (
                                    <Post 
                                    key={idx}
                                    id={idx}
                                    title={article.title} 
                                    content={article.content}
                                    />
                                )
                            })
                        }
                    </Content>
                    <Footer className="footerStyle">Footer</Footer>
                </Layout>  
            </Flex>
        </div>
    
    )
}


export default Posts