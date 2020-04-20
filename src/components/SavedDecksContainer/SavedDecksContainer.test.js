import React from 'react';
import { render } from '@testing-library/react';
import SavedDecksContainer from './SavedDecksContainer';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';

describe("SavedDecksContainer", () => {
  it("should render what we expect", () => {
    const store = createStore(rootReducer)

    const {getByText} = render(
      <Provider store={store}>
        <Router>
          <SavedDecksContainer />
        </Router>
      </Provider>
    )

    expect(getByText("Saved Decks")).toBeInTheDocument()
  })
})