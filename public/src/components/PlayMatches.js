import React from "react";
import {Link} from 'react-router-dom';
import FavouriteButton from "./FavouriteButton.js";
import { Col, Typography, Table, Space, Button } from 'antd';
import "./css/PlayMatches.css";

const { Title } = Typography;

const PlayMatches = (props) => {
    
    const titleSort = (a, b) => {
        // yeah i don't get this either
        let aTitle = a.title.props.children.toLowerCase();
        let bTitle = b.title.props.children.toLowerCase(); 
        if (aTitle > bTitle) {return 1}
        else if (aTitle < bTitle) {return -1}
        else {return 0}
    }

    const dataSource = props.plays.map(p => {
        return {    key: p.id,
                    title: <Link to="/play-detail" onClick={(e) => props.setCurrentPlay(p)} style={{textTransform:"uppercase"}}>{p.title}</Link>,
                    year: p.likelyDate,
                    actions: 
                        <Space>
                            <FavouriteButton play={p} addToFavourites={props.addToFavourites}/>
                            <Link to="/play-detail"><Button type="primary" onClick={(e) => props.setCurrentPlay(p)}>View</Button></Link>
                        </Space>
                }
    });

    // antdesign has a known issue with the columns not aligning when scrolling
    // https://github.com/ant-design/ant-design/issues/7603
    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
            sorter: titleSort
        },
        {
            title: "Year",
            dataIndex: "year",
            key: "year",
            sorter: (a, b) => a.year - b.year
        },
        {
            title: "Actions",
            dataIndex: "actions",
            key: "actions"
        }
    ];

    if (props.plays && props.plays.length > 0) {
        return (
            <Col className="play-matches" span={18} style={{ paddingLeft: '40px' }}>
                <Title level={2}>Play List</Title>
                <Table columns={columns} pagination={false} dataSource={dataSource} scroll={{x: "max-content", y: "calc(100vh - 220px)"}}/>
            </Col>
        );
    }
    else {
        return (
            <Col className="play-matches" span={18} style={{ paddingLeft: '40px' }}>
                <Title level={2}>Play List</Title>
                <p>No plays found!</p>
            </Col>
        )
    }
};

export default PlayMatches