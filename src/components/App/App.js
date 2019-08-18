import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from '../Menu/Menu.js';
import Home from '../Home/Home.js';
import ProxyEditor from '../ProxyEditor/ProxyEditor.js';


class App extends React.Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Route exact path="/" component={this.HomeComponent} />
          <Route path="/proxy-editor" component={this.ProxyEditorComponent} />
          {/* <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} /> */}
        </div>
      </Router>
    );
  }

  HomeComponent() {
    return(
      <Home />
    );
  }

  ProxyEditorComponent() {
    return(
      <ProxyEditor />
    )
  }
}

export default App;
