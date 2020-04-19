import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';


describe('Card', () => {
  it('should render what we expect', () => {
    const store = createStore(rootReducer)

    const {getByText, getByAltText} = render(
      <Provider store={store}>
        <Router>
          <Card
            id={1}
            name={'Circle of Healing'}
            imgGold={"http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_607_premium.gif"}
          />
        </Router>
      </Provider>
    )
    expect(getByText('Remove')).toBeInTheDocument()
    expect(getByText('View')).toBeInTheDocument()
    expect(getByAltText('Circle of Healing')).toBeInTheDocument()
  })
})