import React from "react";
import Modal from 'react-modal';
import "./css/User.css";

const User = (props) => {
    const handleOnClick = () => {
        props.toggleModal();
    }
    
    if (props.user) {
        const profile = props.user.profile;
        const membership = props.user.membership;
        const picture = props.user.picture;
        return (
            <Modal isOpen={props.modalIsOpen} contentLabel="Example Modal" className="user">
                <h1>Profile</h1>
                <span>Name: {profile.firstname} {profile.lastname}</span>
                <span>Location: {profile.city}, {profile.country}</span>
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