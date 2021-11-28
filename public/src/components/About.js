import React from "react";
import Modal from 'react-modal';
import "./css/About.css";

const About = (props) => {
    const handleOnClick = () => {
        props.toggleModal();
    }
    
    return (
        <Modal isOpen={props.modalIsOpen} contentLabel="Example Modal" className="about">
            <h1>About</h1>
            <p className="subtitle">Group Members</p>
            <p>Brian Atuh</p>
            <p className="subtitle">GitHub Link</p>
            <p><a href="https://github.com/batuh836/comp4513_assignment1">Comp4513_Assignment1</a></p>
            <button onClick={handleOnClick}>Close</button>
        </Modal>
    );
};

export default About