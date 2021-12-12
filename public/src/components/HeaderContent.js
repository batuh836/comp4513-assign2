import React from "react";
import {Link} from 'react-router-dom';
import { Row, Col, Button, Space } from "antd";

const HeaderContent = (props) => {
    const handleAboutClick = () => {
        props.toggleAbout();
    }
    
    const handleUserClick = () => {
        props.toggleUser();
    }
    
    return (
        <Row justify="space-between">
            <Col>
                <Link to="/home" style={{fontSize: "2rem", fontWeight: "bold"}}>Play Browser</Link>
            </Col>
            <Col>
                <Space>
                    <Button onClick={handleAboutClick}>About</Button>
                    <Button onClick={handleUserClick}>Profile</Button>
                    <a href="https://comp4513-assign2.herokuapp.com/logout"><Button type="primary">Logout</Button></a>
                </Space>
            </Col>
        </Row>
    );
};

export default HeaderContent