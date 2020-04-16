import React, { Component } from 'react';
import './CardListContainer.css'
import { getClassicCards } from '../../apicalls'
import { loadClassicCards } from '../../actions'
import { connect } from 'react-redux';

class CardListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

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
      <p>test</p>
    </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loadClassicCards: classicCards => dispatch(loadClassicCards(classicCards))
})



export default connect(null, mapDispatchToProps)(CardListContainer)