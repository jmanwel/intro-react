import React, { useState } from "react";
import { Layout, Input, Button } from 'antd';
const { Header } = Layout;
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signin = (props)=>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onEmailChange = (event)=> setEmail(event.target.value)
    const onPasswordChange = (event)=> setPassword(event.target.value)
    
    const navigate = useNavigate();

    const onSignIn = ()=>{
        console.log(email, password)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Sign in!!", user)
                navigate('/posts', { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error!", errorCode, errorMessage)
            });
    }

    return (
        <div className="sign_up_container">
            <Header className="headerStyle">Sign In</Header>
            <div className="sign_up_container_inputs" style={{marginTop: "20px"}}>
                <div className="post_inputs_container">
                    <div className="post_input_title">
                        <h2>Email</h2>
                    </div>
                    <div className="post_input">
                        <Input 
                            placeholder="Email"
                            onChange={ onEmailChange }
                        />
                    </div>
                    <div className="post_input_title">
                        <h2>Password</h2>
                    </div>
                    <div className="post_input">
                    <Input.Password
                        placeholder="input password"
                        onChange={ onPasswordChange }
                        iconRender={(visible) => (
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                            )}
                    />
                    </div>
                </div>
            </div>
            <div style={{ width: '100%'}}>
                <div style={{ float: 'left'}}>
                    <a href="/">Don't have an account?, sign up</a>
                </div>
                <div className="post_input_button">
                    <Button type="primary" size="large"
                        onClick = { onSignIn }
                        >
                        Sign In
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Signin;
