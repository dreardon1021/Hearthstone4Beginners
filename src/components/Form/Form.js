import React, { Component } from 'react';
import './Form.css';
import { connect } from 'react-redux';
import { saveDeck } from '../../actions'


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }
E
  updateDeckNameState = (e) => {
    this.setState({name: e.target.value})
  }

  save = e => {
    e.preventDefault()
    let deckToBeSaved = {[this.state.name]: this.props.currentDeck}
    this.props.saveDeck(deckToBeSaved)
    this.props.clearDeckStateOnSave()
  }

  render() {
    return(
      <form>
        <input value={this.state.name} onChange={this.updateDeckNameState} placeholder="Enter Deck Name" type="text"/>
        <button disabled={!this.state.name} onClick={e => this.save(e)} className="save-btn">Save</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  saveDeck: deck => dispatch(saveDeck(deck))
})

export default connect(null, mapDispatchToProps)(Form)