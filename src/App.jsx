import { useState, useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);
  // useState is set to epmty array to initialize state
  const [randomNumber, setRandomNumber] = useState(0);
  // useState is set to 0 as typeOf randomNumber will be a number

  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/random`)
      .then((res) => res.json())
      .then((data) => setJokes(data));
  }, [randomNumber]);
  // randomNumber put into dependency array so when called will rerender and provinde a new joke

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
