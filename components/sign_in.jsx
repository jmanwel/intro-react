import React, { useState } from "react";
import { Layout, Input, Button } from 'antd';
const { Header } = Layout;
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signin = (props)=>{

    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [validate, setValidate] = useState("")

    const onEmailChange = (event)=> setEmail(event.target.value)
    const onPasswordChange = (event)=> setPassword(event.target.value)
    
    const navigate = useNavigate();

    function validateFields() {
        if (email === '' || password === '') {
          console.log('Fields cannot be empty');
          setValidate({mail_error:"Mail empty" , pass_error: "Password empty"})
          return false;
        }
        if (email === password) {
          console.log('Fields cannot be equal');
          setValidate({mail_error:"Mail equal" , pass_error: "Password equal"})
          return false;
        }
        if (!pattern.test(email)) {
            console.log("Please enter valid email address.");
            setValidate({mail_error:"Mail invalid" , pass_error: "-"})
            return false;
        }
        console.log('Fields are valid');
        return true;
    }


    const onSignIn = ()=>{
        if (validateFields()) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("Sign in!!", user)
                    navigate('/posts', { replace: true });
                })
                .catch((error) => {
                    setError({code: error.code, msg: error.message})
                    console.log("Error!", error.code, error.message)
                });
        }
    }

    return (
        <div className="sign_up_container">
            <Header className="headerStyle" >Login</Header>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
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
                <label htmlFor="password" className="form-label">
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
            {error &&
                <p className="error_container">
                    <i class="fa-solid fa-triangle-exclamation"></i> | {error.code} | {error.msg} |
                </p>
            }
            {validate &&
                <p className="error_container">
                    <i class="fa-solid fa-triangle-exclamation"></i> | {validate.mail_error} | {validate.pass_error} |
                </p>
            }
            <div className="container">
                <div className="row">
                    <div className="col">
                        <a style={{ float: 'left'}} href="/signup">Don't have an account?, sign up</a>
                    </div>
                    <div className="col">
                        <Button type="primary" size="large"
                            onClick = { onSignIn }
                            style={{ float: 'right'}}
                            >
                            Sign In
                        </Button>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Signin;
