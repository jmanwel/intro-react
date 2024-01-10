import { React, useState, useEffect } from "react";
import { useParams } from "react-router";
import { Layout, Card } from 'antd';
import db from '../firebase';
import { collection, query, where, getDoc, doc } from "firebase/firestore"; 


const { Header } = Layout;

const New_Post =()=>{
    let params = useParams()
    
    let [data, setData] = useState("")
    let [title, setTitle] = useState("")
    let [content, setContent] = useState("")
    
    useEffect(() => {
        const q = query(collection(db, "posts"), where("id", "==", params.id));
        (async () => {
            const docRef = doc(db, "posts", params.id);
            const docSnap = await getDoc(docRef)
            setData(docSnap.data())
            // setTitle = docSnap.data().doc_title
            // setContent = docSnap.data().doc_content                    
            }
        )()},[])
       
    if(data !== ""){
        title = data.doc_title;
        content = data.doc_content;    
    }
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