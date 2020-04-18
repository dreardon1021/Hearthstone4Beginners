import React from 'react';
import Card from '../Card/Card'
import './CardListContainer.css'
import { connect } from 'react-redux';

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
    <section className="card-list-container">
      {cardList}
    </section>
  )
}

const mapStateToProps = state => ({
  classicCards: state.loadCards
})

export default connect(mapStateToProps)(CardListContainer)