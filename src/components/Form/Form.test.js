import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './Form';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';

describe("Form", () => {
  it('should render what we expect', () => {
    const store = createStore(rootReducer)

    const {getByText, getByPlaceholderText} = render(
      <Provider store={store}>
        <Router>
          <Form
            currentDeck={["Circle of Healing"]}
          />
        </Router>
      </Provider>
    )

    expect(getByPlaceholderText("Enter Deck Name")).toBeInTheDocument()
    expect(getByText("Save")).toBeInTheDocument()
  })

  it("should be able to save a deck and clear input", () => {
    const store = createStore(rootReducer)
    const mockClearDeckStateOnSave = jest.fn()

    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <Router>
          <Form
            currentDeck={["Circle of Healing"]}
            clearDeckStateOnSave={mockClearDeckStateOnSave}
          />
        </Router>
      </Provider>
    )

    fireEvent.change(getByPlaceholderText("Enter Deck Name"), {target: {value: 'Deck1'}})
    fireEvent.click(getByText("Save"))

    expect(mockClearDeckStateOnSave).toHaveBeenCalled()
  })
})