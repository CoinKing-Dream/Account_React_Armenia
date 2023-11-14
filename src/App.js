import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from  "react-router-dom"

import HomePage from "./Pages"

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' Component={HomePage}></Route>
        {/* <Route exact path='/signup' Component={}></Route>
        <Route exact path='/signin' Component={}></Route> */}
      </Router>
    </div>
  );
}

export default App;
