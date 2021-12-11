import React from "react";
import FavouritesItem from "./FavouritesItem.js";
import { Col, Typography, Layout } from 'antd';
import "./css/FavouritesList.css";

const { Header, Footer, Sider, Content } = Layout;

const { Title } = Typography;

const FavouritesList = (props) => {
    return (
        <Sider collapsible={true} 
                defaultCollapsed={false} 
                collapsedWidth={0} 
                theme="light" 
                width={300} 
                style={{paddingTop: "20px"}}>
            <Title level={2}>Favourites</Title>
            {props.favourites.map((p) => 
                <FavouritesItem play={p} 
                                    removeFromFavourites={props.removeFromFavourites} 
                                    setCurrentPlay={props.setCurrentPlay}/>
            )}
        </Sider>
    );
};

export default FavouritesList