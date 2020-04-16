import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  updateDeckNameState = (e) => {
    this.setState({name: e.target.value})
  }

  save = e => {
    e.preventDefault()
  }

  render() {
    return(
      <form>
        <input onChange={this.updateDeckNameState} placeholder="Enter Deck Name" type="text"/>
        <button onClick={e => this.save(e)} className="save-btn">Save</button>
      </form>
    )
  }
}


export default Form