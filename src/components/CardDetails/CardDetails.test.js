import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CardDetails from './CardDetails';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';

describe('CardDetails', () => {
  it('Should render what we expect if it is a spell', () => {
    const store = createStore(rootReducer)

    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <Router>
          <CardDetails
            artist={"Tyler Walpole"}
            cardId={"EX1_544"}
            cardSet={"Classic"}
            collectible={true}
            cost={2}
            dbfId={"896"}
            faction={"Neutral"}
            flavor={"Not only does it reveal your enemies, but it's also great for parties!"}
            img={"http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_544.png"}
            imgGold={"http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_544_premium.gif"}
            locale={"enUS"}
            mechanics={[{name: "Stealth"}, {name: "Secret"}]}
            name={"Flare"}
            playerClass={"Hunter"}
            rarity={"Rare"}
            text={"All minions lose <b>Stealth</b>. Destroy all enemy <b>Secrets</b>. Draw a card."}
            type={"spell"}
          />
        </Router>
      </Provider>
    )

    expect(getByText("Mana Cost: 2")).toBeInTheDocument()
    expect(getByText("Player Class: Hunter")).toBeInTheDocument()
    expect(getByText("Text: All minions lose <b>Stealth</b>. Destroy all enemy <b>Secrets</b>. Draw a card.")).toBeInTheDocument()
    expect(getByText("Card Type: spell")).toBeInTheDocument()
    expect(getByText("Card Set: Classic")).toBeInTheDocument()
    expect(getByText("Rarity: Rare")).toBeInTheDocument()
    expect(getByText("Flavor Text: Not only does it reveal your enemies, but it's also great for parties!")).toBeInTheDocument()
    expect(getByText("Artist: Tyler Walpole")).toBeInTheDocument()
    expect(getByText("Card Name: Flare")).toBeInTheDocument()
    expect(getByText("Add To Deck")).toBeInTheDocument()
    expect(getByText("Back To Browse")).toBeInTheDocument()
    expect(getByAltText("Flare")).toBeInTheDocument()
  })

  it('should be able to add cards to deck', () => {
    const store = createStore(rootReducer)
    const mockAddCardToDeck = jest.fn()

    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <CardDetails
            artist={"Tyler Walpole"}
            cardId={"EX1_544"}
            cardSet={"Classic"}
            collectible={true}
            cost={2}
            dbfId={"896"}
            faction={"Neutral"}
            flavor={"Not only does it reveal your enemies, but it's also great for parties!"}
            img={"http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_544.png"}
            imgGold={"http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_544_premium.gif"}
            locale={"enUS"}
            mechanics={[{name: "Stealth"}, {name: "Secret"}]}
            name={"Flare"}
            playerClass={"Hunter"}
            rarity={"Rare"}
            text={"All minions lose <b>Stealth</b>. Destroy all enemy <b>Secrets</b>. Draw a card."}
            type={"spell"}
            addCardToDeck={mockAddCardToDeck}
          />
        </Router>
      </Provider>
    )

    fireEvent.click((getByText("Add To Deck")))

    expect(mockAddCardToDeck).toHaveBeenCalledWith("Flare")
  })
})