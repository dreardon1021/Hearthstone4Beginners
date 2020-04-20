import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Nav from './Nav';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';

describe("Nav", () => {
  it("should render what we expect", () => {
    const store = createStore(rootReducer)

    const {getByText, getByAltText} = render(
      <Provider store={store}>
        <Router>
          <Nav />
        </Router>
      </Provider>
    )

    expect(getByText("Deck Creator For Beginners")).toBeInTheDocument()
    expect(getByText("View Current Deck")).toBeInTheDocument()
    expect(getByAltText("hearthstone-logo")).toBeInTheDocument()
  })

  it("should be able to change page", () => {
    const store = createStore(rootReducer)
    const mockChangePage = jest.fn()

    const {getByText} = render(
      <Provider store={store}>
        <Router>
          <Nav changePage={mockChangePage}/>
        </Router>
      </Provider>
    )

    fireEvent.click(getByText("View Current Deck"))

    expect(mockChangePage).toHaveBeenCalled()
  })
})