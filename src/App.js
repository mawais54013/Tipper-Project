import React from 'react';
import TipCalculator from './components/tipCalculator';
import TipStandards from './components/tipStandards';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            Welcome To Tipper!
        </p>
      </header>
      <div className="container">
        <div className="left">
            <TipCalculator />
        </div>
        <div className="right">
            <TipStandards />
        </div>
      </div>
      <footer/>
    </div>
  );
}

export default App;
