import React from "react";
import {Link} from 'react-router-dom';
import "./css/Header.css";

const Header = (props) => {
    const handleAboutClick = () => {
        props.toggleAbout();
    }
    
    const handleUserClick = () => {
        props.toggleUser();
    }
    
    return (
        <div className="header">
            <Link to="/"><span>Play Browser</span></Link>
            <a href="https://comp4513-assign2.herokuapp.com/logout"><button>Logout</button></a>
            <button onClick={handleAboutClick}>About</button>
            <button onClick={handleUserClick}>Profile</button>
        </div>
    );
};

export default Header