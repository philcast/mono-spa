import React, { useState } from 'react'
import { onBootstrapIncrementMessage } from './bootstrapper';
import AppLayout from './AppLayout';

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  const onCountIncrement = React.useCallback((increment: number) => {
    console.log('Incrementing from bootstapper', increment);
    setCount((count) => count + increment);
  }, [count]);

  React.useEffect(() => {
    onBootstrapIncrementMessage(onCountIncrement);
  }, [onCountIncrement]);

  return (
    <AppLayout>
      <p>
        <button className="App-counter-button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>
      <p>
        Open another app instance on&nbsp;
        <a
          className="App-link"
          href={window.location.origin}
          target="_blank"
          rel="noopener noreferrer"
        >
          {window.location.origin}
        </a>
        &nbsp;with an optional <span className="App-link">?increment=<span className="App-link-query-param">number</span></span> query param to increment the counter.
      </p>
    </AppLayout>
  )
};

export default App;
