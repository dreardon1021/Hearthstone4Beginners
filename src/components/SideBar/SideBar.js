import React from 'react';
import './SideBar.css';
import Form from '../Form/Form'
import CurrentDeck from '../CurrentDeck/CurrentDeck'
import SavedDecksContainer from '../SavedDecksContainer/SavedDecksContainer'

const SideBar = ({ currentDeck, changeDeck }) => {
  return(
    <aside>
      <div className="current-deck-area">
        <Form currentDeck={currentDeck}/>
        <CurrentDeck currentlySelectedDeck={currentDeck}/>
      </div>
      <SavedDecksContainer changeDeck={changeDeck}/>
    </aside>
  )
}

export default SideBar