import React from "react";
import Modal from 'react-modal';
import { Typography, Button } from 'antd';
const { Title } = Typography;

const About = (props) => {
    const handleOnClick = () => {
        props.toggleModal();
    }
    
    return (
        <Modal isOpen={props.modalIsOpen} contentLabel="Example Modal" className="modal">
            <Title level={4}>About</Title>
            <Title level={5}>Group Members</Title>
            <p>Brian Atuh</p>
            <p>Olga Koldachenko</p>
            <Title level={5}>GitHub Link</Title>
            <p><a href="https://github.com/batuh836/comp4513-assign2">comp4513_assign2</a></p>
            <Title level={5}>React CSS</Title>
            <p><a href="https://ant.design/">Ant Design</a></p>
            <Button type="primary" onClick={handleOnClick}>Close</Button>
        </Modal>
    );
};

export default About