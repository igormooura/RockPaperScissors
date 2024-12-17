import React from 'react';
import './Scoreboard.css';
import Player from '../../assets/player.png';
import Computer from '../../assets/computador.png';


function Scoreboard({ playerScore, computerScore }) {
    return (
        <section className="players-area">
            <div className="player1">
                <h2>You</h2>
                <img src={Player} alt="Player" className="user-image" />
                <h3>Score: {playerScore}</h3>
            </div>

            <div className="player2">
                <h2>Computer</h2>
                <img src={Computer} alt="Computer" className="computer-image" />
                <h3>Score: {computerScore}</h3>
            </div>
        </section>
    );
}

export default Scoreboard;