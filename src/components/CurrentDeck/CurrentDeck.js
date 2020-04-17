import React from 'react'
import './CurrentDeck.css'

const CurrentDeck = props => {
  return(
    <section className="current-deck-cards">
      <h2 className="sidebar-header">Current Deck</h2>
      <ol className="deck-list">
        {props.currentlySelectedDeck.map(card => {
          return (<li key={card.id}>{card}</li>)
        })}
      </ol>
    </section>
  )
}


export default CurrentDeck