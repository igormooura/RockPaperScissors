import "./styles/App.css";
import Header from "./components/Header/Header";
import Scoreboard from './components/Scoreboard/Scoreboard'; 
import Rock from "./assets/rock.png";
import Paper from "./assets/paper.png";
import Scissors from "./assets/scissors.png";
import { useState } from "react";

function App() {
    const [playerHand, setPlayerHand] = useState(null);
    const [computerHand, setComputerHand] = useState(null);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [winner, setWinner] = useState(null);

    const SelectOption = (handIndex) => {
        setPlayerHand(handIndex);
        const randomHand = Math.floor(Math.random() * 3);
        setComputerHand(randomHand);
        determineWinner(handIndex, randomHand);
    };

    const ResetOption = () => {
        setComputerScore(0);
        setPlayerScore(0);
        setPlayerHand(null);
        setComputerHand(null);
        setWinner(null);
    };

    const determineWinner = (player, computer) => {
        if (player === computer) {
            setWinner("Draw");
        } else if (
            (player === 0 && computer === 2) ||
            (player === 1 && computer === 0) ||
            (player === 2 && computer === 1)
        ) {
            setWinner("You Win");
            setPlayerScore(playerScore + 1);
        } else {
            setWinner("Computer Wins");
            setComputerScore(computerScore + 1);
        }
    };

    return (
        <main>
            <Header /> {/* Usando o componente Header */}
            <Scoreboard playerScore={playerScore} computerScore={computerScore} /> 

            <section className="selected-area">
                {playerHand !== null && (
                    <div className="selected-player">
                        <img
                            src={playerHand === 0 ? Rock : playerHand === 1 ? Paper : Scissors}
                            alt="Player Choice"
                            className="selected-image"
                        />
                    </div>
                )}
                {computerHand !== null && (
                    <div className="selected-computer">
                        <img
                            src={computerHand === 0 ? Rock : computerHand === 1 ? Paper : Scissors}
                            alt="Computer Choice"
                            className="selected-image"
                        />
                    </div>
                )}
            </section>

            <section className="controls">
                <h2>{winner}</h2>
                <h2>Make your choice:</h2>
                <div className="buttons">
                    <button type="button" className="image-button" onClick={() => SelectOption(0)}>
                        <img src={Rock} alt="Rock option" className="button-image" />
                    </button>
                    <button type="button" className="image-button" onClick={() => SelectOption(1)}>
                        <img src={Paper} alt="Paper option" className="button-image" />
                    </button>
                    <button type="button" className="image-button" onClick={() => SelectOption(2)}>
                        <img src={Scissors} alt="Scissors option" className="button-image" />
                    </button>
                </div>
            </section>

            <div className="generalCommand">
                <button type="button" onClick={ResetOption}>
                    Restart Game
                </button>
            </div>
        </main>
    );
}

export default App;