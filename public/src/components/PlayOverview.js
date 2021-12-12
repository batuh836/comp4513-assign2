import React from "react";
import {Link} from 'react-router-dom';
import {uniq} from 'lodash';
import { Col, Typography, Button, Form, Input, Select } from 'antd';
import FavouriteButton from "./FavouriteButton";
const { Title } = Typography;

const PlayOverview = (props) => {
    //if current tab is text, deisplay filter options
    if (props.currentTab === "Text") {
        const acts = props.playData.acts;
        const scenes = props.currentAct.scenes;
        const characters = ["All Players"]; //add all players to list of characters
        characters.push(...uniq(props.currentScene.speeches.map((s) => s.speaker)));
        
        return (
            <Col className="play-overview" span={6} style={{ padding: '0px 20px' }}>
                <Title level={2}>{props.play.title}</Title>
                <p>{props.play.synopsis}</p>
                <Title level={3}>Script Search</Title>
                <Form>
                    <Form.Item label="Act" name="act">
                        <Select name="act" onChange={e => props.setPlayFilter("act", e)}>{acts.map((a) => 
                            <Select.Option key={a.name} value={a.name}>{a.name}</Select.Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item label="Scene" name="scene">
                        <Select name="scene" onChange={e => props.setPlayFilter("scene", e)}>{scenes.map((s) => 
                            <Select.Option key={s.name} value={s.name}>{s.name}</Select.Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item label="Character" name="character">
                        <Select name="character" onChange={e => props.setPlayFilter("character", e)}>{characters.map((c) => 
                            <Select.Option key={c} value={c}>{c}</Select.Option>)}
                        </Select>      
                    </Form.Item>
                    <Form.Item>
                        <Input type="text" placeholder="Enter a search term" onChange={e => props.setSearchText(e.target.value)}/>
                    </Form.Item>
                </Form>
                

                <fieldset>
                    
                    
                </fieldset>
                <Link to="/play-list"><Button>Close</Button></Link>
                <FavouriteButton play={props.play} addToFavourites={props.addToFavourites}/>
            </Col>
        );
    }
    else {
        return (
            <Col className="play-overview" span={6} style={{ padding: '0px 20px' }}>
                <Title level={2}>{props.play.title}</Title>
                <p>{props.play.synopsis}</p>
                <Link to="/play-list"><Button>Close</Button></Link>
                <FavouriteButton play={props.play} addToFavourites={props.addToFavourites}/>
            </Col>
        );
    }
};

export default PlayOverview