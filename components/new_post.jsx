import { React, useState, useEffect } from "react";
import { useParams } from "react-router";
import { Layout, Card } from 'antd';
import db from '../firebase';
import { getDoc, doc } from "firebase/firestore"; 


const { Header } = Layout;

const New_Post =()=>{
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