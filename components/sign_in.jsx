import React, { useState } from "react";
import { Layout, Input, Button } from 'antd';
const { Header } = Layout;
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signin = (props)=>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [validate, setValidate] = useState("")

    const onEmailChange = (event)=> setEmail(event.target.value)
    const onPasswordChange = (event)=> setPassword(event.target.value)
    
    const navigate = useNavigate();

    // function validateFields() {
    //     if (email === '' || password === '') {
    //       // fields are empty, show error message or do something else
    //       console.log('Fields cannot be empty');
    //       setValidate({mail_error:"Mail empty" , pass_error: Password empty})
    //       return false;
    //     }
    //     if (field1 === field2) {
    //       // fields are equal, show error message or do something else
    //       console.log('Fields cannot be equal');
    //       return false;
    //     }
    //     // fields are valid, continue with form submission or do something else
    //     console.log('Fields are valid');
    //     return true;
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     if (validateFields()) {
    //       // do something with form data
    //       console.log('Form submitted successfully');
    //     }
    //   }

    const onSignIn = ()=>{
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
