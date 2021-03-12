import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { bootstrap } from './bootstrapper'
import ClosedApp from './ClosedApp'

const rootNode = document.getElementById('root');

bootstrap(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootNode
  );
}, () => {
  ReactDOM.render(
    <React.StrictMode>
      <ClosedApp />
    </React.StrictMode>,
    rootNode
  );
});
