import React from "react";
import {CSSTransitionGroup} from 'react-transition-group';
import HeaderContent from "./HeaderContent.js";
import FavouritesList from "./FavouritesList.js";
import PlayFilters from "./PlayFilters.js";
import PlayMatches from "./PlayMatches.js";
import { Layout, Row } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

// oh god antdesign is not made for three column setups
const PlayList = (props) => {
    return (
        <Layout style={{height:"100vh"}}>
            <Header>
                <HeaderContent toggleAbout={props.toggleAbout} toggleUser={props.toggleUser}/>
            </Header>
            <Layout>
                <FavouritesList favourites={props.favourites} 
                                                removeFromFavourites={props.removeFromFavourites} 
                                                setCurrentPlay={props.setCurrentPlay}/>
                <Content style={{padding: "20px 40px"}}>
                    <Row justify="space-between">
                            <PlayFilters filters={props.filters} 
                                                                setFilteredPlays={props.setFilteredPlays} 
                                                                genres={props.genres}/>
                            <PlayMatches plays={props.plays} 
                                    setFilteredPlays={props.setFilteredPlays} 
                                    addToFavourites={props.addToFavourites} 
                                    setCurrentPlay={props.setCurrentPlay}/>
                    </Row>
                </Content>
            </Layout>
        </Layout>
//        <CSSTransitionGroup transitionName="favourites" 
//                            transitionAppear={true} 
//                            transitionAppearTimeout={500}
//                            transitionEnterTimeout={500} 
//                            transitionLeaveTimeout={500}>
//        </CSSTransitionGroup>
    );
};

export default PlayList