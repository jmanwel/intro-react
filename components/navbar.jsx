import React, { useState } from 'react';

const Navbar = (props)=> {

    const [user, setUser] = useState(props.user);
    
        return (
            <nav className="navbar navbar-inverse" style={{ width: '100%' }}>
                <div className="container-fluid">
                    <div className="navbar-header">                        
                        <a className="navbar-brand" href="/posts">Posts</a>
                        {props.user
                            ?
                            <div className="navbar-brand">
                                <a href="/create_post">Create Post</a>
                                <a href="/signout" style={{ float: 'right' }}>Sign Out</a>
                            </div>
                            :
                            <a className="navbar-brand" href="/" style={{ float: 'right' }}>Sign In</a>
                        }
                    </div>                    
                </div>
            </nav>
        )
    }

export default Navbar;