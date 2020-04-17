import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import SideBar from '../SideBar/SideBar';
import CardListContainer from '../CardListContainer/CardListContainer';
import { Route, Switch } from 'react-router-dom';

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
        <Switch>
        <Route
            path="/" exact
            component={() =>
              <section className="content-area">
                <SideBar currentDeck={this.state.currentDeck} currentlySelectedDeck={this.state.currentDeck}/>
                <CardListContainer addCardToDeck={this.addCardToDeck}/>
              </section>
            }
        />
        <Route
            path="/current-deck" exact
            component={() =>
              <section className="content-area">
                <SideBar currentDeck={this.state.currentDeck} currentlySelectedDeck={this.state.currentDeck}/>
                <CardListContainer addCardToDeck={this.addCardToDeck}/>
              </section>
            }
        />
        </Switch>
      </main>
    )
  }
}

export default App;
