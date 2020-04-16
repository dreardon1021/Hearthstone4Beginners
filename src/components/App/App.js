import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import SideBar from '../SideBar/SideBar';
import CardListContainer from '../CardListContainer/CardListContainer';




class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <main>
        <Nav />
        <section className="content-area">
          <SideBar />
          <CardListContainer />
        </section>
      </main>
    )
  }
}

export default App;
