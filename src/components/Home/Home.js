import React from 'react';
import smuggler from '../../assets/images/general/smuggler.png';

class Home extends React.Component {
  render() {
    return(
      <header className="App-content">
          <img src={smuggler} alt="logo" />
          <p>
            Welcome, smuggler! <br/>
            Let's get started.
          </p>
      </header>
    );
  }
}

export default Home;