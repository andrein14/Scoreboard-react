import React from "react";

const Header = props => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: {props.playersNumber}</span>
    </header>
  );
};

export default Header;