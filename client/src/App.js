import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddTask from './components/tasks/AddTask';

class App extends Component {

  constructor(){
    super();
    this.state={
      tasks:[]
    }
  }


  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/addTask" component={AddTask} ></Route>
      </div>
      </Router>
    );
  }
}    

export default App;
