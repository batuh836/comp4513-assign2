import React from "react";
import FavouritesList from "./FavouritesList.js";
import PlayOverview from "./PlayOverview.js";
import HeaderContent from "./HeaderContent.js";
import PlayData from "./PlayData.js";
import { Layout, Row } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class PlayDetailApp extends React.Component {
    constructor(props) {
        super(props);
        
        //initialize available tabs
        const tabs = ["Details", "Characters", "Text"];
        
        //initialize state values
        this.state = {currentTab: tabs[0],
                      tabs: props.play.filename ? tabs : [tabs[0]],
                      playData: [],
                      currentAct: null,
                      currentScene: null,
                      currentCharacter: "All Players",
                      searchText: ""};
    }
                            
    async componentDidMount() {
        //only get data if filename is not null
        if (this.props.play.filename) {
            //find saved data with play id
            const foundPlayData = this.props.savedPlayData.find((p) => p.id === this.props.play.id);
            
            //if not saved data is found, fetch
            if (!foundPlayData) {
                try {
                    //const url = "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php?name=" + this.props.play.id;
                    const url = "https://comp4513-assign2.herokuapp.com/api/play/" + this.props.play.id;
                    const response = await fetch(url);
                    const data = await response.json();
                    //const playText = data
                    const playText = data[0].playText;
                    this.setState({playData: playText});
                    console.log(playText);
                    
                    //set current act and scene with first in arrays
                    this.setState({currentAct: playText.acts[0]});
                    this.setState({currentScene: playText.acts[0].scenes[0]});
                    
                    //save play data
                    this.props.savePlayData(this.props.play, playText);
                } 
                catch {
                    console.error("fetch error");
                }
            }
            else {
                //if saved play data is found, set state values
                this.setState({playData: foundPlayData.data});
                this.setState({currentAct: foundPlayData.data.acts[0]});
                this.setState({currentScene: foundPlayData.data.acts[0].scenes[0]});
            }
        }
    }
    
    render() {
        const tabs = ["Details", "Characters", "Text"];
        const setCurrentTab = (index) => {
            this.setState({currentTab: tabs[index]});
        }
        
        const setPlayFilter = (name, value) => {
            if (name === "act") {
                //find act from play data and set first scene
                const foundAct = this.state.playData.acts.find((a) => a.name === value);
                this.setState({currentAct: foundAct});
                this.setState({currentScene: foundAct.scenes[0]});
                this.setState({currentCharacter: "All Players"});
            }
            else if (name === "scene") {
                //find scene from current act
                const foundScene = this.state.currentAct.scenes.find((s) => s.name === value);
                this.setState({currentScene: foundScene});
                this.setState({currentCharacter: "All Players"});
            }
            else if (name === "character") {
                //set current character
                this.setState({currentCharacter: value});
            }
        }
        
        const setSearchText = (text) => {
            this.setState({searchText: text});
        }
        
        return (
            <Layout style={{height:"100vh"}}>
                <Header>
                    <HeaderContent toggleAbout={this.props.toggleAbout} toggleUser={this.props.toggleUser}/>
                </Header>
                <Layout>
                    <FavouritesList favourites={this.props.favourites} 
                                removeFromFavourites={this.props.removeFromFavourites}
                                setCurrentPlay={this.props.setCurrentPlay}
                                />
                    <Content style={{padding: "20px 40px"}}>
                        <Row justify="space-between">
                            <PlayOverview currentTab={this.state.currentTab} 
                                    play={this.props.play} 
                                    playData={this.state.playData} 
                                    currentAct={this.state.currentAct} 
                                    currentScene={this.state.currentScene} 
                                    addToFavourites={this.props.addToFavourites}
                                    setPlayFilter={setPlayFilter}
                                    setSearchText={setSearchText}/>
                            <PlayData currentTab={this.state.currentTab} 
                                    tabs={this.state.tabs} 
                                    play={this.props.play} 
                                    playData={this.state.playData} 
                                    currentAct={this.state.currentAct}
                                    currentScene={this.state.currentScene}
                                    currentCharacter={this.state.currentCharacter}
                                    searchText={this.state.searchText}
                                    setCurrentTab={setCurrentTab}/>
                        </Row>
                    </Content>
                </Layout>
            </Layout>
        );
    }
};

export default PlayDetailApp