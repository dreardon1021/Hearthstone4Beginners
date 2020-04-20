import React from 'react';
import { render } from '@testing-library/react';
import CardListContainer from './CardListContainer';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';

describe('CardListContainer', () => {
  it('should render the container', () => {
    const store = createStore(rootReducer)

    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <CardListContainer />
        </Router>
      </Provider>
    )

    expect(getByTestId("card-list-container")).toBeInTheDocument()
  })
})