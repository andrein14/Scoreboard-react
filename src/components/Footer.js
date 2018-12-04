import React from "react";

const Footer = props => {
    return(
      <footer>
        <div className="add-player">
          <form onSubmit={props.addPlayer}>
            <input type="text" value={props.play} onChange={props.addPlayer}/>
            <input type="submit" value="Add Player" />
          </form>
        </div>
      </footer>
    )
  }

  /*
<div className="add-player-form">
        <form onSubmit={this._onSubmit}>
          <input type="text" value={this.state.name} onChange={this._onNameChange} />
          <input type="submit" value="Adauga echipa" />
        </form>
      </div>
  */
  export default Footer;