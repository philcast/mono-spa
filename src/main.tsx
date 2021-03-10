import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { bootstrap } from './bootstrapper'

const rootNode = document.getElementById('root');

bootstrap(rootNode, () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootNode
  );
});
