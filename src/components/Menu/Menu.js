import React from 'react';
import { fallDown as Burger } from 'react-burger-menu';
import './Menu.css';

class Menu extends React.Component {
  render() {
    return(
      <Burger>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="command" className="menu-item" href="/command">Command Cards</a>
      </Burger>
    );
  }
}

export default Menu;