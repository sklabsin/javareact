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
      beers:[]
    }
  }

  componentDidMount() {
    this.setState({isLoading: true});
  
    fetch('http://localhost:8080/good-beers')
      .then(response => response.json())
      .then(data => this.setState({beers: data, isLoading: false}));



  }

  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Dashboard} ></Route>
        <Route exact path="/addTask" component={AddTask} ></Route>
        {/* {this.state.beers.map(function(d, idx){
         return (<li key={idx}>{d.name}</li>)
       })} */}
      </div>
      </Router>
    );
  }
}    

export default App;
