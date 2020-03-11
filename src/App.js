import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route
 } from "react-router-dom";
 import Home from './components/Home'
 import NavBar from '../components/NavBar';


function App() {
  return (
   
     
    <div className="App">
       <Router>
        <div>
          <NavBar />
          <Route path="/" component={Home} />
          </div>
        </Router>
  
    </div> 
  );
}

export default App;
