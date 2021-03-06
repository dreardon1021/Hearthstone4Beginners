import React from 'react'
import './CurrentDeck.css'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";

const CurrentDeck = props => {
  let cardsInDeck = props.currentlySelectedDeck.map(currentCard => {
    return props.classicCards.find(cardName => cardName.name === currentCard && cardName.collectible === true)
  })

  return(
    <section className="current-deck-cards">
      <h2 className="sidebar-header">Current Deck</h2>
      <ol className="deck-list">
        {cardsInDeck.map(card => {
          return (<NavLink to={`/card-details/${card.cardId}`} className="deck-card-name"><li data-testid={card.name + "-decklist"} key={Date.now()}>{card.name}</li></NavLink>)
        })}
      </ol>
    </section>
  )
}

const mapStateToProps = state => ({
  classicCards: state.loadCards
})


export default connect(mapStateToProps)(CurrentDeck)

CurrentDeck.propTypes = {
  currentlySelectedDeck: PropTypes.array,
}