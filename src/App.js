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

      <div className="ib">
          <TipCalculator />
      </div>

      <div className="ib">
          <TipStandards />
      </div>
    </div>
  );
}

export default App;
