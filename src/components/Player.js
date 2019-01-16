
import React from "react";
import Counter from "./Counter";
import Icon from "./Icon"
const Player = props => {

  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>
          ✖
        </button>
        <Icon 
        max={props.isMax}
      />
        {props.name}
      </span>
      <Counter 
        score = {props.score}
        changeScore = {props.changeScore} 
        id = {props.id}
        />
    </div>
  );
};
export default Player;
