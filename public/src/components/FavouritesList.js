import React from "react";
import FavouritesItem from "./FavouritesItem.js";
import "./css/FavouritesList.css";

const FavouritesList = (props) => {
    const handleToggleClick = () => {
        //toggle favourites visibility
        let parentElement = document.querySelector(".favourites-list").parentElement; 
        parentElement.classList.toggle("hide-favourites");
        toggleArrowSymbol();
    }
    
    const toggleArrowSymbol = () => {
        //get appropriate arrow symbol
        let parentElement = document.querySelector(".favourites-list").parentElement; 
        let toggleButton = document.getElementById("toggle-button");
        
        if (parentElement.classList.contains("hide-favourites")) {toggleButton.innerHTML = "▶"}
        else {toggleButton.innerHTML = "◀"}
    }
    
    if (props.favourites) {
        return (
            <div className="favourites-list">
                <h1>Favourites</h1>
                <ul>
                {props.favourites.map((p) => 
                    <li key={p.id}>
                        <FavouritesItem play={p} 
                                        removeFromFavourites={props.removeFromFavourites} 
                                        setCurrentPlay={props.setCurrentPlay}/>
                    </li>
                )}
                </ul>
                <button id="toggle-button" onClick={handleToggleClick}>◀</button>
            </div>
        );
    }
    else {
        return null;
    }
};

export default FavouritesList