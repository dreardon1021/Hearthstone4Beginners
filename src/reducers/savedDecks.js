export const savedDecks = (state = [], action) => {
  console.log(action.deck)
  switch (action.type) {
    case 'SAVE_DECK':
      return [...state, action.deck];
    default:
      return state;
  }
}