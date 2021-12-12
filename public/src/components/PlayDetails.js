import React from "react";
import { Row, Col } from 'antd';

const PlayDetails = (props) => {
    return (
        <div style={{textAlign:"left", backgroundColor: "white", padding:"10px"}}>
            <Row>
                <Col span={8}><strong>Likely date of composition:</strong></Col>
                <Col span={16}>{props.play.likelyDate}</Col>
            </Row>
            <Row>
                <Col span={8}><strong>Genre:</strong></Col>
                <Col span={16}>{props.play.genre}</Col>
            </Row>
            <Row>
                <Col span={8}><strong>Wiki Link:</strong></Col>
                <Col span={16}><a href={props.play.wiki}>{props.play.wiki}</a></Col>
            </Row>
            <Row>
                <Col span={8}><strong>Gutenberg:</strong></Col>
                <Col span={16}><a href={props.play.gutenberg}>{props.play.gutenberg}</a></Col>
            </Row>
            <Row>
                <Col span={8}><strong>Shakespeare.org:</strong></Col>
                <Col span={16}><a href={props.play.shakespeareOrg}>{props.play.shakespeareOrg}</a></Col>
            </Row>
            <Row>
                <Col span={8}><strong>Description:</strong></Col>
                <Col span={16}>{props.play.desc}</Col>
            </Row>
        </div>
    );
}

export default PlayDetails