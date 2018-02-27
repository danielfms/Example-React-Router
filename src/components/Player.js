import React from "react";
import {getPlayer} from "./../util/playersAPI";

export const Player = (props) => {
    const player = getPlayer(props.match.params.number);
    if(!player){
        return <div> Sorry, but the player was not found </div>
    }

    return (
        <div>
            <h1>{player.name} (#{player.number})</h1>
            <h2>{player.position}</h2>
        </div>
    )
}