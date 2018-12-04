import React, { Component } from "react";
import { PLAYERS } from "./shared/players";
import Header from "./components/Header";
import Player from "./components/Player";
import Footer from "./components/Footer";

class App extends Component {
  state = { players: PLAYERS };
  
  addPlayer (name, id) {
    console.log("Player added:", name)
    this.state.players.push({
      name: name,
      score: 0,
      id: id
    });
    this.setState(this.state)
    id += 1
  }

  removePlayer(id) {
    this.setState(prevState=>(
      {players: prevState.players.filter(players => players.id !== id)}
    ));
  }

 /*
      https://codepen.io/robbi093/pen/wzyYvX?editors=0010
*/

  render() {
    return (
      <div className="scoreboard">
        <Header playersNumber={this.state.players.length} />
        {this.state.players.map(player => (
            <Player playersName={player.name}
            removePlayer={() => this.removePlayer(player.id)}
            />
          ))
        }
        <Footer addNew={this.addPlayer}/>
      </div>
    );
  }
}

export default App;