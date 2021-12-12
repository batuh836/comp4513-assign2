import React from "react";
import {Link} from 'react-router-dom';
import FavouriteButton from "./FavouriteButton.js";
import { Col } from 'antd';
import "./css/PlayMatches.css";

const PlayMatches = (props) => {
    const handleHeaderClick = (e) => {
        //sort plays by selected sort type
        props.setFilteredPlays({}, e.target.title, false);
    }
    
    const handleViewClick = (play) => {
        props.setCurrentPlay(play);
    }
    
    if (props.plays && props.plays.length > 0) {
        return (
            <Col className="play-matches" flex="auto" style={{ paddingLeft: '40px' }}>
                <h1>List/Matches</h1>
                <table>
                    <thead>
                        <tr>
                            <th title="title" onClick={handleHeaderClick}>Title</th>
                            <th title="year" onClick={handleHeaderClick}>Year</th>  
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
                <hr/>
                <div className="table-body">
                    <table>
                        <tbody>
                        {props.plays.map((p) => 
                            <tr key={p.id}>
                                <td onClick={() => {handleViewClick(p)}}><Link to="/play-detail">{p.title}</Link></td>
                                <td>{p.likelyDate}</td>
                                <td><FavouriteButton play={p} addToFavourites={props.addToFavourites}/></td>
                                <td><Link to="/play-detail"><button onClick={() => {handleViewClick(p)}}>View</button></Link></td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                <hr/>
            </Col>
        );
    }
    else {
        return (
            <Col className="play-matches" flex="auto" style={{ padding: '40px' }}>
                <h1>List/Matches</h1>
                <p>No plays found!</p>
            </Col>
        )
    }
};

export default PlayMatches