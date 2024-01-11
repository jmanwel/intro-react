import React from 'react';
import {NavLink}  from 'react-router-dom'

class Navbar extends React.Component {
    
    render() {
        return (
            <nav className="navbar navbar-inverse" >
                <div className="container-fluid">
                    <div className="navbar-header">                        
                        <a className="navbar-brand" href="/">Posts</a>
                        <a className="navbar-brand" href="/create_post">Create Post</a>
                    </div>                    
                </div>
            </nav>
        )
    }
};

export default Navbar;