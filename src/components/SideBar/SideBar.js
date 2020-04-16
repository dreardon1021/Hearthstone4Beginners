import React from 'react';
import './SideBar.css';
import Form from '../Form/Form'
import CurrentDeck from '../CurrentDeck/CurrentDeck'

const SideBar = ({ currentlySelectedDeck }) => {
  return(
    <aside>
      <div className="current-deck-area">
        <Form />
        <CurrentDeck currentlySelectedDeck={currentlySelectedDeck} />
      </div>
    </aside>
  )
}

export default SideBar