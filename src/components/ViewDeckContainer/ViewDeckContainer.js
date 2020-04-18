import React from 'react';
import Card from '../Card/Card'
import './ViewDeckContainer.css'
import { connect } from 'react-redux';

const ViewDeckContainer = props => {
  let cardList = props.currentDeck.map(card => {
    let possibleCard = props.classicCards.filter(cardName => cardName.name === card)
    let cardInfo = possibleCard.find(cardStats => cardStats.collectible === true)
    return (<Card
            id={cardInfo.cardId}
            key={cardInfo.cardId}
            name={cardInfo.name}
            img={cardInfo.img}
            imgGold={cardInfo.imgGold}
            addCardToDeck={props.addCardToDeck}
          />)
  })

  return(
    <section className="card-list-container">
      {cardList}
    </section>
  )

}

const mapStateToProps = state => ({
  classicCards: state.loadCards,
})

export default connect(mapStateToProps)(ViewDeckContainer)