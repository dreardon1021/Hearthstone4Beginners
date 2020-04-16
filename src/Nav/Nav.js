import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <div class="header-container">
        <img class="header-logo" src="../../images/LogoHS.png" alt="hearthstone-logo"/>
        <h1>Deck Creator For Beginners</h1>
      </div>
      <button class="nav-button">View Current Deck</button>
    </nav>
  )
}

export default Nav