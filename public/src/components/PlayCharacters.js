import React from "react";
const PlayCharacters = (props) => {
    return (
        <div style={{textAlign:"left", backgroundColor: "white", padding:"10px"}}>
            {props.persona.map((p) =>
                    <p key={p.player}><strong>{p.player}</strong> - {p.desc ? p.desc : "No description"}</p>
                )}
        </div>
    );
}

export default PlayCharacters