import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </Router>
    </div>
  );
}

export default App;
