import React from "react";
import {Link} from 'react-router-dom';
import "./css/Home.css";
import { Form, Button, Space, Typography, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Home = (props) => {
    const handleMatchingClick = () => {
        const title = document.getElementById("title").value;
        props.setFilteredPlays({"title": title}, "title");
    }
    
    const handleAllClick = () => {
        props.setFilteredPlays({}, "title");
    }
    
    return (
        <div className="home">
            <article className="article">
                <Title level={1}>Play Browser</Title> 
                <Form>
                    <Form.Item label="Search Plays">
                        <Input id="title" type="text"/>
                    </Form.Item>

                    <Form.Item>
                        <Space>
                            <Link to="/play-list"><Button type="primary" icon={<SearchOutlined />} onClick={handleMatchingClick}>Search Plays</Button></Link>
                            <Link to="/play-list"><Button onClick={handleAllClick}>Show All Plays</Button></Link>
                        </Space>
                    </Form.Item>
                </Form>
            </article>
            <p>Phantom of the Opera at Istana Budaya, Kuala Lumpur. World Tour 2019.</p>
        </div>
    );
};

export default Home