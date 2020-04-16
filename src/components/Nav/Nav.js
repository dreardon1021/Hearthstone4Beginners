import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <div className="header-container">
        <img className="header-logo" src="../../images/LogoHS.png" alt="hearthstone-logo"/>
        <h1>Deck Creator For Beginners</h1>
      </div>
      <button className="nav-button">View Current Deck</button>
    </nav>
  )
}

export default Nav