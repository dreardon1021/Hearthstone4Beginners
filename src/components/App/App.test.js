import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import { getClassicCards } from '../../apicalls'
jest.mock('../../apicalls');


describe('App', () => {
  it('should render what we expect at home page', () => {
    const store = createStore(rootReducer)
    const mockCards = [
      {
      cardId: 'EX1_144',
      name: 'Shadowstep',
      collectible: true,
      imgGold: 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_144_premium.gif',
    },
    {
      cardId: 'CS2_188',
      name: 'Abusive Sergeant',
      collectible: true,
      imgGold: 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/CS2_188_premium.gif'
    }
  ]

    getClassicCards.mockResolvedValueOnce(mockCards)

    const {getByText, getByTestId} = render(
      <Provider store={store}>
        <Router>
          <App/>
        </Router>
      </Provider>
    )

    expect(getByText("Current Deck")).toBeInTheDocument()
    expect(getByText("Saved Decks")).toBeInTheDocument()
    expect(getByTestId("sidebar")).toBeInTheDocument()
  })

  it('should be able to fetch for cards and render some cards', async () => {
    const store = createStore(rootReducer)
    const mockCards = [
      {
      cardId: 'EX1_144',
      name: 'Shadowstep',
      collectible: true,
      imgGold: 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_144_premium.gif',
    },
    {
      cardId: 'CS2_188',
      name: 'Abusive Sergeant',
      collectible: true,
      imgGold: 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/CS2_188_premium.gif'
    }
  ]

    getClassicCards.mockResolvedValueOnce(mockCards)

    const {getByText, getByTestId} = render(
      <Provider store={store}>
        <Router>
          <App/>
        </Router>
      </Provider>
    )

    const cardTitleEl = await waitForElement(() => getByText("Shadowstep"))
    const addBtn = await waitForElement(() => getByTestId("Shadowstep-add"))
    const viewBtn = await waitForElement(() => getByTestId("Shadowstep"))

    expect(cardTitleEl).toBeInTheDocument()
    expect(addBtn).toBeInTheDocument()
    expect(viewBtn).toBeInTheDocument()
  })

  it('should be able to render savedDeck List and change decks', () => {
    const store = createStore(rootReducer,
      {savedDecks: [{Deck1: ["Shadowstep"]}, {Deck2: ["Abusive Sergeant"]}],
      loadCards: [
        {
        cardId: 'EX1_144',
        name: 'Shadowstep',
        collectible: true,
        imgGold: 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_144_premium.gif',
      },
      {
        cardId: 'CS2_188',
        name: 'Abusive Sergeant',
        collectible: true,
        imgGold: 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/CS2_188_premium.gif',
      }
    ]})

    const mockCards = [
      {
      cardId: 'EX1_144',
      name: 'Shadowstep',
      collectible: true,
      imgGold: 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_144_premium.gif',
    },
    {
      cardId: 'CS2_188',
      name: 'Abusive Sergeant',
      collectible: true,
      imgGold: 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/CS2_188_premium.gif'
    }
  ]

    getClassicCards.mockResolvedValueOnce(mockCards)

    const {getByText, getByTestId} = render(
      <Provider store={store}>
        <Router>
          <App/>
        </Router>
      </Provider>
    )

    fireEvent.click(getByText("Deck1"))

    expect(getByTestId("Shadowstep-decklist")).toBeInTheDocument()

    fireEvent.click(getByText("Deck2"))

    expect(getByTestId("Abusive Sergeant-decklist")).toBeInTheDocument()
  })

  it("should be able to click on cards to view card info and go back to list", () => {
    const store = createStore(rootReducer,
      {savedDecks: [{Deck1: ["Shadowstep"]}, {Deck2: ["Abusive Sergeant"]}],
      loadCards: [
        {
        cardId: 'EX1_144',
        name: 'Shadowstep',
        collectible: true,
        imgGold: 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_144_premium.gif',
      },
      {
        cardId: 'CS2_188',
        name: 'Abusive Sergeant',
        collectible: true,
        imgGold: 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/CS2_188_premium.gif',
      }
    ]})

    const mockCards = [
      {
      cardId: 'EX1_144',
      name: 'Shadowstep',
      collectible: true,
      imgGold: 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_144_premium.gif',
    },
    {
      cardId: 'CS2_188',
      name: 'Abusive Sergeant',
      collectible: true,
      imgGold: 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/CS2_188_premium.gif'
    }
  ]

    getClassicCards.mockResolvedValueOnce(mockCards)

    const {getByText, getByTestId } = render(
      <Provider store={store}>
        <Router>
          <App/>
        </Router>
      </Provider>
    )

    fireEvent.click(getByText("Deck1"))
    fireEvent.click(getByTestId("Shadowstep-decklist"))

    expect(getByText("Card Name: Shadowstep")).toBeInTheDocument() //Unique to view card page render

    fireEvent.click(getByText("Back To Browse"))

    expect(getByTestId("Shadowstep-add")).toBeInTheDocument() //Unuie to CardList <Card /> render
  })

  it("should be able to view current deck and go back to cardlist", () => {
    const store = createStore(rootReducer,
      {savedDecks: [{Deck1: ["Shadowstep"]}, {Deck2: ["Abusive Sergeant"]}],
      loadCards: [
        {
        cardId: 'EX1_144',
        name: 'Shadowstep',
        collectible: true,
        imgGold: 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_144_premium.gif',
      },
      {
        cardId: 'CS2_188',
        name: 'Abusive Sergeant',
        collectible: true,
        imgGold: 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/CS2_188_premium.gif',
      }
    ]})

    const mockCards = [
      {
      cardId: 'EX1_144',
      name: 'Shadowstep',
      collectible: true,
      imgGold: 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_144_premium.gif',
    },
    {
      cardId: 'CS2_188',
      name: 'Abusive Sergeant',
      collectible: true,
      imgGold: 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/CS2_188_premium.gif'
    }
  ]

    getClassicCards.mockResolvedValueOnce(mockCards)

    const {getByText, getByTestId} = render(
      <Provider store={store}>
        <Router>
          <App/>
        </Router>
      </Provider>
    )

    fireEvent.click(getByText("Deck1"))
    fireEvent.click(getByText("View Current Deck"))

    expect(getByText("Back to Card List")).toBeInTheDocument()
    expect(getByTestId("Shadowstep-rmv")).toBeInTheDocument()

    fireEvent.click(getByText("Back to Card List"))

    expect(getByTestId("Shadowstep-add")).toBeInTheDocument() //Unuie to CardList <Card /> render
  })

  it("can view card by clicking on a cards view btn", async () => {
    const store = createStore(rootReducer)

      const mockCards = [
        {
        cardId: 'EX1_144',
        collectible: true,
        imgGold: 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_144_premium.gif',
      }
    ]

    getClassicCards.mockResolvedValueOnce(mockCards)

    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <App/>
        </Router>
      </Provider>
    )

    const viewBtn = await waitForElement(() => getByText("View"))
    fireEvent.click(viewBtn)

    expect(getByText("Card Name: Shadowstep")).toBeInTheDocument()
  })
})

