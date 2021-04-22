import React from 'react';
import Board from './components/Board';
import './Game.css';

class Game extends React.Component {
  render() {
    return (
      <div className="game" data-testid="tic-game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <div>{/* TODO */}</div>
        </div>
      </div>
    );
  }
}

export default Game;