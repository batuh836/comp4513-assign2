import React from "react";
import {Link} from 'react-router-dom';
import "./css/Home.css";
import { Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

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
                <form className="form">
                    <legend>Play Browser</legend>
                    <label>Search Play Title</label><input id="title" type="text"/><br/>
                    <Space>
                        <Link to="/play-list"><Button type="primary" icon={<SearchOutlined />} onClick={handleMatchingClick}>Search Plays</Button></Link>
                        <Link to="/play-list"><Button onClick={handleAllClick}>Show All Plays</Button></Link>
                    </Space>
                </form>
            </article>
            <p>Phantom of the Opera at Istana Budaya, Kuala Lumpur. World Tour 2019.</p>
        </div>
    );
};

export default Home