export const savedDecks = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_DECK':
      let incomingDeckName = Object.keys(action.deck)
      let currentDeckNames = state.map(deck => {
        let name = Object.keys(deck)
        return name[0]
      })
      if(currentDeckNames.includes(incomingDeckName[0])) {
        let deckToRemove = state.find(deck => {
          let deckName = Object.keys(deck)
          return deckName[0] === incomingDeckName[0]
        })
        state.splice(state.indexOf(deckToRemove), 1)
        return [...state, action.deck]
      } else {
        return [...state, action.deck];
      }
    default:
      return state;
  }
}