import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route
 } from "react-router-dom";
 import Home from './components/Home'
 import NavBar from './components/NavBar';
 import Dogs from './components/Dogs/dog';




class App extends React.Component {
  render() {  
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/dogs" component={Dogs}></Route>
            {/* <Route exact path="/dogs/:dogId/activities" component={DailyActivities}></Route> */}
            </div>
          </Router>
      </div> 
    );
  }
}

// const mapStateToProps = state => {
//   console.log("I am state", state)
//   return {
//     dogs: state.dogReducer.dogs,
//     loading: state.dogReducer.loading
//   }
// }

export default App;
