import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signout = (props)=>{
    console.log(props)
    const [user, setUser] = useState(props.user.user.uid);

    const navigate = useNavigate();
  
    const onSignOut = ()=>{

        const auth = getAuth();
    
        signOut(auth).then(() => {
            console.log("Signed out!");
            setUser(false);
            navigate('/', { replace: true });
            window.location.reload()
        }).catch((error) => {
            console.log("Ooops!", error);
        });
    }

    return(
        <h1 onClick={ onSignOut }>Please, click here to logout</h1>
    )
}

export default Signout;