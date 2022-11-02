import { useState, useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/random`)
      .then((res) => res.json())
      .then((data) => setJokes(data));
  }, [randomNumber]);

  return (
    <div className="main-container">
      <h1 className="main-header">
        Check Out These <span>SUPER</span> Funny Jokes
      </h1>
      <h2 className="main-text">{jokes.value}</h2>
      <button className="new-joke-button"
        onClick={() => {
          setRandomNumber(Math.random());
        }}
      >New Joke</button>
    </div>
  );
}

export default App;
