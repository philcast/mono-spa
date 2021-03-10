import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { onBootstrapIncrementMessage } from './bootstrapper';

function App() {
  const [count, setCount] = useState(0)

  const onCountIncrement = React.useCallback((increment: number) => {
    console.log('Incrementing from bootstapper', increment);
    setCount((count) => count + increment);
  }, [count]);

  React.useEffect(() => {
    onBootstrapIncrementMessage(onCountIncrement);
  }, [onCountIncrement]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Mono SPA sample!</p>
        <p>
          <button className="App-counter-button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Open another app instance on&nbsp;
          <a
            className="App-link"
            href="http://localhost:3000"
            target="_blank"
            rel="noopener noreferrer"
          >
            {window.location.origin}
          </a>
          &nbsp;with an optional <span className="App-link">?increment=<span className="App-link-query-param">number</span></span> query param to increment the counter.
        </p>
      </header>
    </div>
  )
}

export default App
