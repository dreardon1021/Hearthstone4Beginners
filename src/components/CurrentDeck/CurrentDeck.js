import React, { Component } from 'react'
import './CurrentDeck.css'

class CurrentDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <section className="current-deck-cards">
        <h2 className="sidebar-header">Current Deck</h2>
        <ol className="deck-list">
          {this.props.currentlySelectedDeck.map(card => {
            return (<li>{card}</li>)
          })}
        </ol>
      </section>
    )
  }
}


export default CurrentDeck