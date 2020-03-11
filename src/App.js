import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route
 } from "react-router-dom";
 import Home from './components/Home'
 import NavBar from './components/NavBar';
 import { connect } from 'react-redux'


class App extends React.Component {
  render() {  
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
}

const mapStateToProps = state => {
  console.log("I am state", state)
  return {
    dogs: state.dogReducer.dogs,
    loading: state.dogReducer.loading
  }
}

export default connect(mapStateToProps)(App);
