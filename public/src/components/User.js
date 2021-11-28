import React from "react";
import Modal from 'react-modal';
import "./css/User.css";

const User = (props) => {
    const handleOnClick = () => {
        props.toggleModal();
    }
    
    if (props.user) {
        const details = props.user.details;
        const membership = props.user.membership;
        const picture = props.user.picture;
        return (
            <Modal isOpen={props.modalIsOpen} contentLabel="Example Modal" className="user">
                <h1>Profile</h1>
                <span>Name: {details.firstname} {details.lastname}</span>
                <span>Location: {details.city}, {details.country}</span>
                <span>Joined: {membership.date_joined}</span>
                <img src={picture.thumbnail} alt="picture"/>
                <button onClick={handleOnClick}>Close</button>
            </Modal>
        );
    }
    else {
        return null;
    }
};

export default User