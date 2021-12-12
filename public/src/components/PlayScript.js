import React from "react";
import Highlighter from "react-highlight-words";

const PlayScript = (props) => {

    const highlightText = (text) => {
        //replace found search text, with text wrapped in strong element
        const searchText = props.searchText;
        return (text.replace(searchText, "<strong>" + searchText + "</strong>"));
    }

    return (
        <div style={{textAlign:"left", backgroundColor: "white", padding:"10px", fontFamily: "serif"}}>
            <h2>{props.playData.title}</h2>
                <article id="actHere">
                    <h3>{props.currentAct.name}</h3>
                    <div id="sceneHere">
                        <h4>{props.currentScene.name}</h4>
                        <p>{props.currentScene.title}</p>
                        <p>{props.currentScene.stageDirection}</p>
                        {props.currentScene.speeches.filter((s) => 
                            //if 'all players' is selected return all speeches
                            //else return speeches based on current character
                            props.currentCharacter === "All Players" ? true : props.currentCharacter === s.speaker
                        ).map((s, i) => 
                            <div key={i}>
                                <p className="speaker"><strong>{s.speaker}</strong></p>
                                {s.lines.map((l, i) => 
                                    <p className="line" key={i}>
                                         <Highlighter searchWords={[props.searchText]} textToHighlight={l} highlightStyle={{fontWeight: "bold"}}/>
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </article>
        </div>
    );
}

export default PlayScript