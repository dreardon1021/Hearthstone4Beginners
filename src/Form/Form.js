import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <form>
        <input placeholder="Enter Deck Name" type="text"/>
        <button className="save-btn">Save</button>
      </form>
    )
  }
}

export default Form