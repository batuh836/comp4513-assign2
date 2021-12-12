import React from "react";
import {Link} from 'react-router-dom';
import {Button, Row} from "antd";
import { CloseOutlined } from '@ant-design/icons';

const FavouritesItem = (props) => {
    const handleOnClick = () => {
        props.removeFromFavourites(props.play);
    }
    
    const handleViewClick = (play) => {
        console.log(play);
        props.setCurrentPlay(play);
    }
    
    return (
        <Row justify="space-between" style={{padding: "2px 10px", alignItems: "center"}}>
            <Link to="/play-detail"><span onClick={() => {handleViewClick(props.play)}} style={{textTransform: "uppercase"}}>{props.play.title}</span></Link>
            <Button type="primary" onClick={handleOnClick} icon={<CloseOutlined />}/>
        </Row>
    );
};

export default FavouritesItem