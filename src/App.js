import "./App.css";
import Rock from "./assets/rock.png";
import Paper from "./assets/paper.png";
import Scissors from "./assets/scissors.png";
import Player from './assets/player.png';
import Computer from './assets/computador.png';

function App() {
  return (
    <main>
      <header>
        <h1>Rock, Paper, Scissors</h1>
      </header>

      <section className="players-area">
        <div className="player1">
          <img src={Player} alt="Player" className="user-image" />
          <h2>You</h2>
          <p>Score: 0</p>
          <div className="image-container">
            <img src={Paper} alt="Paper" className="gaming-image-static" />
            <img src={Scissors} alt="Scissors" className="gaming-image-static" />
            <img src={Rock} alt="Rock" className="gaming-image-static" />
          </div>
        </div>

        <div className="player2">
          <img src={Computer} alt="Computer" className="computer-image" />
          <h2>Computer</h2>
          <p>Score: 0</p>
          <div className="image-container">
            <img src={Paper} alt="Paper" className="gaming-image-static" />
            <img src={Scissors} alt="Scissors" className="gaming-image-static" />
            <img src={Rock} alt="Rock" className="gaming-image-static" />
          </div>
        </div>
      </section>

      <section className="controls">

        {/* deixar mais evidente */}
        <h1>Make your choice:</h1> 
        <div className="buttons">
          <button type="button" className="image-button">
            <img src={Rock} alt="Rock option" className="button-image" />
          </button>
          <button type="button" className="image-button">
            <img src={Paper} alt="Paper option" className="button-image" />
          </button>
          <button type="button" className="image-button">
            <img src={Scissors} alt="Scissors option" className="button-image"/>
          </button>
        </div>
      </section>

    </main>
  );
}

export default App;
