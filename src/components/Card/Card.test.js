import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from './Card';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';


describe('Card', () => {
  it('should render what we expect on home', () => {
    const store = createStore(rootReducer)

    const {getByText, getByAltText} = render(
      <Provider store={store}>
        <Router>
          <Card
            id={"1"}
            name={'Circle of Healing'}
            imgGold={"http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_607_premium.gif"}
            currentPage={"home"}
          />
        </Router>
      </Provider>
    )
    expect(getByText('Add')).toBeInTheDocument()
    expect(getByText('View')).toBeInTheDocument()
    expect(getByAltText('Circle of Healing')).toBeInTheDocument()
  })

  it('should render what we expect on deck view', () => {
    const store = createStore(rootReducer)

    const {getByText, getByAltText} = render(
      <Provider store={store}>
        <Router>
          <Card
            id={1}
            name={'Circle of Healing'}
            imgGold={"http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_607_premium.gif"}
            currentPage={"current-deck"}
          />
        </Router>
      </Provider>
    )
    expect(getByText('Remove')).toBeInTheDocument()
    expect(getByText('View')).toBeInTheDocument()
    expect(getByAltText('Circle of Healing')).toBeInTheDocument()
  })

  it('should be able to add card to deck' , () => {
    const store = createStore(rootReducer)
    const mockAddCardToDeck=jest.fn()

    const {getByText} = render(
      <Provider store={store}>
        <Router>
          <Card
            id={1}
            name={'Circle of Healing'}
            imgGold={"http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_607_premium.gif"}
            currentPage={"home"}
            addCardToDeck={mockAddCardToDeck}
          />
        </Router>
      </Provider>
    )

    fireEvent.click(getByText('Add'))

    expect(mockAddCardToDeck).toHaveBeenCalledWith('Circle of Healing')

  })

  it('should be able to add card to deck' , () => {
    const store = createStore(rootReducer)
    const mockRemoveCardToDeck=jest.fn()

    const {getByText} = render(
      <Provider store={store}>
        <Router>
          <Card
            id={1}
            name={'Circle of Healing'}
            imgGold={"http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_607_premium.gif"}
            currentPage={"current-deck"}
            removeCardFromDeck={mockRemoveCardToDeck}
          />
        </Router>
      </Provider>
    )

    fireEvent.click(getByText('Remove'))

    expect(mockRemoveCardToDeck).toHaveBeenCalledWith('Circle of Healing')
  })


})