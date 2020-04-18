import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import SideBar from '../SideBar/SideBar';
import CardListContainer from '../CardListContainer/CardListContainer';
import ViewDeckContainer from '../ViewDeckContainer/ViewDeckContainer';
import CardDetails from '../CardDetails/CardDetails'
import { Route, Switch } from 'react-router-dom';
import { getClassicCards } from '../../apicalls';
import { connect } from 'react-redux';
import { loadClassicCards } from '../../actions'
import { statement } from '@babel/template';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentDeck: [],
      currentPage: 'home'
    }
  }

  componentDidMount = () => {
    getClassicCards()
      .then(classicCards => {
        this.props.loadClassicCards(classicCards)
      })
      .catch(err => console.error(err.message))
  }

  addCardToDeck = cardName => {
    let updatedDeck = this.state.currentDeck.concat([cardName])
    this.setState({currentDeck: updatedDeck})
  }

  changePage = page => {
    this.setState({currentPage: page})
  }

  render() {
    return(
      <main>
        <Nav changePage={this.changePage} currentPage={this.state.currentPage}/>
        <Switch>
        <Route
            path="/" exact
            component={() =>
              <section className="content-area">
                <SideBar currentDeck={this.state.currentDeck}/>
                <CardListContainer
                  addCardToDeck={this.addCardToDeck}
                  currentPage={this.state.currentPage}
                  changePage={this.changePage}
                  />
              </section>
            }
        />
        <Route
            path="/current-deck" exact
            component={() => (
              <section className="content-area">
                <SideBar currentDeck={this.state.currentDeck}/>
                <ViewDeckContainer
                  addCardToDeck={this.addCardToDeck}
                  currentDeck={this.state.currentDeck}
                  currentPage={this.state.currentPage}
                  changePage={this.changePage}
                  />
              </section>
            )}
        />
        <Route
          path="/card-details/:id" exact
          render={({ match }) => {
            const card = this.props.classicCards.find(classicCard => {
              return match.params.id === classicCard.cardId
            })
            return (<section className="content-area">
                <SideBar currentDeck={this.state.currentDeck}/>
                <CardDetails {...card}/>
              </section>)
          }}
        />
        </Switch>
      </main>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loadClassicCards: classicCards => dispatch(loadClassicCards(classicCards)),
})

const mapStateToProps = state => ({
  classicCards: state.loadCards
})



export default connect(mapStateToProps, mapDispatchToProps)(App);
