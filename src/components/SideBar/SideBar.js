import React from 'react';
import './SideBar.css';
import Form from '../Form/Form';
import CurrentDeck from '../CurrentDeck/CurrentDeck';
import SavedDecksContainer from '../SavedDecksContainer/SavedDecksContainer';
import PropTypes from "prop-types";

const SideBar = ({ currentDeck, changeDeck, clearDeckStateOnSave }) => {
  return(
    <aside data-testid="sidebar">
      <div className="current-deck-area">
        <Form currentDeck={currentDeck} clearDeckStateOnSave={clearDeckStateOnSave}/>
        <CurrentDeck currentlySelectedDeck={currentDeck}/>
      </div>
      <SavedDecksContainer changeDeck={changeDeck}/>
    </aside>
  )
}

export default SideBar

SideBar.propTypes = {
  currentDeck: PropTypes.array,
  changeDeck: PropTypes.func,
  clearDeckStateOnSave: PropTypes.func
}