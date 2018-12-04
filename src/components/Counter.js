import React, { Component } from 'react';
 
class Counter extends Component {

  state = {
      score: 0
    };

  minus =() => {
    this.setState(prevState=>(
      {score: prevState.score - 1}
    ));
  }

  plus =() => {
    this.setState(prevState=>(
      {score:prevState.score + 1}
      ));
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.minus} className="counter-action decrement">-</button>
        <span className="counter-score">{this.state.score}</span>
        <button onClick={this.plus} className="counter-action increment">+</button>
      </div>);
  }
}

export default Counter;