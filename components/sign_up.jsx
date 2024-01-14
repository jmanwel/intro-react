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
            <Header className="headerStyle" >Sign Up</Header>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                    Email address
                </label>
                <input 
                    type="email" 
                    onChange={ onEmailChange } 
                    className="form-control" 
                    placeholder="name@example.com"
                />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                    Password
                </label>
                <Input.Password
                    placeholder="input password"
                    onChange={ onPasswordChange }
                    iconRender={(visible) => (
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        )}
                />
            </div>
            
            <div className="container">
                <div className="row">
                    <div className="col">
                        <a style={{ float: 'left'}} href="/">Have an account?, sign in</a>
                    </div>
                    <div className="col">
                        <Button type="primary" size="large"
                            onClick = { onSignUp }
                            style={{ float: 'right'}}
                            >
                            Sign Up
                        </Button>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Signup;
