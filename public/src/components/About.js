import React from "react";
import Modal from 'react-modal';
import "./css/About.css";

const About = (props) => {
    const handleOnClick = () => {
        props.toggleModal();
    }
    
    return (
        <Modal isOpen={props.modalIsOpen} contentLabel="Example Modal" className="about">
            <h2>About</h2>
            <p className="subtitle">Group Members</p>
            <p>Brian Atuh</p>
            <p>Olga Koldachenko</p>
            <p className="subtitle">GitHub Link</p>
            <p><a href="https://github.com/batuh836/comp4513-assign2">comp4513_assign2</a></p>
            <button onClick={handleOnClick}>Close</button>
        </Modal>
    );
};

export default About