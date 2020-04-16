import React, { Component } from 'react';
import Card from '../Card/Card'
import './CardListContainer.css'
import { getClassicCards } from '../../apicalls'
import { loadClassicCards } from '../../actions'
import { connect } from 'react-redux';

class CardListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'cardList'
  }}

  componentDidMount = () => {
    getClassicCards()
      .then(classicCards => {
        this.props.loadClassicCards(classicCards)
      })
      .catch(err => console.error(err.message))
  }

  render() {
    return(
    <section className="card-list-container">
      {this.props.classicCards.map(card => {
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
      })}
    </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loadClassicCards: classicCards => dispatch(loadClassicCards(classicCards))
})

const mapStateToProps = state => ({
  classicCards: state.loadCards
})



export default connect(mapStateToProps, mapDispatchToProps)(CardListContainer)