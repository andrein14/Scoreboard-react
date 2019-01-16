
import React, { Component } from "react";
import Header from "./components/Header";
import { PLAYERS } from "./shared/players";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
class App extends Component {
  state = { 
    players: PLAYERS
  };

  setIsMax=()=>{
    this.setState(prevState=>({
      players:prevState.players.map((player)=>{
       if(player.score === this.state.players.maxScore){
           return player;
       }
       else{
         return Object.assign(player,{isMax:true});
        }
      })
    }))
  }
  handleChangeScore = (id, modifier) => {
    this.setIsMax();
    // console.log("scorul este: " + score);
    this.setState(prevState => (
      {
        players: prevState.players.map( (player) => {
          // dc e alt player decat cel cautat, returnez player-ul original
          if (player.id !== id){  
            return player
          } 
          // dc e player-ul cautat, returnez player-ul cu proprietatea score modificata
          else { 
            return Object.assign(player, {score: player.score + modifier}) 
          }
        })
      }
    ))
  }
  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };
  handleAddPlayer = name => {
    
    // Genereaza un id nou, mai mare cu 1 fata de cel mai mare id din players,
    // indiferent de cum evolueaza players  
    const genUniqIncrId = () => 1 + Math.max(...this.state.players.map(player => player.id));    
    this.setState(prevState => ({
      players: [...prevState.players, { name, id: genUniqIncrId(), score: 0 }]
    }));
  };
  
  render() {

    const myPlayers = this.state.players;
    console.log(myPlayers);
      
    var maxElement;
    var maxScore;
      
   maxScore = myPlayers[0].score;
      
      for(var i = 0 ; i < myPlayers.length; i++){
        
          if(maxScore < myPlayers[i].score){
            maxScore = myPlayers[i].score;
            maxElement = myPlayers[i].name;
            
        }
      }
      console.log("max score:" + maxScore);
      console.log("max element: " + maxElement);


    return (
      <div className="scoreboard is-high-score">
        <Header title="Scoreboard" players = {this.state.players} />
        {/* Players list */}
        {this.state.players.map(player => (
          
          <Player
            name = {player.name}
            id = {player.id}
            key = {player.id.toString()}
            removePlayer = {this.handleRemovePlayer}
            changeScore = {this.handleChangeScore}
            score = {player.score}
            isMax={player.isMax}
            setMax={this.setIsMax}
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}
export default App;