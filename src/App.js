import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route
 } from "react-router-dom";


function App() {
  return (
   
     
    <div className="App">
       <Router>
        <div>
          <Route path="/" component={Home} />
          </div>
        </Router>
  
    </div> 
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};




export default App;
