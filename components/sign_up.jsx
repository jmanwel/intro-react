import React, { useState } from "react";
import { Layout, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const Signup = (props)=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailChange = (event) => setEmail(event.target.value);
    const onPasswordChange = (event) => setPassword(event.target.value);
    
    const navigate = useNavigate();
    
    const onSignUp = ()=> {
        const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("User successfully added!", user);
                    navigate('/', { replace: true });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("Error!", errorCode, errorMessage);
                });
            setEmail('');
            setPassword('');
    }

    return (
        <div className="sign_up_container">
            <Header className="headerStyle">Sign Up</Header>
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
                    <a href="/signin">Have an account?, sign in</a>
                </div>
                <div className="post_input_button">
                    <Button type="primary" size="large"
                        onClick = {onSignUp}
                        >
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Signup;
