import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from '../Menu/Menu.js';
import Home from '../Home/Home.js';
import Command from '../Command/Command.js';

function App() {
    return (
    <Router>
      <div className="App">
        <Menu />
        <Route exact path="/" component={HomeComponent} />
        <Route path="/command" component={CommandComponent} />
        {/* <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} /> */}
      </div>
    </Router>
    );
}

function HomeComponent() {
  return(
    <Home />
  );
}

function CommandComponent() {
  return(
    <Command />
  )
}

export default App;
