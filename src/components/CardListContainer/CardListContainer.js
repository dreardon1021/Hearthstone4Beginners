import React, { Component } from 'react';
import Card from '../Card/Card'
import './CardListContainer.css'
import { connect } from 'react-redux';



class CardListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

  }}

  render() {
    let cardList = this.props.currentPage === 'home' ?
    this.props.classicCards.map(card => {
      if (card.collectible === true) {
        return (<Card
                id={card.cardId}
                key={card.cardId}
                name={card.name}
                img={card.img}
                imgGold={card.imgGold}
                addCardToDeck={this.props.addCardToDeck}
              />)
        } else {
          return null
        }
      }) :
    this.props.currentDeck.map(card => {
      let possibleCard = this.props.classicCards.filter(cardName => cardName.name === card)
      let cardInfo = possibleCard.find(cardStats => cardStats.collectible === true)
      return (<Card
              id={cardInfo.cardId}
              key={cardInfo.cardId}
              name={cardInfo.name}
              img={cardInfo.img}
              imgGold={cardInfo.imgGold}
              addCardToDeck={this.props.addCardToDeck}
            />)
    })
    return(
      <section className="card-list-container">
        {cardList}
      </section>
    )
  }
}



const mapStateToProps = state => ({
  classicCards: state.loadCards,
})

export default connect(mapStateToProps)(CardListContainer)