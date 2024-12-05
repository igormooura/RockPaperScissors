import './App.css';

function App() {
  return (
    <main>
      <header>
        <h1>Rock, Paper, Scissors</h1>
      </header>
      <section>
        <article className="scoreboard">
          <div>
            <h2>Player 1</h2>
            <p>Score: 0</p>
          </div>
          <div>
            <h2>Player 2</h2>
            <p>Score: 0</p>
          </div>
        </article>
      </section>

      <section className="controls">
        <h2>Make your choice:</h2>
        <div className="buttons">
          <button type="button">Rock</button>
          <button type="button">Paper</button>
          <button type="button">Scissors</button>
        </div>
      </section>

      
    </main>
  );
}

export default App;
