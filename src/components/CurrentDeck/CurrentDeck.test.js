import { render, fireEvent } from '@testing-library/react';
import CurrentDeck from './CurrentDeck';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';

describe("Current Deck", () => {
  it("dummy test", () => {
    //This is Tested in Integration App.test.js
    //Cannot be tested due to requiring global store
  })
})

