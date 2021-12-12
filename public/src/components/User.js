import React from "react";
import Modal from 'react-modal';
import { Typography, Button, Row, Col, Space } from 'antd';
const { Title } = Typography;


const User = (props) => {
    const handleOnClick = () => {
        props.toggleModal();
    }
    
    if (props.user) {
        const details = props.user.details;
        const membership = props.user.membership;
        const picture = props.user.picture;
        return (
            <Modal isOpen={props.modalIsOpen} contentLabel="Example Modal" className="profile">
            <Title level={4}>Profile</Title>
            <Row justify="space-between">
                <Col span={2}>
                    <img src={picture.thumbnail} alt="picture"/><br/>
                </Col>
                <Col flex="auto">
                    <Title level={5}>{details.firstname} {details.lastname}</Title>
                </Col>
            </Row>
            <Row>
                <Col offset={2} span={11}>
                    Location:
                </Col>
                <Col span={11}>
                    {details.city}, {details.country}
                </Col>
            </Row>
            <Row>
                <Col offset={2} span={11}>
                    Joined:
                </Col>
                <Col span={11}>
                    {membership.date_joined}
                </Col>
            </Row>
            <Button type="primary" onClick={handleOnClick} style={{marginTop: "10px"}}>Close</Button>
            </Modal>
        );
    }
    else {
        return null;
    }
};

export default User