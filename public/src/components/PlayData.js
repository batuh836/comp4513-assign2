import React from "react";
import { Row, Col, Tabs } from 'antd';
import PlayDetails from "./PlayDetails.js";
import PlayCharacters from "./PlayCharacters.js";
import PlayScript from "./PlayScript.js";
const { TabPane } = Tabs;

const PlayData = (props) => {
    return (
        <Col className="container" span={18} style={{ paddingLeft: '40px' }}>
            <Tabs defaultActiveKey="0" onChange={e=> props.setCurrentTab(e)}>
                <TabPane tab="Details" key="0" style={{ maxHeight: "calc(100vh - 180px)", overflow: "scroll"}}>
                    <PlayDetails play={props.play}/>
                </TabPane>
                {props.playData && props.playData.length == 0 &&
                    <TabPane tab="Characters" key="1" disabled/>
                }
                {props.playData && props.playData.length != 0 &&
                    <TabPane tab="Characters" key="1" style={{ maxHeight: "calc(100vh - 180px)", overflow: "scroll"}}>
                        <PlayCharacters persona={props.playData.persona}/>
                    </TabPane>
                }
                {props.playData && props.playData.length == 0 &&
                    <TabPane tab="Script" key="2" disabled/>
                }
                {props.playData && props.playData.length != 0 &&
                    <TabPane tab="Script" key="2" style={{ maxHeight: "calc(100vh - 180px)", overflow: "scroll"}}>
                        <PlayScript playData={props.playData} 
                                    currentAct={props.currentAct}
                                    currentScene={props.currentScene}
                                    currentCharacter={props.currentCharacter}
                                    />
                    </TabPane>
                }

                
            </Tabs>
        </Col>
    );
}

export default PlayData