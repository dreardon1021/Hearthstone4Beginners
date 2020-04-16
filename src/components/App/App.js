import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import SideBar from '../SideBar/SideBar';
import CardListContainer from '../CardListContainer/CardListContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentDeck: []
    }
  }

  addCardToDeck = cardName => {
    let updatedDeck = this.state.currentDeck.concat([cardName])
    this.setState({currentDeck: updatedDeck})
  }

  render() {
    return(
      <main>
        <Nav />
        <section className="content-area">
          <SideBar currentlySelectedDeck={this.state.currentDeck}/>
          <CardListContainer addCardToDeck={this.addCardToDeck}/>
        </section>
      </main>
    )
  }
}

export default App;
