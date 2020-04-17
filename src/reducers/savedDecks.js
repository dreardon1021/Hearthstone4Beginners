export const savedDecks = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_DECK':
      return [...state, action.deck];
    default:
      return state;
  }
}