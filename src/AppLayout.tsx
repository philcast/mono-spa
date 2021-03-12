import React, { PropsWithChildren } from 'react'
import logo from './logo.svg'
import './App.css'



const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Mono SPA sample!</p>
      {children}
    </header>
  </div>
);

export default AppLayout;
