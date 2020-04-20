import React from 'react';
import Card from '../Card/Card'
import './CardListContainer.css'
import { connect } from 'react-redux';
import PropTypes from "prop-types";

const CardListContainer = props => {
  let cardList = props.classicCards.map(card => {
    if (card.collectible === true) {
      return (<Card
              id={card.cardId}
              key={card.cardId}
              name={card.name}
              img={card.img}
              imgGold={card.imgGold}
              addCardToDeck={props.addCardToDeck}
              removeCardFromDeck={props.removeCardFromDeck}
              currentPage={props.currentPage}
            />)
      } else {
        return null
      }
    })

  return(
    <section data-testid="card-list-container" className="card-list-container">
      {cardList}
    </section>
  )
}

const mapStateToProps = state => ({
  classicCards: state.loadCards
})

export default connect(mapStateToProps)(CardListContainer)

CardListContainer.propTypes = {
  cardId: PropTypes.string,
  name: PropTypes.string,
  img: PropTypes.string,
  imgGold: PropTypes.string,
  addCardToDeck: PropTypes.func,
  removeCardFromDeck: PropTypes.func,
  currentPage: PropTypes.string,
}