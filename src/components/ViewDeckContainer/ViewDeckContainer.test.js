import React from 'react'
import { render } from '@testing-library/react';
import ViewDeckContainer from './ViewDeckContainer';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';

describe("ViewDeckContainer", () => {
  it("should render what we expect", () => {
    const store = createStore(rootReducer, {loadCards: [
        {
        cardId: 'EX1_144',
        dbfId: '365',
        name: 'Circle of Healing',
        cardSet: 'Classic',
        type: 'Spell',
        faction: 'Neutral',
        rarity: 'Common',
        cost: 0,
        text: 'Return a friendly minion to your hand. It_costs (2) less.',
        flavor: 'Rogue dance troops will sometimes Shadowstep away at the end of a performance.  Crowds love it.',
        artist: 'Graven Tung',
        collectible: true,
        playerClass: 'Rogue',
        img: 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_144.png',
        imgGold: 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_144_premium.gif',
        locale: 'enUS'
      },
      {
        cardId: 'CS2_188',
        dbfId: '242',
        name: 'Inner Rage',
        cardSet: 'Classic',
        type: 'Minion',
        faction: 'Alliance',
        rarity: 'Common',
        cost: 1,
        attack: 1,
        health: 1,
        text: '<b>Battlecry:</b> Give a minion +2_Attack this turn.',
        flavor: 'ADD ME TO YOUR DECK, MAGGOT!',
        artist: 'Luca Zontini',
        collectible: true,
        playerClass: 'Neutral',
        img: 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/CS2_188.png',
        imgGold: 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/CS2_188_premium.gif',
        locale: 'enUS',
        mechanics: [
          {
            name: 'Battlecry'
          }
        ]
      }
    ]});

    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Router>
          <ViewDeckContainer currentDeck={["Circle of Healing", "Inner Rage"]}/>
        </Router>
      </Provider>
    )

    expect(getByText("Circle of Healing")).toBeInTheDocument()
    expect(getByText("Inner Rage")).toBeInTheDocument()
    expect(getByTestId("Circle of Healing")).toBeInTheDocument()
    expect(getByTestId("Circle of Healing1")).toBeInTheDocument()
  })

  it('should be able to remove cards from deck', () => {
    
  })
})