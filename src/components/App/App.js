import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from '../Menu/Menu.js';
import Home from '../Home/Home.js';
import ProxyEditor from '../ProxyEditor/ProxyEditor.js';
import { Provider } from 'react-redux';
import reduxStore from '../../redux/store';

class App extends React.Component {
  homeComponent() {
    return (
      <Home/>
    );
  }

  proxyEditorComponent() {
    return (
      <ProxyEditor/>
    )
  }

  render() {
    return (
      <Provider store={reduxStore}>
        <Router>
          <div className="App">
            <Menu/>
            <Route exact path="/" component={this.homeComponent}/>
            <Route path="/proxy-editor" component={this.proxyEditorComponent}/>
            {/* <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} /> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
