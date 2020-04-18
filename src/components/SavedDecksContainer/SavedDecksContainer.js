import React from 'react';
import './SavedDecksContainer.css'
import { connect } from 'react-redux';

const SavedDecksContainer = (props) => {
  return(
    <section className="saved-decks-container">
      <h2 className='sidebar-header'>Saved Decks</h2>
      <ul>
      {props.savedDecks.map(deck => {
        let deckName = Object.keys(deck)
        return (<li><button className="deck-link">{deckName[0]}</button></li>)
      })}
      </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  savedDecks: state.savedDecks
})

export default connect(mapStateToProps)(SavedDecksContainer)