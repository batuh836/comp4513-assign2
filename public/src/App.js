import React from "react";
import './App.css';
import {CSSTransitionGroup} from 'react-transition-group';
import {Route} from 'react-router-dom';
import {cloneDeep, uniq} from 'lodash';
//import Header from "./components/HeaderContent.js";
import Home from "./components/Home.js";
import PlayList from "./components/PlayList.js";
import PlayDetailApp from "./components/PlayDetailApp.js";
import About from "./components/About.js";
import User from "./components/User.js";
import 'antd/dist/antd.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        //set states to initial values
        this.state = {user: null,
                      plays: [],
                      genres: [],
                      currentPlay: null,
                      filteredPlays: [],
                      favourites: [],
                      savedPlayData: [],
                      aboutIsOpen: false,
                      userIsOpen: false};
    }
                            
    async componentDidMount() {
        if (!this.state.user) {
            try {
                const url = "https://comp4513-assign2.herokuapp.com/user";
                const response = await fetch(url);
                const data = await response.json();
                this.setState({user: data});
            } 
            catch {
                console.error("fetch error");
            }
        }

        if (!this.state.plays.length) {
            try {
                //const url = "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php";
                const url = "https://comp4513-assign2.herokuapp.com/api/list";
                const response = await fetch(url);
                const data = await response.json();
                
                this.setState({plays: data});
                this.setState({filteredPlays: data});
                
                //add unique genres to state
                var genres = [""];
                genres.push(...uniq(data.map((p) => p.genre)));
                this.setState({genres: genres});
            } 
            catch {
                console.error("fetch error");
            }
        }
    }
    
    render() {
        //methods
        const setCurrentPlay = (play) => {
            this.setState({currentPlay: play});
        }
        
        const toggleAbout = () => {
            if (this.state.aboutIsOpen) {
                this.setState({aboutIsOpen: false});
            }
            else {
                this.setState({aboutIsOpen: true});
            }
        }
        
        const toggleUser = () => {
            if (this.state.userIsOpen) {
                this.setState({userIsOpen: false});
            }
            else {
                this.setState({userIsOpen: true});
            }
        }
        
        const setFilteredPlays = (filters, orderType, reset) => {
            var filteredPlays = reset ? cloneDeep(this.state.plays) : cloneDeep(this.state.filteredPlays); 
            
            //filter by title
            if (filters.title) {
                filteredPlays = filteredPlays.filter((p) => 
                                    p.title.toLowerCase().includes(filters.title.toLowerCase()));
            }
            
            //filter by beforeYear, if enabled
            if (filters.before && filters.beforeYear) {
                filteredPlays = filteredPlays.filter((p) => 
                                    p.likelyDate < filters.beforeYear);
            }
            
            //filter by afterYear, if enabled
            if (filters.after && filters.afterYear) {
                filteredPlays = filteredPlays.filter((p) => 
                                    p.likelyDate > filters.afterYear);
            }
            
            //filter by genre
            if (filters.genre) {
                filteredPlays = filteredPlays.filter((p) => 
                                    p.genre === filters.genre);
            }
            
            //order filtered plays
            if (orderType) {
                if (orderType === "title") {
                    filteredPlays = filteredPlays.sort((a,b) => {
                                        let aTitle = a.title.toLowerCase();
                                        let bTitle = b.title.toLowerCase(); 
                                        if (aTitle > bTitle) {return 1}
                                        else if (aTitle < bTitle) {return -1}
                                        else {return 0}
                                    });
                }
                else if (orderType === "year") {
                    filteredPlays = filteredPlays.sort((a,b) => 
                                        Number(a.likelyDate) - Number(b.likelyDate));
                }
            }
            
//            console.log(filters);
//            console.log(filteredPlays);
            this.setState({filteredPlays: filteredPlays});
        }
        
        const addToFavourites = (play) => {
            const favouritesCopy = [...this.state.favourites];
            
            //prevent duplicates from being added
            if (!favouritesCopy.find((p) => p.id === play.id)) {
                favouritesCopy.push(play);
            }
            
            this.setState({favourites: favouritesCopy});
        }
        
        const removeFromFavourites = (play) => {
            const favouritesCopy = [...this.state.favourites];
            
            //get index of play and remove it
            const index = favouritesCopy.findIndex((p) => p.id === play.id);
            favouritesCopy.splice(index, 1);
            this.setState({favourites: favouritesCopy});
        }
        
        const savePlayData = (play, data) => {
            const playDataCopy = cloneDeep(this.state.savedPlayData);
            
            //save play data with corresponding id
            playDataCopy.push({id: play.id, data: data});
            this.setState({savedPlayData: playDataCopy});
        }
        
        return (
            <div className="app">
                <Route path="/home" exact>
                    <CSSTransitionGroup transitionName="landing" 
                                        transitionAppear={true} 
                                        transitionAppearTimeout={500}
                                        transitionEnterTimeout={500} 
                                        transitionLeaveTimeout={500}>
                        <Home setFilteredPlays={setFilteredPlays}/>
                    </CSSTransitionGroup>
                </Route>
                <Route path="/play-list" exact>
                    <PlayList plays={this.state.filteredPlays}
                              genres={this.state.genres}
                              favourites={this.state.favourites}
                              filters={this.state.filters}
                              setFilteredPlays={setFilteredPlays} 
                              addToFavourites={addToFavourites}
                              removeFromFavourites={removeFromFavourites}
                              setCurrentPlay={setCurrentPlay}
                              toggleAbout={toggleAbout}
                              toggleUser={toggleUser}
                              />
                </Route>
                <Route path="/play-detail" exact>
                
                    <PlayDetailApp play={this.state.currentPlay}
                            savedPlayData={this.state.savedPlayData}
                            favourites={this.state.favourites}
                            addToFavourites={addToFavourites}
                            removeFromFavourites={removeFromFavourites}
                            savePlayData={savePlayData}
                            toggleAbout={toggleAbout}
                            toggleUser={toggleUser}
                            setCurrentPlay={setCurrentPlay}
                            />
                </Route>
                <About modalIsOpen={this.state.aboutIsOpen} toggleModal={toggleAbout}/>
                <User modalIsOpen={this.state.userIsOpen} toggleModal={toggleUser} user={this.state.user}/>
            </div>
        );                
    }
}

export default App;

//<Header toggleAbout={toggleAbout} toggleUser={toggleUser}/>