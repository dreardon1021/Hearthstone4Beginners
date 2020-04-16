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
        <h2>Current Deck</h2>
        <ol>
          {this.props.currentlySelectedDeck.map(card => {
            return (<li>{card}</li>)
          })}
        </ol>
      </section>
    )
  }
}


export default CurrentDeck