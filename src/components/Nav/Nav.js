import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";
import logo from '../../LogoHS.png'


const Nav = ({ changePage, currentPage }) => {
  let navBtn = currentPage === "current-deck" ?
    (<NavLink to="/" className="nav-link-el">
      <button className="nav-button" onClick={() => changePage('home')}>Back to Card List</button>
    </NavLink>) :
    (<NavLink className="nav-link-el" to="/current-deck">
      <button className="nav-button" onClick={() => changePage('current-deck')}>View Current Deck</button>
    </NavLink>)

  return (
    <nav>
      <div className="header-container">
        <img className="header-logo" src={logo} alt="hearthstone-logo"/>
        <h1>Deck Creator For Beginners</h1>
      </div>
      {navBtn}
    </nav>
  )
}

export default Nav

Nav.propTypes = {
  changePage: PropTypes.func,
  currentPage: PropTypes.string
}