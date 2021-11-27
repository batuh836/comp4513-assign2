import React from "react";
import {Link} from 'react-router-dom';
import "./css/Header.css";

const Header = (props) => {
    const handleOnClick = () => {
        props.toggleModal();
    }
    
    return (
        <div className="header">
            <Link to="/"><span>Play Browser</span></Link>
            <a href="https://comp4513-assign2-node.herokuapp.com/logout"><button>Logout</button></a>
            <button onClick={handleOnClick}>About</button>
            <a href="https://comp4513-assign2-node.herokuapp.com/profile"><button>Profile</button></a>
        </div>
    );
};

export default Header