import React, { useState } from 'react';

const Navbar = (props)=> {

    const [user, setUser] = useState(props.user);
        
        let path = "/";
        let content = "Sign In";

        if (props.user.user !== false){
            path = "/signout";
            content = "Sign Out";
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><i className="fa-solid fa-explosion"></i></a>                    
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/posts" ><i class="fa-regular fa-bookmark"></i> Posts</a>
                            </li>
                            {props.user.user &&
                                <li className="nav-item">
                                    <a className="nav-link active" href="/create_post"><i class="fa-solid fa-pencil"></i> Create Post</a>
                                </li>              
                            }          
                        </ul>
                        <span className="navbar-text">
                            <i className="fa-solid fa-right-to-bracket"></i>
                            <a className="nav item" href={ path }>{ content }</a>
                        </span>
                    </div>
                </div>
            </nav>
        )
    }

export default Navbar;